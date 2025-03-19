import React from 'react'
import './Investcard.css'

function Investcard({ imgURL, heading }) {
  return (
    <div className='invest-container'>
      <div className="img-cont">
        <img src={imgURL} alt="Investment Option Image" className='invest-image' />
      </div>

      <h3>{heading}</h3>

    </div>
  )
}

export default Investcard
