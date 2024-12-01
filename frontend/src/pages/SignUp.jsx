import React, { useState } from "react";
import "./SignUp.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(
    "https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain"
  );
  const [signUpFiled, setSignUpField] = useState({
    channelName: "",
    userName: "",
    password: "",
    about: "",
    profilePic: uploadedImageUrl,
  });

  const handleInputField = (event, name) => {
    setSignUpField({
      ...signUpFiled,
      [name]: event.target.value,
    });
  };

  // console.log(signUpFiled);
  const uploadImage = async (e) => {
    console.log("Uploading");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    // youtube-clone
    data.append("upload_preset", "youtube");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlrr9x0ek/image/upload",
        data
      );

      // console.log(response)

      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);

      setSignUpField({
        ...signUpFiled, // Correct the typo here
        profilePic: imageUrl  // Make sure to reference it correctly
      });
      
    } catch (err) {
      console.log(err);
    }
  };

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
            onChange={(e) => {
              handleInputField(e, "channelName");
            }}
            className="signUp_Inputs_inp"
          />
          <input
            type="text"
            placeholder="User Name"
            value={signUpFiled.userName}
            onChange={(e) => {
              handleInputField(e, "userName");
            }}
            className="signUp_Inputs_inp"
          />
          <input
            type="password"
            placeholder="Password"
            value={signUpFiled.password}
            onChange={(e) => {
              handleInputField(e, "password");
            }}
            className="signUp_Inputs_inp"
          />
          <input
            type="text"
            placeholder="About Your Channel"
            value={signUpFiled.about}
            onChange={(e) => {
              handleInputField(e, "about");
            }}
            className="signUp_Inputs_inp"
          />

          <div className="image_upload_signup">
            <input
              type="file"
              className="random"
              onChange={(e) => uploadImage(e)}
            />
            <div className="image_upload_signup_div">
              <img className="image_default_signUp" src={uploadedImageUrl} />
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
