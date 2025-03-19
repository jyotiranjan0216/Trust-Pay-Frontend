import React from 'react'
import './Servicebox.css'
import LearnButton from '../learn_more/LearnButton'

function Servicebox({sideImageURL, heading, para}) {
  return (
    <div className="service-container">

        <div className="service-msg">
            <div className="service-text">
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>

            <LearnButton />
        </div>

        <div className="service-picture">
            <img src={sideImageURL} alt="webpage image" />
        </div>
      
    </div>
  )
}

export default Servicebox
