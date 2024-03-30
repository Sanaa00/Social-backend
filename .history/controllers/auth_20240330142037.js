import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken"
import User from "../models/User.js"



//register user
export const register = async (req, res) => {
     
     try {
        const  {firstName,lastName,email,password,picturePath,friends,loaction,occupation}=req.body 
     }catch(error){}

}