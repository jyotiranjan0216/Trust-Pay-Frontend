import React from 'react'
import logo from '../../../images/trustpay-logo.png'
import './Navigation.css'
import { useNavigate } from "react-router-dom";
import profileBlackBgLogo from '../../../images/profile-logo.svg'
import profileBlueBgLogo from '../../../images/profile-logo-blue-bg.svg'


function Navigation() {
    const navigate = useNavigate();
    const handleHoverEnter = () => {
        document.getElementById("userIcon").src = profileBlueBgLogo
    }

    const handleHoverLeave = () => {
        document.getElementById("userIcon").src = profileBlackBgLogo
    }

    return (
        <div className='navigation'>

            {/* hamburger Menu */}
            <button className="hamburger-nav">
                &#9776;
            </button>

            <a href="#" className="logo"><img src={logo} alt="image of TrustPay logo" width={100} /></a>

            <div className="nav-items">
                <a href="#" className="nav-item">TrustPay for Consumer</a>
                <a href="#" className="nav-item">TrustPay for Business</a>
                <a href="#" className="nav-item">Investor Relations</a>
                <a href="#" className="nav-item">Company</a>
                <a href="#" className="nav-item">Career</a>
            </div>

            <button onClick={() => {
                navigate('/signin');
            }} className='sign-in' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>Sign In <img id="userIcon" src={profileBlackBgLogo} alt="User icon" /></button>
        </div>
    )
}

export default Navigation