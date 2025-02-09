import React from 'react'
import './Customer.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import image1 from '../../assets/CUSTOMER PICS/1.PNG'
import image2 from '../../assets/CUSTOMER PICS/2.jpg'
import image3 from '../../assets/CUSTOMER PICS/3.PNG'
import image4 from '../../assets/CUSTOMER PICS/4.jpg'
import image5 from '../../assets/CUSTOMER PICS/5.PNG'
import image6 from '../../assets/CUSTOMER PICS/6.PNG'
import image7 from '../../assets/CUSTOMER PICS/7.PNG'
import image8 from '../../assets/CUSTOMER PICS/8.jpg'
import image9 from '../../assets/CUSTOMER PICS/11.PNG'
import image10 from '../../assets/CUSTOMER PICS/12.PNG'
import image11 from '../../assets/CUSTOMER PICS/19.PNG'

const images = [
    {
        img:image1
    },
    {
        img:image2
    },
    {
        img:image3
    },
    {
        img:image4
    },
    {
        img:image5
    },
    {
        img:image6
    },
    {
        img:image7
    },
    {
        img:image8
    },
    {
        img:image9
    },
    {
        img:image10
    },
    {
        img:image11
    },

]
function Customer() {

      
  return (
    <div className='testi-continer' id='Testimonial'>
        <div className='testi-head'>
            <div className='testi'>
                <h1>Our Customers</h1>
                <img src='https://quattro.true-emotions.studio/black/wp-content/themes/quattro/images/decor.svg' alt='testi' />
            </div>
            <p>Our Trustworthy Customers</p>
        </div>

        <div className='gallery-cont' data-aos="zoom-in-up">
            <Splide options={{ 
                breakpoints: {
                    740: {
                        perPage: 1,
                    },
                    1000:{
                        perPage:2,
                    }
                },
                speed:1000 , padding:{bottom:30}  , perPage:3 , arrows:false , pagination:true , drag:'free',  gap:'2rem' ,autoplay:true  , type  : 'loop'}}>

                
                        {
                            images.map((image , index) => {
                                return(
                                    <SplideSlide>
                                        <div className='gallery-img'>
                                            <img  src={image.img} alt='image1 ' />
                                        </div>
                                     </SplideSlide>
                                )
                            })
                        }
                
        
            </Splide>
             
         </div>
      
    </div>
  )
}

export default Customer