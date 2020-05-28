function download (url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("file not starts with http"))
        }
        else {
           setTimeout(function() {   //fake 3 sec download task
                console.log("Start Download : " + url)
                let filename = url.split("/").pop()
                resolve(filename)
           }, 3000)
        }
    })
}

function resize (filename)  {
    return new Promise(function (resolve, reject) {
        if (!filename.endsWith(".png")) {
            reject(new Error("file not ends with png"))
        }
        else {
            setTimeout(function () {
                console.log("Start Resize : " + filename)
                let resizedFile = filename.split(".")[0] + "-resized" + ".png"
                resolve(resizedFile)
            },3000)
        }
    })
}

function upload (resizedFile) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Start upload : " + resizedFile)
            let uploadedUrl = "http://new-file/" + resizedFile
            resolve(uploadedUrl)
        }, 3000)
    })
}

Promise.all([
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')
])
    .then(function (downloadValues) {
       return Promise.all(downloadValues.map(resize))
    }) .then(function (resizeValues) {
         return Promise.all(resizeValues.map(upload))
    }) .then(function (uploadValues) {
         console.log(uploadValues)
    })
    .catch(function (err) {
        console.error(err)
    })