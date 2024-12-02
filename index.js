const express = require("express");
const app = express();
const port = 4000
const cookieParser = require('cookie-parser');
require('./config/db')

app.use(cookieParser());

app.use(express.json())
const authRoutes = require("./routes/user")
const videoRoutes = require("./routes/video")

app.use("/auth",authRoutes)
app.use("/api",videoRoutes)

app.listen(port,()=>{console.log("Our backend project is running on Port 4000")});