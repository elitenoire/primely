const Ajv = require('ajv/dist/ajv.min');
const objectPath = require('object-path');
const objectAssign = require('object-assign');


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


//****************************************************************** */
//*********Code sourced from and credited to @gitjs on github */
// https://github.com/gitjs/redux-form-with-ajv

const errorMessage = error =>  error.message;

const validate = (schema, options = {}) => {
    options = objectAssign({ ajv, errorMessage }, options);

    return values => {
    const errors = {};
    const validate = options.ajv.compile(schema);
    const valid = validate(values.toJS ? values.toJS() : values);

    if (!valid) {
        validate.errors.forEach(_error => {
        const error = _error.params.errors ? _error.params.errors[0] : _error;

        const rootPath = error.dataPath;
        const property = error.params.missingProperty ? `/${error.params.missingProperty}` : '';
        let fullPath = `${rootPath}${property}`.replace(/\//g, '.').substring(1);

        if (error.parentSchema && error.parentSchema.type === 'array') {
            fullPath += '._error';
        }

        const message = options.errorMessage(_error);

        objectPath.set(errors, fullPath, message);
        });
    }
    return errors;
    };
};

//************************************************************************ */

function validateSchema(schema, target) {
    const validator = validate(schema)
    return validator(target)
}

module.exports = validateSchema
