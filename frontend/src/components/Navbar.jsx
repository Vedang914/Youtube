import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = ({setSideNavbarFunc,sideNavbar}) => {
  const [userPic, setUserPic] = useState(
    "https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain"
  );

  const [navbarModal,setNavbarModal] = useState(false);

  const handleClickModal = ()=>{
    setNavbarModal(prev=>!prev)
  }

  const sideNavbarFunc=()=>{
    setSideNavbarFunc(!sideNavbar)
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbarHamberger">
          <MenuIcon onClick={sideNavbarFunc} sx={{ color: "white" }} />
        </div>

        <div className="navbar_youtubeImg">
          <YouTubeIcon
            sx={{ fontSize: "34px" }}
            className="navbar_youtubeImage"
          />
          <div className="navbar_utubeTitle">YouTube</div>
        </div>
      </div>

      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input
            type="text"
            placeholder="Search"
            className="navbar_searchBoxInput"
          />
          <div className="navbar_searchIconBox">
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
          </div>
        </div>

        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      <div className="navbar-right">
        <VideoCallIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />

        <NotificationsIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />
        <img onClick={handleClickModal} src={userPic} className="navbar-right-logo" alt="Logo" />

        { navbarModal &&
          <div className='navbar-modal'>
            <div className="navbar-modal-option">Profile</div>
            <div className="navbar-modal-option">Login</div>
            <div className="navbar-modal-option">Logout</div>

          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;