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
          comments: {
               type: Array,
               desfault:[]
          }
         
     },{timestamps:true}
)

const Post = mongoose.model("Post", postSchema)