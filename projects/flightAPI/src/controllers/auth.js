"use strict"
const passwordEncrypt = require("../helpers/passwordEncrypt")
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
// Auth Controller:

const User=require("../models/user")

module.exports={
    login:async(req,res)=>{
          /*
                #swagger.tags = ["Authentication"]
                #swagger.summary = "Login"
                #swagger.description = 'Login with userName (or email) and password for get simpleToken and JWT'
                #swagger.parameters["body"] = {
                    in: "body",
                    required: true,
                    schema: {
                        "userName": "test",
                        "password": "aA?123456",
                    }
                }
            */

        const {username,email,password}=req.body

        if (!(username || email) && password ){
            res.errorStatusCode=401
            throw new Error("username/email and password are required")
        }

        const user=await User.findOne({$or: [{username},{email}]})

        if (user?.password !== passwordEncrypt(password)){
            res.errorStatusCode=401
            throw new Error("incorrect username/email or password")
        }
        
        if (!user.isActive){
            res.errorStatusCode=401
            throw new Error("This account is not active")
        }

        /* -------------------------------------------------------------------------- */
        /*                                     JWT                                    */
        /* -------------------------------------------------------------------------- */
        // Access Token
        const accessData={
            _id:user._id,
            username:user.username,
            email:user.email,
            isActive:user.isActive,
            isAdmin:user.isAdmin
        }

        // Convert JWT 
        const accessToken=jwt.sign(accessData,process.env.ACCESS_KEY,{expiresIn:'30m'})

        res.status(200).send({
            error:false,
            bearer:{
                access:accessToken
            }
        })
    },

    // todo:  REFRESH 
    logout:async(req,res)=>{
        res.send({
            error:false,
            message:"JWT : no need any process"
        })
    }
    
}

