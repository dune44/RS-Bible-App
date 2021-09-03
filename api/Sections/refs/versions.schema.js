const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  Author: String,
  Abbr: String,
  Name: String,
  Description: String
});

module.exports = mongoose.model( "version", schema );