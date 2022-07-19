const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profile: [Profile]
  }

  type Profile {
    _id: ID
    name: String
    devType: String
    wage: Int
    description: String
    workHistory: [String]
    education: [String]
    hours: Int
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  # Queries
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    profiles: [Profile]
    profile(_id: ID!): Profile
  }

  # Input
  input createUserInput {
    username: String!
    email: String!
    password: String!
  }

  input createProfInput {
    name: String!
    devType: String!
    wage: Int!
    description: String!
    workHistory: [String]
    education: [String]
    hours: Int
  }

  # Mutations
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(input: createUserInput!): Auth
    createProfile(input: createProfInput!): Profile
  }
`;

module.exports = typeDefs;
