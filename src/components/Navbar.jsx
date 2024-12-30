import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import meeshoLogo from '../assets/meesho-logo.png';
import paths from "../constants/Routes";

const Navbar = () => {
  const [menu, toggleMenu] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className='justify-between py-[20px] px-[48px] hidden lg:flex'>
        <img src={meeshoLogo} alt="logo" className='h-[4.5rem]' />
        <div className='w-7/12 justify-between items-center font-semibold flex text-white'>
          {paths.map((path, index) => (
            <NavLink
              key={path.id}
              to={path.path}
              className={({ isActive }, index) =>
                `${isActive ? "text-green-500" : "text-white"} ${
                  index === paths.length - 1 ? "bg-yellow-500 py-2 px-6 text-[#580A46] uppercase rounded-full tracking-widest font-normal" : ""
                }`
              }
            >
              {path.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      {!menu && (
        <div className='lg:hidden px-[1.5rem] py-1 flex justify-between items-center'>
          <MdOutlineMenu
            size={25}
            className='cursor-pointer'
            onClick={() => toggleMenu(true)}
          />
          <img src={meeshoLogo} alt="logo" className='h-[4.5rem]' />
          <NavLink to='/jobs' className="bg-yellow-500 py-2 px-6 text-[#580A46] uppercase rounded-full tracking-widest font-normal">Join Us</NavLink>
        </div>
      )}

      {/* Fullscreen Mobile Menu */}
      {menu && (
        <div className='fixed inset-0 bg-black text-white flex flex-col p-6 z-50'>
          <RxCross2
            size={25}
            className='cursor-pointer'
            onClick={() => toggleMenu(false)}
          />
          <div className='flex flex-col items-start pt-20 p-2 text-2xl gap-8'>
            {paths.slice(0, -1).map((path) => (
              <NavLink
                key={path.id}
                to={path.path}
                onClick={() => toggleMenu(false)}
                className={({ isActive }) =>
                  isActive ? "text-green-500" : "text-white"
                }
              >
                {path.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
