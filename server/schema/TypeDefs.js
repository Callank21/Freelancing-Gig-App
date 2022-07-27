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
    devtype: String
    wage: Int
    description: String
    workhistory: [String]
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
    developers(devType: String!): [Profile]
    devTypes: [String]
  }

  # Mutations
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    createProfile(
      name: String!
      devtype: String!
      wage: Int!
      description: String!
      workhistory: [String]!
      education: [String]!
      hours: Int!
      username: String!
    ): Profile
    deleteUser(_id: ID!): User
    deleteProfile(_id: ID!): Profile
    updateUser(username: String, email: String, password: String): User
    updateProfile(
      _id: ID!
      name: String
      devtype: String
      wage: Int
      description: String
      workhistory: [String]
      education: [String]
      hours: Int
      username: String
    ): Profile
  }
`;

module.exports = typeDefs;
