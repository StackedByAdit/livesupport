import { connectDB } from "./src/config/db";
import "dotenv/config";
 
const express = require("express");
const app = express();

app.use(express.json());

connectDB();
