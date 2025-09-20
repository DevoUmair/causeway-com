import React from 'react'
import './Foooter.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {FaInstagram} from 'react-icons/fa'
import {GrFacebookOption} from 'react-icons/gr'
import {BsWhatsapp} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
        <div className='footer-continer'>
              <div className=' column'>
                   <h1>CONTACT US</h1>
                   <div className='para'>
                      <p>24456 <br></br> Japan Tun Abdul Razak <br></br>1/1, Wadi Hana, <br></br>80000 Johor Bahru, Johor, Malaysia</p>
                      <p><a rel="noreferrer"  href='mailto:causwaycarrental@gmail.com' >causwaycarrental@gmail.com</a></p>
                      <p><a href="tel:+60139277180">60139277180</a></p>
                   </div>
              </div>
              <div className=' column'>
                   <h1>QUICK MENU</h1>
                   <ul>
                       <li><AnchorLink href='#Booking'>Booking</AnchorLink></li>
                       <li><AnchorLink href='#AboutUs'>About Us</AnchorLink></li>
                       <li><AnchorLink href='#Special-Offer' >Special Offer</AnchorLink></li>
                       <li><AnchorLink href='#Price-beat' >Price beat</AnchorLink></li>
                       <li><AnchorLink href='#Testimonial' >Testimonial</AnchorLink></li>
                   </ul>
              </div>
              <div className='follow column'>
                  <h1>FOLLOW US</h1>
                   <ul>
                       <li><a rel="noreferrer"  href='https://www.instagram.com/causewaycarrentaljb' target='_blank' ><FaInstagram /></a></li>
                       <li><a rel="noreferrer" href='https://m.facebook.com/CausewayCarRentalJB/' target='_blank' ><GrFacebookOption /></a></li>
                       <li><a rel="noreferrer" href='https://wa.me/+60166201542' target='_blank' ><BsWhatsapp /></a></li>
                   </ul>
              </div>
        </div>
        <div className='copyright'>
           <p>© 2022 Causeway Car Rental, Malaysia. All rights reserved By <a href='https://umairlafir-1ae7d.web.app/' rel="noreferrer" target='_blank'>Mohamad Lafir Umair.</a> </p>
        </div>
    </footer>
  )
}

export default Footer