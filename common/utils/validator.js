const Ajv = require('ajv/dist/ajv.min');


const ajv = new Ajv({
    $data: true,
    useDefaults: true,
    removeAdditional : true,
    allErrors : true,
    jsonPointers: true
    //format : 'full',
    // coerceTypes : true
});

ajv.addFormat('phone', /^((\+234)|0)([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/gm )
ajv.addFormat('month', /^[1|2]{1}[0|9]{1}[\d]{2}-[0|1]{1}[\d]{1}$/gm)


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


// $("input#UserName").on({
//     keydown: function(e) {
//       if (e.which === 32)
//         return false;
//     },
//     change: function() {
//       this.value = this.value.replace(/\s/g, "");
//     }
//   });