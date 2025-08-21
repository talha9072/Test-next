"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import Footer from "@/components/layout/footers/footer";
import Banner from "./banner";
import About from "./about";
import MainServices from "./main-services";  
import WhyChoose from "./WhyChoose";
import ProductsCarousel from "./product";
import Tab1 from "./tab-1";
import Testimonials from "./testimonials";
import QuickLinks from "./quicklinks";
import CTA from '@/components/data/cta';
// import ScrollToTop from "../../common/scroll/scroll-to-top";

const HomeFour = () => {
    return (
        <div>
            <HeaderFour />
            <Banner />
            <About />
            <MainServices />      
            <ProductsCarousel />
            <Tab1 />
            <WhyChoose />
            <Testimonials />
            <QuickLinks />
           <CTA
                bgImage="/assets/img/cta-bg.webp"
                heading="Need a solution? Request a call!"
                subText="For pricing information about services simply complete the form below and one of our sales professionals will contact you within one business day."
                buttonText="Get in Touch"
                buttonHref="/contact"
            />
            <Footer />
            {/* <ScrollToTop /> */}
        </div>
    );
};

export default HomeFour;