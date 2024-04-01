import React from 'react'
import "./nav2.css"
import logo from "../../assests/logo2.png"
import { IoMdMenu} from "react-icons/io";
import { useNavigate,NavLink,useLocation } from "react-router-dom";


function Navbar2() { 
  
  const navigate = useNavigate();
  
  function navi(){
    navigate("/Hamburger");
  }

  return (
    <div className='hide'>
      <div className='navbar2'>
      <img src={logo}></img>
      <IoMdMenu  className='menu' onClick={navi}/>
      
    </div>
    </div>
  )
}

export default Navbar2
