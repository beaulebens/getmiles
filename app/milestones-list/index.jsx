var React = require( 'react' ),
	filter = require( 'lodash/collection/filter' );

var MilestoneBadge = require( '../milestone-badge' );

module.exports = React.createClass( {

	displayName: 'MilestonesList',

	componentDidMount: function() {
		this.props.store.on( 'change', this.forceUpdate.bind( this ) );
	},

	componentWillUnmount: function() {
		this.props.store.off( 'change', this.forceUpdate.bind( this ) );
	},

	milestoneBadges: function() {
		var milestones = this.props.milestones,
			list;

		list = filter( this.props.store.get(), function( milestone ) {
			return ( milestones.indexOf( milestone.number ) > -1 );
		} );

		return list.map( function( milestone, idx ) {
			return ( <MilestoneBadge key={ idx } milestone={ milestone } /> );
		} );
	},

	render: function() {
		return (
			<div className="milestone-list">
				<h2>Your Important Milestones</h2>
				<ul>
					{ this.milestoneBadges() }
				</ul>
		</div>
		);
	}
} );
