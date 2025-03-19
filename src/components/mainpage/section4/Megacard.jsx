import React from 'react'
import './Megacard.css'
import '../learn_more/LearnButton'
import LearnButton from '../learn_more/LearnButton'
import {useNavigate} from 'react-router-dom'

function Megacard({ iconURL, iconLabel, sideImageURL, heading, para, learn, largeicon }) {
    const navigate = useNavigate();
    return (
        <div className="card-container">

            <div className="card-msg">
                <div className="card-icon">
                    <img src={iconURL} alt="webpage image" data-largeicon={largeicon} />
                    <p>{iconLabel}</p>
                </div>

                <div className="card-text">
                    <h1>{heading}</h1>
                    <p>{para}</p>
                </div>

                {learn ? <LearnButton /> : <button onClick={() => {
                    navigate('/signup');
                }} className="bg-blue-500 hover:bg-blue-700 text-white w-32 font-bold py-2 px-4 rounded">Signup
                </button>}
            </div>

            <div className="card-picture">
                <img src={sideImageURL} alt="webpage image" />
            </div>

        </div>
    )
}

export default Megacard
