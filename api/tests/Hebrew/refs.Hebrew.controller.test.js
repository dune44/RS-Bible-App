require( './../fixtures/db' );
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
      // First word 'ab' lacks a root.
      const Roots = null;
      const Transliteration = 'ab';
      const Definitions = [ 'father' ];
      const Phrases = [ 'chief', 'fore-father', 'father', 'fatherless', 'patrimony', 'principal' ];
      const Primitive = true;

      createNewWordResponse = await refController.Create.Hebrew(
        Number,
        Original,
        Roots,
        Phonetic,
        Transliteration,
        Definitions,
        Phrases,
        Primitive
      );
      console.log({ createNewWordResponse });
    } catch ( error ) {
      console.log({ error });
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

  it( 'Should NOT contain property error', () => {
    expect( createNewWordResponse ).to.not.have.property( 'error' );
  });

  it( 'Should contain property "result" ', () => {
    expect( createNewWordResponse ).to.have.property( 'result' );
  });

  it( 'Should contain property "result.Number" ', () => {
    expect( createNewWordResponse.result ).to.have.property( 'Number' );
  });

  it( 'Should contain property "result.Original" ', () => {
    expect( createNewWordResponse.result ).to.have.property( 'Original' );
  });

  it( 'Should contain property "result.Phonetic" ', () => {
    expect( createNewWordResponse.result ).to.have.property( 'Phonetic' );
  });

  it( 'Should contain property "result.Roots"', () => {
      expect( createNewWordResponse.result ).to.have.property( 'Roots' );
  });

  it( 'Should contain property "result.Transliteration" ', () => {
    expect( createNewWordResponse.result ).to.have.property( 'Transliteration' );
  });

  it( 'Should contain property "result.Definitions" ', () => {
    expect( createNewWordResponse.result ).to.have.property( 'Definitions' );
  });
  





  it( ' "result.Roots" should have length of 0 ', () => {
    expect( createNewWordResponse.result.Roots ).to.have.lengthOf( 0 );
  });

});