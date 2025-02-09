import React from 'react'
import './Banner.css'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Banner() {
  return (
    <motion.div animate={{opacity:1 }} exit={{opacity:0 }} initial={{opacity:0 }} transition={{duration:1.5 }} className='banner-continer' id='Home'>
       <div className='banner-content'>
             <motion.h1 animate={{opacity:1 , y:0}} exit={{opacity:0 , y:0}} initial={{opacity:0 , y:'20px'}} transition={{duration:0.5 , delay:0.5}}>Experience </motion.h1>
             <motion.h2 animate={{opacity:1 , y:0}} exit={{opacity:0 , y:0}} initial={{opacity:0 , y:'20px'}} transition={{duration:0.5 , delay:1}}>Best with us</motion.h2>
             <motion.button animate={{opacity:1 , y:0}} exit={{opacity:0 , y:0}} initial={{opacity:0 , y:'20px'}} transition={{duration:0.5 , delay:1.5}}> <AnchorLink href='#Booking'><span>BOOK NOW</span></AnchorLink> </motion.button>
       </div>
    </motion.div>
  )
}

export default Banner