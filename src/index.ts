import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { mergeSchemas } from 'graphql-tools';
import { createUserSchema } from './graphql/User';

export interface QueryContext {
  authorization: string;
  egoJwt: string;
}

const initialize = async () => {
  const app = express();

  const mergedSchema = mergeSchemas({
    schemas: [await createUserSchema()],
  });

  const server = new ApolloServer({
    schema: mergedSchema,
    context: ({ req }): QueryContext => {
      const {
        headers: { authorization },
      } = req;
      return {
        authorization: authorization,
        egoJwt: authorization.split('Bearer ').join(''),
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
