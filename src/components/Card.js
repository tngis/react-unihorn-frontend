import React from 'react';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <Link to='jobs'>
      <div>
        <div className='bg-white border rounded-md p-4 pb-32 cursor-pointer shadow-lg hover:-translate-y-1 duration-300'>
          <h1>Title</h1>
          <p>Discription</p>
          <p>Payment</p>
          <p>Max</p>
        </div>
      </div>
    </Link>
  )
}

export default Card