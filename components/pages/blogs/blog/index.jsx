"use client"
import HeaderFour from "@/components/layout/headers/header/header-four";
import Footer from "@/components/layout/footers/footer";
import BlogLayout from "../blog/blog-layout";
import Widget from "@/components/widget/widget";
import CTA from '@/components/data/cta';
// import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogGrid = () => {
    return (
        <>
            <HeaderFour />
            
            <BlogLayout />
             <CTA
                                    bgImage="/assets/img/cta-bg.png"
                                    heading="Need a solution? Request a call!"
                                    subText="For pricing information about services simply complete the form below and one of our sales professionals will contact you within one business day."
                                    buttonText="Get in Touch"
                                    buttonHref="/contact"
                                />
            <Widget />
            <Footer />
            {/* <ScrollToTop /> */}

        </>
    );
};

export default BlogGrid;