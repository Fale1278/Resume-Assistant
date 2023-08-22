import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className=' flex justify-between items-center mx-[6rem] my-[2rem]'>
        <div>
          <img src="" alt="" />
          <p className=' text-1xl font-semibold'>Resume Assistant</p>
        </div>

        <nav className='flex justify-between items-center gap-10'>
          <a className=' text-myBlack text-[.9rem]'>Home</a>
          <a className=' text-myBlack text-[.9rem]'>About</a>
        </nav>
        <nav className='flex justify-between items-center gap-10'>
          <a className=' bg-myBlack text-myWhtie p-[.5rem] rounded-[.3rem] align-middle hover:bg-violet-600 '>Build My Resume</a>
          <a className='border-2 border-myBlack text-myBlack py-[.5rem] px-[2rem] rounded-[.3rem] align-middle'>Build My CV</a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar