import { Link } from 'react-router-dom';
import ProfileBtn from '../ProfileBtn';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'



function Navbar(props) {

  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => setShowMenu(!showMenu);

  const [showProfile, setShowProfile] = useState(false)
  const toggleShowProfile = () => setShowProfile(!showProfile)



  return (
    <div className='sticky bg-[#0b0e13] border-b border-[#6925416e] top-0 z-50 w-full backdrop-blue flex-none'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='py-4 mx-4 lg:mx-0 lg:px-8'>
          <div className='relative flex items-center justify-between'>
            <a className='mr-3 flex-none overflow-hidden text-2xl md:text-3xl font-["Permanent_Marker"]' href="/">EVOLANCER</a>
            {/* <input className='m-0 text-black hidden md:block border rounded-lg px-2 py-1.5 lg:w-[340px] xl:w-[550px]' type="text" placeholder='Search...' /> */}
            <div className='flex items-center'>
              <div><Link to="/your-job"><button className='hidden md:block mr-4 text-sm uppercase font-semibold hover:text-[#58182d]'>Your jobs</button></Link></div>
              <div><Link to="/create-job"><button className='hidden md:block mr-4 text-sm uppercase font-semibold  hover:text-[#58182d] duration-150'>Create job</button></Link></div>
              <ProfileBtn />

              {/* <AiOutlineSearch className='cursor-pointer text-2xl mr-5 md:hidden block w-6 h-6' /> */}

              <GiHamburgerMenu onClick={toggleShowMenu} className='w-6 h-6 cursor-pointer md:hidden mr-4' />
              <div onClick={toggleShowProfile} className='bg-[url("img/1.jpg")] w-8 h-8 rounded-full bg-cover md:hidden cursor-pointer relative'>
                {showProfile ? <div className='absolute z-50 w-36 top-14 right-0'>
                  <Link to='/profile'><div className='border-b border-[#303135] cursor-pointer bg-[#25272b] text-center py-2 rounded-t-md hover:bg-[#3c3f44]'>Profile</div></Link>
                  <div className='cursor-pointer bg-[#25272b] text-center py-2 rounded-b-md hover:bg-[#3c3f44]'>Log out</div>
                </div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMenu ? <div className='absolute z-40 w-full'>
        <div><Link to="/your-job"><button className='text-start bg-white/30 backdrop-blur-xl py-6 px-4 border-b border-gray-400 w-full text-sm uppercase font-semibold hover:text-[#58182d]'>Your jobs</button></Link></div>
        <div><Link to="/create-job"><button className='text-start bg-white/30 backdrop-blur-xl border-b border-gray-400 px-4 py-6 w-full text-sm uppercase font-semibold  hover:text-[#58182d] duration-150'>Create job</button></Link></div>
        <button className='text-[#FBDCC4] bg-white/30 backdrop-blur-xl border-b border-gray-400 text-sm text-start uppercase font-semibold px-4 py-6 w-full  hover:text-[#58182d] duration-150'>Connect Metamask</button>
      </div> : null}
    </div>
  )
}

export default Navbar