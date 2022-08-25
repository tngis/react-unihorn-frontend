import React from 'react'
import Lancers from './Lancers'

function LancersList() {
  return (
    <div className='sticky top-0 -ml-0.5 pb-3 bg-white/10 overflow-y-auto w-1/2 mt-28 rounded-xl p-8 mr-10'>
      <h1 className='text-2xl font-semibold mb-8'>Lancers :</h1>
      <Lancers />
      <Lancers />
      <Lancers />
      <Lancers />
      <Lancers />
      <Lancers />
      <Lancers />
      <Lancers />
      <Lancers />
    </div>
  )
}

export default LancersList