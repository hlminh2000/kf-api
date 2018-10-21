import { makeExecutableSchema } from 'graphql-tools';
import fetch from 'node-fetch';
import { ForbiddenError, gql } from 'apollo-server';

import { isRightUser } from '../EgoModel';
import config from '../../../config';
import { QueryContext } from '../../../index';

const { SHORTURL_API } = config;

const fetchSavedQuery = ({
  userId,
  egoJwt,
}: {
  userId: string;
  egoJwt: string;
}) =>
  fetch(`${SHORTURL_API}/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${egoJwt}`,
    },
  }).then(res => res.json());

export const createExecutableShortUrlSchema = async () => {
  const typeDefs = gql`
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
      savedQueriesByUser(userId: ID!): [SavedQuery]
    }
  `;

  const resolvers = {
    Query: {
      savedQueriesByUser: (_, { userId }, { egoJwt }: QueryContext) => {
        if (isRightUser({ egoJwt, userId })) {
          return fetchSavedQuery({ userId, egoJwt });
        } else {
          throw new ForbiddenError(`Cannot see someone else's saved queries`);
        }
      },
    },
  };
  return makeExecutableSchema({ typeDefs, resolvers });
};
