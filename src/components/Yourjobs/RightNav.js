import React from 'react'
import TopJobs from '../Home/TopJobs'
import TopLancers from '../Home/TopLancers'

function RightNav() {
  return (
    <div className='fixed -z-10 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] pb-10 px-8 overflow-y-auto hidden xl:block'>
      <div className='sticky top-0 -ml-0.5 pointer-events-none py-10 bg-[#0c0f13]'>
        {/* <select className='w-full relative pointer-events-auto bg-[#58182d] p-2 m-0'>
          <option value="">Last week</option>
          <option value="">Last month</option>
          <option value="">Last year</option>
          <option value="">All time</option>
        </select> */}
        <ul className='flex justify-around pointer-events-auto cursor-pointer underline-offset-2 uppercase font-semibold'>
          <li className='hover:text-[#913151] duration-150'><a href="#"></a>1w</li>
          <li className='hover:text-[#913151] duration-150'><a href="#"></a>1m</li>
          <li className='hover:text-[#913151] duration-150'><a href="#"></a>1y</li>
          <li className='hover:text-[#913151] duration-150'><a href="#"></a>All time</li>
        </ul>
      </div>
      <ul className='relative -z-50 space-y-4'>
        <li className=''>
          <h3 className='text-xl mb-5'>Top jobs :</h3>
          <TopJobs />
          <TopJobs />
          <TopJobs />
          <TopJobs />
          <TopJobs />
        </li>
        <li>
          <h3 className='text-xl mb-5'>Top lancers :</h3>
          <TopLancers />
          <TopLancers />
          <TopLancers />
          <TopLancers />
          <TopLancers />
        </li>

      </ul>
    </div>
  )
}

export default RightNav