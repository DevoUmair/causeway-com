import React from 'react'
import './Fixedicons.css'
import {BsWhatsapp} from 'react-icons/bs'

function FixedIcons() {
  return (
    <section class="fixed-icons">
		<a href={`https://wa.me/60166201542?text= Hello 👋 Causeway Car Rental Johor Bahru?`} class="whatsapp" target="_blank" rel="noreferrer"><BsWhatsapp /> </a>
	</section>
  )
}

export default FixedIcons