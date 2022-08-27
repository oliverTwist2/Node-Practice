const fs = require(`fs`)
const path = require(`path`)

const poemFilePath = path.join(__dirname, `files`)

// Get file stats
fs.stat(poemFilePath, (err, stats) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(stats)

        // Check specific stats
        console.log(stats.isFile())
        console.log(stats.isDirectory())
        console.log(stats.size)
    }
})