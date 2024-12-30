import React from 'react'
import banner from "../assets/blog/banner.mp4"

const Blog = () => {
  return (
    <div>
      <section className='md:flex items-center justify-center py-4 px-6'>
        <h1 className='lg:w-[36rem] pb-20 text-3xl md:text-5xl lg:text-7xl lg:font-medium text-yellow-500 sm:flex justify-center items-center sm:text-start sm:tracking-tight '>
          Stories from the
          folks building for
          a billion Indians 
        </h1>
        <video className='md:w-[43%]' src={banner} loop muted autoPlay playsInline ></video>
      </section>
    </div>
  )
}

export default Blog