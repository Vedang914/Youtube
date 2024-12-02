const express = require("express");
const app = express();
const port = 4000
require('./config/db')

app.use(express.json())
const authRoutes = require("./routes/user")

app.use("/auth",authRoutes)

app.listen(port,()=>{console.log("Our backend project is running on Port 4000")});