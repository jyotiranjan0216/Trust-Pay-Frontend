import React from 'react'
import './Offercard.css'

function Offercard({imgURL, heading}) {
  return (
    <div className='offer-container'>

        <a href="#" className="offer-body">
            <img src={imgURL} alt="Image of offer" className='offer-image'/>
            <h4>{heading}</h4>
        </a>
      
    </div>
  )
}

export default Offercard
