const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({
    username : {
        type : String,
        required: true,
        unique : [true,"Username should be unique"]
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required:true,
        minlength : 8
    }
})
module.exports = mongoose.model('Person',personSchema)