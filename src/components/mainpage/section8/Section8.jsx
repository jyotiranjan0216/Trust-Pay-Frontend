import React from 'react'
import './Section8.css'
import Rowhead from './Rowhead'
import Investcard from './Investcard'
import Offercard from './Offercard'
import trustpayMoneyLogo from '../../../images/trustpay-money.png'
import trustpayTravelLogo from '../../../images/trustpay-travel.png'
import {data} from '../../../state'

function Section8() {
  const {investcard, offercard} = data;
  return (
    <section className='section8-wrapper'>

      <div className="section8-container">

        <div className="row1">
          <Rowhead
            imgURL={trustpayMoneyLogo}
            para={"Get started on wealth creation journey with Zero brokerage fee & no hidden charges."} />

          {investcard.map((card, index) =>
            <Investcard key={index} imgURL={card.imgURL} heading={card.heading} />)}
        </div>

        <div className="row2">
          <Rowhead
            imgURL={trustpayTravelLogo}
            para={"Best travel solutions with quick ticket bookings, great offers and easy refunds"} />

          {offercard.map((card, index) => <Offercard key={index} imgURL={card.imgURL} heading={card.heading} />)}
        </div>
      </div>
    </section>
  )
}

export default Section8
