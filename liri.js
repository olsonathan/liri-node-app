require("dotenv").config();

var keys = require("./keys.js");





var moment = require('moment');

var main = process.argv[2];
var a = process.argv.slice(3).join(" ");


if (main === "movie-this"){

    var axios = require("axios");

        
    // use FS to append var a then readout data to have a full string for mult word titles
    
    // Then run a request with axios to the OMDB API with the movie specified
    axios.get("http://www.omdbapi.com/?t=" + a + "&y=&plot=short&apikey=trilogy").then(
      function(response) {
        
     //   console.log(JSON.stringify(response.data, null, 2));
        console.log(response.data.Title + " was released on: " + response.data.Released);
        console.log("IMDB Rating of the movie " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating " + response.data.Ratings[1].Value);
        console.log(response.data.Title + " was produced in " + response.data.Country + " and is in "+ response.data.Language);
        console.log("The plot of " + response.data.Title + " is: " + response.data.Plot);
        console.log("The main actors in " + response.data.Title + " are " + response.data.Actors);
      //  console.log("was released on: " + response.data.Released);
      }
    );


}

else if(main === "concert-this"){
    var axios = require("axios");
  //  artist= "Pink"

        
    // use FS to append var a then readout data to have a full string for mult word titles
    
    // Then run a request with axios to the OMDB API with the movie specified
    axios.get("https://rest.bandsintown.com/artists/" + a + "/events?app_id=codingbootcamp").then(
      function(response) {    

        for(i=0;i < 5; i++){
        console.log(response.data[i].venue.name)
        console.log(response.data[i].venue.city + ", " + response.data[i].venue.region + " " + response.data[i].venue.country )
        var t = moment(response.data[i].datetime).format('MMMM Do YYYY, h:mm:ss a')
        console.log(t)
       // console.log(response.data[i].datetime)
        }

      }
    )
}

else if(main === "spotify-this-song"){

    var Spotify = require('node-spotify-api');
 
    var spotify = new Spotify(keys.spotify);
    
     
    spotify.search({ type: 'track', query: a, limit: 1 }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
      console.log(data.tracks.items[0].album.artists[0].name)
      console.log(data.tracks.items[0].name)
      console.log(data.tracks.items[0].external_urls.spotify)
      console.log(data.tracks.items[0].album.name);
   // console.log(JSON.stringify(data.tracks.items.artists, null, 2));

    });

}

else if(main === "do-what-it-says"){
    var fs = require("fs");

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
            return console.log(error);
          }
        
          // We will then print the contents of data
         // console.log(data);
        
          // Then split it by commas (to make it more readable)
          var dataArr = data.split(",");

            main = dataArr[0];
            a = dataArr[1];

            console.log(main)
            console.log(a)

        
          // We will then re-display the content as an array for later use.
          //console.log(dataArr);
        
        });



}