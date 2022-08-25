import React from 'react'
import Card from '../Card'

function Jobs() {
  return (
    <div className='lg:pl-[19.5rem]'>
      <div className='fixed py-8 max-w-3xl mx-auto w-full z-40 bg-[#0c0f13]'>
        <h1 className='text-4xl font-semibold'>Jobs</h1>
      </div>
      <main className='pt-28 max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16'>
        <div className=''>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>

    </div>
  )
}

export default Jobs