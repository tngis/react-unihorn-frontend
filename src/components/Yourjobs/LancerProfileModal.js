import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function LancerProfileModal({ showModal, setShowModal }) {
  return (
    <div>{showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className='max-w-4xl w-full relative'>
            <div className='bg-white/40 backdrop-blur w-full h-[600px] rounded-xl'>

            </div>
            <div className='absolute top-3 right-3'>
              <AiOutlineCloseCircle className='w-7 h-7 cursor-pointer' onClick={() => setShowModal(false)} />
            </div>
          </div>

        </div>
        <div className="backdrop-blur fixed inset-0 z-40 bg-black/20"></div>
      </>
    ) : null}</div>
  )
}

export default LancerProfileModal