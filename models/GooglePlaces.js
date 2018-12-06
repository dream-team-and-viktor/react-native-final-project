class GooglePlaces {
    constructor() {
        this.googlePlacesAPIKey = 'AIzaSyD6IyYSgOina9gnSW5ZLO_tESUhzLpKgzY'
    }

    fetchGooglePlaces(placeId) {
        return new Promise((resolve, reject) => {
            let body = {
                requests: [

                ]
            };
          
            fetch(
                `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,rating,formatted_phone_number,reviews&key=${this.googlePlacesAPIKey}`,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(body)
                }
            )
            .then((response) => {
                response.json().then((result) => {
                  resolve(result)
                });
            })  
              
        })
    }
}

module.exports = {
    GooglePlaces
}