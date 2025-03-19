import React from 'react'
import './Megabox.css'
import LearnButton from '../learn_more/LearnButton'

function Megabox({iconURL, sideImageURL, heading, para, right}) {
  return (
    <div className="box-container" >

        <div className='msg-box' style={right ? {order: 2} : {}}>
            <div className="box-icon">
                <img src={iconURL} alt="webpage image"/>
            </div>

            <div className="box-text">
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>

            <LearnButton /> 
        </div>

        <div className="box-picture" style={right ? {order: 1} : {}}>
            <img src={sideImageURL} alt="webpage image" />
        </div>
      
    </div>
  )
}

export default Megabox
