import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import LancerProfileModal from './LancerProfileModal';


function Lancers() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <div className='p-4 items-center w-full rounded-lg backdrop-blur-sm bg-white/10 mb-5'>
        <div className='flex items-center justify-between '>
          <div className='flex'>
            <div>
              <FaUserCircle className='w-10 h-10 mr-4' />
            </div>
            <div>
              <div className='h-3 bg-[#FBDCC4] rounded-sm w-16 mb-2'></div>
              <div className='text-sm text-[#fbdcc498]'><p>bidding value : 0.1ETH</p></div>
            </div>
          </div>
          <div>
            <button className='text-sm px-2 py-1 border border-[#FBDCC4] bg-[#FBDCC4] text-gray-800 hover:bg-inherit hover:text-[#FBDCC4] rounded-lg'
              onClick={() => setShowModal(true)}>Check CV</button>
          </div>
        </div>
      </div>
      <LancerProfileModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default Lancers