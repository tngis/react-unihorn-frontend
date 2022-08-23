import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

function Landing() {


  return (
    <div className='fixed inset-0 flex justify-center items-center -z-50 bg-gradient-to-t from-[#311D3F] to-[#E23E57]'>
      <div className='absolute left-5 top-5 text-white font-semibold'>
        <h1 className='text-3xl'>UNIHORN.</h1>
      </div>
      <Link to='home'><motion.div
      ><div >
          <h1 className='backdrop-blue-sm bg-black/30 text-white cursor-pointer w-96 py-5 text-center font-semibold text-5xl rounded-xl'>Get started</h1>
        </div></motion.div>
      </Link>
    </div >
  )
}

export default Landing