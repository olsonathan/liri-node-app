var bandsintown = require('bandsintown')(APP_ID=codingbootcamp);
 
        bandsintown
            .getArtistEventList("Pink")
            .then(function(events) {
                console.log(events)
                // return array of events
                });