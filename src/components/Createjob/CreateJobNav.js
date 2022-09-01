import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ProfileBtn from '../ProfileBtn';



function CreateJobNav() {



  return (
    <div className='sticky bg-[#0b0e13] border-b border-[#6925416e] top-0 z-50 w-full backdrop-blue flex-none'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='py-4 mx-4 lg:mx-0 lg:px-8'>
          <div className='relative flex items-center justify-between'>
            <a className='mr-3 flex-none overflow-hidden text-3xl font-["Permanent_Marker"]' href="/">EVOLANCER</a>
            {/* <input className='m-0 text-black hidden md:block border rounded-lg px-2 py-1.5 lg:w-[340px] xl:w-[550px]' type="text" placeholder='Search...' /> */}
            <div className='flex items-center'>
              <AiOutlineSearch className='cursor-pointer text-2xl mr-5 md:hidden block w-6 h-6' />
              <div><Link to="/your-job"><button className=' mr-4 text-sm uppercase font-semibold hover:text-[#58182d]'>Your jobs</button></Link></div>
              <div><Link to="/home"><button className='mr-4 text-sm uppercase font-semibold  hover:text-[#58182d] duration-150'>Home</button></Link></div>
              <ProfileBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateJobNav