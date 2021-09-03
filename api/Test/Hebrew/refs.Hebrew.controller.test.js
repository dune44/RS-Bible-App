const chai = require('chai');
const expect = chai.expect;

const refController = require( './../../Sections/refs/refs.controller');

describe( 'Create a Hebrew Word', () => {
  let createNewWordResponse;
  const createNewWord = async () => {
    try {
      const Number = 1;
      const Original = '';
      const Phonetic = '';
      const Roots = [ 1 ];
      const Transliteration = '';
      const Definitions = [ '' ];
      const Phrases = [ '' ];

      createNewWordResponse = await refController.Create.Hebrew(
        Number,
        Original,
        Phonetic,
        Roots,
        Transliteration,
        Definitions,
        Phrases
      );
    } catch ( error ) {
      createNewWordResponse = { error };
    }
  };

  before( async () => {
    const res = await createNewWord();
    if ( res ) return;
  });

  after( ( done ) => {
    done();
  });

  it( 'Create Hebrew Should NOT contain property error', () => {
    expect( createNewWordResponse ).to.not.have.property( 'error' );
  });

});