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
          lasrtName:{
          type: String,
               required: true
          },
          location: String,
          description: String,
          picturePath: String,
          userPicturePath: String,
          likes: {
               type: Map,
               of:Boolean,
          },
         
     }
)