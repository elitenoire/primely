var fs = require('fs')

var students = JSON.parse(fs.readFileSync('../db/db.json')) //blocking read

var rawData = JSON.stringify(students, null, 4)

fs.writeFile('../db/db.json', rawData, callback)

function callback(){
    console.log('Saved to database')
}
