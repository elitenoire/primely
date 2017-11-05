const validator = require('../common/utils/validator');
const schema = require('../common/schema/schema')


const validate = (req, res, next) => {
    const response = validator(schema, req.body)
    if(response[0]){ // passed validation
        let subjects = []
        const {alevelsSub, gcseSub, ufpSub } = req.body.courseSelection
        if(alevelsSub) {
            subjects = alevelsSub
            delete req.body.courseSelection.alevelsSub
        }
        if(gcseSub) {
            subjects = gcseSub
            delete req.body.courseSelection.gcseSub
        }
        if(ufpSub) {
            subjects = [ufpSub]
            delete req.body.courseSelection.ufpSub
            }
        req.body.courseSelection.subjects = subjects
        next()
    }
    else { // failed validation
        res.status(422).json({
            errors :response[1]
        })
    }
}

module.exports  = validate