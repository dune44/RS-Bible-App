
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  book:{
    ref:'book',
    required: true,
    type: mongoose.Schema.Types.ObjectId
  },
  Chapter: Number,
  Verse: Number,
  eVerbiage: [ String ],
  nVerbiage: [{
    ref:'hebrew',
    required: true,
    type: mongoose.Schema.Types.ObjectId
  }],
  Version: {
    ref:'version',
    required: true,
    type: mongoose.Schema.Types.ObjectId
  },
});

module.exports = mongoose.model( "verse", schema );