import React from 'react'
import './NavSlider.css'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useCausWayContext } from "../../context/CauswayContextProvider";

function NavSlider() {
  const {setNavStatus} = useCausWayContext()

  const handleNavSttaus = () => {
       setNavStatus(false)
  }

  return (
    <motion.div animate={{opacity:1 }} exit={{opacity:0 }} initial={{opacity:0 }} transition={{duration:0.5 }} className='Nav-slider'>
          <div className='continer-links'>
                 <ul>
                    <motion.li onClick={handleNavSttaus} animate={{opacity:1 , x:0}} exit={{opacity:0 , x:'-20px'}} initial={{opacity:0 , x:'-20px'}} transition={{duration:0.5}} ><AnchorLink href='#Home'>Home</AnchorLink></motion.li>
                    <motion.li onClick={handleNavSttaus} animate={{opacity:1 , x:0}} exit={{opacity:0 , x:'-20px'}} initial={{opacity:0 , x:'-20px'}} transition={{duration:0.5 , delay:0.5}} ><AnchorLink href='#AboutUs'>About Us</AnchorLink></motion.li>
                    <motion.li onClick={handleNavSttaus} animate={{opacity:1 , x:0}} exit={{opacity:0 , x:'-20px'}} initial={{opacity:0 , x:'-20px'}} transition={{duration:0.5 , delay:1}} ><AnchorLink href='#Testimonial'>Reviews</AnchorLink></motion.li>
                    <motion.li onClick={handleNavSttaus} animate={{opacity:1 , x:0}} exit={{opacity:0 , x:'-20px'}} initial={{opacity:0 , x:'-20px'}} transition={{duration:0.5 , delay:1.5}} ><AnchorLink href='#Location'>Location</AnchorLink></motion.li>
                    <motion.li onClick={handleNavSttaus} animate={{opacity:1 , x:0}} exit={{opacity:0 , x:'-20px'}} initial={{opacity:0 , x:'-20px'}} transition={{duration:0.5 , delay:1.5}} ><AnchorLink href='#Special-Offer'>Offers</AnchorLink></motion.li>
                </ul>
          </div>
          <div className='cll-mee'>
             <p>Call Now : <a href="tel:+60139277180">+60139277180</a></p>
          </div>
    </motion.div>
  )
}

export default NavSlider