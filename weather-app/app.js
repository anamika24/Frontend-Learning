const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Chandigarh', (error, data) => {
     if (error) {
        return console.log(error)
    }
    
    forecast(data.latitude, data.longitude, (error, forecastData) => {
       if (error) {
           return console.log(error)
       }
       console.log(data.location)
       console.log(forecastData)
    })
})

