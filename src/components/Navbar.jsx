import React, { useState } from 'react'
import { navigation } from '../constants'
import { useLocation } from 'react-router'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import logo from "../assets/images/logo/meesho-logo.png"

const Navbar = () => {
    const [active, setActive] = useState();
  return (
    <div className='navbar'>
        <img src={logo} alt="meesho logo" height={72} style={{marginLeft:"1.7rem"}}/>
      <ul>
        {navigation.map((item, index)=>(
                <li key={item.id}>
                    <Link 
                        className={`navLinks ${window.location.pathname === `/${item.url}`? "active":"inactive"} ${index == navigation.length-1? "yellow-button" : ""}`} 
                        onClick={()=>{setActive(item.url)}}
                        to={`/${item.url}`}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
      </ul>
      
    </div>
  )
}

export default Navbar