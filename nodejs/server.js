var express = require('express');
var foursquare = require('node-foursquare').Foursquare();

var CLIENTID = 'ALFZEBG4YWG2O11JLN2UHOEO0YEH2RFNOK0GLNYXCNEUT1GR';
var CLIENTSECRET = 'FZGAIYKGDQRRYUYCRQ3L5YI14EU1MGLZAEF34EY3REVPQEP5';
var LOGINREDIRECT = 'http://nodejs.flockasquare.dotcloud.com/fin';

var app = express.createServer();

/* Foursquare login crap 
app.get('/login', function(req, res){
	var url = Foursquare.getAuthClientRedirectUrl(CLIENTID, LOGINREDIRECT);
	res.writeHead( 303, {"location": url});
	res.end();
});

app.get('/callback', function(req, res){
	var code = req.query.code;
	Foursquare.getAccessToken({
		code: code,
		redirect_urk: LOGINREDIRECT,
		client_id: CLIENTID,
		client_secret: CLIENTSECRET
	}, function (error, accessToken){
			if(error){
				res.send("An error was thrown: "+error.message);
			} else {
				//save and do something
				res.cookie('token', accessToken);
				res.writeHead(303, {"location": LOGINREDIRECT);
			}
		}
	});
});

app.get('/fin', function(req, res){
	res.send(req.cookie('token')+' was my auth token');
});

app.get('/', function(req, res){
	
	res.send('Hello new world');
});

app.get('/team/:name', function(req, res){
	res.send('Hello Team: ' + req.params.name);
});
*/
app.listen(8080);
