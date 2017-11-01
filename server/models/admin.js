const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    name : String,
    mode : String
})


module.exports = adminSchema