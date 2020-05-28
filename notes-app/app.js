// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'here is a file made by Node.js !')
// fs.appendFileSync(__dirname + '/notes.txt', ' ENJOY learning NODE.JS !!')

//const add = require('./utils.js')
//const sum = add(2,6)
//console.log(sum)

//const validator = require('validator')

const getNotes = require('./notes.js')
const Notes = getNotes()
console.log(Notes)

//console.log(validator.isEmail('abccc@gmail.com'))
//console.log(validator.isURL('https/cdvd.com'))

const chalk = require ('chalk')
console.log(chalk.green.bold.inverse('Success!'))
