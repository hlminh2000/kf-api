import { makeExecutableSchema } from 'graphql-tools';
import fetch from 'node-fetch';
import * as decode from 'jwt-decode';
import { EgoJwt } from './EgoModel';

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
      savedQueriesByUser: (_, { userId }, { egoJWT }) => {
        const { sub }: EgoJwt = decode(egoJWT);
        if (sub === userId) {
          return fetchSavedQuery({ userId, egoJWT });
        } else {
          throw new Error();
        }
      },
    },
  };
  return makeExecutableSchema({ typeDefs, resolvers });
};
