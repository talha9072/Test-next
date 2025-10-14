"use client"
import HeaderFour from "@/components/layout/headers/header/header-four";
import Banner from "./banner";
import Footer from "@/components/layout/footers/footer";
import FeaturedPost from "./featured";
import Otherpost from "./other-posts";
import BlogLayout from "../blog/blog-layout";
import CTA from '@/components/data/cta';
// import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogGrid = () => {
    return (
        <>
            <HeaderFour />
            <Banner />
            <BlogLayout />
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