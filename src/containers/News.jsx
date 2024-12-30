import React from 'react'
import banner from "../assets/news/news-banner.mp4"
const News = () => {
  return (
    <div>
      <section className='md:flex items-center justify-center py-4 px-6'>
        <div>
          <h1>
            Latest updates &
            developments from
            Meesho's newsroom
        </h1>
        </div>
        <video className='md:w-[35%]' src={banner} loop muted autoPlay playsInline ></video>
      </section>
    </div>
  )
}

export default News