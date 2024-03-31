import Post from "../models/posts.js"
import User from "../models/User.js"
export const createPost = async (req, res) => {

     try {
          const { userId, description, picturePath } = req.body;
          const user=await User.find

}catch(err){}


}
 


export const getFeedPosts = async (req, res) => { }