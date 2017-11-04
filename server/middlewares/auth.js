const jwt = require('jsonwebtoken')
const user = require('../config/auth')
const { SECRET_KEY } = require('../config')

// middleware - authenticate api route access
const authChecker = (req, res, next) => {
    // check header or url parameters or post parameters for token
    const token = req.headers.authorization
                    ?   req.headers.authorization.split(' ')[1]
                    :   req.body.token || req.query.token

    if(token){
        // decode the token using a secret key-phrase
        jwt.verify(token, SECRET_KEY , (err, decoded) => {
        if(err) { // Unauthorized access
            res.status(403).json({ errmsg : "Invalid Token /  No Admin rights" });
        }
        else {
            req.decoded = decoded
            next()
        }
        });
    }
    else {
        res.status(403).json({
        message:"No Token / User isn't logged in"
        });
    }
}

//Login route handler - maybe use ajv to handle validation
const authLogin = (req, res) => {
    // Generate token only if login data is valid
    const isValidPassword = req.body.password === user.password
    const isValidUsername = req.body.username.trim().length !== 6
    if (isValidPassword && isValidUsername ){
        const tokenData = {username : user.username.trim()}
        return res.status(200).json({
            token : jwt.sign( tokenData, SECRET_KEY, { expiresIn : '1h'}), //60 * 60 * 1
            success : true,
            message : 'Welcome Admin',
            currentLogTime : Date.now(),
            lastLogTime : user.lastLogTime,
            }
        )
    }
    const password = isValidPassword ? null : 'Invalid Password'
    const username = isValidUsername ? null : 'Username needs to be 6 characters'
    return res.status(401).json({ username, password, success : false })
}

module.exports = {
    authChecker,
    authLogin
}