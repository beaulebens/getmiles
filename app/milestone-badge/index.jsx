var React = require( 'react' ),
	MilestonesStore = require( '../stores/milestones' ),
	ProgressBar = require( '../progress-bar' );

module.exports = React.createClass( {

	displayName: 'MilestoneBadge',

	render: function() {
		var milestone = this.props.milestone;

		return (
			<li>
				<ProgressBar total={ milestone.open_issues + milestone.closed_issues } progress={ milestone.closed_issues } />
				<a href={ milestone.html_url }><strong>{ milestone.title }</strong></a>
			</li>
		);
	}
} );
