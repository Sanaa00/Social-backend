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
               firstName, lastName, email, password:hashPassword, picturePath, friends, loaction, occupation,viewdProfile:Math.floor(Math.random()*100),impressions:Math.floor(Math.random()*100),
          })

          const savedUser = await newUser.save()
          res.status(201).json(savedUser)
     } catch (error) {
          res.status(500).json({error:error.message})
     }

}

//login

export const login = async (req, res) => {
     try {
          
          const { email, password } = req.body;
          const user = await User.findOne({
               email: email
          })
          if (!user) {
               return res.status(400).json({msg:"user does not exist"})
          }

     }catch(err){}
}