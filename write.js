const fs = require(`fs`)
const path = require(`path`)

//Writing Files
const testFilePath = path.join(__dirname, `files`, `new.txt`)
const content = "This is a another line"

// //File gets created in the file system because it does not exist yet
// fs.writeFile(testFilePath, content, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("File written sucessfully")
// })


// Append to a file
const newContent = "\nThis is a fourth line"
fs.appendFile(testFilePath, newContent, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Addition to file a success")
})