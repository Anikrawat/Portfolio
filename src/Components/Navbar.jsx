import React from 'react'
import Logo from '../Images/Logo.png'
import './Main.css'
import { motion } from "framer-motion";
import ContactLogo from '../Images/ContactLogo.png'

const Navbar = () => {
  return (
    <motion.div 
    initial = {{y: -70}}
    animate = {{y:0}}
    transition={{duration: 1.2}}
    className='Navbar flex justify-center '>
      <nav className= 'h-[7vh] flex justify-between items-center w-[70vw] mt-2'>
        <div className="logo w-20 h-20">
            <img src={Logo} alt="Logo"/>
        </div>
        <div>
            <ul className='flex gap-10'>
                <li className="listItems text-white">Home</li>
                <li className="listItems text-white">Projects</li>
                <li className="listItems text-white">Contact</li>
            </ul>
        </div>
        <div className="Contact-Button">
            <button className='bg-yellow-500 text-slate-900 rounded-3xl h-10 w-[8vw] gap-3 flex items-center justify-center'>
                <img src={ContactLogo} alt="Contact" style={{filter: 'invert(1)'}}/>
                Contact Me
            </button>
        </div>
      </nav>
    </motion.div>
  )
}

export default Navbar
