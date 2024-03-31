import mongoose from "mongoose";


const postSchema = mongoose.Schema(
     {

          userID:{
          type: String,
               required: true
          },
          firstName:{
          type: String,
          required: true
          },
          userID:{
          type: String,
               required: true
          },
     }
)