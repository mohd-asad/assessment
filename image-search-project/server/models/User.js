// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  providerIds: {
    google: String,
    github: String
  },
  name: String,
  email: String,
  avatar: String,
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
