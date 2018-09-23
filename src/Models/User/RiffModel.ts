import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import {
  makeExecutableSchema,
  mergeSchemas,
  makeRemoteExecutableSchema,
  introspectSchema,
} from 'graphql-tools';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

import config from '../../config';

const { SHORTURL_API } = config;

const fetchSavedQuery = ({ userId, egoJWT }) =>
  fetch(`${SHORTURL_API}/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${egoJWT}`,
    },
  }).then(res => res.json());

export const createExecutableShortUrlSchema = async () => {
  const typeDefs = `
    type QueryContent {
      File: Int
      Participants: Int
      Families: Int
      Size: String
      longUrl: String
      og_title: String
      og_description: String
      og_image: String
      twitter_label1: String
      twitter_data1: String
    }

    type SavedQuery {
      id: ID!
      uid: String
      alias: String
      sharedPublicly: Boolean
      creationDate: String
      updatedDate: String
      content: QueryContent
    }

    type Query {
      savedQueriesByUser(userId:ID!): [SavedQuery]
    }
  `;
  const resolvers = {
    Query: {
      savedQueriesByUser: (_, { userId }, { authorization, egoJWT }) => {
        return fetchSavedQuery({ userId, egoJWT });
      },
    },
  };
  return makeExecutableSchema({ typeDefs, resolvers });
};
