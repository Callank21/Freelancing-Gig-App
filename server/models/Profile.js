const { Schema, model } = require('mongoose');
// const User = require('./User');

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    devtype: {
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
    workhistory: [
      {
        type: String,
        required: true,
      },
    ],
    education: [
      {
        type: String,
        required: true,
      },
    ],
    hours: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    image: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Profile = model('Profile', profileSchema);

module.exports = Profile;
