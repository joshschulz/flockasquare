var express = require('express');
var foursquare = require('node-foursquare').Foursquare();

var CLIENTID = '';
var CLIENTSECRET = '';
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
   /* TODO: 
      Say:
      1.  How do I score?
      2. We have kicked off our munchkins who are, at this very moment working
         on calculating your score
      3. Leaderboards

      Do:
      1. Create a user
      2. Kick off a job to calculate their score. 

      We Could:
      1. Take advantage of node.js here and leave this connection open so we could
         update their score as we calculate.
   */
	res.send(req.query.token+'was my auth token');
});

app.get('/', function(req, res){
   /* Things I need to do here
      What is Flocka Square?
      Leaderboard
      Get Started!
   */
   res.send('Welcome to Flockasquare');
}

app.get('/what', function(req, res){
   //TODO: Load the full what is from a static
   res.send('Flocka Square is cool.  It''s ahhhh');
}

app.get('/leaderboard', function(req, res){
   //TODO: Put the ful leaderboard here
}

app.get('/team/:name', function(req, res){
   /* TODO: a team is one foursquare user
      her team is all the people she is friends
      with.

      This page should show:
         Score
         
      This page could show:
         Recent Scoring
         Friends
   */
	res.send('Hello Team: ' + req.params.name + ' You''re winning!');
});

app.listen(8080);

/* TODO: We need to get the scores and update it */
/* Note: The api limit on foursquare is 500 requests per consumer per user. 
      so 500 an hour.
   Foreach user: 
      pull recent checkins
      score each checkin
      save each score
*/

