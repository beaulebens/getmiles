/**
 * A horribly-basic Express server just to get you running.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3030;
app.use(express.static(__dirname + '/static'));
app.listen(port);
console.log( 'Server running on http://localhost:' + port );
