const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')




geocode('Chandigarh', (error, data) => {
    console.log('Error: ', error)  
    console.log('Data: ' , data)
})

forecast(30.73528, 76.79111, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})