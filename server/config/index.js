
let SECRET_KEY = ''

if (process.env.NODE_ENV === 'production') {
    SECRET_KEY = process.env.SECRET_KEY
}
else {
    SECRET_KEY = require('./key').key
}

module.exports = { SECRET_KEY }

