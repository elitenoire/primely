const Ajv = require('ajv');

const ajv = new Ajv({ $data: true, useDefaults: true, removeAdditional : true });

// require('ajv-keywords')(ajv, ['if', 'select'])
require('ajv-keywords/keywords/if')(ajv, 'if')
require('ajv-keywords/keywords/select')(ajv, 'select')


function validateSchema(schema, target) {
//   let ajv = Ajv();
  let validator = ajv.compile(schema);
  let result = validator(target);
  return [result, normaliser(validator.errors)];
}

function normaliser(errors) {
    var fields = errors.reduce((acc, e) => {
            acc[e.dataPath.slice(1)] = [e.message.toUpperCase()[0] + e.message.slice(1)];
            return acc;
        },
        {}
    );

    return { fields };
}

//const errors = ajv.errors.filter(e => e.keyword != 'oneOf');

// exports.validateSchema = validateSchema;
module.exports = validateSchema;

// module.exports = {
//   validate,
// };