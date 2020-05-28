function Person (name, age) {
    this.firstname = name.split(" ")[0]
    this.lastname = name.split(" ")[1]
    this.age = age
    this.isAdult = function () {
        return age > 18
    }
}

let p = new Person("John Smith", 30)
let h = new Person("Harry Poter", 12)

console.log(p)
console.log(h)
console.log(p.isAdult())
console.log(h.isAdult())
