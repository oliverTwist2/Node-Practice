const fs = require(`fs`)
const path = require(`path`)

const poemFilePath = path.join(__dirname, `files`, "poem.txt")
// const countriesFilePath = path.join(__dirname, `files`, "countries.json")

// Read a file asynchronously without first opening it

fs.readFile(poemFilePath, "utf-8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("File read sucessfully")
    console.log(data)
})
