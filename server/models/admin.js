const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    name : String,
    mode : String,
    timeStamp : { type: Date }
})


module.exports = adminSchema