import { React, useState } from 'react'
import Navbar from '../components/Home/Navbar';
import Card from '../components/Card';
import { BsFillCameraFill } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom';
import RightNav from '../components/Yourjobs/RightNav';
import NavAdd from '../components/NavAdd';

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
      <div className='overflow-y-auto lg:overflow-hidden'>
        <div className='max-w-[1440px] mx-auto px-4 px:px-2 sm:px-6 md:px-8'>
          <div className='border-pink-800 lg:fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] 2xl:max-w-[1150px] xl:max-w-5xl max-w-7xl w-full right-auto pb-10 sm:px-8 lg:pr-0 flex flex-col lg:flex-row'>
            <div className='lg:sticky top-0 sm:-ml-0.5 bg-white/10 rounded-xl md:overflow-y-auto w-full lg:w-1/2 mr-10 mt-8 lg:mt-28 p-5 '>
              <div className='flex items-center'>
                <div className='relative md:h-40 md:w-40 sm:w-28 sm:h-28 w-20 h-20 bg-[url("./img/1.jpg")] bg-cover mr-3 sm:mr-6 rounded-md'>
                  <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='absolute -bottom-2 -right-2 bg-[#45484d] p-1 rounded-full hover:bg-[#55595e] cursor-pointer'>
                    <BsFillCameraFill className='md:w-6 md:h-6 w-4 h-4' />
                  </div>
                  {isHovering && <div className='text-xs absolute -bottom-8 -right-12 bg-white/20 p-1 rounded-md'>Edit Profile Picture</div>}
                </div>
                <h1 className='mt-10 sm:mt-16 md:mt-24 text-lg sm:text-2xl leading-6 font-semibold'>Tengis Boldbaatar</h1>
              </div>
            </div>
            <div className='lg:-ml-0.5 pb-3 sm:border-4 border-white/10 lg:overflow-y-auto w-full lg:w-1/2 mt-8 lg:mt-28 rounded-xl sm:p-8 mr-10'>
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
      <div className=" fixed inset-0 -z-40 bg-[#0c0f13]"></div>
    </div>
  )
}

export default Profile