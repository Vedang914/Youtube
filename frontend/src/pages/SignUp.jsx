import React, { useState } from "react";
import "./SignUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const [uploadedImageUrl, setUploadedImageUrl] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain");
  const [signUpFiled, setSignUpField] = useState({
    channelName: "",
    userName: "",
    password: "",
    about: "",
    profilePic: "",
  });

  

  const handleInputField = (event, name) => {
    setSignUpField({
      ...signUpFiled,
      [name]: event.target.value,
    });
  };

  console.log(signUpFiled)
  return (
    <div className="signUp">
      <div className="signup_card">
        <div className="signUp_title">
          <YouTubeIcon
            sx={{ fontSize: "54px" }}
            className="login_youtubeImage"
          />
          SignUp
        </div>

        <div className="signUp_Inputs">
          <input
            type="text"
            placeholder="Channel Name"
            value={signUpFiled.channelName}
            onChange={(e)=>{handleInputField(e,"channelName")}}
            className="signUp_Inputs_inp"
          />
          <input
            type="text"
            placeholder="User Name"
            value={signUpFiled.userName}
            onChange={(e)=>{handleInputField(e,"userName")}}
            className="signUp_Inputs_inp"
          />
          <input
            type="password"
            placeholder="Password"
            value={signUpFiled.password}
            onChange={(e)=>{handleInputField(e,"password")}}
            className="signUp_Inputs_inp"
          />
          <input
            type="text"
            placeholder="About Your Channel"
            value={signUpFiled.about}
            onChange={(e)=>{handleInputField(e,"about")}}
            className="signUp_Inputs_inp"
          />

          <div className="image_upload_signup">
            <input type="file" className="random" />
            <div className="image_upload_signup_div">
              <img
                className="image_default_signUp"
                src={uploadedImageUrl}
              />
            </div>
          </div>

          <div className="signUpBtns">
            <div className="signUpBtn">SignUp</div>
            <Link to={"/"} className="signUpBtn">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
