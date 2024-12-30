import React from 'react'
import banner from "../assets/tech/techBanner.mp4"

const Tech = () => {
  return (
    <div>
      <section className='relative lg:grid lg:grid-cols-8 h-full lg:h-screen'>
        <div></div>
        <div className='col-span-3 flex flex-col justify-center px-8 lg:px-0'>
          <div className='mt-14 text-4xl lg:text-7xl'>
            <div>
              <div className='inline-flex w-full h-16 font-semibold align-middle relative'>
              </div>
              <div className='inline-block align-middle w-full text-yellow-500'>for Bharat</div>
            </div>
          </div>
        </div>
        <div className='col-span-4 flex ml-5 lg:ml-0'>
          <video src={banner} loop muted autoPlay playsInline className='mt-10'></video>
        </div>
      </section>
    </div>
  )
}

export default Tech