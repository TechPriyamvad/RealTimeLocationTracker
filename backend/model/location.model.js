const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});
const Model = mongoose.model('Location', locationSchema);

module.exports = Model;
