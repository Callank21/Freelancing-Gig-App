const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolver");
const express = require('express');
const app = express();

const server = new ApolloServer({ typeDefs, resolvers});

server.applyMiddleware({ app });

app.listen({port: 3001}, () => {
    console.log(`SERVER RUNN ON PORT ${port}`);
});