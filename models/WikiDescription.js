class WikiDescription {
    constructor() {
        this.googlePlaceID = 'AIzaSyD6IyYSgOina9gnSW5ZLO_tESUhzLpKgzY'
    }

    fetchWikiDescription(name) {
        return new Promise((resolve, reject) => {
            let body = {
                requests: [

                ]
            };
          
            fetch(
                `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${encodeURIComponent(name)}`,
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
    WikiDescription
}