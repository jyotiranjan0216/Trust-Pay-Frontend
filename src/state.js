import movieImg from './images/movie-ticket.png'
import flightImg from './images/flight-ticket.png'
import busImg from './images/bus-ticket.png'
import trainImg from './images/train-ticket.png'
import insuranceImg from './images/buy-insurance.png'
import interFlightsImg from './images/international-flights.png'

import prepaidRechargeImg from './images/recharge-prepaid-mobile.png'
import electricityBillImg from './images/electricity-bill.png'
import dthRechargeImg from './images/dth-recharge.png'
import broadbandImg from './images/broadband.png'
import educationFeeImg from './images/education-fee.png'
import PaymentServcesImg from './images/payment-services.png'
import gasCylinerImg from './images/gas-cylinder.png'

import trustpayWalletImg from './images/trustpay-wallet.png'
import UpiMoneyTransferImg from './images/upi-money-transfer.png'
// import sbiCardImg from './images/sbi-bank-select-card.webp'
// import hdfcCardImg from './images/hdfc-bank-select-card.webp'
// import trustpayMainLogo from './images/main-logo.png'
import payNowImg from './images/pay-now.jpg'
import payAndEnjoyImg from './images/pay-and-enjoy.jpg'
import paymentSuccessfulImg from './images/paid-successfully-250.webp'
import payWhileShoppingImg from './images/pay-while-shopping.avif'

import posBillingImg from './images/pos-billing-software.webp'
import businessAppImg from './images/business-app.jpg'
import advertiseBusinessImg from './images/advertise-business.avif'
import khataBookImg from './images/khata-book.jpg'

import bullStocksImg from './images/bull-stocks.webp'
import IpoImg from './images/ipo-img.webp'
import InvestInETFsImg from './images/invest-in-ETFs.webp'
import buyGoldImg from './images/buy-gold.webp'
import InvestInMutalFundsImg from './images/invest-in-mutual-funds.webp'
import welcomeFlightCouponImg from './images/welcome-flight-coupon.webp'
import RefundCancellationProtectImg from './images/refund-cancellation-protect.webp'
import happyBusCouponImg from './images/happybus-coupon.webp'
import protectionSanitizedBusImg from './images/protection-sanitized-bus.webp'
import trainTicketBookingsImg from './images/train-ticket-bookings.webp'
import pnrStatusCheckImg from './images/pnr-status.webp'






const servicesState = [
    {
        imgURL: prepaidRechargeImg,
        cardMessage: ["Recharge", "Prepaid", "Mobile"]
    },
    {
        imgURL: electricityBillImg,
        cardMessage: ["Pay", "Electricity", "Bill"]
    },
    {
        imgURL: dthRechargeImg,
        cardMessage: ["Recharge", "DTH", "Connection"]
    },
    {
        imgURL: gasCylinerImg,
        cardMessage: ["Book", "Gas", "Cylinder"]
    },
    {
        imgURL: broadbandImg,
        cardMessage: ["Pay", "Broadband &", "Landline Bill"]
    },
    {
        imgURL: educationFeeImg,
        cardMessage: ["Pay", "Education", "Fee"]
    },
    {
        imgURL: PaymentServcesImg,
        cardMessage: ["All", "Payment", "Services"]
    },
];


const bookBuyState = [
    {
        bgcolor: "dark",
        imgURL: movieImg,
        cardMessage: ["Movie", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: flightImg,
        cardMessage: ["Movie", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: movieImg,
        cardMessage: ["Flight", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: busImg,
        cardMessage: ["Bus", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: trainImg,
        cardMessage: ["Train", "Tickets"]
    },
    {
        bgcolor: "dark",
        imgURL: interFlightsImg,
        cardMessage: ["International", "Flights"]
    },
    {
        bgcolor: "dark",
        imgURL: insuranceImg,
        cardMessage: ["Invest", "In Stocks"]
    },
];


const megacard = [
    {
        iconURL: trustpayWalletImg,
        iconLabel: "TrustPay Wallet",
        heading: "The Fastest Way to Pay In-store & Online.",
        para: "Load up your TrustPay Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps.",
        sideImageURL: payAndEnjoyImg
    },
    {
        iconURL: UpiMoneyTransferImg,
        iconLabel: "UPI Money Transfer",
        heading: "Pay anyone directly from your bank account.",
        para: "Pay anyone, everywhere. Make contactless & secure payments in-stores or online using TrustPay Wallet or Directly from your Bank Account. Plus, send & receive money from anyone.",
        sideImageURL: paymentSuccessfulImg,
    },
    {
        iconURL: payNowImg,
        iconLabel: "",
        heading: "Want it? No more waiting for it.",
        para: "With TrustPay Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month.",
        sideImageURL: payWhileShoppingImg,
    },
];



const longCard = [
    {
        imgURL: posBillingImg,
        heading: "POS Billing Software",
        para: "Say Hello to Smart Retail Business Management"
    },
    {
        imgURL: businessAppImg,
        heading: "TrustPay for Business App",
        para: "Everything you need to manage your business on your phone"
    },
    {
        imgURL: advertiseBusinessImg,
        heading: "Advertise on TrustPay",
        para: "Grow your business by advertising on India’s largest mobile business"
    },
    {
        imgURL: khataBookImg,
        heading: "Business Khata",
        para: "Managing Khata made easy"
    },
];

const investcard = [
    {
        imgURL: bullStocksImg,
        heading: "Invest in Stocks"
    },
    {
        imgURL: IpoImg,
        heading: "Apply for IPO"
    },
    {
        imgURL: InvestInETFsImg,
        heading: "Invest in ETFs"
    },
    {
        imgURL: buyGoldImg,
        heading: "Buy Gold"
    },
    {
        imgURL: InvestInMutalFundsImg,
        heading: "Invest in Mutual Funds"
    },
];

const offercard = [
    {
        imgURL: welcomeFlightCouponImg,
        heading: "Flat 14% Cashback With Code WELCOMEFLIGHT"
    },
    {
        imgURL: RefundCancellationProtectImg,
        heading: "100% Refund With TrustPay's Cancellation Protect"
    },
    {
        imgURL: happyBusCouponImg,
        heading: "Flat 10% Cashback With Code HAPPYBUS"
    },
    {
        imgURL: protectionSanitizedBusImg,
        heading: "Sanitised Bus Options With TravelSafe+"
    },
    {
        imgURL: trainTicketBookingsImg,
        heading: "Hassle Free Train Ticket Bookings"
    },
    {
        imgURL: pnrStatusCheckImg,
        heading: "PNR Status Check In Few Simple Clicks"
    },
];

export const data = { servicesState, bookBuyState, megacard, longCard, investcard, offercard }