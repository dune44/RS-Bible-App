const config = require( './../../etc/env' );
const mongoose = require( 'mongoose' );
const MongoUri = config.MONGO_URL + config.DATABASE;
mongoose.connect( MongoUri,  { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true } );
