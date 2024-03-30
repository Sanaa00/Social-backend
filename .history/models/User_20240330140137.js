import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
     
     
          firstName: {
          type: string,
          require: true,
          min: 2,
               max:50
          }
})