import mongoose from "mongoose";      

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required: true,
        unique:true,
        index:true //to make filed searchable
    },
    lastname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    dob:{
        type:Date,
        required: true
    },

},{timestamps:true})

export const User= mongoose.model("User",userSchema)

//it will create a database for the define shema and set the name in lowercase in pulalr form 
//e.g User --> users