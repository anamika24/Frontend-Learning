const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const command = process.argv[2]

// if (command === 'add') {
//     console.log("Adding Note!!")
// } else if (command === 'Remove') {
//     console.log("Removing Note!!")
// }

//console.log(process.argv)
// Customized Yargs version
yargs.version('2.2.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
         },
         body: {
             describe: 'Note Body',
             demandOption: true,
             type: 'string'
         }
    },
    handler: function(argv) {
      //  console.log("Adding a Note!!", argv)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
  //      console.log("removing a note!!")
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log("Listing a note!!")
    }
})

//create a read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log("Reading a note!!")
    }
})

//console.log(yargs.argv)
yargs.parse()