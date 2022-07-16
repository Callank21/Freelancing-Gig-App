const profileSeeds = require('./profileSeeds.json');
const userSeeds = require('./userSeed.json');
const db = require('../config/connection');
const { User, Profile } = require('../models');

db.once('open', async () => {
    try {
      await Profile.deleteMany({});
      await User.deleteMany({});
  
      await User.create(userSeeds);
      await Profile.create(profileSeeds);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });