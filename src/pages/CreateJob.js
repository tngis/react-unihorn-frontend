import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateJob() {
  const [lancer, setLancer] = useState('1');
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [payment, setPayment] = useState(0)
  const [category, setCategory] = useState('Mario')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, description, payment, category, lancer }
    console.log(blog)
  }
  const handleClick = () => {
    navigate('/home', { replace: true });
  };



  return (

    <div className='justtify-center items-center flex fixed inset-0 bg-[#FBDCC4] md:px-10'>
      <div className='relative w-auto mx-auto max-w-8xl sm:shadow-2xl rounded-xl'>
        <div className='flex justify-center'>
          <div className='bg-cover rounded-xl text-white'>
            <form
              onSubmit={handleSubmit}
              className='bg-[#0c0f13] backdrop-blur-sm  border-0 sm:rounded-r-xl sm:rounded-l-xl lg:rounded-r-none relative flex flex-col w-full  outline-none focus:outline-none sm:px-8 lg:px-10  pt-16'
            >
              <h1 className='text-center text-4xl mb-10'>Create Job</h1>
              <label>Title:</label>
              <input
                className='placeholder-[#58182d6e] backdrop-blur-sm bg-white/50'
                type="text"
                placeholder='Enter title...'
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
                required
              />
              <label>Description:</label>
              <textarea
                className='placeholder-[#58182d6e] backdrop-blur-sm bg-white/50'
                placeholder='Enter description...'
                name="description"
                id="description"
                cols="lg:50"
                rows="4"
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
                required
              >
              </textarea>
              <div className='grid grid-cols-2'>
                <label>Payment:</label>
                <input
                  className='placeholder-[#58182d6e] mb-3 text-sm backdrop-blur-sm bg-white/50'
                  placeholder='Set payment'
                  type=""
                  onChange={(e) => { setPayment(e.target.value) }}
                  value={payment}
                  required />

                <label>Choose catagory:</label>
                <select
                  className='backdrop-blur-sm bg-white/50 '
                  name="catagory"
                  id="catagory"
                  size='1'
                  value={category}
                  onChange={(e) => { setCategory(e.target.value) }}
                >
                  <option value="Mario">Mario</option>
                  <option value="Yoshi">Yoshi</option>
                  <option value="Luigi">Luigi</option>
                  <option value="Wario">Wario</option>
                </select>
                <label>Max lancer:</label>
                <input
                  className='backdrop-blur-sm bg-white/50 text-sm p-2 rounded-md '
                  type="number"
                  min='1'
                  value={lancer}
                  onChange={e => setLancer(e.target.value)}
                />
              </div>
              <div className='grid grid-cols-2 gap-5 px-10 pt-10 pb-16'>
                <button onClick={handleClick} className='w-full border border-[#58182d] uppercase font-semibold hover:opacity-60 rounded-md py-2'>Cancel</button>
                {/* <button className=' w-full uppercase font-semibold bg-[#58182d] text-[#FBDCC4] rounded-md py-2 hover:opacity-80' type="button"
                  onClick={() => setShowModal(true)}>Create</button> */}
                <button className=' w-full uppercase font-semibold bg-[#58182d] text-[#FBDCC4] rounded-md py-2 hover:opacity-80' type="submit"
                >Create</button>
              </div>

            </form>
          </div>
          <div className=' bg-no-repeat bg-center bg-cover lg:w-[250px] xl:w-[450px] 2xl:[550px] rounded-r-xl'>
          </div>
        </div>
      </div>
     {/* {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
 
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#FBDCC4] outline-none focus:outline-none">
         
                <div className="flex items-start justify-between p-5 border-b border-[#58182d3f] rounded-t">
                  <h3 className="text-pink-800 text-3xl">
                    Create job?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
             
                <div className="relative px-10 flex-auto">
                  <p className="my-4 text-[#58182d75] text-lg leading-relaxed">
                    Your job will be posted on the job board
                  </p>
                </div>
           
                <div className="flex items-center justify-end px-6 py-3 rounded-b">
                  <button
                    className="text-pink-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-pink-800 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} 
       */}
    </div>

  )
}

export default CreateJob