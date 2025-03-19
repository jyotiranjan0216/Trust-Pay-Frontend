import {useSearchParams, useNavigate } from "react-router-dom"
import { Balance } from "../components/Balance"
import axios from "axios"
import {Signup} from './Signup';
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

import { UserSearchAndDisplay } from "../components/UserSearchAndDisplay"
import Section2 from "../components/mainpage/section2/Section2";
import Section3 from "../components/mainpage/section3/Section3";
import Section7 from "../components/mainpage/section7/Section7";
import Section8 from "../components/mainpage/section8/Section8";
import Footer from "../components/mainpage/footer/Footer";
export function Dashboard() {
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState("");
    const [userBalance, setUserBalance] = useState(0.0);
    const jwtToken = localStorage.getItem("token");
    console.log(`current logged in user ID: ${jwtToken}`);

    if(!jwtToken) {
        return (
            <Signup />
        )
    }
    else {
        // verifying jwtToken and getting token user data.
        useEffect(() => {
            try {
                axios
                .get(`https://trust-pay-backend-lx2m.onrender.com/api/v1/user/verifytoken?jwtToken=${jwtToken.split(' ')[1]}`)
                .then((response) => {
                    console.log(`response.data.userId: ${response.data.userId}`);
                    axios
                    .get(`https://trust-pay-backend-lx2m.onrender.com/api/v1/user/finduser?id=${response.data.userId}`)
                    .then((res) => {
                        setLoggedInUser(() => res.data.user);
                    })
                })
            }
            catch(err) {
                console.log("Error while verifying jwtoken in dashboard");
            }
        }, []);

        // getting logged in user balance.
        useEffect(() => {
            try {
                axios
                .get(`https://trust-pay-backend-lx2m.onrender.com/api/v1/account/balance`, {
                    headers: {
                        'Authorization': jwtToken,  // Sending a JWT token
                    }
                })
                .then((response) => {
                    setUserBalance(() => response.data.balance);
                    console.log(`balance ${response.data.balance}`);
                })
            }
            catch(err) {
                console.log("Error while getting logged in user balance in dashboard");
            }
        }, []);

        console.log(`local storage token: ${localStorage.getItem("token")}`);
        
        return (
            <>
            <div className="h-screen flex flex-col gap-7">
                <Navbar firstName={loggedInUser.firstName}/>
                <Balance userBalance={userBalance} />
                <UserSearchAndDisplay loggedInUser={loggedInUser} userBalance={userBalance} />
            </div>
            <Section2 />
            <Section3 />
            <Section7 />
            <Section8 />
            <Footer />
            </>
        )
    }
}