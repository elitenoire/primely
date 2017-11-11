const { degree, course, common, alevels, gcse, ufp } = require('./choices')

const courseSelectSchema = {
    $id : 'selectCourse',
    type : 'object',
    required : ['course', 'degree'],
    definitions : {
        common : { enum : common },
        gcse : { enum : gcse },
        ufp : { enum : ufp },
        alevels : { enum : alevels }
    },
    properties : {
        degree : { enum : degree },
        course : { enum : course },
    },
    select : { $data : '0/course'},
    selectCases : {
        ALevels : {
            properties : {
                degree : { enum : degree },
                course : { enum : course },
                ALevelsSub : {items : {
                anyOf : [
                { $ref : 'selectCourse#/definitions/alevels'},
                { $ref : 'selectCourse#/definitions/common'}
                ]},
                minItems : 3,
                maxItems : 5
                }
            },
            additionalProperties : false,
            required : ['ALevelsSub'],
        },
        UFP : {
            properties : {
                degree : { enum : degree },
                course : { enum : course },
                UFPSub : { $ref : 'selectCourse#/definitions/ufp'}
            },
            additionalProperties : false,
            required : ['UFPSub'],
        },
        GCSE : {
            properties : {
                degree : { enum : degree },
                course : { enum : course },
                GCSESub : {items : {
                anyOf : [
                { $ref : 'selectCourse#/definitions/gcse'},
                { $ref : 'selectCourse#/definitions/common'}
                ]},
                minItems : 7,
                maxItems : 9}
            },
            additionalProperties : false,
            required : ['GCSESub'],
        }
    }
}

module.exports = courseSelectSchema