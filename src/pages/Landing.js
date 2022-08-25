import React from 'react'
import { Link } from 'react-router-dom'
import { GiUnicorn } from 'react-icons/gi'

function Landing() {


  return (
    <div>
      <div className='fixed pb-10 inset-0 -z-50 bg-gradient-to-t from-[#311D3F] to-[#b43550]'>
        <div className='flex inset-0 fixed flex-col justify-center items-center pb-20'>
          <div className='flex items-center mb-10 text-[#FBDCC4]'>
            <GiUnicorn className='w-20 h-20 rounded-xl mr-2' />
            <h2 className='text-5xl mt-6 font-["Permanent_Marker"]'>Unihorn</h2>
          </div>
          <div>
            <h1 className='text-[#FBDCC4] text-8xl mb-20 font-["Permanent_Marker"]'>EVOLANCER</h1>
          </div>
          <div >
            <button className='font-semibold rounded-md p-4 mr-4 border-2 border-[#c73953] text-[#FBDCC4] bg-[#c73953] hover:bg-opacity-70'>CONNECT METAMASK</button>
            <Link to='/Home'><button className='font-semibold rounded-md p-4 ml-4 border-2 border-[#FBDCC4] text-[#FBDCC4] hover:backdrop-blur hover:bg-white/10'>ENTER</button></Link>
          </div>
        </div >

      </div>
      <footer className='fixed bottom-0 z-50 h-20 w-full'>
        <div></div>
      </footer>
    </div>
  )
}

export default Landing