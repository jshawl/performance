var mongoose = require('mongoose');

var StatSchema = new mongoose.Schema({
  name: String 
  memory: {
    jsHeapSizeLimit: Number

  }
}, { collection: 'stats' });

module.exports = mongoose.model( 'Stat', StatSchema );