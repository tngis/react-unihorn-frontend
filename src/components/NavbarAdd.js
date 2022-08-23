import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCaretRight } from 'react-icons/ai'

function NavbarAdd() {
  return (
    <div className='lg:hidden px-10 fixed w-full pt-20 border-b bg-white'>
      <div className='flex items-center py-2'>
        <GiHamburgerMenu className='mr-5 cursor-pointer' />
        <p className='mr-2'>Catagory </p>
        <AiFillCaretRight className='mr-2' />
        <p>hha</p>
      </div>
    </div>
  )
}

export default NavbarAdd
