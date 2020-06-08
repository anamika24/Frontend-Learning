const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express cpnfig
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handlebar engine and view location
app.set('view engine', 'hbs')
app.use('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Anamika'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Anamika'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        helptext: 'This is some helpful application.'
    })
})

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
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