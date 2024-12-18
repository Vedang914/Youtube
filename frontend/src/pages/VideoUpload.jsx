import React, { useState, useEffect } from "react";
import "./VideoUpload.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const VideoUpload = () => {
  const [inputField, setInputField] = useState({
    title: "",
    description: "",
    videoLink: "",
    thumbnail: "",
    videoType: "",
  });

  const [loader, setLoader] = useState(false);

  // console.log(inputField);

  const uploadImage = async (e, type) => {
    setLoader(true);
    console.log("Uploading");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    // youtube-clone
    data.append("upload_preset", "youtube");
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dlrr9x0ek/${type}/upload`,
        data
      );

      // console.log(response)

      const url = response.data.url;
      setLoader(false);
      let val = type === "image" ? "thumbnail" : "videoLink";
      setInputField({
        ...inputField,
        [val]: url,
      });
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };

  console.log(inputField);
  const handleOnChangeInput = (event, name) => {
    setInputField({
      ...inputField,
      [name]: event.target.value,
    });
  };

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
            onChange={(e) => {
              handleOnChangeInput(e, "title");
            }}
            className="uploadFormInputs"
          />

          <input
            type="text"
            placeholder="Description"
            value={inputField.description}
            onChange={(e) => {
              handleOnChangeInput(e, "description");
            }}
            className="uploadFormInputs"
          />

          <input
            type="text"
            placeholder="Category"
            value={inputField.videoType}
            onChange={(e) => {
              handleOnChangeInput(e, "videoType");
            }}
            className="uploadFormInputs"
          />

          <div>
            Thumbnail{" "}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e, "image")}
            />
          </div>

          <div>
            Video{" "}
            <input
              type="file"
              accept="video/mp4,video/webm, video/*"
              onChange={(e) => uploadImage(e, "video")}
            />
          </div>

          {loader && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>

        <div className="uploadBtns">
          <div className="uploadBtn-form">Upload</div>
          <Link to={"/"} className="uploadBtn-form">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
