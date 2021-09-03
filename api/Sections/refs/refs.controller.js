const books = require( './books.schema' );
const hebrew = require( './../Hebrew/hebrew.schema' );
const verses = require( './verses.schema' );
const versions = require( './versions.schema' );

 module.exports = {
   Create: {
     Book: ( name, position ) => {

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