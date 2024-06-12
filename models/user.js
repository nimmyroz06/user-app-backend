const mongoose =require("mongoose")
const schema = mongoose.Schema(



    {
        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "bgrp":{type:String,required:true},
        "mob":{type:String,required:true},
        "addr":{type:String,required:true},
        "pin":{type:String,required:true},
        "dst":{type:String,required:true},
        "place":{type:String,required:true},
        "email":{type:String,required:true},
        "uname":{type:String,required:true},
        "pass":{type:String,required:true},
        "cpass":{type:String,required:true}
    }
)

let usermodel = mongoose.model("userapp",schema)
module.exports = {usermodel}