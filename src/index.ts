import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { mergeSchemas } from 'graphql-tools';
import { createUserSchema } from './Models/User';

const initialize = async () => {
  const app = express();

  const mergedSchema = mergeSchemas({
    schemas: [await createUserSchema()],
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
