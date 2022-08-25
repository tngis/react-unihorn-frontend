import React from 'react'
import Nav from '../components/Yourjobs/Nav'
import RightNav from '../components/Yourjobs/RightNav';
import JobList from '../components/Yourjobs/JobList';
import LancersList from '../components/Yourjobs/LancersList';

function YourJobs() {
  return (
    <div className='text-[#FBDCC4]'>
      <Nav />
      <div className='overflow-hidden'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8'>
          <div>
            <h1 className='text-4xl font-semibold py-8'>Your Jobs :</h1>
          </div>
          <div className='border-pink-800 fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] max-w-6xl w-full right-auto pb-10 px-8 flex'>
            <JobList />
            <LancersList />
          </div>
        </div>
        <RightNav />
      </div>
      <div className="fixed inset-0 -z-40 bg-[#0c0f13]"></div>
    </div>
  )
}

export default YourJobs