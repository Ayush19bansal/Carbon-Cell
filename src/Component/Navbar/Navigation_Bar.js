import React from 'react'
import logo from "../../assests/logo2.png"
import { IoMdMenu,IoMdNotificationsOutline } from "react-icons/io";
import { LuSearch,LuHome } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { HiOutlineCube } from "react-icons/hi";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { GiSandsOfTime } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import "./Nav_bar.css"
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate,NavLink,useLocation } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import userimg from "../../assests/pro.png"

function Navigation_Bar() {

    const navigate = useNavigate();
    const location = useLocation();

    let lists=[{
        icons:<LuHome />,
        name: "Home",
        link:"/"
    },
    {
        icons:<GoOrganization/>,
        name: "Organization",
        link:"/organization"
    },
    {
        icons:<HiOutlineCube />,
        name: "Assets",
        link:"/assets"
    },
    {
        icons:<HiMiniArrowsUpDown  />,
        name: "Trade",
        link:"/trade"
    },
    {
        icons:<GiSandsOfTime />,
        name: "History ",
        link:"/history"
    },
    {
        icons:<IoWalletOutline />,
        name: "Wallet",
        link:"/wallet"
    },
]

function navi(){
  navigate("/Hamburger");
}


  return (
    <div className='navbarContainer'>
      
      <div className='logo'>
        <img src={logo}/>
        <IoMdMenu  className='menu' onClick={navi}/>
      </div>

      <div className='input'>
      <LuSearch className='searchIcon' />
      <input type='text' placeholder='Search'></input>
      </div>

      <ul className='ul'>
        {lists.map((list)=>(
           <li className='lii'><NavLink exact to={list.link} className={window.location.pathname === list.link ? 'active' : 'li'}>{list.icons}{list.name}</NavLink></li>
            
        ))}
      </ul>

      <div className='below'>
        <div  className="notification">
            <li className='li2'>
            <IoMdNotificationsOutline  className='icon'/>
            Notifications
            </li>
            
        </div>

        <li className='li3'>
            <BsQuestionCircle  className='icon'/>
            Support
            </li>

            <li className='li3'>
            <IoSettingsOutline  className='icon'/>
            Settings
            </li>    
        
      </div>


      <div className='lastone'>
        <img src={userimg}/>
        <div className='user'>
          <h4>Brooklyn Simmons</h4>
          <p>brooklyn@simmons.com</p>

        </div>

        <div className='dots'>
        <BsThreeDotsVertical />
        </div>
      </div>

      
    </div>
  )
}

export default Navigation_Bar
