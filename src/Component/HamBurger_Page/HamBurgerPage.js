import React from 'react'
import "./Ham.css"
import { IoMdMenu,IoMdNotificationsOutline } from "react-icons/io";
import { LuSearch,LuHome } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { HiOutlineCube } from "react-icons/hi";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { GiSandsOfTime } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate,NavLink,useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function HamBurgerPage() {

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
function close(){
  
    navigate("/");
  
}

  return (
    <div className='ham'>

      <div className='centerdiv'>
      <IoMdClose className='close' onClick={close}/>
      <ul className='ul'>
        {lists.map((list)=>(
           <li className='liham'><NavLink exact to={list.link} className={window.location.pathname === list.link ? 'active' : 'lihamm'}>{list.icons}{list.name}</NavLink></li>
            
        ))}
      </ul>
      </div>
      
    </div>
  )
}

export default HamBurgerPage
