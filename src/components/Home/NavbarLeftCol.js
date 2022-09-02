import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

function NavbarLeftCol() {
  return (
    <nav className='text-sm relative '>
      <div className='sticky top-0 -ml-0.5 pointer-events-none py-6 lg:py-10 bg-[#0c0f13]'>
        <button className='bg-[#58182d] realtive rounded-lg w-full py-1.5 px-3 flex items-center pointer-events-auto hover:bg-opacity-70'>
          <AiOutlineSearch className='w-4 h-4 mr-4' />
          Quick search...
        </button>
      </div>
      <ul className='text-[#fbdcc498]'>
        <h2 className='text-xl text-[#FBDCC4]'>Category :</h2>
        <li className='pl-2 mt-6 md:mt-10'>
          <div className='flex items-center mb-5'>
            <CgWebsite className='mr-4 w-6 h-6 text-[#FBC7F7]' />
            <h3 className='text-lg md:text-xl text-[#FBDCC4]'>Web development</h3>
          </div>
          <ul className='text-sm ml-2 space-y-3 border-l border-[#fbdcc47a]'>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Front-end web development</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Back-end web development</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Full-stack web development</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Web designer</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Web programmer</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Content developer</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Webmaster</a></li>
          </ul>
        </li>
        <li className='pl-2 mt-10'>
          <div className='flex items-center mb-5'>
            <CgWebsite className='mr-4 w-6 h-6 text-[#FBC7F7]' />
            <h3 className='text-xl text-[#FBDCC4]'>Web development</h3>
          </div>
          <ul className='text-sm ml-2 space-y-3 border-l border-[#fbdcc47a]'>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Front-end web development</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Back-end web development</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Full-stack web development</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Web designer</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Web programmer</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Content developer</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Webmaster</a></li>
          </ul>
        </li>
        <li className='pl-2 mt-10'>
          <div className='flex items-center mb-5'>
            <CgWebsite className='mr-4 w-6 h-6 text-[#FBC7F7]' />
            <h3 className='text-xl text-[#FBDCC4]'>Web development</h3>
          </div>
          <ul className='text-sm ml-2 space-y-3 border-l border-[#fbdcc47a]'>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Front-end web development</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Back-end web development</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Full-stack web development</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Web designer</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Web programmer</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Content developer</a></li>
            <li className='pl-4'><a className='border-l border-transparent hover:border-[#FBDCC4] hover:text-[#FBDCC4]' href="#">Webmaster</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarLeftCol