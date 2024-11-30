import React, { useState,useEffect } from 'react'
import "./VideoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link,useNavigate } from 'react-router-dom';

const VideoUpload = () => {

  const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })

  console.log(inputField)
  const handleOnChangeInput = (event, name) => {
    setInputField({
        ...inputField, [name]: event.target.value
    })
}
  return (
    <div className="videoUpload">
      <div className="uploadBox">
        <div className="uploadVideoTitle">
          <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
          Upload Video
        </div>

        <div className="uploadForm">
          <input
            type="text"
            placeholder="Title of Video"
            value={inputField.title}
            onChange={(e)=>{handleOnChangeInput(e,"title")}}
            className="uploadFormInputs"
          />

          <input
            type="text"
            placeholder="Description"
            value={inputField.description}
            onChange={(e)=>{handleOnChangeInput(e,"description")}}
            className="uploadFormInputs"
          />

          <input
            type="text"
            placeholder="Category"
            value={inputField.videoType}
            onChange={(e)=>{handleOnChangeInput(e,"videoType")}}
            className="uploadFormInputs"
          />

          <div>
            Thumbnail <input type="file" accept="image/*" />
          </div>

          <div>
            Video <input type="file" accept="video/mp4,video/webm, video/*" />
          </div>
        </div>

        <div className="uploadBtns">
          <div className="uploadBtn-form" >
            Upload
          </div>
          <Link to={"/"} className="uploadBtn-form">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
