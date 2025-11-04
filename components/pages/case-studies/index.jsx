"use client"
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroContactSection from "@/components/layout/hero-section";
import Footer from "@/components/layout/footers/footer";
import FeaturedPost from "./featured";
import Otherpost from "./other-posts";
import CTA from '@/components/data/cta';
// import ScrollToTop from "../common/scroll/scroll-to-top";


const BlogGrid = () => {
    return (
        <>
            <HeaderFour />
            <HeroContactSection
  title="Let’s Create Your Success Story"
  line1="Ready to achieve measurable results like our clients?"
  line2="Connect with NOVUM to start your next transformation journey today."
  bgColor="var(--primary-color-1)"
  paddingY="50px"
/>
            <FeaturedPost />
            <Otherpost />
             <CTA
                                    bgImage="/assets/img/cta-bg.png"
                                    heading="Ready to Upgrade Your Aerospace or Transportation Operations?"
                                    subText="Speak with Novum’s specialists to learn how cloud and data solutions can enhance your logistics, safety, and service performance.
                                             Book a consultation today."
                                    buttonText="Get in Touch"
                                    buttonHref="/contact"
                                />
            <Footer />
            {/* <ScrollToTop /> */}

        </>
    );
};

export default BlogGrid;