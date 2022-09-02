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
            <div className='flex items-center xl:mb-10 md:mb-8 mb-6 text-[#FBDCC4]'>
              <GiUnicorn className='xl:w-20 lg:w-16 md:w-12 xl:h-20 lg:h-16 md:h-12 w-10 h-10 rounded-xl mr-2' />
              <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-6 font-["Permanent_Marker"]'>Unihorn</h2>
            </div>
            <div>
              <h1 className='text-[#FBDCC4] text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:mb-20 md:mb-16 mb-10 font-["Permanent_Marker"]'>EVOLANCER</h1>
            </div>
            <div >
              <button className='font-semibold rounded-md p-1 md:p-2 lg:p-3 xl:p-4 xl:mr-4 lg:mr-3 mr-2 border-2 border-[#c73953] text-[#FBDCC4] bg-[#c73953] hover:bg-opacity-70'>CONNECT METAMASK</button>
              <Link to='/Home'><button className='font-semibold p-1 md:p-2 rounded-md lg:p-3 xl:p-4 xl:ml-4 lg:ml-4 ml-2 border-2 border-[#FBDCC4] text-[#FBDCC4] hover:backdrop-blur hover:bg-white/10'>ENTER</button></Link>
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
            <h1 className='xl:text-lg lg:text-sm md:text-xs text-xs'>dive deeper</h1>
          </div>
          <BsFillTriangleFill className='cursor-pointer xl:w-20 lg:w-16 md:w-12 w-10 xl:h-20 lg:h-16 md:h-12 h-10 relative rotate-180' />

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