import React from 'react'
import './PersonalInfo.css'
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import MyImage from '../Images/Me.png'

const PersonalInfo = () => {
  return (
    <div className='w-[100vw] h-[92vh] flex items-center justify-center'>
      <div className='w-[50vw] h-[92vh] flex items-center justify-center'>
        <motion.div 
        initial = {{
          x: -800
        }}
        animate = {{
          x: 0
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          when: 'beforeChild'
        }}
        className='w-[25vw] h-[25vw] bg-yellow-500 rounded-full overflow-hidden flex justify-center items-center ml-[10vw]'>
          <motion.div

          className='overflow-hidden'

          initial = {{
            opacity: 0
          }}
          animate = {{
            opacity: 1
          }}
          trasition = {{
            duration: 1.2,
          }}
          >
          <img src= {MyImage} alt="ohyeah" className='mt-[2rem]'>
            </img>
          </motion.div>
          
        </motion.div>
      </div>

      <div className='w-[50vw] h-[92vh] flex flex-col justify-center items-start gap-9'>
        <motion.div 
        initial = {{
          opacity: 0,
          scale: 0
        }}
        animate = {{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.2,
          
        }}
        className="personalInfo w-[30vw] flex flex-col justify-center items-start gap-5">
          <p className='text-gray-300 text-xl mb-4'>WELCOME, I AM</p>
          <h1 className='text-white text-5xl'><strong>Anik Singh Rawat</strong></h1>
          <p className='text-yellow-500 text-3xl'><strong>Frontend and Backend Developer Speacialized in Designing the Web.</strong></p>
          <p className='text-gray-400 text-xl'> A Passionate Front-end and Back-end developer with a knack for turning creative concepts into functional digital solutions.</p>
        </motion.div>
        <motion.div
          initial = {{
            x: 780
          }}
          animate = {{
            x: 0
          }}
          transition={{
            duration: 1.2
          }}
        >
          <button className='Button rounded-full w-[6.5vw] h-[5vh] text-yellow-500 '>Let's Talk</button>
        </motion.div>
      </div>
      
    </div>
  )
}

export default PersonalInfo
