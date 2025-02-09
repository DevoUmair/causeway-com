import React from 'react'
import './PriceBeat.css'
import {IoIosText} from 'react-icons/io'

function PriceBeat() {
  return (
    <div className='my-build' id='Price-beat' >
       <div  className='my-build-continer'>
          
          <div className='About-us-head'>
              <div className='about'>
                  <h1>Price Beat</h1>
                  <img src='https://quattro.true-emotions.studio/black/wp-content/themes/quattro/images/decor.svg' alt='bookig' />
              </div>
          </div>

          <div className='project' data-aos='fade-up'>
                <div className='prjct-img-content'>
                    <img src='https://media.istockphoto.com/photos/new-red-metallic-sedan-car-in-spotlight-modern-desing-brandless-picture-id907671134?k=20&m=907671134&s=612x612&w=0&h=Ou3tRuqqNDZST71JKzTq4QR9KxsohTTkVCbs158WEco=' alt='netflix' ></img>
                    <div className='shadow'></div>
                </div>

                <div className='prjct-content'>
                     <div className='project-content-p'>
                          <div className='pcp-h'>
                            <h1>Text us to discuss</h1>
                            <IoIosText/>
                          </div>
                            <p>Have you got a firm quote from another car rental company and their price is better than ours ? <br></br> <span>No Problem, we can beat that price by 10% </span></p>
                     </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default PriceBeat