import React from 'react'
import './Footer.css'
import Accordion from './Accordion'
import appleStoreDownloadImg from '../../../images/apple-store-download.svg'
import playStoreDownloadImg from '../../../images/google-play-download.svg'
import instagramImg from '../../../images/instagram-social-media.svg'
import xImg from '../../../images/x-social-media.svg'
import facebookImg from '../../../images/facebook-social-media.svg'

function Footer() {
  return (
    <footer className='footer'>

      <div className="footer-container">
            
        <div className='media-links'>

          <div className="download-links">
            <h2>Download TrustPay App to Pay from anywhere</h2>
            <a href="#" className="appstore-link">
              <img src={appleStoreDownloadImg} alt="Apple App store image" />
            </a>
            <a href="#" className="googleplay-link">
              <img src={playStoreDownloadImg} alt="Google Playstore image" />
            </a>
          </div>

          <div className="media-icons">
            <a href="" className="">
              <img src={xImg} alt="" />
            </a>

            <a href="https://www.instagram.com/jyotiranjan_jyoti_?igsh=MWk3Z2JlY2kyMHV3cg==" target="_blank" className="">
              <img src={instagramImg} alt="" />
            </a>

            <a href="https://www.facebook.com/share/18r9dzkv6K/" target="_blank"  className="">
              <img src={facebookImg} alt="" />
            </a>
          </div>

        </div>

        <hr />

        <div className="accordion-container">

          <Accordion
          heading={"Investor Relations"} 
          links={["Home","Financials","Filings & Press Releases", "News & Events", "Corporate Governance", "Resources"]}
          active={true}/>

          <Accordion
          heading={"More About TrustPay"} 
          links={[]}/>

          <Accordion
          heading={"Company"} 
          links={[]}/>

          <Accordion
          heading={"Career"} 
          links={[]}
          nobody={true}/>

          <Accordion
          heading={"Recharge & pay bills"} 
          links={[]}/>

          <Accordion
          heading={"Pay Loan EMI, Insurance Premiums & Education Fee"} 
          links={[]}/>

          <Accordion
          heading={"Book Travel & Entertainment"} 
          links={[]}/>

          <Accordion
          heading={"Investments & Miscellaneous"} 
          links={[]}/>

          <Accordion
          heading={"Loans and Credit Cards"} 
          links={[]}/>

          <Accordion
          heading={"Financial Tools & Calculators"} 
          links={[]}/>

        </div>

      </div>

      <div className="light-blue"></div>
      <div className="dark-blue"></div>
      
    </footer>
  )
}

export default Footer
