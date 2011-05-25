var express = require('express');
var foursquare = require('node-foursquare').Foursquare();

var CLIENTID = 'ALFZEBG4YWG2O11JLN2UHOEO0YEH2RFNOK0GLNYXCNEUT1GR';
var CLIENTSECRET = 'FZGAIYKGDQRRYUYCRQ3L5YI14EU1MGLZAEF34EY3REVPQEP5';
var LOGINREDIRECT = 'http://nodejs.flockasquare.dotcloud.com/fin';
var CALLBACKURL = 'http://nodejs.flockasquare.dotcloud.com/callback';

var app = express.createServer();

/* Foursquare login crap */
app.get('/login', function(req, res){
	var url = foursquare.getAuthClientRedirectUrl(CLIENTID, CALLBACKURL);
	res.writeHead( 303, {"location": url});
	res.end();
});

app.get('/callback', function(req, res){
	var code = req.query.code;
	foursquare.getAccessToken({
		code: code,
		redirect_uri: LOGINREDIRECT,
		client_id: CLIENTID,
		client_secret: CLIENTSECRET
	}, function (error, accessToken){
		if(error){
			res.send("An error was thrown: "+error.message);
		} else {
			//save and do something
			res.redirect('/fin?token=' + accessToken);
		}
	});
});

app.get('/fin', function(req, res){
	res.send(req.query.token+'was my auth token');
});

app.get('/', function(req, res){
	
	res.send('Hello new world');
});

app.get('/team/:name', function(req, res){
	res.send('Hello Team: ' + req.params.name);
});
app.listen(8080);
