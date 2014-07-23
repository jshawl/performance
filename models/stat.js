var mongoose = require('mongoose');

var StatSchema = new mongoose.Schema({
  name: String 
}, { collection: 'stats' });

module.exports = mongoose.model( 'Stat', StatSchema );