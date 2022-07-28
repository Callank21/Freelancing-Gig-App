const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { User, Profile } = require('./models');
const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const profileSeeds = require('./seeders/profileSeed.json');
const userSeeds = require('./seeders/userSeed.json');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
    try {
      Profile.deleteMany({});
      User.deleteMany({});

      User.create(userSeeds);

      for (let i = 0; i < profileSeeds.length; i++) {
        const { _id, username } = Profile.create(profileSeeds[i]);

        User.findOneAndUpdate(
          { username: username },
          {
            $addToSet: {
              profile: _id,
            },
          }
        );
      }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
