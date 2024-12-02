const express = require("express");
const app = express();
const port = 4000;
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);

require("./config/db");

app.use(cookieParser());

app.use(express.json());
const authRoutes = require("./routes/user");
const videoRoutes = require("./routes/video");
const commentRoutes = require("./routes/comment");

app.use("/auth", authRoutes);
app.use("/api", videoRoutes);
app.use("/commentapi", commentRoutes);

app.listen(port, () => {
  console.log("Our backend project is running on Port 4000");
});
