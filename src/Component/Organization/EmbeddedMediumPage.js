import React from 'react';
import Navigation_Bar from '../Navbar/Navigation_Bar';
import Navbar2 from '../NavBar2/Navbar2';
import "./Org.css"

function EmbeddedMediumPage() {
  return (
    <div className='embed-container'>
      <Navigation_Bar/>
      <Navbar2/>
      <iframe className='iframe1'
        src="https://carboncell.io/index.html"
        title="Medium Page"
        width="83%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>


      
    </div>
  );
}

export default EmbeddedMediumPage;
