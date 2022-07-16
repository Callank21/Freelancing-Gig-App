const { Schema, model, Types } = require('mongoose');

const profileSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        devType: {
            type: String,
            required: true
        },
        wage: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        workHistory: {
            type: String
        },
        education: {
            type: String
        },
        hours: {
            type: Number
        },
        username: {
            ref: 'User',
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Profile = model('Profile', profileSchema);

module.exports = Profile;