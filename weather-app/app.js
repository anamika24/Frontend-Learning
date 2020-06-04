const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=e4249aa6d245d138e693230d05fb8e09&query=28.8955,76.6066&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service!")
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         //  const data = JSON.parse(response.body)
//       console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees." )
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5hbWlrYTI0IiwiYSI6ImNrYXc5ZjZtNjAzNG4ycmxpOTQwOHB2aTQifQ.bYpRtMhwhOkdoS6srpQrtA&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to Location services!")
//     } else if (response.body.features.length === 0) {
//         console.log("No result found. Try with another location")
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log('Latitude and Longitude of Los Angeles:  ' +latitude +', ' +longitude)
//     }
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYW5hbWlrYTI0IiwiYSI6ImNrYXc5ZjZtNjAzNG4ycmxpOTQwOHB2aTQifQ.bYpRtMhwhOkdoS6srpQrtA&limit=1' 

    request({ url: url, json: true }, (error, response) => {
            if (error) {
                callback("Unable to connect to Location services!", undefined)
            } else if (response.body.features.length === 0) {
                callback("No location found. Try another search", undefined)
            } else {
                callback(undefined, 
                    {
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                }) 
            }
        })
}

geocode('Philadelphia', (error, data) => {
    console.log('Error: ', error)  
    console.log('Data: ' , data)
})