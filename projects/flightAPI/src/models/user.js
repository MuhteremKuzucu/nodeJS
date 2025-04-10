"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- *
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false,
}
/* ------------------------------------------------------- */
// User Model:

const UserSchema=new mongoose.Schema({
    //Fields
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true        
    },
    password:{
        type:String,
        trim:true,
        required:true,
        set:(password)=>passwordEncrypt(password)
    },
    email:{
        type:String,
        trim:true,
        unique:[true,"This email has been taken already"],
        required:[true,"Email field must be filled"],
        validate:[(email)=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),"Please fill a valid email"]
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isStaff:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    //Options
    collection:"user",
    timestamps:true
})

module.exports=mongoose.model("User",UserSchema)





