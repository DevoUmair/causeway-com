import React, { useState , useEffect } from 'react'
import './Nav.css'
import NavImg from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { useCausWayContext } from '../../context/CauswayContextProvider'
import {IoMdCall} from 'react-icons/io'


function Nav() {
    const {navStatus , setNavStatus} = useCausWayContext()
    const [navShow , setNavShow] = useState()


  const transtionNavBar = () => {
    if(window.scrollY > 300) {
        setNavShow(true)
    }else{
        setNavShow(false)
    }
  }  

  useEffect(() => {
      window.addEventListener("scroll" , transtionNavBar)

      return () => window.removeEventListener("scroll" , transtionNavBar)
  }, [])
  

  return (
        <motion.nav  animate={{opacity:1 }} exit={{opacity:0 }} initial={{opacity:0 }} transition={{duration:1 }} className={`Nav-continer ${navShow && "Nav_black"} `}>
                <div className='Nav-wrapper'>
                    <div className='img-continer'>
                    <img src={NavImg} alt='NavImg' />
                    </div>
                        <ul>
                            <li><AnchorLink href='#Home'>Home</AnchorLink></li>
                            <li><AnchorLink href='#AboutUs'>About Us</AnchorLink></li>
                            <li><AnchorLink href='#Testimonial'>Reviews</AnchorLink></li>
                            <li><AnchorLink href='#Location'>Location</AnchorLink></li>
                        </ul>
                    <div className='contact-continer'>
                        <div>
                            <h3>+60139277180</h3>
                            <p>Mon - Sat: 9:00 am - 6:00 pm</p>
                        </div>
                        <button className='button-con' ><a href="tel:+60139277180?"><IoMdCall /> Call Now</a></button>
                    </div>
                    {/* <div  className={navStatus ? 'active-nav-icon' : 'nav-icon'}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> */}
                    <div onClick={() => {setNavStatus(!navStatus)}} className={!navStatus ? 'burger'  : 'burger toggle'} >
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </div>
        </motion.nav>
  )
}

export default Nav