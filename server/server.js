const express = require('express')

const app = express()

const PORT = 5000 // || process.env.PORT

// app.set('port' , PORT)
// app.get('port') => returns PORT

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))