What Am I doing here?

I need to store some stuff into a database.

Team:
   Some Kind of Unique ID
   Name (So I don't have to look that shit up)
   Foursquare link (see above)
   Picture (see above)
   
Scores: Each document here is a checkin and associated score
   Team (User):
   Time:
   Place:
   Display Details:
   Score:
   Score Description:
   Checkin Link: 
  
Team Rollup:
   Team (User):
   Score:

## Write some queries then:

Show me a Teams Score:
   select score from rollup where Team = this

Show me some team info:
   select * from Team

Show me a leaderboard:
   Select top 10 * from Team Rollup order by score desc

## How do I get data into this thing:

Team: Get's inserted on register.

Scores: Periodic poll of Foursquare API

Team Rollup: Above rollup get's kicked when a team score poll happens
