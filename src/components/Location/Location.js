import React from 'react'
import './Location.css'

function Location() {
  return (
     <>
      <div className='About-us-head location-head'>
                    <div className='about'>
                        <h1>Self pickup location</h1>
                        <img src='https://quattro.true-emotions.studio/black/wp-content/themes/quattro/images/decor.svg' alt='bookig' />
                    </div>
        </div>
        <div className='map' id='Location'>
              
            <div className='contct-details'>
                <div className='head'>
                          <h1>Contact Us</h1>
                          <img src='https://quattro.true-emotions.studio/black/wp-content/themes/quattro/images/decor.svg' alt='bookig' />
                </div>
                <h3>+60139277180</h3>
                <p>We will be happy to answer any of your questions and advise.</p>
                <button><a href="tel:+60139277180">Call Now</a></button>
            </div>
            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.070953948065!2d103.7280105!3d1.4629912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc718c0a45d2bebdd!2sCauseway%20Car%20Rental%20Johor%20Bahru!5e0!3m2!1sen!2slk!4v1655384040622!5m2!1sen!2slk" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
     </>
  )
}




export default Location