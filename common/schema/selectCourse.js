import { degree, courses, common, alevels, gcse, ufp } from './choices'

const courseSelectSchema = {
    $id : 'selectCourse',
    type : 'object',
    additionalProperties: false,
    required : ['courses', 'subjects', 'degree'],
    definitions : {
        common : { enum : common },
        gcse : { enum : gcse }, //use directly
        ufp : { enum : ufp }, //use directly
        alevels : { enum : alevels } //use directly
    },
    properties : {
        degree : { enum : degree },
        courses : { enum : courses },
        subjects : {
            type : ['array', 'string'],
            uniqueItems : true
        }
    },
    select : { $data : '0/courses'},
    selectCases : {
        ALevels : {
            properties : {
                subjects : {items : {
                anyOf : [
                { $ref : 'selectCourse#/definitions/alevels'},
                { $ref : 'selectCourse#/definitions/common'}
                ]},
                minItems : 3,
                maxItems : 5
                }
            }
        },
        UFP : {
            properties : {
                subjects : { $ref : 'selectCourse#/definitions/ufp'}
            }
        },
        GCSE : {
            properties : {
                subjects : {items : {
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