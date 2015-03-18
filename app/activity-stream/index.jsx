var React = require( 'react' );

module.exports = React.createClass( {

	displayName: 'ActivityStream',

	activities: function() {
		// get activity
		// return array of Issues
	},

	render: function() {
		return (
			<ol>
				{ this.activities() }
			</ol>
		);
	}
} );
