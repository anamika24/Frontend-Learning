let arr = [4,3,2,47,8,1,86,34,90]
console.log(arr.sort())

function compare(a, b) {
    return a-b;
}

let sortedarray =  arr.sort(compare)
console.log(sortedarray)
console.log(typeof sortedarray)