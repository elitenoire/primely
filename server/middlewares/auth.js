const jwt = require('jsonwebtoken')
const user = require('../config/auth')
const { SECRET_KEY } = require('../config')

// middleware - authenticate api route access
const authChecker = (req, res, next) => {
    // check header or url parameters or post parameters for token
    const token = req.headers.authorization
                    ?   req.headers.authorization.split(' ')[1]
                    :   req.body.token || req.query.token
    //var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        console.log(SECRET_KEY);
        console.log(user)
        // decode the token using a secret key-phrase
        jwt.verify(token, SECRET_KEY , (err, decoded) => {
        if(err) { // Unauthorized access
            res.status(403).json({ errmsg : "Invalid Token /  No Admin rights" });
        }
        else {
            console.log("success");
            req.decoded = decoded; //change to req.user
            next();
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
    if (req.body.password === user.password && req.body.username === user.username){
        const tokenData = {username : user.username}
        return res.status(200).json({
            token : jwt.sign( tokenData, SECRET_KEY, { expiresIn : '6h'}), //60 * 60 * 6
            message : 'Welcome Admin',
            currentLogTime : Date.now(),
            lastLogTime : user.lastLogTime,
            }
        )
    }
    else return res.status(403).json({message : 'Invalid Username or Password'})
}

module.exports = {
    authChecker,
    authLogin
}