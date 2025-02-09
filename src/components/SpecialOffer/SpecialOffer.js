import React from 'react'
import './SpecialOffer.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import {MdLocalOffer} from 'react-icons/md'


function SpecialOffer() {

  const spccialOffecr = [
    {
        image:'https://quattro.true-emotions.studio/black/wp-content/uploads/sites/3/2018/11/car-7.png',
        title:'Below 10 %',
        subTitle:'10 % on first time booking',
        description:'Enjoy your first time booking with us. We make your drive memorable'
       
     
    },
    {
        image:'https://quattro.true-emotions.studio/black/wp-content/uploads/sites/3/2018/11/car23.png',
        title:'Up to 15% off',
        subTitle:'Save big on Monday, Tuesday & Wednesday',
        description:'Most of our customers are returning cars to us on these days. That’s good news for you! It means we can usually offer a discount for rentals that start on these days'
    }
  ]  
    
  return (
    <div className='sp-continer' id='Special-Offer'>
        <div className='sp-head'>
            <div className='offer'>
                <h1>Special Offer</h1>
                <img src='https://quattro.true-emotions.studio/black/wp-content/themes/quattro/images/decor.svg' alt='bookig' />
            </div>
            <p>Treat yourself to a big saving on your car rental this summer with Causeway</p>
        </div>
        <div className='offer-body'>
                <Splide 
                  options={{ 
                    speed:500 , padding:{bottom:30}  , perPage:1 , arrows:false , pagination:true , drag:'free',  gap:'2rem' ,autoplay:true  , type  : 'loop'}}
                >
                        {
                            spccialOffecr.map((offerr , index) => (
                                <SplideSlide key={index}>
                                    <div className='SpcialOfffer'>
                                        <div className='img'>
                                            <img src={offerr.image} alt={offerr.title} />
                                        </div>
                                        <div className='sp-cont'>
                                            <div className='sp-offer-hd'>
                                                <h1>{offerr.title}</h1>
                                                <MdLocalOffer />
                                            </div>
                                            <h3 >{offerr.subTitle}</h3>
                                            <p>{offerr.description}</p>
                                        </div>
                                    </div>
                                 </SplideSlide>
                            ))
                        }
                </Splide>          
        </div>
    </div>
  )
}

export default SpecialOffer