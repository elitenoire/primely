const validator = require('../../common/utils/validator');
const schema = require('../../common/schema/schema')


const validate = (req, res, next) => {
    const response = validator(schema, req.body)
    if(response[0]){ // passed validation
        next()
    }
    else { // failed validation
        res.status(422).json({
            errors :response[1]
        })
    }
}

module.exports  = validate