import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'

function Footer() {
  return (
    <div className='py-16 border-t border-[#392349] text-[#FBDCC4] bottom-0 absolute w-full'>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <h2 className='font-["Permanent_Marker"] text-2xl mb-4'>EVOLANCER</h2>
        </div>
        <div className='mb-8'>
          <p>
            © 2022 Unihorn Labs Inc. All rights reserved.
          </p>
        </div>
        <div className='flex '>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><AiFillFacebook className='w-8 h-8 mr-4 rounded-3xl' /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='w-8 h-8 mr-4' /></a>
          <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare className='w-8 h-8 rounded-3xl' /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer 