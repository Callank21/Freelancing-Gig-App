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
    
    # Queries
    type Query {
        users: [User!]!
        profiles: [Profile!]!
    }

    # Input
    input createUserInput {
        email: String!
        password: String!
        profile: Profile
    }
    input createProfInput {
        name: String!
        devType: devType!
        wage: Int!
        description: String!
        workHistory: String
        education: String
        hours: Int
        user: User!
    }

    # Mutations
    type Mutation {
        createUser(createUserInput!): User!
        createProfile(input: createProfInput!): Profile!
    }
`

module.exports = typeDefs;