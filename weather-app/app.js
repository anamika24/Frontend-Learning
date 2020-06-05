const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Chandigarh', (error, data) => {
    console.log('Error: ', error)  
    console.log('Data: ' , data)
    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error: ', error)
        console.log('Data: ', data)
    })
})

