import Post from "../models/posts.js"
import User from "../models/User.js"
export const createPost = async (req, res) => {

     try {
          const { userId, description, picturePath } = req.body;
          const user = await User.findById(userId)
          const newPost = new Post({
               userId,
               firstName: user.firstName,
               lastName: user.lastName,
               location: user.location,
               description,
               userPicturePath: user.picturePath,
               picturePath,
               likes: {},
             Comments:[],

          })

          await newPost.save() 


}catch(err){}


}
 


export const getFeedPosts = async (req, res) => { }