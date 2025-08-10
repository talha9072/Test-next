"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import BlogSingleMain from "./blog-details";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const BlogDetails = ({singleData}) => {
    const firstThreeWords = singleData?.title.split(' ').slice(0, 3).join(' ') + '...';
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <HeaderOne />
            <BreadCrumb title={firstThreeWords} innerTitle={singleData?.title} />
            <BlogSingleMain singleData={singleData}/>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default BlogDetails;