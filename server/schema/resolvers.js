const { AuthenticationError } = require('apollo-server-express');
const { User, Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('profile');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    users: async () => {
      return User.find().select('-__v -password').populate('profile');
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('profile');
    },

    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { _id }) => {
      return Profile.findOne({ _id });
    },
  },

  Mutation: {
    createUser: async (parent, { input }) => {
      const user = await User.create(input);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials!');
      }

      const token = signToken(user);
      return { token, user };
    },
    createProfile: async (parent, args, context) => {
      if (context.user) {
        const profile = await Profile.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { profile: profile._id } },
          { new: true }
        );

        return profile;
      }

      throw new AuthenticationError();
    },
  },
};

module.exports = resolvers;
