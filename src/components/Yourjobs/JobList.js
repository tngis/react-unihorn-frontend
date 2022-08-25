import React from 'react'
import Card from '../Card'

function JobList() {
  return (
    <div className='sticky top-0 -ml-0.5 pb-10 bg-[#0c0f13] overflow-y-auto w-1/2 mr-10 mt-28 px-2'>
      <div className=''>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default JobList
