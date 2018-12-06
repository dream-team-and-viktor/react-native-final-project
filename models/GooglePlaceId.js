class GooglePlaceID {
    constructor() {
        this.googlePlaceID = 'AIzaSyD6IyYSgOina9gnSW5ZLO_tESUhzLpKgzY'
    }

    fetchGooglPlaceID(location, label) {
        return new Promise((resolve, reject) => {
            let body = {
                requests: [

                ]
            };
          
            fetch(
                `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=200&key=${this.googlePlaceID}&keyword=${label}`,
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
    GooglePlaceID
}