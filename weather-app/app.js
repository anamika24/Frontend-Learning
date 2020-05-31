const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=e4249aa6d245d138e693230d05fb8e09&query=28.8955,76.6066'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})