import React from 'react'
import './Section7.css'
import Longcard from './Longcard'
import posBillingImg from '../../../images/pos-billing-software.webp'
import advertiseBusinessImg from '../../../images/advertise-business.avif'
import khataBookImg from '../../../images/khata-book.jpg'
import businessAppImg from '../../../images/business-app.jpg'
import {data} from '../../../state'

function Section7() {
  const {longCard} = data;
  return (
    <section className='section7-wrapper'>

      <h1>Business Tools to help your business grow</h1>

      <div className="section7-container">
        {longCard.map((card, index) => <Longcard key={index} imgURL={card.imgURL} heading={card.heading} para={card.para} />)}
      </div>

    </section>
  )
}

export default Section7
