const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        _id: ID
        email: String!
        password: String!
    }

    type Profile {
        _id: ID
        name: String!
        devType: String!
        wage: Int!
        description: String!
        workHistory: String
        education: String
        hours: Int
    }


    
    # Queries
    type Query {
        users: [User!]!
        profiles: [Profile!]!
    }

    # Input
    input createUserInput {
        email: String!
        password: String!
    }
    input createProfInput {
        name: String!
        devType: String!
        wage: Int!
        description: String!
        workHistory: String
        education: String
        hours: Int
    }

    # Mutations
    type Mutation {
        createUser(input: createUserInput!): User!
        createProfile(input: createProfInput!): Profile!
    }
`

module.exports = typeDefs;