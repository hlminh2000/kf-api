import { mergeSchemas } from 'graphql-tools';
import { gql } from 'apollo-server-express';
import { print } from 'graphql/language/printer';

import {
  createExecutableUserMetadataSchema,
  personaFetcher,
} from './PersonaModel';
import { createExecutableShortUrlSchema } from './RiffModel';
import { createExecutableGen3Schema } from './Gen3Model';
import { createExecutableSearchModel } from './ArrangerModel';

const linkTypeDefs = gql`
  extend type UserModel {
    savedQueries: [SavedQuery]
    gen3Account: Gen3Account
  }
  extend type SavedQuery {
    user: UserModel
  }
  type Query {
    userByEgoId(id: ID!): UserModel
    fileAgg(
      filters: JSON
      include_missing: Boolean
      aggregations_filter_themselves: Boolean
    ): fileAggregations
  }
`;

export const createUserSchema = async () => {
  const [
    personaSchema,
    shortUrlSchema,
    gen3Schema,
    arrangerModel,
  ] = await Promise.all([
    createExecutableUserMetadataSchema(),
    createExecutableShortUrlSchema(),
    createExecutableGen3Schema(),
    createExecutableSearchModel(),
  ]);

  const onTypeConflict = (left, right) => left;

  const mergedUserSchema = mergeSchemas({
    schemas: [
      personaSchema,
      shortUrlSchema,
      gen3Schema,
      arrangerModel,
      print(linkTypeDefs),
    ],
    onTypeConflict: onTypeConflict,
    resolvers: {
      UserModel: {
        savedQueries: {
          fragment: `... on UserModel { egoId }`,
          resolve: ({ egoId }, _, context, info) =>
            info.mergeInfo.delegateToSchema({
              schema: shortUrlSchema,
              operation: 'query',
              fieldName: 'savedQueriesByUser',
              args: {
                userId: egoId,
              },
              context,
              info,
            }),
        },
        gen3Account: {
          fragment: `... on UserModel { egoId }`,
          resolve: ({ egoId }, _, context, info) => {
            return info.mergeInfo.delegateToSchema({
              schema: gen3Schema,
              operation: 'query',
              fieldName: 'gen3AccountByUser',
              args: {
                userId: egoId,
              },
              context,
              info,
            });
          },
        },
      },
      SavedQuery: {
        user: {
          fragment: `... on SavedQuery { uid }`,
          resolve: ({ uid }, _, context, info) =>
            info.mergeInfo.delegateToSchema({
              schema: mergedUserSchema,
              operation: 'query',
              fieldName: 'userByEgoId',
              args: {
                id: uid,
              },
              context,
              info,
            }),
        },
      },
      Query: {
        userByEgoId: async (_, { id }, context, info) => {
          const {
            data: {
              users: { items },
            },
          } = await personaFetcher(null, {
            body: JSON.stringify({
              query: `{
                users(filter: {egoId: "${id}" }) {
                  items {
                    _id
                  }
                }
              }`,
            }),
          }).then(res => res.json());
          const foundUser = items[0];
          return (
            foundUser &&
            info.mergeInfo.delegateToSchema({
              schema: personaSchema,
              operation: 'query',
              fieldName: 'user',
              args: {
                _id: foundUser._id,
              },
              context,
              info,
            })
          );
        },
        fileAgg: async (_, { id }, context, info) => {
          return {};
        },
      },
    },
  });

  return mergedUserSchema;
};
