import React from 'react'
import './Rowhead.css'

function Rowhead({imgURL, para}) {
  return (
    <div className='row-container'>
        <img src={imgURL} alt="TrustPay image" className='row-image'/>
        <p>{para}</p>
        <a href='#' className='para-link'>Learn More</a>      
    </div>
  )
}

export default Rowhead
