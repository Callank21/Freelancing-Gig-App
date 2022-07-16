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

    # enum
    enum devType {
        SOFTWARE
        WEB
        FRONT-END
        BACK-END
        FULL-STACK
        GAME
        BIG-DATA
        CRM
        SECURITY
        MOBILE
        GRAPHICS
    }

    # Mutations
    type Mutation {
        createUser(email: String!, password: String!): User!
    }
`

module.exports = { typeDefs };