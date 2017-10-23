import contactSchema from './contact'
import selectCourseSchema from './selectCourse'

const students = {
  $id : 'studentForm',
  definitions : {
    contact : contactSchema,
    selectCourse : selectCourseSchema
  },
  type : 'object',
  properties : {
    details : {
      allOf : [
        {$ref : 'studentForm#/definitions/contact'},
        { properties : {
            gender : { enum : ['M', 'F']},
            birthdate : { type : 'string', format : 'date'},
            nationality : { type : 'string'}
          },
          required : ['gender', 'birthdate', 'nationality']
        }
      ]
    },
    emergency : {
      allOf : [
        { $ref : 'studentForm#/definitions/contact'},
        { properties : {
            relship : { type : 'string'},
            title : { enum : ['Mr', 'Miss', 'Mrs']}
          },
          required : ['relship', 'title']
        }
      ]
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
      required : ['name', 'state', 'attended', 'cert']
    }
  },
  required : ['details', 'emergency', 'courseSelection', 'eduHistory']
}

