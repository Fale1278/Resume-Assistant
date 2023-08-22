import React from 'react'
              



const HomePage = () => {
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

        <div className=' bg-myBlack text-myWhtie w-[43rem] p-[2rem] h-[35rem]'>
          <p className=' text-center text-[33px] my-[1rem]'>Choose your Template</p>
          <p className=' text-center text-[20px] '>What are you building?</p>
        </div>
      </div>
      <div>
        <p className=' px-[5rem] pt-[6rem] text-center font-semibold text-[45px]'>Build A Resume or a Curriculum Vitae</p>

        <div className=' bg-myBlack w-[5rem] p-5 my-[2rem]'>
          ...
        </div>

        <div className=' flex justify-between items-center gap-[2rem] px-[5rem]'>
          <div className=' bg-myBlack p-[2rem] text-myWhtie w-[40rem] h-[17rem]'>
            <p className=' font-semibold text-[23px] mb-5 text-center'>Select a Template</p>
            <p className=' text-[14px]'>Choose from our wide selection of resume <br/>templates for all experience levels, jobs, and <br/>industries. Create a polished and professional <br/>resume in minutes.</p>
          </div>

          <div className=' border-2 border-myBlack text-myBlack p-[2rem]  w-[40rem] h-[17rem]'>
            <p className=' font-semibold text-[23px] mb-5 text-center'>Fill in your details</p>
            <p className=' text-[14px]'>Our resume builder generates custom bullet <br/>points from real job ads and referencing <br/>resumes or cvs in your industry, helping you <br/>build a polished resume that is tailored for <br/>your specific needs.</p>
          </div>

          <div className=' bg-myBlack p-[2rem] text-myWhtie w-[40rem] h-[17rem]'>
            <p className=' font-semibold text-[23px] mb-5 text-center'>Download & Print</p>
            <p className=' text-[14px]'>Refine your resume with our user-friendly <br/>formatting tools. Once you’re satisfied, save it,<br/> download it in your preferred format, and <br/>send it out to potential employers.</p>
          </div>
        </div>

        <div className=' bg-myBlack w-[5rem] p-5 my-[2rem] ml-[79.2rem]'>
          ...
        </div>
      </div>
    </div>
  )
}

export default HomePage