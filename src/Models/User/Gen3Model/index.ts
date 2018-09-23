import { makeExecutableSchema } from 'graphql-tools';
import fetch from 'node-fetch';
import { ForbiddenError } from 'apollo-server';
import * as decode from 'jwt-decode';

import config from '../../../config';
import { isRightUser } from '../EgoModel';
import {
  Gen3UserModel,
  Gen3GraphqlUserModel,
  Gen3IntegrationTokenData,
} from './types';

const { GEN3_INTEGRATION_ROOT } = config;

const fetchGen3Token = ({ egoJwt }): Promise<Gen3IntegrationTokenData> => {
  return fetch(`${GEN3_INTEGRATION_ROOT}/token`, {
    headers: {
      Authorization: `Bearer ${egoJwt}`,
    },
  }).then(res => res.json());
};

const gen3UserToGraphql = (
  gen3UserData: Gen3UserModel,
): Gen3GraphqlUserModel => ({
  ...gen3UserData,
  projects: Object.entries(gen3UserData.projects).reduce(
    (acc, [key, value]) => [...acc, { id: key, accessLevels: value }],
    [],
  ),
});

export const createExecutableGen3Schema = async () => {
  const typeDefs = `
    type Gen3AccountProject {
      id: ID!
      accessLevels: [String]
    }

    type Gen3Account {
      is_admin: Boolean,
      name: String,
      projects: [Gen3AccountProject]
    }

    type Query {
      gen3AccountByUser(userId:String!): Gen3Account
    }
  `;
  const resolvers = {
    Query: {
      gen3AccountByUser: async (_, { userId }, { egoJwt }) => {
        if (isRightUser({ egoJwt, userId })) {
          const { access_token } = await fetchGen3Token({ egoJwt });
          const decodedData = decode(access_token) as {
            context: { user: Gen3UserModel };
          };
          const user = decodedData.context.user;
          return gen3UserToGraphql(user);
        } else {
          throw new ForbiddenError(`Cannot see someone else's ego gen3 data`);
        }
      },
    },
  };
  return makeExecutableSchema({ typeDefs, resolvers });
};
