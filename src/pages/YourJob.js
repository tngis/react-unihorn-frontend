import React from 'react'
import Nav from '../components/Yourjob/Nav'
import { useNavigate } from 'react-router-dom';

function YourJob() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home', { replace: true });
  };
  return (
    <div>
      <Nav />
    </div>
  )
}

export default YourJob