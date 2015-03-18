var xhr = require( 'xhr' ),
	store = require( 'store' ),
	events = require( 'events' ),
	union = require( 'lodash/array/union' );

var base = 'https://api.github.com';

function LabelsStore() {
	this.data = [];
	this.fetching = false;
}

LabelsStore.prototype = Object.create( events.EventEmitter.prototype );

LabelsStore.prototype.get = function() {
	if ( ! this.data.length ) {
		this.fetch();
	}
	return this.data;
};

LabelsStore.prototype.fetch = function() {
	if ( this.fetching ) {
		return this.data;
	}

	console.log( 'Fetching Labels' );
	this.fetching = true;
	config.milestones.forEach( function( milestone ) {
		xhr( {
			json: true, // autoparse
			uri: base + '/repos/' + config.owner + '/' + config.repo + '/milestones/' + milestone + '/labels',
			headers: {
				'Authorization': 'token ' + config.token,
				'Content-Type': 'application/json'
			}
		}, function( error, response, body ) {
			this.fetching = false; // @todo hah! this is not correct; need promises so we can change when all complete
			union( this.data, body ); // also ensure uniqueness
			this.emit( 'change' );
			console.log( response );
		}.bind( this ) );
	} );
};

module.exports = new LabelsStore();
