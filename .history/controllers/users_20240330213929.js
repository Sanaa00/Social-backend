import User from "../models/User.js"


export const getUser = async (req, res) => {
     try {
          

          const { id } = req.body;
          const user = await User.findById(id);
          res.status(200).json(user)
     } catch (err) {
          res.status(500).json({message:err.message})
     }
}