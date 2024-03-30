import express from "express";
import { getUser, getUserFiends, addRomoveFiends } from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"



const router = express.Router();

router.get("/:id",verifyToken,getUser)