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

    developers: async (parent, { devtype }) => {
      return Profile.find({ devtype: devtype });
    },

    devtypes: async () => {
      return (await Profile.find())
        .map((item) => item.devtype)
        .filter((v, i, a) => a.indexOf(v) === i);
    },
  },

  Mutation: {
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
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    createProfile: async (parent, args, context) => {
      if (context.user) {
        const profile = await Profile.create(args);

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { profile: profile._id } },
          { new: true }
        );
        return profile;
      }
      throw new AuthenticationError();
    },
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.deleteOne({
          _id: args._id,
        });
        await Profile.deleteMany({ username: context.user.username });
        return userData;
      }
      throw new AuthenticationError('No user found !');
    },
    deleteProfile: async (parent, { _id }) => {
      const profile = await Profile.findOne({ _id });

      if (profile) {
        await Profile.deleteOne({ _id });

        return console.log('Profile has been removed !');
      }
      throw new AuthenticationError('No profile found !');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          args,
          { new: true }
        )
          .select('-__v -password')
          .populate('profile');
      }
    },
    updateProfile: async (parent, args) => {
      const profile = await Profile.findOneAndUpdate({ _id: args._id }, args, {
        new: true,
      });

      if (profile) {
        return console.log('Profile has been updated !');
      }

      throw new AuthenticationError('No profile found !');
    },
  },
};

module.exports = resolvers;
