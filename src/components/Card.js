import React from 'react';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div>
      <div className='relative backdrop-blur-sm bg-white/10  mb-5 rounded-md p-4 h-48 duration-150'>
        <Link to='jobs'><button className='absolute right-5 bottom-5 text-md font-semibold bg-[#FBDCC4] text-[#222831] py-1 px-4 rounded-lg hover:bg-[#58182d] hover:text-[#FBDCC4]'>DETAIL</button></Link>
      </div>
    </div>
  )
}

export default Card