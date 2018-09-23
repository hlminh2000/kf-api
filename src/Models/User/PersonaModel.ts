import { makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import config from '../../config';

const { PERSONA_API, EGO_JWT_SECRET } = config;

const createFetcher = ({ egoSecret }) => (_, rest) => {
  return fetch(`${PERSONA_API}/graphql`, {
    method: 'POST',
    ...rest,
    headers: {
      ...(rest.headers || {}),
      Authorization: `Bearer ${egoSecret}`,
      'Content-Type': 'application/json',
    },
  });
};

export const personaFetcher = createFetcher({ egoSecret: EGO_JWT_SECRET });

export const createExecutableUserMetadataSchema = async () => {
  const link = new HttpLink({
    uri: `${PERSONA_API}/graphql`,
    fetch: personaFetcher,
  });
  const personaSchema = await introspectSchema(link);
  return makeRemoteExecutableSchema({
    schema: personaSchema,
    link,
  });
};
