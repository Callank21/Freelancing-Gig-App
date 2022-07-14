const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        id: ID!
        email: String!
        password: String!
        profile: [Profile]
    }

    type Profile {
        id: ID!
        name: String!
        devType: devType!
        wage: Int!
        description: String!
        workHistory: String!
        education: String!
        hours: Int!
    }
    
    # Queries
    type Query {
        users: [User!]!
    }

    #enum devType {
        Software
        Web
        Front-End
        Back-End
        Full-Stack
        Game
        Big-data
        CRM
        Security
        Mobile
        Graphics
    }
    # Mutations
    type Mutation {
        createUser(email: String!, password: String!): User!
    }
`

module.exports = { typeDefs };