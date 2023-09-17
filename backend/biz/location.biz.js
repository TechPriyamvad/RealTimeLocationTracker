const { handleError } = require('../utils/error-handler');
const LocationModel = require('../model/location.model');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socketIo = require('socket.io');
const io = socketIo(server);

class LocationBiz {
  async saveLocation(locationData) {
    try {
      const { userId, latitude, longitude, timestamp } = locationData;
      const locationModel = new LocationModel({
        userId,
        latitude,
        longitude,
        timestamp,
      });
      await locationModel.save();

      // broadcast location data to connected clients(Admin UI)
      io.emit('locationUpdate', locationModel);
    } catch (error) {
      handleError(error);
    }
  }
}

module.exports = LocationBiz;
