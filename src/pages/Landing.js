import React from 'react'
import { Link } from 'react-router-dom'
import { GiUnicorn } from 'react-icons/gi'
import { BsFillTriangleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

function Landing() {
  const blockVariants = {
    initial: {
      y: -50,
    },
    target: {
      y: -20,
    },
  }


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
      <motion.div
        variants={blockVariants}
        initial="initial"
        animate="target"
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0,
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 0,
        }}
        className='flex items-center flex-col absolute inset-x-0 bottom-0 text-[#FBDCC4]'>
        <div className='cursor-pointer uppercase font-semibold'>
          <h1 className='text-lg'>dive deeper</h1>
        </div>
        <BsFillTriangleFill className='cursor-pointer w-20 h-20 relative rotate-180' />

      </motion.div >
    </div >

  )
}

export default Landing