import profileSchema from './profile'
import selectCourseSchema from './selectCourse'

const student = {
  $id : 'studentForm',
  definitions : {
    profile : profileSchema,
    selectCourse : selectCourseSchema
  },
  type : 'object',
  properties : {
    details : {
      allOf : [
        {$ref : 'studentForm#/definitions/profile'},
        { properties : {
            gender : { enum : ['M', 'F']},
            birthdate : { type : 'string', format : 'date'},
            nationality : { type : 'string'}
          },
          required : ['gender', 'birthdate', 'nationality'],
          additionalProperties : false
        }
      ],
      maxProperties : 5 //profile has 2
    },
    emergency : {
      allOf : [
        { $ref : 'studentForm#/definitions/profile'},
        { properties : {
            relship : { type : 'string'},
            title : { enum : ['Mr', 'Ms', 'Mrs']}
          },
          required : ['relship', 'title'],
          additionalProperties : false
        }
      ],
      maxProperties : 4 //profile has 2
    },
    courseSelection : { $ref : 'studentForm#/definitions/selectCourse'},
    eduHistory : {
      type : 'object',
      properties : {
        name : { type : 'string'},
        state : { type : 'string'},
        attended : { type : 'string', format : 'date'}, //use from-to object
        cert : { type : 'string'}
      },
      required : ['name', 'state', 'attended', 'cert'],
      additionalProperties : false
    }
  },
  required : ['details', 'emergency', 'courseSelection', 'eduHistory'],
  additionalProperties : false
}

