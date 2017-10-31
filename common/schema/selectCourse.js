import { degree, course, common, alevels, gcse, ufp } from './choices'

const courseSelectSchema = {
    $id : 'selectCourse',
    type : 'object',
    additionalProperties: {
        type : ['array', 'string'],
        uniqueItems : true
    },
    maxProperties : 3,
    required : ['course', 'degree'],
    definitions : {
        common : { enum : common },
        gcse : { enum : gcse }, //use directly
        ufp : { enum : ufp }, //use directly
        alevels : { enum : alevels } //use directly
    },
    properties : {
        degree : { enum : degree },
        course : { enum : course },
    },
    select : { $data : '0/course'},
    selectCases : {
        alevels : {
            properties : {
                alevelsSub : {items : {
                anyOf : [
                { $ref : 'selectCourse#/definitions/alevels'},
                { $ref : 'selectCourse#/definitions/common'}
                ]},
                minItems : 3,
                maxItems : 5
                }
            }
        },
        ufp : {
            properties : {
                ufpSub : { $ref : 'selectCourse#/definitions/ufp'}
            }
        },
        gcse : {
            properties : {
                gcseSub : {items : {
                anyOf : [
                { $ref : 'selectCourse#/definitions/gcse'},
                { $ref : 'selectCourse#/definitions/common'}
                ]},
                minItems : 7,
                maxItems : 9}
            }
        }
    }
}

export default courseSelectSchema