import React from 'react'
import './Section6.css'
import Servicebox from './Servicebox'
import onlinePaySideImg from '../../../images/online-pay.jpg'
import shopPaymentsSideImg from '../../../images/shop-payments.jpg'

function Section6() {
  return (
    <section className='section6-wrapper'>
        <h1>Business Services by TrustPay</h1>
        
        <div className='section6-container'>

            <Servicebox 
            sideImageURL={onlinePaySideImg}
            heading={"Accept payments online with ease."}
            para={"Grow your business with the payment gateway that powers India's largest brands and even the TrustPay App."}/>

            <Servicebox 
            sideImageURL={shopPaymentsSideImg}
            heading={"In-shop payments powered by TrustPay."}
            para={"Millions of small & big businesses use TrustPay to accept payments anywhere any time with a wide range of solutions for all kind of merchants."}/>

        </div>
    </section>
  )
}

export default Section6
