import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const divStyle = {
  // width: "100px",
  // height: "100px",
  // backgroundColor: "black",
};

const BouncingDiv = () => {
  const controls = useAnimation();

  const bounceAnimation = async () => {
    while (true) {
      await controls.start({
        y: [0, 20, 0],
        transition: bounceTransition,
      });
    }
  };

  useEffect(() => {
    bounceAnimation();
  }, []);

  return (
    <div
      className=" px-[5rem]"
      style={{
        height: "100vh",
      }}
    >
      <p className=' text-[33px] font-semibold mb-[1rem]'>What kind of Resume or <br/>CV do you what?</p>
      <div className=' flex justify-between items-center  my-[1rem]'>
          <div>
          <div className=' flex justify-around items-center gap-[3rem]'>
          <motion.div
        style={divStyle}
        initial={{ y: 0 }}
        animate={controls}
      >
        <div className='imagefour bg-myBlack w-[189px] h-[189px] rounded-[50%] cursor-pointer mt-[1rem]'>
          <p className=' flex justify-center items-center text-[28px] text-myWhtie font-normal mt-[4.5rem]'>Creative</p>
        </div>
      </motion.div>

      <motion.div
        style={divStyle}
        initial={{ y: 0 }}
        animate={controls}
      >
        <div className='imagetwo bg-myBlack p-[1rem] w-[146px] h-[146px] rounded-[50%] cursor-pointer mt-[15rem]'>
            <p className=' flex justify-center items-center text-[28px] text-myWhtie font-normal mt-[2rem]'>Basic</p>
            </div>
      </motion.div>

      <motion.div
        style={divStyle}
        initial={{ y: 0 }}
        animate={controls}
      > 
      <div className='imagethree bg-myBlack p-[1rem] w-[253px] h-[252px] rounded-[50%] cursor-pointer'>
            <p className=' flex justify-center items-center text-[28px] text-myWhtie font-normal mt-[5rem]'>Professional</p>
            </div>
      </motion.div>

      <motion.div
        style={divStyle}
        initial={{ y: 0 }}
        animate={controls}
      >
        <div className=' bg-myBlack p-[1rem] mt-[4rem] w-[233px] h-[233px] rounded-[50%] cursor-pointer'>
            <p className=' flex justify-center items-center text-[28px] text-myWhtie font-normal mt-[4.5rem]'>Minimalist</p>
            </div>
      </motion.div>

            
          </div>

          <div className=' flex justify-around items-center'>

          <motion.div
        style={divStyle}
        initial={{ y: 0 }}
        animate={controls}
      > 
      <div className='image1 bg-myBlack p-[1rem] w-[175px] h-[175px] rounded-[50%] cursor-pointer'>
            <p className=' flex justify-center items-center text-[28px] text-myWhtie font-normal mt-[3rem]'>Modern</p>
            </div>
      </motion.div>
            
      <motion.div
        style={divStyle}
        initial={{ y: 0 }}
        animate={controls}
      > 
      <div className='imagefive bg-myBlack p-[1rem] w-[146px] h-[146px] rounded-[50%] cursor-pointer'>
            <p className=' flex justify-center items-center text-[28px] text-myWhtie font-normal mt-[2rem]'>Tech</p>

            </div>
      </motion.div>
            
      <motion.div
        style={divStyle}
        initial={{ y: 0 }}
        animate={controls}
      >
      <div className='imageone bg-myBlack p-[1rem] w-[171px] h-[171px] rounded-[50%] cursor-pointer'>
            <p className=' flex justify-center items-center text-[28px] text-myWhtie font-normal mt-[3rem]'>Simple</p>

            </div>
      </motion.div>
            
          </div>
          </div>
      
          <motion.div
        style={divStyle}
        initial={{ y: 0 }}
        animate={controls}
      > 
      <div className='image1 bg-myBlack p-[1rem] w-[137px] h-[137px] rounded-[50%] cursor-pointer mt-[9rem]'>
          <p className=' flex justify-center items-center text-[28px] text-myWhtie font-normal mt-[2rem]'>More...</p>
        </div>
      </motion.div>
          

        </div>
          
    </div>
  );
};

export default BouncingDiv;
