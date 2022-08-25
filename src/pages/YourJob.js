import React from 'react'
import Nav from '../components/Yourjob/Nav'
import Card from '../components/Card';
import TopJobs from '../components/Home/TopJobs';
import TopLancers from '../components/Home/TopLancers';
import { useNavigate } from 'react-router-dom';

function YourJob() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home', { replace: true });
  };
  return (
    <div className='text-[#FBDCC4]'>
      <Nav />

      <div className='overflow-hidden'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8'>
          <nav className='lg:text-sm lg:leading-6 relative '>
            <div className='border-pink-800 fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] max-w-6xl w-full right-auto pb-10 px-8  flex'>
              <div className='sticky top-0 -ml-0.5 pb-10 bg-[#0c0f13] overflow-y-auto w-1/2 mr-10'>
                <div className='fixed py-8 z-50 max-w-3xl mx-auto w-full bg-[#0c0f13]'>
                  <h1 className='text-4xl font-semibold'>Your Jobs :</h1>
                </div>
                <div className='mt-28'>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
              <div className='sticky top-0 -ml-0.5 pb-10 bg-white/10 overflow-y-auto w-1/2 mt-28 rounded-xl p-8'>
                <h1 className='text-2xl font-semibold mb-8'>Lancers :</h1>
                <TopLancers />
                <TopLancers />
                <TopLancers />
                <TopLancers />
                <TopLancers />
                <TopLancers />
                <TopLancers />
                <TopLancers />
                <TopLancers />
                <TopLancers />
                <TopLancers />
                <TopLancers />
              </div>
            </div>

          </nav>
        </div>
        <div className='fixed z-40 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] pb-10 px-8 overflow-y-auto hidden xl:block'>
          <div className='sticky top-0 -ml-0.5 pointer-events-none py-10 bg-[#0c0f13]'>
            <select className='w-full relative pointer-events-auto bg-[#58182d] p-2 m-0'>
              <option value="">Last week</option>
              <option value="">Last month</option>
              <option value="">Last year</option>
              <option value="">All time</option>
            </select>
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
      </div>
      <div className="fixed inset-0 -z-40 bg-[#0c0f13]"></div>
    </div>
  )
}

export default YourJob