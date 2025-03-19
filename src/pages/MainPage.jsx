import Navigation from '../components/mainpage/navigation/Navigation'
import Section1 from '../components/mainpage/section1/Section1'
import Section2 from '../components/mainpage/section2/Section2'
import Section3 from '../components/mainpage/section3/Section3'
import Section4 from '../components/mainpage/section4/Section4'
import Section5 from '../components/mainpage/section5/Section5'
import Section6 from '../components/mainpage/section6/Section6'
import Section7 from '../components/mainpage/section7/Section7'
import Section8 from '../components/mainpage/section8/Section8'
import Footer from '../components/mainpage/footer/Footer'
import ScrollToTop from "react-scroll-to-top";

export function MainPage() {
    return (
        <>
            <Navigation />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Footer />
            <ScrollToTop width="40px" style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"var(--light-blue)",padding:"10px 10px", fontWeight:"bold"}} smooth />
        </>
    )
}