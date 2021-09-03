const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  Name: String,
  Position: Number,
});

module.exports = mongoose.model( "book", schema );
