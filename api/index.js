const express = require("express");
const config = require('./etc/env');
const cors = require('cors');
const mongoose = require( 'mongoose' );
const app = express();
app.use( express.static('media') );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.use( cors() );
app.use( ( _req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require( './Sections/router.js' )( app );
app.use( (_req, res, _next) => {
  res.status(404).send('Sorry cant find that!');
});
app.use( (err, _req, res, _next ) => {
  res.status(err.status || 500);
  res.send({ message: err.message, error: {}, stack: err.stack });
});

process.on( "uncaughtException", ( err ) => {
  if ( process.env.NODE_ENV === "production" ) {
    console.error( ( new Date()).toUTCString() + " uncaughtException: " + err.message );
  } else {
    console.error( ( new Date()).toUTCString() + " uncaughtException: " + err.message );
    console.error( err.stack );
    process.exit( 1 );
  }
});

app.set( 'x-powered-by',false );
const MongoUri = config.MONGO_URL + config.DATABASE;
mongoose.connect( MongoUri,  { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true } );
app.set( 'port', process.env.PORT || config.PORT );
app.set( 'address', process.env.ADDRESS || config.ADDRESS );
const server = app.listen( app.get( 'port' ), app.get( 'address' ), () => {
  console.log( 'API Server listening at http://%s:%s', server.address().address, server.address().port );
});
