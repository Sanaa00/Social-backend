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
     },
         picturePath: {
          type: string,
        default:""
     },
     friends: {
          type: Array,
          default:[]
     },
     location: String,
     occupation: String,
     viewdProfile: Number,
     impressions:Number
},{timestamps:true})