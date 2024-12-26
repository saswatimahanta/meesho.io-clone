import React from 'react'
import Home from '../containers/Home'
import Tech from '../containers/Tech'
import Blog from '../containers/Blog'
import News from '../containers/News'
import Jobs from '../containers/Jobs'
import Life from '../containers/Life'
import meeshoLogo from '../assets/meesho-logo.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-[20px] px-[48px]'>
        <img src={meeshoLogo} alt="logo" className='h-[4.5rem]'/>
        <div className='flex w-7/12 justify-between items-center font-semibold'>
            <Home/>
            <Tech/>
            <Life/>
            <Blog/>
            <News/>
            <Jobs/>
        </div>
    </nav>
  )
}

export default Navbar