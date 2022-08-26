import { React, useState, useEffect } from 'react'

function ScrollUp() {

  console.log('hhhhhha')
  const [showGoTop, setShowGoTop] = useState(false)

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50)
  }


  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton)
  }, [])

  return (
    <div className='absolute bottom-10 right-16'>
      {showGoTop ? null : <button onClick={handleScrollUp}>sdaa</button>}
    </div>
  )

}

export default ScrollUp
