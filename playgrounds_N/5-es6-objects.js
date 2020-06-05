// object property shorthand

const name = 'Anamika'
const userAge = 24
const user = {
    name,
    age: userAge,
    location: 'Rohtak'
}

console.log(user)

// object destructuring

const product = {
    label: 'notebook',
    price: 20,
    stock: 200,
    salePrice: undefined
}

// const {label: productLabel, stock, rating = 4} = product
// console.log(productLabel)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)