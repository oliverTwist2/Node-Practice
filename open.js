const fs = require(`fs`)
const path = require(`path`)

const poemFilePath = path.join(__dirname, `files`, "poem.txt")

// console.log(poemFilePath)

// Opening File

fs.open(poemFilePath, 'r', (err, fd) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File opened successfully')
    // After opening, you can do any operation on the file, like reading, writing, appending, etc.
    // Reading a file
    
    fs.readFile(fd, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('File read successfully')
        console.log(data)
    })
})



