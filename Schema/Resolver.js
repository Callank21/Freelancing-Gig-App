// const { users } = require(Mongodb call to users)

const resolvers = {
    Query: {
        getAllUsers() {
            return users;
        },
    },
    Mutation: {
        CreateUser(parent, args) {
            const newUser = args
            users.push(newUser);
            return newUser;
        }
    }
};

module.exports = {resolvers };