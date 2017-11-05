const profileSchema = require('./profile')
const selectCourseSchema = require('./selectCourse')

const schema = {
  $id : 'studentForm',
  definitions : {
    profile : profileSchema,
    selectCourse : selectCourseSchema
  },
  type : 'object',
  properties : {
    persona : {
      allOf : [
        {$ref : 'studentForm#/definitions/profile'},
        { properties : {
            gender : { enum : ['M', 'F']},
            birthdate : { type : 'string', format : 'date'},
            nationality : { type : 'string'}
          },
          required : ['gender', 'birthdate', 'nationality'],

        }
      ],
      maxProperties : 5 //profile has 2
    },
    courseSelection : { $ref : 'studentForm#/definitions/selectCourse'},
    eduHistory : {
      type : 'object',
      properties : {
        school : { type : 'string'},
        state : { type : 'string'},
        attended : {
          type : 'object',
          properties : {
            from : { type : 'string', format : 'month'}, // need to add format for month
            to : { type : 'string', format : 'month'}
          } ,
          required : ['to'],
          additionalProperties : false
        },
        cert : { type : 'string'}
      },
      required : ['school', 'state', 'attended', 'cert'],
      additionalProperties : false
    }
  },
  required : ['persona', 'courseSelection', 'eduHistory'],
  additionalProperties : false
}

module.exports = schema
