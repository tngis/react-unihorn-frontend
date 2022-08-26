import { React, useEffect, useState } from 'react'
import { BsFillTriangleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

function ScrollTop() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    console.log(showTopBtn)
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
      console.log('sda')
    });
  }, []);
  return (
    <div className='absolute bottom-10 right-16'>
      {showTopBtn ? <motion.div
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
        onClick={goToTop}
        className='flex items-center flex-col text-[#FBDCC4]'>
        <div className='cursor-pointer uppercase font-semibold'>
          <h1 className='text-lg'></h1>
        </div>
        <BsFillTriangleFill className='cursor-pointer w-16 h-16 relative' />

      </motion.div > : null}
    </div>
  )
}

export default ScrollTop