let obj = {
    anInteger: 24,
    aString: "abcd",
    aFunction: function () {
        return (this.anInteger + this.aString)
    }
}

console.log(obj.aFunction())