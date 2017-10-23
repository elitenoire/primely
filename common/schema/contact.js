const contactSchema = {
    type : 'object',
    properties : {
        firstName : { type : 'string'},
        lastName : { type : 'string'},
        middleName : { type : 'string'},
        contact : {
            type : 'object',
            properties : {
                email : { type : 'string', format : 'email'},
                phone : { type: 'string' , format : 'phone' },
                address : {
                    type : 'object',
                    properties : {
                        street : { type : 'string'},
                        street2 : { type : 'string'},
                        city : { type : 'string'},
                        state : { type : 'string'}
                    },
                    required : ['street', 'city', 'state'],
                    additionalProperties : false
                }
            },
            required : ['email', 'phone', 'address'],
            additionalProperties : false
        }
    },
    required : ['firstName', 'lastName', 'contact'],
    additionalProperties : false
}

export default contactSchema