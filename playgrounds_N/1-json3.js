const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json3.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Harroshan'
data.age = 22

const updatedData = JSON.stringify(data)
fs.writeFileSync('1-json3.json', updatedData)