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



export const getUserFiends = async (req, res) => {

     try{const { id } = req.body;
     const user = await User.findById(id);

     const friends = await Promise.all(
          user.friends.map(id => User.findById(id))
     );
     const formattedfriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => {
          return { _id, firstName, lastName, occupation, location, picturePath }
     })
          res.status(200).json(formattedfriends)
     } catch (err) {
          res.status(500).json({ message: err.message })
     }
     
}

export const addRomoveFiends = async (req, res) => {
     try {
          
          const { id, friendId } = req.params;
          const user = await User.findById(id);
          const friend = await User.findById(friendId);

          if (user.friends.includes(friendId)) {
               user.friends = user.friends.filter((id) => id != friendId)
               friend.friends=friend.friends.filter((id)=>id!=id)
          } else {
               user.friends.push(friendId);
               friend.friends.push(id)
          }
     }catch(err){}
}