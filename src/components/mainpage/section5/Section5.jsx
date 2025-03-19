// import React from 'react'
import './Section5.css'
import Megabox from './Megabox'
import logo from '../../../images/main-logo.png'
import stocksAndFundslogoImg from '../../../images/stocks-and-funds.png'
import sideImg from '../../../images/sincere-bank.jpg'
import savingImg from '../../../images/long-term-saving.jpg'
import insuranceIconImg from '../../../images/trustpay-insurance.png'
import insuranceSideImg from '../../../images/insurance.jpg'
import personalLoanSideImg from '../../../images/personal-loan.jpg'
import graySpikeImg from '../../../images/gray-spike.avif'
import personalLoanImg from '../../../images/personal-loan.png'

// function Section5() {
//     return (
//         // <section className='section5-wrapper'>

//         //     <h1>Financial Services by TrustPay</h1>

//         //     <div className="cont-wrapper" style={{ background: "white" }}>
//         //         <div className="section5-container">
//         //             <Megabox
//         //                 iconURL={logo}
//         //                 heading={"India's most sincere bank."}
//         //                 para={"TrustPay Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today."}
//         //                 sideImageURL={sideImg} />
//         //         </div>
//         //     </div>

//         //     <div className="cont-wrapper" style={{ backgroundImage: {graySpikeImg}, backgroundSize: "cover", backgroundClip: "content-box", backgroundColor: "#f5f7fa" }}>
//         //         <div className="section5-container">
//         //             <Megabox
//         //                 iconURL={stocksAndFundslogoImg}
//         //                 heading={"Build Long-term Wealth & Achieve your Goals."}
//         //                 para={"Investing on TrustPay Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams."}
//         //                 sideImageURL={savingImg}
//         //                 right={true} />
//         //         </div>
//         //     </div>

//         //     <div className="cont-wrapper" style={{ background: "white" }}>
//         //         <div className="section5-container">
//         //             <Megabox
//         //                 iconURL={insuranceIconImg}
//         //                 heading={"Insurance made easy."}
//         //                 para={"Buying insurance does not have to be tedious, time-consuming & confusing. TrustPay Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand."}
//         //                 sideImageURL={insuranceSideImg} />
//         //         </div>
//         //     </div>

//         //     <div className="cont-wrapper" style={{ background: "#f5f7fa" }}>
//         //         <div className="section5-container">
//         //             <Megabox
//         //                 iconURL={personalLoanImg}
//         //                 heading={"Get a Personal Loan in 2 Minutes."}
//         //                 para={"TrustPay offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless."}
//         //                 sideImageURL={personalLoanSideImg}
//         //                 right={true} />
//         //         </div>
//         //     </div>


//         // </section>




//     )
// }

// export default Section5


// import React, { useState } from 'react';

// const Carousel = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const totalSlides = 4;

//     const slides = [
//         <Megabox
//             iconURL={logo}
//             heading={"India's most sincere bank."}
//             para={"TrustPay Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today."}
//             sideImageURL={sideImg} />,
//         <Megabox
//             iconURL={stocksAndFundslogoImg}
//             heading={"Build Long-term Wealth & Achieve your Goals."}
//             para={"Investing on TrustPay Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams."}
//             sideImageURL={savingImg}
//             right={true} />,
//         <Megabox
//             iconURL={insuranceIconImg}
//             heading={"Insurance made easy."}
//             para={"Buying insurance does not have to be tedious, time-consuming & confusing. TrustPay Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand."}
//             sideImageURL={insuranceSideImg} />,
//         <Megabox
//             iconURL={personalLoanImg}
//             heading={"Get a Personal Loan in 2 Minutes."}
//             para={"TrustPay offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless."}
//             sideImageURL={personalLoanSideImg}
//             right={true} />,
//     ];

//     const handlePrev = () => {
//         setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setActiveIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
//     };

//     const goToSlide = (index) => {
//         setActiveIndex(index);
//     };

//     return (
//         <div className="flex justify-center">
//             <div className="relative flex justify-center w-1/2">
//                 {/* Carousel wrapper */}
//                 <div className="relative h-56 w-1/2 overflow-hidden rounded-lg md:h-96" data-carousel="slide">
//                     {slides.map((slide, index) => (
//                         <div
//                             key={index}
//                             className={`absolute block w-full transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'
//                                 }`}
//                             style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//                         >
//                             {slide}
//                         </div>
//                     ))}
//                 </div>
//                 {/* Slider indicators */}
//                 <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//                     {slides.map((_, index) => (
//                         <button
//                             key={index}
//                             type="button"
//                             className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-gray-400'}`}
//                             aria-current={activeIndex === index}
//                             aria-label={`Slide ${index + 1}`}
//                             onClick={() => goToSlide(index)}
//                         ></button>
//                     ))}
//                 </div>
//                 {/* Slider controls */}
//                 <button
//                     type="button"
//                     className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                     onClick={handlePrev}
//                 >
//                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                         <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
//                         </svg>
//                         <span className="sr-only">Previous</span>
//                     </span>
//                 </button>
//                 <button
//                     type="button"
//                     className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                     onClick={handleNext}
//                 >
//                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                         <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
//                         </svg>
//                         <span className="sr-only">Next</span>
//                     </span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Carousel;



import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../../Carousel.css'

const CustomCarousel = () => {
    const slides = [
        <Megabox
            iconURL={logo}
            heading={"India's most sincere bank."}
            para={"TrustPay Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today."}
            sideImageURL={sideImg} />,
        <Megabox
            iconURL={stocksAndFundslogoImg}
            heading={"Build Long-term Wealth & Achieve your Goals."}
            para={"Investing on TrustPay Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams."}
            sideImageURL={savingImg}
            right={true} />,
        <Megabox
            iconURL={insuranceIconImg}
            heading={"Insurance made easy."}
            para={"Buying insurance does not have to be tedious, time-consuming & confusing. TrustPay Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand."}
            sideImageURL={insuranceSideImg} />,
        <Megabox
            iconURL={personalLoanImg}
            heading={"Get a Personal Loan in 2 Minutes."}
            para={"TrustPay offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless."}
            sideImageURL={personalLoanSideImg}
            right={true} />,
    ];

    return (
        <div className="bg-[#5CADFF]">
            <h1 className="text-5xl mx-72">Financial Services by TrustPay</h1>
            <div className=" relative flex flex-col justify-center items-center">
                <div className="rounded-lg w-2/3 h-1/3 bg-white my-10">
                    <Carousel className="w-full"
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay
                        showStatus={false}
                        showArrows={true}
                        interval={3000}
                    >
                        {slides.map((slide, index) => (
                            <div className="px-24" key={index}>
                                {slide}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default CustomCarousel;
