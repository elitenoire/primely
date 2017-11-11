const validator = require('../common/utils/validator');
const schema = require('../common/schema/schema')


const validate = (req, res, next) => {
    const response = validator(schema, req.body)
    if(Object.keys(response).length === 0){ // passed validation
        const course = req.body.courseSelection.course
        const subjects = req.body.courseSelection[`${course}Sub`]
        // reset subject fields
        req.body.courseSelection.ALevelsSub = []
        req.body.courseSelection.GCSESub = []
        req.body.courseSelection.UFPSub = ""
        // replace with selected subjects
        req.body.courseSelection[`${course}Sub`] = subjects
        next()
    }
    else { // failed validation
        res.status(422).json(response) //<-- error object
    }
}

module.exports  = validate