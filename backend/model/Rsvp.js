const mongoose = require('mongoose');

const RsvpSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String
  },
  attendance: {
    type: Boolean,
    required: true
  },
  diet: {
    type: String
  }
});

module.exports = RsvpSchema;
