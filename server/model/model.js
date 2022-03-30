const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    lname:{
        type: String,
        require:true
    },
    usergroup:{
        type:String,
        require
    },
    userlang:{
        type:String,
        require
    },
    username:{
        type:String,
        require
    },
    password:{
        type:String,
        require
    },
    area:{
        type:String,
        require
    },
    status: String
})

const Userdb = mongoose.model('userdb', schema)

module.exports = Userdb;