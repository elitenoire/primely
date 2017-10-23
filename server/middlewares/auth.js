const jwt = require('jsonwebtoken')
const user = require('../db/auth')

// middleware - authenticate api route access
const authChecker = (req, res, next) => {
    // check header or url parameters or post parameters for token
    console.log(req.body);
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        console.log("token");
        // decode the token using a secret key-phrase
        jwt.verify(token, "primely-admin-secretKey", (err, decoded) => {
        if(err) { // Unauthorized access
            res.status(403).json({ errmsg : "Invalid Token /  No Admin rights" });
        }
        else {
            console.log("success");
            req.decoded = decoded;
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
            token : jwt.sign( tokenData, "primely-admin-secretKey"),
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