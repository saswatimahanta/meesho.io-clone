import React, { useState } from 'react'
import { navigation } from '../constants'
import { useLocation } from 'react-router'
import { useMediaQuery } from "react-responsive";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../assets/images/logo/meesho-logo.png"

const Navbar = () => {
    const [active, setActive] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMobileMenu = () => {
      if (isMobile) {
        setIsMenuOpen(false);
      }
    };
    const handleClick = (url) => {
      setActive(url);
      closeMobileMenu();
  }
  
    const renderNavLinks = () => {
      const listClassName = isMobile ? "nav__list" : "nav__list__web";
  
      return (
        <ul className={listClassName}>
          {navigation.map((item, index)=>(
              <li key={item.id} className='nav__item'>
                  <NavLink 
                      className={`nav__link ${window.location.pathname === `/${item.url}`? "active":"inactive"} ${index == navigation.length-1? "yellow-button" : "notButtons"}`} 
                      onClick={()=>{handleClick(item.url)}}
                      to={`/${item.url}`}
                  >
                      {item.title}
                  </NavLink>
              </li>
          ))}
        </ul>
      );
    };
  
    return (
      <header className="header">
        <nav className="nav container">
          <NavLink to="/" className="nav__logo">
            <img src={logo} alt="" height={72}/>
          </NavLink>
  
          {isMobile && (
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <IoMenu />
            </div>
          )}
  
          {isMobile ? (
            <div
              className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
              id="nav-menu"
            >
              {renderNavLinks()}
              <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                <IoClose />
              </div>
            </div>
          ) : (
            renderNavLinks()
          )}
        </nav>
      </header>
    );
  };

export default Navbar