const Ajv = require('ajv/dist/ajv.min');
const validate = require("redux-form-with-ajv").default;


const ajv = new Ajv({
    $data: true,
    useDefaults: true,
    removeAdditional : true,
    allErrors : true,
    jsonPointers: true
});

ajv.addFormat('phone', /^((\+234)|0)([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/)
ajv.addFormat('month', /^[1|2]{1}[0|9]{1}[\d]{2}-[0|1]{1}[\d]{1}$/)


require('ajv-keywords/keywords/if')(ajv, 'if')
require('ajv-keywords/keywords/select')(ajv, 'select')



function validateSchema(schema, target) {
    const validator = validate(schema, { ajv })
    return validator(target)
}

module.exports = validateSchema
