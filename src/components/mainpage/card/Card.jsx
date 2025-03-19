import React from 'react'
import './Card.css'

function Card({ imgURL, cardMessage, bgcolor }) {

  return (
    <div className='card-cont' data-color={bgcolor ? bgcolor : ""}>

      <a href='#' className="card-body">
        <img src={imgURL} alt="Icon Image" className='card-img' />
        <div>
          <p>{cardMessage[0]}</p>
          <p>{cardMessage[2] ? cardMessage[1] : cardMessage[1] + " >"}</p>
          {cardMessage[2] ? <p>{cardMessage[2] + " >"}</p> : ""}
        </div>
      </a>

    </div>
  )
}

export default Card
