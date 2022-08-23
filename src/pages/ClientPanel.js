import React from 'react'
import { useNavigate } from 'react-router-dom';

function ClientPanel() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home', { replace: true });
  };
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default ClientPanel
