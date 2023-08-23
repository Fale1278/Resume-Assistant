import React from 'react'

import { Link } from 'react-router-dom'

import Cv1 from '../../assets/Cv1.svg'
import Cv2 from '../../assets/Cv2.svg'
import Cv3 from '../../assets/Cv3.svg'
import Cv4 from '../../assets/Cv4.svg'

const ResumePage = () => {
  return (
    <div>
      <div className=' flex justify-between items-center ml-[6rem]  my-[5rem] gap-[1rem]'>
        <div>
          <p className=' text-[45px] font-semibold leading-normal'>Build a Resume or a <br/>Curriculum Vitae</p>

          <p className=' text-[18px] leading-8 my-5 '>Resume writing can be stressful, confusing, and time-<br/>consuming if you do it all on your own. With Resume <br/>Assistant, it’s quick and effective.</p>

          <p className=' font-bold text-[18px]'>What's The Difference?</p>

          <p className=' text-[18px] leading-8 my-5'>

            A Resume is a one page summary of your work <br/>experience and background relevant to the job you <br/>are applying to. A CV is a longer academic diary that <br/>includes all your experience, certificates, and <br/>publications.</p>
        </div>

        <div>
          <p className=' text-center m-5 text-2xl font-semibold'>Select a Template</p>
          <div className=' bg-myBlack text-myWhtie w-[43rem] px-[2rem] overflow-hidden'>

            <div className=' grid grid-cols-3 justify-around items-center gap-2'>
              <div className=''>
                <Link>
                  <img src={Cv1} alt="" />
                </Link>
              </div>

              <div className=' mt-[4rem]'>
                <Link>
                  <img src={Cv2} alt="" />
                </Link>
              </div>

              <div className=''>
                <Link>
                  <img src={Cv3} alt="" />
                </Link>
              </div>

              <div className=''>
                <Link>
                  <img src={Cv4} alt="" />
                </Link>
              </div>

              <div className='mt-[4rem]'>
                <Link>
                  <img src={Cv4} alt="" />
                </Link>
              </div>

              <div className=' '>
                <Link>
                  <img src={Cv4} alt="" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage