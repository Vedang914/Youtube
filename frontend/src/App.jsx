import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Profile from "./pages/Profile";

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value);
  };

  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path='/watch/:id' element={<Video />} />
        <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar} />} />
      </Routes>
    </div>
  );
}

export default App;
