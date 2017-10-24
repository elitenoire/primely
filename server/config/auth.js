const { username, password } = require('./key')

module.exports = {
    username : process.env.USERNAME || username,
    password : process.env.PASSWORD || password,
    lastLogTime : "1508782666295"
}
