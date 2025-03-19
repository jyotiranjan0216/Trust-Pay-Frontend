import React from 'react'
import './Section2.css'
import Card from '../card/Card'
import prepaidRechargeImg from '../../../images/recharge-prepaid-mobile.png'
import electricityBillImg from '../../../images/electricity-bill.png'
import dthRechargeImg from '../../../images/dth-recharge.png'
import broadbandImg from '../../../images/broadband.png'
import educationFeeImg from '../../../images/education-fee.png'
import PaymentServcesImg from '../../../images/payment-services.png'
import gasCylinerImg from '../../../images/gas-cylinder.png'
import {data} from '../../../state'

function Section2() {
  const {servicesState} = data;
  return (
    <section className='section2-wrapper'>
      <div className='section2-container'>

        <h1>Recharge & Pay Bills on TrustPay.</h1>
        <div className="flex overflow-hidden space-x-16 group">
          <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
            {servicesState.map((card, index) => <Card key={index} imgURL={card.imgURL} cardMessage={card.cardMessage} />)}
          </div>
          <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
            {servicesState.map((card, index) => <Card key={index} imgURL={card.imgURL} cardMessage={card.cardMessage} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section2