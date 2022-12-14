import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import BiddingModal from "./Bidding";

export default function Jobs() {
  return (
    <div>
      <motion.ul layout initial={{ borderRadius: 10 }}>
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.ul>
    </div >
  );
}

function Item(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li className="bg-white/10 mb-8 p-10 relative" layout initial={{ borderRadius: 10 }}>
      <motion.div layout onClick={toggleOpen} className='relative rounded-md cursor-pointer'>
        <div className="w-60 h-5 rounded-sm bg-[#fbdcc480] text-black mb-4">{props.title}</div>
        <div className="w-full h-2 rounded-sm bg-[#fbdcc480] mb-3"></div>
        <div className="w-full h-2 rounded-sm bg-[#fbdcc480] mb-3"></div>
        <div className="w-full h-2 rounded-sm bg-[#fbdcc480] mb-0"></div>
        <div className="flex justify-between">
          {/* {isOpen ? null : <button className='text-sm px-2 py-1 mt-10 border border-[#FBDCC4] bg-[#FBDCC4] text-gray-800 hover:bg-inherit hover:text-[#FBDCC4] rounded-lg uppercase'
            onClick={toggleOpen}>
            Detail
          </button>} */}
        </div>

      </motion.div>
      <AnimatePresence>{isOpen && <Content isOpen={isOpen} setIsOpen={setIsOpen} toggleOpen={toggleOpen} />}</AnimatePresence>
    </motion.li>
  );
}

function Content({ isOpen, toggleOpen }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <motion.div
        layout
        delay={1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.1,
          repeatDelay: 0,
        }}
      >
        <div className="mt-3 h-2 w-full rounded-sm bg-[#fbdcc480]"></div>
        <div className="mt-3 h-2 w-full rounded-sm bg-[#fbdcc480]"></div>
        <div className="mt-3 mb-10 h-2 w-full rounded-sm bg-[#fbdcc480]"></div>
        <div className="flex justify-between">
          <div className="w-2 h-2"></div>
          <div>
            {isOpen ? <button className='font-semibold mr-4 text-sm px-2 py-1 border border-[#FBDCC4] bg-[#FBDCC4] text-gray-800 hover:bg-inherit hover:text-[#FBDCC4] rounded-lg uppercase'
              onClick={toggleOpen}>
              Close
            </button> : <div></div>}
            <button className='font-semibold text-sm px-5 uppercase py-1 border border-[#FBDCC4] bg-[#FBDCC4] text-gray-800 hover:bg-inherit hover:text-[#FBDCC4] rounded-lg'
              onClick={() => setShowModal(true)}>Bid</button>
          </div>
        </div>
      </motion.div >

      <BiddingModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

const items = [0, 1, 2, 3, 4, 5];