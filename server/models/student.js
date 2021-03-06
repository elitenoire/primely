const mongoose = require('mongoose');
const { Schema } = mongoose;
const adminSchema = require('./admin')

const studentSchema = new Schema({
    persona : {
        name : {
            firstName : String,
            lastName : String,
            middleName : { type :String, required : false },
        },
        contact : {
            email : String,
            address : {
                addr1 : String,
                addr2 : { type :String, required : false },
                city : String,
                state : String
            },
            phone : String
        },
        gender : String,
        birthdate : String,
        nationality : String
    },
    eduHistory : {
        school : String,
        state : String,
        cert : String,
        attended : {
            from : { type :String, required : false },
            to : String
        }
    },
    courseSelection : {
        degree : String,
        course : String,
        ALevelsSub : {type : [String], required : false},
        GCSESub : {type : [String], required : false},
        UFPSub : {type : String, required : false}
    },
    admin : [adminSchema],
    createdAt : { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now }
} /*, { timestamps: true } */ )

const Student = mongoose.model('students', studentSchema)

module.exports = Student

