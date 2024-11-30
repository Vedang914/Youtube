import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {
  const [userPic, setUserPic] = useState(
    "https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain"
  );

  const [navbarModal, setNavbarModal] = useState(false);
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const handleClickModal = () => {
    setNavbarModal((prev) => !prev);
  };

  const handleprofile = () => {
    navigate(`/user/7697`);
    setNavbarModal(false);
  };

  const sideNavbarFunc = () => {
    setSideNavbarFunc(!sideNavbar);
  };

  const setLoginModal = () => {
    // Moved the setLoginModal function outside
    setLogin(false);
  };

  const onClickofPopUpOption = (button) => {
    setNavbarModal(false);

    if (button === "login") {
      setLogin(true);
    } else {
      localStorage.clear();
      // Call your logout function here
      getLogoutFun();
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbarHamberger">
          <MenuIcon onClick={sideNavbarFunc} sx={{ color: "white" }} />
        </div>

        <Link to={"/"} className="navbar_youtubeImg">
          <YouTubeIcon
            sx={{ fontSize: "34px" }}
            className="navbar_youtubeImage"
          />
          <div className="navbar_utubeTitle">YouTube</div>
        </Link>
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
        <Link to={"/763/upload"}>
          <VideoCallIcon
            sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
          />
        </Link>

        <NotificationsIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />
        <img
          onClick={handleClickModal}
          src={userPic}
          className="navbar-right-logo"
          alt="Logo"
        />

        {navbarModal && (
          <div className="navbar-modal">
            <div className="navbar-modal-option" onClick={handleprofile}>
              Profile
            </div>
            <div
              className="navbar-modal-option"
              onClick={() => onClickofPopUpOption("login")}
            >
              Login
            </div>
            <div
              className="navbar-modal-option"
              onClick={() => onClickofPopUpOption("logout")}
            >
              Logout
            </div>
          </div>
        )}
      </div>

      {/* Login modal rendering */}
      {login && <Login setLoginModal={setLoginModal} />}
    </div>
  );
};

export default Navbar;
