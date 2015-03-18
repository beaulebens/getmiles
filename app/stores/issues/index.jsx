var xhr = require( 'xhr' ),
	store = require( 'store' ),
	Emitter = require( 'events' ).EventEmitter;

function IssuesStore() {

}

Emitter( IssuesStore.prototype );

IssuesStore.prototype.get = function() {};
IssuesStore.prototype.fetch = function() {};

IssuesStore.prototype.request = function( url, params, headers ) {
	// Local cache (5 minutes)
	// Etag -> If-None-match
	// Last-Modified -> If-Modified-Since
	// Store local cache
	// Return

	xhr( {

	}, function( error, response, body ) {

	} );
};

module.exports = IssuesStore;
