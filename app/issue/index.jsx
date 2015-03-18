var React = require( 'react' ),
LabelsStore = require( '../stores/issues' );

module.exports = React.createClass( {

	displayName: 'Issue',

	render: function() {
		var issue = this.props.issue;

		return (
			<li>
				<a href={ issue.html_url }><strong>{ issue.title }</strong></a>
				assignee, colored labels
			</li>
		);
	}
} );
