import React from 'react'
import './Section1.css'
import logo from '../../../images/trustpay-logo2.png'
import logo2 from '../../../images/section1-image.jpg'
import { useNavigate } from 'react-router-dom'

function Section1() {
    const navigate = useNavigate();

    return (
        <section className='section1-wrapper'>

            <div className="message">
                <p><span className='text-bold'>No Wallet KYC Required</span></p>
                <span className='emoji'>😊</span>
                <p>to pay using UPI on TrustPay. <a href="#" className="text-bold hover:underline">Learn more.</a></p>
            </div>

            <div className="section1-container">

                <div className="section1-message">
                    <img src={logo} />
                    <h1>India's Most-loved Payments App</h1>
                    <p>Recharge & pay bills, book flights & movie tickets,
                        open a savings account, invest in stocks & mutual
                        funds, and do a lot more.</p>
                    <div className="flex gap-5 py-10">
                        <button onClick={() => {
                            navigate('/signup')
                        }} type="button" className="border hover:border-black text-white bg-blue-600 hover:bg-blue-100 hover:text-black rounded-lg text-lg w-40 h-12 border-box">Sign Up</button>
                        <button onClick={() => {
                            navigate('/signin');
                        }} type="button" className="border hover:border-2 hover:border-black text-white bg-slate-800 hover:bg-slate-200 hover:text-black rounded-lg text-lg w-40 h-12">Sign In</button>
                    </div>

                </div>

                <div className='section1-image'>
                    <img src={logo2}/>
                </div>

            </div>

        </section>
    )
}

export default Section1
