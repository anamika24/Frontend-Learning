const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })
// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Anamika',
//         age: 24
//     })
// })
// app.get('/about', (req, res) => {
//     res.send('<h2>About</h2>')
// })

app.get('/weather', (req, res) => {
    res.send({
        location: 'Rohtak',
        forecast: '30 degrees'
    })
})
// app.com
// app.com/help

app.listen(3000, () => {
    console.log('Server is up on 3000 port.')
})