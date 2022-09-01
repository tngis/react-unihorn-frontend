import { React, useState } from 'react'
import Navbar from '../components/Home/Navbar';
import Card from '../components/Card';
import Lancers from '../components/Yourjobs/Lancers';
import { BsFillCameraFill } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom';
import RightNav from '../components/Yourjobs/RightNav';

function Profile() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='text-[#FBDCC4]'>
      <Navbar />
      <div className='overflow-hidden'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8'>
          <div className='border-pink-800 fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] max-w-6xl w-full right-auto pb-10 px-8 flex'>
            <div className='sticky top-0 -ml-0.5 pb-10 bg-white/10 rounded-xl overflow-y-auto w-1/2 mr-10 mt-28 p-5 '>
              <div className='flex items-center'>
                <div className='relative h-40 w-40 bg-[url("./img/1.jpg")] bg-cover mr-6 rounded-md'>
                  <div className='absolute -bottom-2 -right-2 bg-[#45484d] p-1 rounded-full hover:bg-[#55595e] cursor-pointer'>
                    <BsFillCameraFill onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='w-6 h-6' />
                  </div>
                  {isHovering && <div className='text-xs absolute -bottom-8 -right-12 bg-white/20 p-1 rounded-md'>Edit Profile Picture</div>}
                </div>
                <h1 className='mt-24 text-2xl font-semibold'>Tengis Boldbaatar</h1>
              </div>
            </div>
            <div className='sticky top-0 -ml-0.5 pb-3 bg-white/10 overflow-y-auto w-1/2 mt-28 rounded-xl p-8 mr-10'>
              <h1 className='text-2xl font-semibold mb-8'>Jobs :</h1>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <RightNav />
      </div>
      <div className="fixed inset-0 -z-40 bg-[#0c0f13]"></div>
    </div>
  )
}

export default Profile