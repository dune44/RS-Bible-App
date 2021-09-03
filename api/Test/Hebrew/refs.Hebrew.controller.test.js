const chai = require('chai');
const expect = chai.expect;

const refController = require( './../../Sections/refs/refs.controller');

describe( 'Create a Hebrew Word', () => {
  let createNewWordResponse;
  const createNewWord = async () => {
    try {
      const Number = 1;
      const Original = 'אָב';
      const Phonetic = 'awb';
      // const Roots = [];  First word lacks a root.
      const Transliteration = 'ab';
      const Definitions = [ 'father' ];
      const Phrases = [ 'chief', 'fore-father', 'father', 'fatherless', 'patrimony', 'principal' ];
      const Primitive = true;

      createNewWordResponse = await refController.Create.Hebrew(
        Number,
        Original,
        Phonetic,
        Roots,
        Transliteration,
        Definitions,
        Phrases,
        Primitive
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