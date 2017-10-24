/**
 * Create your own key.js file to have values for username, password, key
 */


if (process.env.NODE_ENV === 'production') {
    module.exports = {
        SECRET_KEY : process.env.SECRET_KEY,
        USERNAME : process.env.USERNAME,
        PASSWORD : process.env.PASSWORD
    }
}
else {
    const { username, password, key } = require('./key')
    module.exports = {
        SECRET_KEY : key,
        USERNAME : username,
        PASSWORD : password
    }
}