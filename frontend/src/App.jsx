import { useState,useEffect } from 'react';

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [sideNavbar,setSideNavbar] = useState(true);

  const setSideNavbarFunc=(value)=>{
    setSideNavbar(value)
  }
  

  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Home sideNavbar={sideNavbar} />
      
    </div>
  )
}

export default App
