import React from 'react'

import { Link } from 'react-router-dom'

const BuildResume2 = () => {
  return (
    <div className='   mb-[4rem]'>
      <div className=' bg-myBlack ml-[10rem] p-[2rem]'>
        <p className=' text-myWhtie text-[35px] font-semibold mb-[.5rem]'>Build Your Resume</p>
        <p className=' text-myWhtie text-[25px] mb-[1rem]'>Education</p>

        <div className=' flex gap-[2rem]'>
          <div>
            <div className='App h-20 bg-black flex justify-center items-center'>
              <label className='relative'>
                <input type="text" className='h-[50px] w-[375px] px-6 text-[15px] bg-black border-2 border=white border-opacity-50 rounded-md outline-none focus:border-blue-500 focus:text-white tramsiton duration-200'/>

                <span className='text-[15px] text-black text-opacity-80 absolute left-0 top-[.9rem] mx-4 px-2 transition duration-200 input-text'>High School</span>
              </label>
            </div>

            <div className='App h-20 bg-black flex justify-center items-center'>
            <label className='relative'>
              <input type="text" className='h-[50px] w-[375px] px-6 text-[15px] bg-black border-2 border=white border-opacity-50 rounded-md outline-none focus:border-blue-500 focus:text-white tramsiton duration-200'/>

              <span className='text-[15px] text-black text-opacity-80 absolute left-0 top-[.9rem] mx-4 px-2 transition duration-200 input-text'>Period</span>
            </label>
          </div>

          <div className='App h-20 bg-black flex justify-center items-center mt-[3rem]'>
            <label className='relative'>
              <input type="text" className='h-[50px] w-[375px] px-6 text-[15px] bg-black border-2 border=white border-opacity-50 rounded-md outline-none focus:border-blue-500 focus:text-white tramsiton duration-200'/>

              <span className='text-[15px] text-black text-opacity-80 absolute left-0 top-[.9rem] mx-4 px-2 transition duration-200 input-text'>Higher Institution</span>
            </label>
          </div>

          <div className='App h-20 bg-black flex justify-center items-center'>
            <label className='relative'>
              <input type="text" className='h-[50px] w-[375px] px-6 text-[15px] bg-black border-2 border=white border-opacity-50 rounded-md outline-none focus:border-blue-500 focus:text-white tramsiton duration-200'/>

              <span className='text-[15px] text-black text-opacity-80 absolute left-0 top-[.9rem] mx-4 px-2 transition duration-200 input-text'>Course</span>
            </label>
          </div>

          <div className='App h-20 bg-black flex justify-center items-center'>
            <label className='relative'>
              <input type="text" className='h-[50px] w-[375px] px-6 text-[15px] bg-black border-2 border=white border-opacity-50 rounded-md outline-none focus:border-blue-500 focus:text-white tramsiton duration-200'/>

              <span className='text-[15px] text-black text-opacity-80 absolute left-0 top-[.9rem] mx-4 px-2 transition duration-200 input-text'>Period</span>
            </label>
          </div>

          <div className='App h-20 bg-black flex justify-center items-center'>
            <label className='relative'>
              <input type="text" className='h-[50px] w-[375px] px-6 text-[15px] bg-black border-2 border=white border-opacity-50 rounded-md outline-none focus:border-blue-500 focus:text-white tramsiton duration-200'/>

              <span className='text-[15px] text-black text-opacity-80 absolute left-0 top-[.9rem] mx-4 px-2 transition duration-200 input-text'>Degree</span>
            </label>
          </div>
          </div>

          <div>
            

          <div className='App  bg-black flex justify-center items-center mt-[1rem]'>
            <label className='relative'>
              <input type="text" className='h-[200px] w-[674px] px-6 text-[15px] bg-black border-2 border=white border-opacity-50 rounded-md outline-none focus:border-blue-500 focus:text-white tramsiton duration-200'/>

              <span className='text-[15px] text-black text-opacity-80 absolute left-0 top-[.9rem] mx-4 px-2 transition duration-200 input-text'>A bit about yourself</span>
            </label>
          </div>
          

          <div className=' my-[3rem] flex justify-end items-center'>
            <Link to='/buildResume3' className=' bg-myWhtie p-[.5rem] flex justify-center items-center w-[7rem]'>
              Next
            </Link>
          </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default BuildResume2