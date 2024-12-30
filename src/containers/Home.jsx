import React from 'react'
import banner from "../assets/home/banner.mp4"

const Home = () => {
  return (
    <div>
      <section>
        <p className="text-4xl lg:text-5xl lg:font-semibold px-5 md:px-0 text-center pb-10 pt-5 ">Building for a billion Indians</p>
        <video width="64%" className='hidden lg:block mx-auto' src={banner} loop muted autoPlay playsInline></video>
        <video width="100%" className='lg:hidden mx-auto py-10 md:py-5' src={banner} loop muted autoPlay playsInline></video>
      </section>
    </div>
  )
}

export default Home