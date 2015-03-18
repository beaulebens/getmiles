var xhr = require( 'xhr' ),
	store = require( 'store' ),
	events = require( 'events' );

var base = 'https://api.github.com';

function MilestonesStore() {
	this.data = [];
	this.fetching = false;
}

MilestonesStore.prototype = Object.create( events.EventEmitter.prototype );

MilestonesStore.prototype.get = function() {
	if ( ! this.data.length ) {
		this.fetch();
	}
	return this.data;
};

MilestonesStore.prototype.fetch = function() {
	if ( this.fetching ) {
		return this.data;
	}

	console.log( 'Fetching Milestones' );
	this.fetching = true;
	xhr( {
		json: true, // autoparse
		uri: base + '/repos/' + config.owner + '/' + config.repo + '/milestones',
		headers: {
			'Authorization': 'token ' + config.token,
			'Content-Type': 'application/json'
		}
	}, function( error, response, body ) {
		this.fetching = false;
		this.data = body;
		this.emit( 'change' );
		console.log( response );
	}.bind( this ) );
};

module.exports = new MilestonesStore();
