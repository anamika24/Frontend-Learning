function downloadFile(url, downloaded) {
    // We are downloading flie here
    // Let's assume it takes 3 seconds to download
    //We use setTimeout to generate fake delay

    console.log("Downloading file: " + url)

    setTimeout(function () {
        let filepath = "C:\\Downloads\\" +url.split('/').pop()
        console.log("File was downloaded to: " + filepath)
        downloaded(filepath)
    }, 3000)
}

function resizeFile(filepath, resized) {
    // We are resizing the file here. It takes 2 seconds
    // We again use a fake setTimeout delay

    console.log("Resizing file: " + filepath)

    setTimeout(function () {
        let newPath = filepath.split(".")[0] + "-resized." + filepath.split(".")[1]
        resized(newPath)
    }, 2000)
}

function uploadFile(diskPath, uploaded) {
    // We are uploading the file. it takes 3 seconds.
    // we again use a fake delay

   setTimeout(function () {
       let uploadedPath = "http://cb.lk/uploads/" + diskPath.split('\\').pop()
       console.log("We uploaded to: " + uploadedPath)
       uploaded(uploadedPath)
   }, 3000)
}


downloadFile("http://google.com/logo.png", function(downloadedPath){
    resizeFile(downloadedPath, function(resizedPath) {
        uploadFile(resizedPath, function(uploadedUrl) {
            console.log("file is successfully uploaded to: " + uploadedUrl)
        })
    })
})