import {
  makeRemoteExecutableSchema,
  introspectSchema,
  transformSchema,
  FilterRootFields,
} from 'graphql-tools';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import config from '../../../config';

const { ARRANGER_API, ARRANGER_PROJECT_ID, EGO_JWT_SECRET } = config;

const apiRoot = `${ARRANGER_API}/${ARRANGER_PROJECT_ID}/graphql`;

const createFetcher = ({ egoSecret }) => (_, rest) => {
  return fetch(apiRoot, {
    method: 'POST',
    ...rest,
    headers: {
      ...(rest.headers || {}),
      Authorization: `Bearer ${egoSecret}`,
      'Content-Type': 'application/json',
    },
  });
};

export const fetcher = createFetcher({ egoSecret: EGO_JWT_SECRET });

export const createExecutableSearchModel = async () => {
  const link = new HttpLink({
    uri: apiRoot,
    fetch: fetcher,
  });
  const schema = await introspectSchema(link);
  const executableSchema = makeRemoteExecutableSchema({
    schema: schema,
    link,
  });
  const transformedSchema = transformSchema(executableSchema, [
    new FilterRootFields(
      (operation: string, rootField: string) => rootField !== 'viewer',
    ),
  ]);
  return transformedSchema;
};
