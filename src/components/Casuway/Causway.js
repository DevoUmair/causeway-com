import React ,{useEffect} from 'react'
import './Causway.css'
import Aos from 'aos' 
import 'aos/dist/aos.css'
import {IoMdCall} from 'react-icons/io'
import {GiReceiveMoney} from 'react-icons/gi'
import {MdOutlineEventNote} from 'react-icons/md'

function Causway() {

     useEffect(() => {
          Aos.init({})
    },[])

  return (
    <div className='Causway-continer' id='Service'>
         <div className='Causway-wrapper'>
               <div className='causway-sec' data-aos='fade-up' id='Service1'>
                    <GiReceiveMoney />
                    <h2>Affordable</h2>
                    <p>We want to help you spend less money on car hire and more on your holiday. We offer you the lowest rate possible on all vehicles so that you can make the most out of your trip to the Johor</p>
                
               </div>
        
            <div className='causway-sec' data-aos='fade-up' id='Service2'>
                 {/* <img src='https://quattro.true-emotions.studio/black/wp-content/uploads/sites/3/2018/11/steering-wheel-3.svg' alt='officila-dealer' /> */}
                 <MdOutlineEventNote />
                 <h2>Flexibility</h2>
                 <p>We understand that even the best laid plans change. You have the option to cancel the rental without charge. Freedom on the road and freedom through flexibility</p>
          
            </div>
            <div className='causway-sec' data-aos='fade-up' id='Service3'>
                 {/* <img src='https://quattro.true-emotions.studio/black/wp-content/uploads/sites/3/2018/11/airbag-2.svg' alt='officila-dealer' /> */}
                 <IoMdCall />
                 <h2>24/7 Avalability</h2>
                 <p>Rent a car in the day or at night. On weekends or weekdays, at any time of the day.we are just one call away</p>
            
            </div>
         </div>
    </div>
  )
}

export default Causway