import React from "react";
import "./Login.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Login = ({ setLoginModal }) => {
  return (
    <div className="login">
      <div className="login_card">
        <div className="titleCard_login">
          <YouTubeIcon sx={{ fontSize: "54px" }} className="login_youtubeImage" />
          Login
        </div>

        <div className="loginCredentials">
          <div className="userNameLogin">
            <input
              type="text"
              placeholder="Username"
              className="userNameLoginUserName"
            />
          </div>

          <div className="userNameLogin">
            {/* Set the input type to password */}
            <input
              type="password"
              placeholder="Password"
              className="userNameLoginUserName"
            />
          </div>
        </div>

        <div className="login_buttons">
          <div className="login-btn">
            Login
          </div>

          <Link to={"/signup"} className="login-btn" onClick={() => setLoginModal(false)}>
            SignUp
          </Link>

          
          <div className="login-btn" onClick={() => setLoginModal(false)}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
