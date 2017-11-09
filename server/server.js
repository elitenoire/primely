const express = require('express')
const bodyParser= require('body-parser');
const studentRouter = require('./routes/students')
const { authLogin, authChecker } = require('./middlewares/auth')
const { mongoURI } = require('./config/auth')
//require mongoose
const mongoose = require('mongoose')
//create mongoose Promises using es6 Promise library
mongoose.Promise = global.Promise
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to Mongodb, success!')
    })
    .catch(error => console.warn('Warning!', error))

const PORT =  process.env.PORT || 5000

const app = express()

// tell the app to parse HTTP body messages and Html Form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json() );

// Handle login route
app.post('/auth/login', authLogin )

// tell the app to look for static files in these directories
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// auth middleware
app.all('/api/*', authChecker);
// Handle students route
app.use(studentRouter)


if (process.env.NODE_ENV === 'production') {
    //serve index.html for unrecognized route -> react-router
    const path = require('path')
    app.get('*' , (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))