import React from 'react'
import Navbar from "./Navbar";
import PersonalInfo from './PersonalInfo';
import './Main.css'
import astronaut from '../Images/astronaut.png'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className='Body w-[100vw] h-[100vh]'>
      <motion.img 
      className='w-[15vw] h-[15vw] fixed'
      initial = {{
        x:1000
      }}
      animate = {{
        x:0
      }}
      transition={{
        duration: 1.2
      }}
      src={astronaut} alt="astronaut" />
      <Navbar/>
      <PersonalInfo/>
    </div>
  )
}

export default Home
