const express = require('express')
const bodyParser= require('body-parser');
const studentRouter = require('./middlewares/students')
const { authChecker, authLogin } = require('./middlewares/auth')

const PORT =  process.env.PORT || 5000

const app = express()
// tell the app to look for static files in these directories
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//   }
//app.use(express.static('./server/static/'));
//app.use(express.static('./client/dist/'));

// tell the app to parse HTTP body messages and Html Form
app.use(bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json() );

app.post('/login', authLogin )




// app.set('port' , PORT)
// app.get('port') => returns PORT

//use middlewares
app.use(authChecker)
app.use('/api', studentRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))