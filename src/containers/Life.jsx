import React from 'react'
import banner from "../assets/life/banner-video.mp4"

const Life = () => {
  return (
    <div>
      <section className='relative max-w-7xl mx-auto h-full lg:h-screen hidden lg:block'>
        <div className='w-full overflow-hidden'>
          <video width="100%" src={banner} autoPlay loop muted playsInline></video>
          <div className='px-8 sm:px-8 lg:px-8'>
            <div className='flex h-full justify-center absolute top-0 flex-col w-2/4 items-start text-start'>
              <h1 className='text-5xl font-medium text-yellow-500'>Help us reimagine <br /> commerce for Bharat</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Life