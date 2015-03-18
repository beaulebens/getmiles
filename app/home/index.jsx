var React = require( 'react' );

var MilestonesList = require( '../milestones-list' ),
	MilestonesStore = require( '../stores/milestones' ),
	NeedsAttentionStore = require( '../stores/needs-attention' ),
	NeedsAttentionList = require( '../needs-attention-list' ),
	ActivityStream = require( '../activity-stream' );

module.exports = React.createClass( {

	displayName: 'Home',

	render: function() {
		return (
			<div className="miles">
				<h1>Miles</h1>
				<MilestonesList store={ MilestonesStore } milestones={ config.milestones } />
				<NeedsAttentionList store={ NeedsAttentionStore } labels={ config.needs_attention } />
				<ActivityStream store={ MilestonesStore } milestones={ config.milestones } />
			</div>
		);
	}
} );
