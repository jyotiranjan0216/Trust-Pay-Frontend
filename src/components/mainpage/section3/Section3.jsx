import React from 'react'
import './Section3.css'
import Card from '../card/Card'
import movieImg from '../../../images/movie-ticket.png'
import flightImg from '../../../images/flight-ticket.png'
import busImg from '../../../images/bus-ticket.png'
import trainImg from '../../../images/train-ticket.png'
import insuranceImg from '../../../images/buy-insurance.png'
import interFlightsImg from '../../../images/international-flights.png'
import { data } from '../../../state'

function Section3() {
  const { bookBuyState } = data;
  return (
    <section className='section3-wrapper'>
      <div className='section3-container'>

        <h1>Book & Buy on TrustPay.</h1>

        <div className="flex overflow-hidden space-x-16 group">
          <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
            {bookBuyState.map((card, index) => <Card key={index} bgcolor={card.bgcolor} imgURL={card.imgURL} cardMessage={card.cardMessage} />)}
          </div>
          <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
            {bookBuyState.map((card, index) => <Card key={index} bgcolor={card.bgcolor} imgURL={card.imgURL} cardMessage={card.cardMessage} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section3
