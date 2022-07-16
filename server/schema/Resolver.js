const { AuthenticationError } = require('apollo-server-express');
const { User, Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        profiles: async () => {
            return Profile.find()
        }
    },

    Mutation: {
        createUser(parent, args) {
            const newUser = args;
            User.push(newUser);
            return newUser;
        },
        createProfile(parent, args) {
            const newUser = args;
            User.push(newUser);
            return newUser;
        }
    }
};

module.exports = resolvers;