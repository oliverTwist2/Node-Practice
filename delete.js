const fs = require(`fs`)
const path = require(`path`)

//Deleting Files
const filePath = path.join(__dirname, `files`, `new.txt`)

fs.rm(filePath, (err) =>  {
    if (err) {
        console.log(err)
        return
    }
    console.log("File deleted successfully")
})