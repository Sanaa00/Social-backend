import Jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
     try {
          let token = req.header("Authorization");

          if (!token) {
               return res.status(403).send("Access denied")
          }

  
          if (token.startWith("Bearer ")) {
               token=token.slice(7,token.length).trimLeft()
          }
     } catch (err) {
          res.status(500).json({err:err.message})
     }
}