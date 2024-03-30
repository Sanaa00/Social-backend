import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
     
     
          firstName: {
          type: string,
          required: true,
          min: 2,
          max:50
     },
     lastName: {
          type: string,
          required: true,
          min: 2,
          max:50
     },
     email: {
          type: string,
          required: true,
          unique:true,
          max:50
     },
       password: {
          type: string,
          required: true,
     
          min:5
          }
})