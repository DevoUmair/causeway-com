import React ,{useEffect} from 'react'
import './Booking.css'
import {BsFillArrowDownRightSquareFill} from 'react-icons/bs'
import Aos from 'aos' 
import 'aos/dist/aos.css'
import hatchbek from '../../assets/Booking/suzuki-swift-car-toyota-vitz-png-favpng-z5Yf7RZiREsMUsG7VXg8f9LPm-removebg-preview.png'
import suv from '../../assets/Booking/suv2.png'
import minivan from '../../assets/Booking/minivan.png'
import seden from '../../assets/Booking/sedan.png'

function Booking() {

    useEffect(() => {
        Aos.init({})
  },[])

  const booking = [
    {
        vehicaleName:'Hatchback',
        image:hatchbek 
    },
    {
        vehicaleName:'Mini Van',
        image:minivan
    },
    {
        vehicaleName:'Seden',
        image:seden
    },
    {
        vehicaleName:'Suv',
        image:suv
    }
  ]

  return (
    <div className='Booking-continer' id='Booking'>
             <div className='Booking-head'>
                <div className='booking'>
                    <h1>Book Now</h1>
                    <img src='https://quattro.true-emotions.studio/black/wp-content/themes/quattro/images/decor.svg' alt='bookig' />
                </div>
                <p>Our car rental packages are a steal ! <br></br> Not only they are pocket friendly, our deals are also flexible with customer-focused service.<br></br> Check out our rates and car choices here.</p>
             </div>

             <div className='Boooking-body'>

                  {
                    booking.map((book , index) => (
                        <div className='each-bookoing' data-aos='fade-up' key={index}>
                            <button><a href={`https://wa.me/60166201542?text= Hey Causeway ! May I know, Do you have any ${book.vehicaleName}  cars available to book ?`}>BOOK NOW <BsFillArrowDownRightSquareFill /></a></button>
                            <div className='sec-continer'>
                                <h1>{book.vehicaleName}</h1>
                                <img src={book.image} alt={book.vehicaleName} />
                            </div>
                        </div>
                    ))
                  }
                  

             </div>
    </div>
  )
}

export default Booking