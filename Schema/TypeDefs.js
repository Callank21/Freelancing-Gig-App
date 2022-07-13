const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        email: String!
        password: String!
    }

    type Profile {
        name: String!
        devType: String!
        wage: Int!
        description: String!
        workHistory: String!
        education: String!
        hours: Int!
    }
    
    # Queries
    type Query {
        getAllUsers: [User!]!
    }
    # Mutations
    type Mutation {
        createUser(email: String!, password: String!): User!
    }
`

module.exports = { typeDefs };