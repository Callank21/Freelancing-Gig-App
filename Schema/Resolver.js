const { User } = require('../Models');

const resolvers = {
    Query: {
        getAllUsers() {
            return User;
        },
    },
    Mutation: {
        CreateUser(parent, args) {
            const newUser = args
            User.push(newUser);
            return newUser;
        }
    }
};

module.exports = { resolvers };