import { Schema } from "mongoose";

const userSchema = new Schema({
    firstName:{
        type:String,
        required:[true, 'First Name is required'],
        trim:true
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        lowerCase:true
    },
    
})