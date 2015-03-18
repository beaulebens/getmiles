var xhr = require( 'xhr' ),
	store = require( 'store' ),
	events = require( 'events' ),
	union = require( 'lodash/array/union' ),
	qs = require( 'qs');

var base = 'https://api.github.com';

function NeedsAttentionStore() {
	this.data = [];
	this.fetching = false;
}

NeedsAttentionStore.prototype = Object.create( events.EventEmitter.prototype );

NeedsAttentionStore.prototype.get = function() {
	if ( ! this.data.length ) {
		this.fetch();
	}
	return this.data;
};

NeedsAttentionStore.prototype.fetch = function() {
	var nas = this;

	if ( this.fetching ) {
		return this.data;
	}

	console.log( 'Fetching Needs Attention Issues' );
	this.fetching = true;
	// @todo should be looping through a selected set of milestones
	config.milestones.forEach( function( milestone ) {
		config.needs_attention.forEach( function( label ) {
			xhr( {
				json: true, // autoparse
				uri: base + '/repos/' + config.owner + '/' + config.repo + '/issues?' + qs.stringify( { 'milestone': milestone, 'labels': label } ),
				headers: {
					'Authorization': 'token ' + config.token,
					'Content-Type': 'application/json'
				}
			}, function( error, response, body ) {
				this.fetching = true; // @todo hah! this is not correct; need promises so we can change when all complete
				union( this.data, body ); // also ensures uniqueness
				this.emit( 'change' );
				console.log( response );
			}.bind( nas ) );
		} );
	} );
};

module.exports = new NeedsAttentionStore();
