var React = require( 'react' );

var Issue = require( '../issue' );

module.exports = React.createClass( {

	displayName: 'NeedsAttentionList',

	componentDidMount: function() {
		this.props.store.on( 'change', this.forceUpdate.bind( this ) );
	},

	componentWillUnmount: function() {
		this.props.store.off( 'change', this.forceUpdate.bind( this ) );
	},

	needsAttentionList: function() {
		return this.props.store.get().map( function( issue, idx ) {
			return ( <Issue key={ idx } issue={ issue } /> );
		} );
	},

	render: function() {
		return (
			<div className="needs-attention">
				<h2>These Issues Need Your Attention</h2>
				<ol>
					{ this.needsAttentionList() }
				</ol>
		</div>
		);
	}
} );
