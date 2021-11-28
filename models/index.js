const mongoose = require('mongoose');
const {DB_URI} = require('../config')
const engCaptionSchema = require('./EnglishCaptionSchema')
const engImageSchema = require('./EnglishImageSchema')
const vieCaptionSchema = require('./VietnameseCaptionSchema')
console.log(DB_URI)
connect();

const EnglishCaption = mongoose.model('EnglishCaption', engCaptionSchema);

const EnglishImage = mongoose.model('EnglishImage', engImageSchema);

const VietnameseCaption = mongoose.model('VietnameseCaption', vieCaptionSchema);

function connect() {
    mongoose.connection
      .on('error', console.log)
      .on('disconnected', connect)
    return mongoose.connect(DB_URI, {
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

module.exports = {
  EnglishCaption,
  EnglishImage,
  VietnameseCaption
};