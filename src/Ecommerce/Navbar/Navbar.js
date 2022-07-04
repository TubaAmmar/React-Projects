import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import NavbarData from "./Navbardata";
import './Navbar.css';
import { IconContext } from "react-icons/lib";

function Navbar(){

     const [sidebar, setSidebar] = useState(false);
     const showSidebar = ()=> setSidebar(!sidebar);
    return(
        <>
    

        <div className="navbar">
        <Link to='#' className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        </div>

        <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
            <Link to='#' className="menu-bar1" onClick={showSidebar}>
            <AiIcons.AiOutlineClose/>
           </Link>
            </li>

               
                {NavbarData.map((val, index)=>{
                    return(
                        <li key={index} className='val.cName'>
                    <Link to={val.path} className='link1'>
                        {val.icon}
                        <span> {val.title}</span>
                       
                    </Link>

                    </li>
                    )
                  
                })}
            
           
         
            </ul>

        </nav>
        

        </>
    )
}

export default Navbar;