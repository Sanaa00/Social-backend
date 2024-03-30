import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
     
     
          firstName: {
          type: string,
          require: true,
          min: 2,
          max:50
     },
     lastName: {
          type: string,
          require: true,
          min: 2,
          max:50
     },
     email: {
          type: string,
          require: true,
          unique:true,
          max:50
          }
})