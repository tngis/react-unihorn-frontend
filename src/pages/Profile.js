import React from 'react'
import Navbar from '../components/Home/Navbar';

import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  return (
    <div className='text-[#FBDCC4]'>
      <Navbar />
    </div>
  )
}

export default Profile