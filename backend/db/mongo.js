const mongoose = require('mongoose');
const trackerConstant = require('../constants/tracker.constant');
const { handleError } = require('../utils/error-handler');

class MongoDB {
  getDbCredentials() {
    return {
      url: trackerConstant.mongo.url,
    };
  }

  async connection() {
    return new Promise(async (resolve, reject) => {
      try {
        const dbConnect = this.getDbCredentials();
        const mongooseUrl = dbConnect.url;
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongooseUrl, {});
        resolve();
      } catch (error) {
        handleError(error);
      }
    });
  }
}

module.exports = MongoDB;
