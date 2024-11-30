import React, { useState } from "react";
import "./Login.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Login = ({ setLoginModal }) => {
  const [loginField, setLoginField] = useState({ userName: "", password: "" });
  console.log(loginField)

  const handleOnChangeInput = (event, name) => {
    setLoginField({
      ...loginField,
      [name]: event.target.value,
    });
  };

  return (
    <div className="login">
      <div className="login_card">
        <div className="titleCard_login">
          <YouTubeIcon
            sx={{ fontSize: "54px" }}
            className="login_youtubeImage"
          />
          Login
        </div>

        <div className="loginCredentials">
          <div className="userNameLogin">
            <input
              type="text"
              placeholder="Username"
              value={loginField.userName}
              onChange={(e) => handleOnChangeInput(e, "userName")}
              className="userNameLoginUserName"
            />
          </div>

          <div className="userNameLogin">
            <input
              type="password"
              placeholder="Password"
              value={loginField.password}
              onChange={(e) => handleOnChangeInput(e, "password")}
              className="userNameLoginUserName"
            />
          </div>
        </div>

        <div className="login_buttons">
          <div className="login-btn">Login</div>

          <Link
            to={"/signup"}
            className="login-btn"
            onClick={() => setLoginModal(false)}
          >
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
