import { makeExecutableSchema } from 'graphql-tools';

const sample = {
  google: {
    proxy_group: null,
  },
  is_admin: false,
  name: 'MINHHA',
  projects: {
    phs001247: ['read-storage'],
    'phs001138.c1': ['read-storage'],
    phs001110: ['read-storage'],
    drc_test: ['read-storage'],
    'phs001168.c3': ['read-storage'],
    SD_BHJXBDQK: ['read-storage'],
    'phs001168.c4': ['read-storage'],
    phs001420: ['read-storage'],
    phs001228: ['read-storage'],
  },
};

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
      gen3AccountByUser: () => ({
        ...sample,
        projects: Object.entries(sample.projects).reduce(
          (acc, [key, value]) => [...acc, { id: key, accessLevels: value }],
          [],
        ),
      }),
    },
  };
  return makeExecutableSchema({ typeDefs, resolvers });
};
