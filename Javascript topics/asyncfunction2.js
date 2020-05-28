function task (done) {
    console.log("a task is in progress")
    setTimeout(done, 1000)
}

task (function () {
    console.log("task is done")
})

console.log("a task is assigned")