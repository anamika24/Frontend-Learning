setTimeout(() => {
    console.log("two seconds later")
}, 2000)

const names = ['Anamika', 'Anni', 'Harry']
const shortName = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
         callback(data)
    }, 2000)
}

geocode('Gurgaon', (printData) => {
    console.log(printData) 
})

const add = (a, b, sum) => {
    setTimeout(() => {
        sum(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})