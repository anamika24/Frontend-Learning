// to autosave both js and hbs file- nodemon src/app.js -e js,hbs  (where e- flag is extension)
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
console.log(__dirname, '../public')
const publicDirectoryPath = path.join(__dirname, '../public')
//const viewsPath = path.join(__dirname, '/templates/views')
const partialPath = path.join(__dirname, '../partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
//app.use('views', viewsPath)
hbs.registerPartials(partialPath)

// setup static directory to serve
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
        title: 'Help',
        helptext: 'This is some helpful application.',
        name: 'Anamika'
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

app.listen(7070, () => {
    console.log('Server is up on 7070 port.')
})