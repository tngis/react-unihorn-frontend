import { React, useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import NavbarLeftCol from './Home/NavbarLeftCol';


function NavAdd() {

  const [showLeftNav, setShowLeftNav] = useState(false);
  const toggleShowLeftNav = () => setShowLeftNav(!showLeftNav);

  return (
    <div className='md:hidden fixed bg-[#0b0e13] border-b border-[#6925416e] z-20 w-full backdrop-blue flex-none'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='py-2 mx-4 lg:mx-0 lg:px-8'>
          <div className='flex items-center'>
            <h1 onClick={toggleShowLeftNav} className='text-lg mr-2 cursor-pointer'>Category</h1>
            <AiFillCaretRight className='mr-2' />
            <h1 className='text-sm'>Front-end web development</h1>
          </div>
        </div>
      </div>
      {showLeftNav ? <div className='border-pink-800 bg-[#0b0e13] fixed w-60 z-40 inset-0  top-[6.9rem] md:top-[7.1rem] px-4 pb-10 overflow-y-auto'><NavbarLeftCol /></div> : null}
    </div>
  )
}

export default NavAdd
