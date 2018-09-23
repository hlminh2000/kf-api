import config from './config';
import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import {
  mergeSchemas,
  makeRemoteExecutableSchema,
  introspectSchema,
} from 'graphql-tools';
import { createUserSchema } from './Models/User';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const initialize = async () => {
  const { PERSONA_API, EGO_JWT_SECRET } = config;

  const app = express();

  const mergedSchema = mergeSchemas({
    schemas: [await createUserSchema({ EGO_JWT_SECRET })],
  });

  const server = new ApolloServer({
    schema: mergedSchema,
    context: ({ req }) => {
      const {
        headers: { authorization },
      } = req;
      return {
        authorization: authorization,
        egoJWT: authorization.split('Bearer ').join(''),
      };
    },
  });
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    );
  });
};

initialize();
