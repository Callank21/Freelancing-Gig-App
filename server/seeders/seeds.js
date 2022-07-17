const profileSeeds = require('./profileSeed.json');
const userSeeds = require('./userSeed.json');
const db = require('../config/connection');
const { User, Profile } = require('../models');

db.once('open', async () => {
    try {
      await Profile.deleteMany({});
      await User.deleteMany({});
  
      await User.create(userSeeds);
      // for (let i = 0; i < profileSeeds.length; i++) {
      //   const { _id, profileAuthor } = await Profile.create(profileSeeds[i]);
      //   console.log(_id);
      //   console.log(profileAuthor);
      //   // const user = await User.findOneAndUpdate(
      //   //   { username: profileAuthor },
      //   //   {
      //   //     $addToSet: {
      //   //       profile: _id,
      //   //     },
      //   //   }
      //   // );
      // }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });