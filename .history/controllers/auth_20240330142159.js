import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken"
import User from "../models/User.js"



//register user
export const register = async (req, res) => {
     
     try {
          const { firstName, lastName, email, password, picturePath, friends, loaction, occupation } = req.body;

          const salt = await bcrypt.genSalt();
          const hashPassword = await bcrypt.hash(password, salt)
          

          const newUser = new User({
               firstName, lastName, email, password:hashPassword, picturePath, friends, loaction, occupation
          })
     }catch(error){}

}