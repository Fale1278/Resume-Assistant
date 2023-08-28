import React, { useState, useEffect } from 'react'
import PreLoader from '../PreLoader/PreLoader'



const BuildResume5 = () => {
  const [isLoading, setIsLoading] = useState (true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 3000)
  },[])

  return (
    <div>
      {isLoading? (
        <PreLoader />
      ) : (
        <div className='   mb-[4rem]'>
          <div className=' bg-myBlack ml-[10rem] p-[2rem] h-[35rem]'>
            <p className=' text-myWhtie text-[35px] font-semibold mb-[.5rem]'>Build Your Resume</p>
            <p className=' text-myWhtie text-[25px] mb-[1rem]'>
              Skills
            </p>

            <div className=' flex gap-[2rem]'>
              <div>
                <div className='App h-20 bg-black flex justify-center items-center'>
                  <label className='relative'>
                    <input type="text" className='h-[50px] w-[375px] px-6 text-[15px] bg-black border-2 border=white border-opacity-50 rounded-md outline-none focus:border-blue-500 focus:text-white tramsiton duration-200'/>

                    <span className='text-[15px] text-black text-opacity-80 absolute left-0 top-[.9rem] mx-4 px-2 transition duration-200 input-text'>Your Skills </span>
                  </label>
                </div>
              </div>
              </div>
              <div className=' my-[3rem] flex justify-end items-center'>
                <button to='/buildResume5' className=' bg-myWhtie p-[.5rem] flex justify-center items-center w-[7rem]'>
                  Build
                </button>
              </div>



          </div>
        </div>
      )}
    </div>
  )
}



export default BuildResume5