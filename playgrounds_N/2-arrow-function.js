// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Anni', 'Miki', 'Vini'],
  //  printList: function () {    // here we can't use  Arrow function =>
    printList() {                 // it works
        console.log("Here is the list for " + this.name )  // for arrow fn, this is undefined
        this.guestList.forEach((guest) => {
            console.log(guest + ' is invited for ' + this.name)
        })
    }
}

event.printList()