import { register } from "../controllers/auth.js";

app.post("/auth/register", upload.single("picture"), register)