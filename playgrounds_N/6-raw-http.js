const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=e4249aa6d245d138e693230d05fb8e09&query=30,76'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

response.on('error', (error) => {
    console.log('An error', error)
})

request.end()