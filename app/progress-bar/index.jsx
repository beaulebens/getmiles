var React = require( 'react' );

module.exports = React.createClass( {

	displayName: 'ProgressBar',

	render: function() {
		var wrapStyle, barStyle, title;

		wrapStyle = {
			width: '100px',
			height: '10px',
			backgroundColor: '#ddd',
			display: 'inline-block',
			position: 'relative',
			marginRight: '1em'
		};

		barStyle = {
			width: this.props.progress / this.props.total * 100 + '%',
			height: '10px',
			backgroundColor: 'green',
			display: 'inline-block',
			position: 'relative'
		};

		title = this.props.progress + ' of ' + this.props.total;

		return (
			<span className="progress-bar" style={ wrapStyle } title={ title }>
				<span style={ barStyle }>&nbsp;</span>
			</span>
		);
	}
} );
