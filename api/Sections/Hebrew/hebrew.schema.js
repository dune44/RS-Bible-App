const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  Number: Number,
  Original: String,
  Phonetic: String,
  Roots: [ Number ],
  Transliteration: String,
  Definitions: [ String ],
  Phrases: [ String ],
  Primitive: Boolean
});

module.exports = mongoose.model( "hebrew", schema );
