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
          type: String,
          required: true,
          unique:true,
          max:50
     },
       password: {
          type: String,
          required: true,
          min:5
     },
         picturePath: {
          type: String,
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
}, { timestamps: true })



const User = mongoose.model("User", userSchema)
export default User