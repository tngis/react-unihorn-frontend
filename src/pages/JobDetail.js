import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function JobDetail() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home', { replace: true });
  };
  return (
    <div className=''>
      <div className='pr-20 pl-20 lg:pl-80 pt-44'>
        <div className='bg-white flex flex-col p-10 rounded-lg w-96 shadow-lg'>
          <div className='mb-5'>
            <div>
              <div className='bg-white border rounded-md p-4 pb-32 '>
                <h1>Title</h1>
                <p>Discription</p>
                <p>Payment</p>
                <p>Max</p>
              </div>
            </div>
          </div>
          <form className='flex flex-col'>
            <label className=' mb-3'>Bidding value</label>
            <input className='border p-2 rounded-md mb-5' type="text" placeholder='Set your bidding value' />
            <label className='mb-3'>Message</label>
            <textarea className='border rounded-md mb-5 p-2' name="message" cols="50" rows="5"></textarea>
          </form>
          <div className='grid grid-cols-2 gap-5'>
            <button onClick={handleClick} className='py-2 rounded-lg w-full border'>Cancel</button>
            <Link to='home'><button className='py-2 rounded-lg w-full border'>Bid</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail