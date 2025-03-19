import React from 'react'
import './Longcard.css'

function Longcard({imgURL, heading, para}) {
  return (
    <div className='longcard-container'>

        <div className="longcard-image">
            <img src={imgURL} alt="website image"/>
        </div>
        
        <h1>{heading}</h1>

        <p>{para}</p>

        <div className='longcard-link hover:underline'><a href="#">Learn more</a></div>
      
    </div>
  )
}

export default Longcard
