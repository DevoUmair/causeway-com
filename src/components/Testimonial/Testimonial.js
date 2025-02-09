import React from 'react'
import './Tsetimonial.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import image1 from '../../assets/REVIEW PICS/8.png'
import image2 from '../../assets/REVIEW PICS/11.png'
import image3 from '../../assets/REVIEW PICS/22.png'
import image4 from '../../assets/REVIEW PICS/33.png'
import image5 from '../../assets/REVIEW PICS/44.png'
import image6 from '../../assets/REVIEW PICS/55.png'
import image7 from '../../assets/REVIEW PICS/66.png'
import image8 from '../../assets/REVIEW PICS/77.png'
import image9 from '../../assets/REVIEW PICS/99.png'

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

]
function Testimonial() {

      
  return (
    <div className='testi-continer' id='Testimonial'>
        <div className='testi-head'>
            <div className='testi'>
                <h1>Testimonial</h1>
                <img src='https://quattro.true-emotions.studio/black/wp-content/themes/quattro/images/decor.svg' alt='testi' />
            </div>
            <p>What our customer say about causeway</p>
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

export default Testimonial