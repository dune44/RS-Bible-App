const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  Number: Number,
  Original: String,
  Phonetic: String,
  Roots: [ Numbers ],
  Transliteration: String,
  Definitions: [ String ],
  Words: [ String ]
});

module.exports = mongoose.model( "conc", schema );
