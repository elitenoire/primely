const profileSchema = {
    type : 'object',
    properties : {
        name : {
            type : 'object',
            properties : {
                firstName : { type : 'string'},
                lastName : { type : 'string'},
                middleName : { type : 'string'}
            },
            required : ['firstName', 'lastName'],
            additionalProperties : false
        },
        contact : {
            type : 'object',
            properties : {
                email : { type : 'string', format : 'email'},
                phone : { type: 'string' , format : 'phone' },
                address : {
                    type : 'object',
                    properties : {
                        addr1 : { type : 'string'},
                        addr2 : { type : 'string'},
                        city : { type : 'string'},
                        state : { type : 'string'}
                    },
                    required : ['addr1', 'city', 'state'],
                    additionalProperties : false
                }
            },
            required : ['email', 'phone', 'address'],
            additionalProperties : false
        }
    },
    required : ['name' , 'contact'],
}

module.exports = profileSchema