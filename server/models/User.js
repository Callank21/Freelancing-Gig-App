const { Schema, model, Types } = require('mongoose');
const Profile = require('./Profile');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
});

const User = model('User', userSchema);

module.exports = User;