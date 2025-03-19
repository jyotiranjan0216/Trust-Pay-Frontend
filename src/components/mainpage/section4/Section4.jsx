import React from 'react'
import './Section4.css'
import Megacard from './Megacard'
import Minicard from './Minicard'
import trustpayWalletImg from '../../../images/trustpay-wallet.png'
import UpiMoneyTransferImg from '../../../images/upi-money-transfer.png'
import sbiCardImg from '../../../images/sbi-bank-select-card.webp'
import hdfcCardImg from '../../../images/hdfc-bank-select-card.webp'
import trustpayMainLogo from '../../../images/main-logo.png'
import payNowImg from '../../../images/pay-now.jpg'
import payAndEnjoyImg from '../../../images/pay-and-enjoy.jpg'
import paymentSuccessfulImg from '../../../images/paid-successfully-250.webp'
import payWhileShoppingImg from '../../../images/pay-while-shopping.avif'
import {data} from '../../../state'

function Section4() {
  const {megacard} = data;
  return (
    <section className='section4-wrapper'>

      <h1>TrustPay Payment Instruments</h1>

      <div className='section4-container'>

        {megacard.map((card, index) => <Megacard key={index} iconURL={card.iconURL} iconLabel={card.iconLabel} heading={card.heading} para={card.para} sideImageURL={card.sideImageURL} />)}

        <div className="mini-card-row">
          <Minicard
            bankIconURL={trustpayMainLogo}
            heading={"Unlimited Cashback Every time"}
            para={"TrustPay HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers."}
            bankCardURL={hdfcCardImg} />

          <Minicard
            bankIconURL={trustpayMainLogo}
            heading={"India’s Most Sincere Credit Card"}
            para={"TrustPay SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire."}
            bankCardURL={sbiCardImg}
          />
        </div>

      </div>
    </section>
  )
}

export default Section4
