import React , {useEffect} from 'react'
import './About.css'
import {AiFillCar} from 'react-icons/ai'
import {FaLocationArrow} from 'react-icons/fa'
import Aos from 'aos' 
import 'aos/dist/aos.css'
import {MdSpeakerNotesOff} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'

function AboutUs() {

   useEffect(() => {
        Aos.init({})
  },[])


  return (
    <div className='AboutUs-continer' id='AboutUs'>
        <div className='About-us-head'>
            <div className='about'>
                <h1>About Us</h1>
                <img src='https://quattro.true-emotions.studio/black/wp-content/themes/quattro/images/decor.svg' alt='bookig' />
            </div>
            <p>What’s the Causeway Way? <br></br> Taking care of our customers, our communities and  our environment</p>
        </div>
        <div className='About-body' data-aos='fade-up'>
            <div className='left-side'>
                 <h1>ABOUT CAUSEWAY</h1>
                 <p>Founded in 2022, causeway offers low rental rates and a fun, hassle- free customer experience at the most popular travel destinations throughout Johor Bahru. Our guiding principles, and humble beginning, revolve around personal honesty and integrity. We believe in strengthening our communities one at a time. Serving our customers as if they were our family.</p>.
                 <p>Causeway never stops looking for ways to enhance cleanliness and safety. We pledge to go above and beyond our already rigorous cleaning protocols. Your comfort is our priority. You can depend on us, whatever your motoring needs.</p>
            </div>
            <div className='right-side' data-aos='fade-up'>
                <div className='right-head'>
                     <h2 className='why'>WHY</h2>
                     <h2 className='book'>Book with causeway</h2>
                </div>
                <div className='right-body'>

                     <div className='each-item'>
                          <div className='Icons'>
                              <MdLocationOn />
                          </div>
                          <div className='item-info'>
                                   <h3>Great location</h3>
                                   <p>We are located in the centre of the town <br></br> 2 minutes from JB Sentral</p>
                          </div>
                     </div>

                     <div className='each-item'>
                          <div className='Icons'>
                              <AiFillCar />
                          </div>
                          <div className='item-info'>
                                   <h3>Free delivery</h3>
                                   <p>During office hours around the city</p>
                          </div>
                     </div>

                     <div className='each-item'>
                          <div className='Icons'>
                              <MdSpeakerNotesOff />
                          </div>
                          <div className='item-info'>
                                   <h3>Zero commitment</h3>
                                   <p>No deposit fee for frequent customers <br></br> The more you rent, the more you get</p>
                          </div>
                     </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs