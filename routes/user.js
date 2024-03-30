import express from "express";
import { getUser, getUserFiends, addRomoveFiends } from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"



const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFiends);
router.patch("/:id/:friendId", verifyToken, addRomoveFiends)

export default router;