import React from 'react'
import Navbar from '../components/Navbar'
import NavbarAdd from '../components/NavbarAdd'
import NavbarCol from '../components/NavbarCol'
import Jobs from '../components/Jobs'

function Home() {
  return (
    <div className='bg-gray-200'>
      <Navbar />
      <NavbarAdd />
      <NavbarCol />
      <Jobs />
    </div>
  )
}

export default Home