const mongoose = require('mongoose'); 

const photosSchema = new mongoose.Schema({
  name: String, 
  source: String
});

module.exports = mongoose.model('Photo', photosSchema)