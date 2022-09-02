import React from 'react'
import Navbar from '../components/Home/Navbar'
import NavbarLeftCol from '../components/Home/NavbarLeftCol'
import NavbarRightCol from '../components/Home/NavbarRightCol'
import Jobs from '../components/Home/Jobs'
import NavAdd from '../components/NavAdd'

function Home() {
  return (
    <div className=' text-[#FBDCC4]'>
      <Navbar />
      <NavAdd />
      <div className='overflow-hidden'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8'>
          <div className='border-pink-800 hidden md:block fixed z-40 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto px-4 lg:w-[19.5rem] pb-10 lg:px-8 overflow-y-auto'>
            <NavbarLeftCol />
          </div>
          <div className='md:pl-[15rem] lg:pl-[19.5rem]'>
            <div className='mt-[2.8rem] md:mt-0 fixed py-6 lg:max-w-[760px] mx-auto w-full z-10 md:z-20 bg-[#0c0f13]'>
              <h1 className='text-4xl text-start font-semibold'>Jobs</h1>
            </div>
            <main className='pt-36 md:pt-24 max-w-3xl mx-auto xl:max-w-none lg:ml-0 xl:mr-[15.5rem] xl:pr-16'>
              <Jobs />
            </main>
          </div>
          <NavbarRightCol />
        </div>
      </div >

      <div className="fixed inset-0 -z-40 bg-[#0c0f13]"></div>
    </div >

  )
}

export default Home
