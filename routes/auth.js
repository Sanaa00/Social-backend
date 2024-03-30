import { login } from "../controllers/auth.js";
import express from "express";

const router=express.Router()
router.post("/login",login)

export default router
// app.post("/auth/register", upload.single("picture"), register)