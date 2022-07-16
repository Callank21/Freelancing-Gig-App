const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type User {
        email: String!
        password: String!
        profile: Profile
    }

    type Profile {
        name: String!
        devType: devType!
        wage: Int!
        description: String!
        workHistory: String
        education: String
        hours: Int
        user: User!
    }
    
    # Queries
    type Query {
        users: [User!]!
    }

    # Mutations
    input CreateUserInput {
        name: String!
        devType: devType!
        wage: Int!
        description: String!
        workHistory: String
        education: String
        hours: Int
        user: User!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
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