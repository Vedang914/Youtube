import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Profile from "./pages/Profile";
import VideoUpload from "./pages/VideoUpload";
import SignUp from "./pages/SignUp";

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);

  useEffect(()=>{
    axios.get('http://localhost:4000/api/allVideo').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err);
    })
  },[])

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value);
  };

  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/user/:id" element={<Profile sideNavbar={sideNavbar} />} />
        <Route path="/:id/upload" element={<VideoUpload />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
