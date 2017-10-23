const express = require('express')
const studentRouter = require('./middlewares/students')

const app = express()

const PORT = 5000 // || process.env.PORT

// app.set('port' , PORT)
// app.get('port') => returns PORT

//use middlewares
app.use('/api', studentRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))