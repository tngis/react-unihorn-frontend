import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProfileBtn() {

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true)
  // });


  // const handleClickOutside = (e) => {
  //   if (!refOne.current.contains(e.target)) {
  //     setShowProfile(false)
  //   }
  // }

  const [showProfile, setShowProfile] = useState(false);
  const toggleShowProfile = () => setShowProfile(!showProfile);

  // const refOne = useRef(null)

  return (
    <div className='relative hidden md:block'>
      <button onClick={toggleShowProfile} className='text-[#FBDCC4] bg-[#58182d] text-sm uppercase font-semibold py-2 px-3 rounded-xl hover:shadow-[0_5px_0_0_rgba(0,0,0,0.3)] hover:bg-pink-800 hover:text-[#FBDCC4] duration-150'>Connect Metamask</button>
      {showProfile ? <div className='absolute w-full mt-1'>
        <Link to='/profile'><div className='border-b border-[#303135] cursor-pointer bg-[#25272b] text-center py-2 rounded-t-md hover:bg-[#3c3f44]'>Profile</div></Link>
        <div className='cursor-pointer bg-[#25272b] text-center py-2 rounded-b-md hover:bg-[#3c3f44]'>Log out</div>
      </div> : null}
    </div>
  )
}

export default ProfileBtn