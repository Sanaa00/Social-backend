import { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import  Path  from "path";
import { fileURLToPath } from "url";


// configuration
const __filename = fileURLToPath(import.meta
.)