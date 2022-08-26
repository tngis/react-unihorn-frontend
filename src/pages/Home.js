import React from 'react'
import Navbar from '../components/Home/Navbar'
import NavbarAdd from '../components/Home/NavbarAdd'
import NavbarLeftCol from '../components/Home/NavbarLeftCol'
import NavbarRightCol from '../components/Home/NavbarRightCol'
import Jobs from '../components/Home/Jobs'

function Home() {
  return (
    <div className=' text-[#FBDCC4]'>
      <NavbarAdd />
      <Navbar />
      <div className='overflow-hidden'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8'>
          <div className='border-pink-800 hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto'>
            <NavbarLeftCol />
          </div>
          <div className='lg:pl-[19.5rem]'>
            <div className='fixed py-8 lg:max-w-3xl mx-auto w-full z-40 bg-[#0c0f13]'>
              <h1 className='text-4xl font-semibold'>Jobs</h1>
            </div>
            <main className='pt-28 max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16'>
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
