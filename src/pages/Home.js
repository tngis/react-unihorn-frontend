import React from 'react'
import Navbar from '../components/Home/Navbar'
import NavbarAdd from '../components/Home/NavbarAdd'
import NavbarLeftCol from '../components/Home/NavbarLeftCol'
import NavbarRightCol from '../components/Home/NavbarRightCol'
import Jobs from '../components/Home/Jobs'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

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
          <Jobs />
          <NavbarRightCol />
        </div>
      </div >
      <div className="fixed inset-0 -z-40 bg-[#0c0f13]"></div>
    </div >

  )
}

export default Home
