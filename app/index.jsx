var React = require( 'react' ),
	Home = require( './home' );

// @todo: better way to handle config
config = {
	"token": "AUTHTOKEN", // generate at https://github.com/settings/applications
	"owner": "ORGNAME", // string, from URL
	"repo": "REPONAME", // string, from URL
	"milestones": [ // array of ids from API or from the URLs on edit/close/delete links for Milestones
		1,
		2,
		3
	],
	"needs_attention": [ // array of label name strings
		"[Status] Needs Review",
		"[Status] Ready to Merge",
		"[Pri] BLOCKER"
	]
};

React.renderComponent(
	<Home />,
	document.body
);
