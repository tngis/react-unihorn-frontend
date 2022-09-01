import { React, useEffect, useRef } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function BiddingModal({ showModal, setShowModal, props }) {

  return (
    <div>{showModal ? (
      <>
        <div

          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className='max-w-[450px] w-full relative '>
            <div className='bg-white/30 backdrop-blur-2xl w-full rounded-xl flex flex-col'>
              <h1 className='text-center text-4xl font-semibold my-10 text-[#25272b]'>BID</h1>
              <form className='flex flex-col'>
                <label className='text-[#25272b] mb-3'>Bidding value</label>
                <input className='border border-[#25272b79] p-2 rounded-md mb-5 bg-black/5 placeholder-[#25272b79] text-md ' type="text" placeholder='Set your bidding value' />
                <label className='text-[#25272b] mb-3'>Message</label>
                <textarea className='border border-[#25272b79] rounded-md mb-5 p-2 bg-black/5 placeholder-[#25272b79]' name="message" placeholder='Type your message' cols="50" rows="5"></textarea>
              </form>
              {/* <div className='grid grid-cols-2 px-10 mt-16 mb-10'>
                <button
                  className='font-semibold mr-4 text-sm px-2 py-2 border border-[#25272b] text-[#25272b] hover:bg-inherit hover:text-[#FBDCC4] rounded-lg uppercase'
                  onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button
                  className='font-semibold text-sm px-5 uppercase py-2 border border-white/80 bg-[#25272b] text-white/80 hover:bg-inherit hover:text-[#FBDCC4] rounded-lg'
                  onClick={() => setShowModal(false)}>
                  Bid
                </button>
              </div> */}
              <div className='w-full rounded-b-xl border-t mt-10 border-[#25272b79] text-[#25272b]'>
                <div className='grid grid-cols-2'>
                  <button className='uppercase py-4 rounded-b-xl rounded-r-none hover:bg-white/20 border-r border-[#25272b79]'>cancel</button>
                  <button className='uppercase py-4 rounded-b-xl rounded-l-none hover:bg-white/20'>bid</button>
                </div>
              </div>
            </div>
            <div className='text-[#25272b] absolute top-3 right-3'>
              <AiOutlineCloseCircle className='w-5 h-5 cursor-pointer' onClick={() => setShowModal(false)} />
            </div>
          </div>

        </div>
        <div className="backdrop-blur fixed inset-0 z-40 bg-black/20"></div>
      </>
    ) : null}</div>
  )
}

export default BiddingModal