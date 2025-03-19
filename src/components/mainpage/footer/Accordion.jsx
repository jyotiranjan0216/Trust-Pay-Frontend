import React from 'react'
import './Accordion.css'

function Accordion({ heading, links, nobody, active }) {

  return (
    <div>

      <div className={active ? "accordion active" : "accordion"} data-nobody={nobody}>
        <h4>{heading}</h4>
        <div className="line"></div>



      </div>

      <div className="accordion-body" data-nobody={nobody}>

        {links.map((link, i) => (
          <a href="#" key={i} className="accordion-body-item">{link}</a>
        ))}

      </div>

    </div>
  )
}

export default Accordion
