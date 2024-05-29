import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import  path  from "path";
import { fileURLToPath } from "url";
import { env } from "process";
import { error } from "console";
// import { register } from "module";
import { register } from "./controllers/auth.js";
import {createPost} from "./controllers/posts.js"
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js"
import postRoutes from "./routes/posts.js"
import Post from "./models/posts.js";
import User from "./models/User.js";
import { users,posts } from "./data/index.js";


// configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
dotenv.config();
const app = express()
app.use(cors())
app.use(express.json)
app.use(helmet())
// app.use(helmet.crossOriginResourcePolicy({
//      policy:"cross-origin"
// }))
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use("/assets", express.static(path.join(__dirname, "public/assets")))


// file storage 
const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null,"public/assets")// each uploaded image hold in this destination 
     },
     filename: function (req, file, cb) {
          cb(null,file.originalname)
     },
})

const upload = multer({ storage })// using upload for uploading any file

// ROUTES 
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", upload.single("picture"), createPost);

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);


// mongoose setup
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
     useNewUrlParser: true,
     useUnifiedTopology:true,
}).then(() => {
     app.listen(PORT, () => console.log(`server port ${PORT}`));
     // User.insertMany(users);               ///to add data once
     // Post.insertMany(posts);
}).catch(error=>{console.log(error,"db not connect ")})