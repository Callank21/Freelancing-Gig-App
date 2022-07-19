const { Schema, model } = require('mongoose');
// const User = require('./User');

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    devType: {
      type: String,
      required: true,
    },
    wage: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    workHistory: [
      {
        type: String,
      },
    ],
    education: [
      {
        type: String,
      },
    ],
    hours: {
      type: Number,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Profile = model('Profile', profileSchema);

module.exports = Profile;
