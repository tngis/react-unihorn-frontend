import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';



function Navbar() {



  return (
    <div className='flex items-center justify-between h-20 bg-[#88304E] z-40 fixed w-full px-10 shadow-[3px_10px_20px_4px_rgba(0,0,0,0.3)] text-white'>
      <div>
        <Link to='/'><h1 className='text-3xl font-bold cursor-pointer mr-5'>UNIHORN.</h1></Link>
      </div>
      <div>
        <input className=' text-black hidden md:block border rounded-lg px-2 py-1.5 lg:w-[340px] xl:w-[550px] mt-5' type="text" placeholder='Search...' />
      </div>
      <div className='flex items-center'>
        <AiOutlineSearch className='cursor-pointer text-2xl mr-5 md:hidden block mt-3 w-6 h-6' />
        <div><Link to="/your-job"><button className=' mr-4'>Your jobs</button></Link></div>
        <div><Link to="/create-job"><button className='mr-4  py-2 px-3 rounded-xl hover:shadow-[0_5px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 duration-300'>Create job</button></Link></div>
        <button className='text-[#88304E] bg-[white] py-2 px-3 rounded-xl hover:shadow-[0_5px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 duration-300'>Connect Metamask</button>
      </div>
    </div>
  )
}

export default Navbar