class GoogleView {
    constructor() {
        this.googleViewAPIKey = 'AIzaSyCyzIDcYNL4BJKjJQdSe-BvmauPVfSMFkY'
    }

    fetchGoogleViewData = (imageBase64) => {
        return new Promise((resolve, reject) => {
            let body = {
                requests: [
                  {
                    image: {
                      content: imageBase64
                    },
                    features: [
                      {
                        type: "LOGO_DETECTION",
                        maxResults: 5
                      },
                      {
                        type: "WEB_DETECTION",
                        maxResults: 5
                      }
                    ]
                  }
                ]
            };
          
            fetch(
                `https://vision.googleapis.com/v1/images:annotate?key=${this.googleViewAPIKey}`,
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
    GoogleView
}