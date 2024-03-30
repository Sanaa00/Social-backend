import { register } from "../controllers/auth.js";
import express  from "express";
app.post("/auth/register", upload.single("picture"), register)