import React from 'react'
import './Home.css'
import SideNavbar from '../components/SideNavbar'
import HomePage from '../components/HomePage'
const Home = ({sideNavbar}) => {
  return (
    <div className='home'>
        <SideNavbar sideNavbar={sideNavbar}/>
        <HomePage />

    </div>
  )
}

export default Home