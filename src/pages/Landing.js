import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiUnicorn } from 'react-icons/gi'
import { BsFillTriangleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Footer from '../components/Landing/Footer'

function Landing() {

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const blockVariants = {
    initial: {
      y: -50,
    },
    target: {
      y: -20,
    },
  }


  return (

    <div className='snap-mandatory snap-y h-screen overflow-scroll'>
      <div className='flex flex-col justify-center snap-center h-screen bg-gradient-to-t from-[#311D3F] to-[#b43550]'>
        <div className='flex justify-center flex-col mt-60'>
          <div className='flex flex-col justify-center items-center pb-20'>
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
          className='flex items-center flex-col text-[#FBDCC4] mt-40'
          onClick={handleClick}>
          <div className='cursor-pointer uppercase font-semibold'>
            <h1 className='text-lg'>dive deeper</h1>
          </div>
          <BsFillTriangleFill className='cursor-pointer w-20 h-20 relative rotate-180' />

        </motion.div >

      </div>
      <div className='relative bg-gradient-to-b from-[#311D3F] to-[#170e1f]'>
        <div ref={ref} className=' snap-center w-screen h-screen pt-20'>
          <div className=''>
            <h1 className='uppercase text-5xl font-semibold text-center italic text-[#FBDCC4]'>Road map</h1>
          </div>
        </div>
        <div className='snap-center w-screen h-screen'>

        </div>
        <div className='snap-center w-screen h-screen'>
          <Footer />
        </div>
      </div>
      <div>

      </div>
    </div >

  )
}

export default Landing  