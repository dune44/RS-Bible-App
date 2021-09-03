const books = require( './books.schema' );
const hebrew = require( './../Hebrew/hebrew.schema' );
const verses = require( './verses.schema' );
const versions = require( './versions.schema' );

 module.exports = {
   Create: {
     Book: ( name, position ) => {

     },
     Hebrew: async ( Number, Original, Roots, Phonetic, Transliteration, Definitions, Phrases, Primitive ) => {
      try {
        let newWord = { Number };
        if ( Original ) newWord.Original = Original;
        if ( Roots ) newWord.Roots = Roots.split( ' ' );
        if ( Phonetic ) newWord.Phonetic = Phonetic;
        if ( Transliteration ) newWord.Transliteration = Transliteration;
        if ( Definitions ) newWord.Definitions = Definitions;
        if ( Phrases ) newWord.Phrases = Phrases;
        if ( Primitive ) newWord.Primitive = Primitive;
        else newWord.Primitive = false;

        const data = new hebrew( newWord );
        const result = await  data.save();
        return { result };
      } catch ( error ) {
        return { error };
      }
     },
     Verse: ( book, chapter, verse ) => {

     },
     Version: ( Author, Name, Description, Abbr ) => {

     }
   },
   Read: {
    Books: () => {

    },
    Verses: {
      ByChapter: ( BookId, ChapterID ) => {

      },
      ById: (  VerseIds ) => {

      }
    }
   },
  Update: {
    Book: ( BookId, name, position ) => {

    },
    Verse: ( VerseId, PhraseId, Phrase ) => {

    },
    Version: ( VersionId, Author, Name, Description, Abbr ) => {

    }
   },
   Delete: {

   }
};