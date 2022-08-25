import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'

function TopJobs() {
  return (
    <div className='p-4 relative items-center w-full rounded-lg backdrop-blur-sm bg-white/10 mb-5'>
      <div className='flex items-center '>
        <div>
          <AiFillDollarCircle className='w-8 h-8 mr-4' />
        </div>
        <div>
          <div className='h-3 bg-[#FBDCC4] rounded-sm w-16 mb-2'></div>
          <div className='h-1 bg-[#FBDCC4] rounded-sm w-40 mb-2'></div>
          <div className='h-1 bg-[#FBDCC4] rounded-sm w-40'></div>
        </div>
      </div>
    </div>
  )
}

export default TopJobs