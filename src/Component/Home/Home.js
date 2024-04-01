import React from 'react'
import Navigation_Bar from '../Navbar/Navigation_Bar'
import Right from '../RightSection/Right'
import Navbar2 from '../NavBar2/Navbar2'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
      <Navbar2/>
      <Navigation_Bar/>
      <Right/>
    </div>
  )
}

export default Home
