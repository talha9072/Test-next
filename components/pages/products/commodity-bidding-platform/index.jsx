"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import KeyFeaturesSection from "@/components/data/products/KeyFeaturesSection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const Nes = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
        bgImage="/assets/img/main-product/bidding-hero.png"
        icon="/assets/img/main-product/bidding.png"
        title="Commodity Bidding Platform"
        borderColorStart="#123558"
        borderColorEnd="#2374FF"
        />
        
        <SoftwareSolutionsSection
        title={`Revolutionize Commodity Trading with Our Bidding Platform`}
        paragraphs={[
            "Novum’s Commodity Bidding Platform enables transparent, real-time bidding across multiple commodities in a secure digital environment. Empower buyers and sellers with automated workflows, live pricing, and data-driven insights to drive smarter trading decisions and maximize market reach.",
        ]}
        imageSrc="/assets/img/main-product/bid-1.png"
        altText="Digital Commodity Bidding Platform Interface"
        />
        

        <section className="position-relative overflow-hidden py-5">
        <div className="container">
            <div className="row align-items-center g-5">

            {/* Left Text */}
            <div className="col-lg-7 position-relative">
                <h2 className="fw-700 text-dark-gray mb-4 lh-sm">
                Power Smarter Commodity Trading <br />
                with Intelligent Bidding
                </h2>

                <p className="mb-4">
                Novum’s Commodity Bidding Platform streamlines trade execution with real-time auctions, instant bid validation, and seamless seller-buyer communication. Whether it's agri-products, metals, or bulk materials—get transparent pricing and efficient order fulfillment.
                </p>

                {/* Icon + Text List */}
                <div className="d-flex mb-4">
                <div className="me-3">
                    <div
                    className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 40, height: 40 }}
                    >
                    <i className="bi bi-lightning-charge-fill"></i>
                    </div>
                </div>
                <div>
                    <h6 className="fw-semibold mb-1">Live Bidding & Auction Engine</h6>
                    <p className="mb-0">
                    Run real-time commodity auctions with instant bid placement, updates, and finalization.
                    </p>
                </div>
                </div>

                <div className="d-flex mb-4">
                <div className="me-3">
                    <div
                    className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 40, height: 40 }}
                    >
                    <i className="bi bi-cash-coin"></i>
                    </div>
                </div>
                <div>
                    <h6 className="fw-semibold mb-1">Transparent Price Discovery</h6>
                    <p className="mb-0">
                    Enable competitive, market-driven pricing through verified, visible bidding activity.
                    </p>
                </div>
                </div>

                <div className="d-flex mb-4">
                <div className="me-3">
                    <div
                    className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 40, height: 40 }}
                    >
                    <i className="bi bi-graph-up-arrow"></i>
                    </div>
                </div>
                <div>
                    <h6 className="fw-semibold mb-1">Bid Analytics & History</h6>
                    <p className="mb-0">
                    View buyer participation trends, average bid values, and product-wise interest to optimize strategy.
                    </p>
                </div>
                </div>

                <div className="d-flex">
                <div className="me-3">
                    <div
                    className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 40, height: 40 }}
                    >
                    <i className="bi bi-diagram-3"></i>
                    </div>
                </div>
                <div>
                    <h6 className="fw-semibold mb-1">Seamless Seller Onboarding</h6>
                    <p className="mb-0">
                    Easily onboard new sellers, verify credentials, and allow instant product listing for bidding.
                    </p>
                </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 text-center">
                <img
                src="/assets/img/main-product/bid-2.png"
                alt="Commodity Bidding Platform Interface"
                className="img-fluid rounded shadow-lg"
                />
            </div>

            </div>
        </div>
        </section>

        <section className="py-5">
        <div className="container">
            <div className="row justify-content-center mb-4">
            <div className="col-lg-6 col-md-8 text-center">
                <h2 className="fw-700 text-dark-gray mb-4">Tailored Bidding for Diverse Industries</h2>
                <p className="mb-0">Our Commodity Bidding Platform is adaptable across sectors — empowering enterprises, logistics providers, and manufacturers with smart, transparent procurement. Streamline sourcing, boost competitiveness, and ensure compliance effortlessly.</p>
            </div>
            </div>
            <div className="row">
            <div className="col tab-style-03">
                <ul className="nav nav-tabs justify-content-center text-center fw-500 border-color-light-medium-gray mb-5" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#tab_third1" role="tab">Enterprises & Corporates</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab_third2" role="tab">Transport & Logistics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab_third3" role="tab">Manufacturing & Processing</a>
                </li>
                </ul>

                <div className="tab-content">
                {/* Enterprises & Corporates */}
                <div className="tab-pane fade show active" id="tab_third1" role="tabpanel">
                    <div className="row align-items-center justify-content-center g-0">
                    <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                        <figure className="mb-0">
                        <img src="/assets/img/main-product/bid-3.png" alt="Enterprises Bidding" className="w-95 rounded mb-3" />
                        </figure>
                    </div>
                    <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                        <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                        Smarter Sourcing for Large Enterprises
                        </h3>
                        <p className="mb-4 w-95 sm-w-100">
                        Optimize large-scale procurement with rule-based bidding, supplier performance insights, and audit trails. Our platform enables corporates to reduce costs, speed up approvals, and build a stronger supplier network with complete visibility.
                        </p>
                        <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                        <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                        </a>
                    </div>
                    </div>
                </div>

                {/* Transport & Logistics */}
                <div className="tab-pane fade" id="tab_third2" role="tabpanel">
                    <div className="row align-items-center justify-content-center g-0">
                    <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                        <figure className="mb-0">
                        <img src="/assets/img/main-product/bid-4.png" alt="Logistics Procurement" className="w-95 rounded mb-3" />
                        </figure>
                    </div>
                    <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                        <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                        Competitive Freight & Route Bidding
                        </h3>
                        <p className="mb-4 w-95 sm-w-100">
                        Enable shippers and transporters to bid transparently on lanes and contracts. Our bidding engine ensures cost optimization, fair competition, and seamless integration with fleet and route management systems.
                        </p>
                        <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                        <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                        </a>
                    </div>
                    </div>
                </div>

                {/* Manufacturing & Processing */}
                <div className="tab-pane fade" id="tab_third3" role="tabpanel">
                    <div className="row align-items-center justify-content-center g-0">
                    <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                        <figure className="mb-0">
                        <img src="/assets/img/main-product/bid-5.png" alt="Raw Material Bidding" className="w-95 rounded mb-3" />
                        </figure>
                    </div>
                    <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                        <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                        Streamlined Raw Material Procurement
                        </h3>
                        <p className="mb-4 w-95 sm-w-100">
                        Manage sourcing of commodities like steel, grains, or chemicals through centralized, criteria-based bidding. Minimize delays, reduce vendor fraud, and access historical bid analytics to plan future purchases more effectively.
                        </p>
                        <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                        <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                {/* /tab-content */}
            </div>
            </div>
        </div>
        </section>


        {/* Cards */}
        <section className="py-5 about__four" id="ms-guidance-cards">
            <div className="container">
                {/* Heading + intro */}
                <div className="mb-4 mb-md-5 text-center">
                <h2 className="fw-700 text-dark-gray mb-4">
                    Built to Power Fast, Fair & Flexible Commodity Auctions
                </h2>
                <p className="mb-0">
                    From listing to finalization, our platform streamlines the entire bidding lifecycle—helping buyers and sellers execute trades confidently, transparently, and in real time.
                </p>
                <div
                    className="mx-auto mt-3"
                    style={{ width: "80px", height: "3px", backgroundColor: "#0D2B75" }}
                />
                </div>

                {/* 4 cards */}
                <div className="row g-4">
                {/* Listing Manager */}
                <div className="col-12 col-md-6 col-lg-3">
                    <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                        <img
                        src="/assets/img/main-product/bid-6.png"
                        alt="Commodity Listing"
                        className="w-100 h-100 p-2 rounded-5"
                        style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                        <h3 className="h4 fw-bold mb-2">AI-Based Commodity Listing Engine</h3>
                        <p className="mb-4">
                        Sellers list products with full specs, reserve pricing, and eligibility conditions for more informed bidding.
                        </p>
                        
                    </div>
                    </article>
                </div>

                {/* Real-Time Bidding */}
                <div className="col-12 col-md-6 col-lg-3">
                    <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                        <img
                        src="/assets/img/main-product/bid-7.png"
                        alt="Live Bidding"
                        className="w-100 h-100 p-2 rounded-5"
                        style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                        <h3 className="h4 fw-bold mb-2">Real-Time Bidding with Auto Validation</h3>
                        <p className="mb-4">
                        Dynamic auction interface supports instant bidding, bid validation, and rule-based prioritization.
                        </p>
                        
                    </div>
                    </article>
                </div>

                {/* Insights Dashboard */}
                <div className="col-12 col-md-6 col-lg-3">
                    <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                        <img
                        src="/assets/img/main-product/bid-8.png"
                        alt="Bidding Dashboard"
                        className="w-100 h-100 p-2 rounded-5"
                        style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                        <h3 className="h4 fw-bold mb-2">Auction Insights & Market Analytics</h3>
                        <p className="mb-4">
                        Real-time dashboards deliver price trends, bid behavior, and competition insights to all stakeholders.
                        </p>
                        
                    </div>
                    </article>
                </div>

                {/* Result & Reporting */}
                <div className="col-12 col-md-6 col-lg-3">
                    <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                        <img
                        src="/assets/img/main-product/bid-9.png"
                        alt="Auction Reports"
                        className="w-100 h-100 p-2 rounded-5"
                        style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                        <h3 className="h4 fw-bold mb-2">Auto-Finalization & Audit-Ready Reports</h3>
                        <p className="mb-4">
                        Platform auto-selects winners and generates tamper-proof reports for full transparency and compliance.
                        </p>
                        
                    </div>
                    </article>
                </div>
                </div>
            </div>
        </section>


        <section className="py-5 bg-white position-relative">
            <div className="container text-center">
                {/* Section Heading */}
                <h2 className="fw-700 text-dark-gray mb-4">
                Trusted by Industry Leaders for Transparent Commodity Auctions
                </h2>

                {/* Decorative Quote Icon */}
                <div className="mb-4">
                <i className="bi bi-chat-quote-fill text-novum-blue" style={{ fontSize: "2.5rem" }}></i>
                </div>

                {/* Testimonial */}
                <blockquote className="fs-5 mx-auto" style={{ maxWidth: "800px" }}>
                “Implementing Novum’s Commodity Bidding Platform drove a <strong>32% improvement in procurement speed</strong> and reduced supply chain costs by <strong>18%</strong> in under two quarters. The live bidding UI and auto-generated audit reports elevated our transparency and efficiency—industry game-changers.”
                </blockquote>

                {/* Attribution */}
                <p className="text-dark fw-semibold mt-4 mb-0">
                — Head of Procurement, Global Logistics Enterprise
                </p>
            </div>
        </section>
        
      
        <WhySection
            heading="Why Leading Enterprises Choose Our Commodity Bidding Platform"
            subheadingLines={[
                "Digitize, streamline, and secure every step of your commodity procurement process.",
                "From real-time bidding to audit-ready reporting, our platform delivers unmatched speed, transparency, and compliance.",
            ]}
            imgSrc="/assets/img/main-product/bid-10.png"
            imgAlt="Commodity Bidding Platform Dashboard"
            cards={[
                {
                iconClass: "bi bi-card-list text-novum-blue",
                title: "Dynamic Listing Management",
                text: "Easily upload commodity specs, reserve prices, and bidding windows—all within a centralized dashboard.",
                },
                {
                iconClass: "bi bi-graph-up-arrow text-novum-blue",
                title: "Live Bidding with Auto Validation",
                text: "Ensure fairness with real-time bid tracking, duplicate prevention, and instant compliance checks.",
                },
                {
                iconClass: "bi bi-people text-novum-blue",
                title: "Multi-Stakeholder Participation",
                text: "Invite verified vendors or buyers to participate securely with access controls and bidding limits.",
                },
                {
                iconClass: "bi bi-clock-history text-novum-blue",
                title: "Auto-Closing & Result Finalization",
                text: "Automatically close auctions based on time or rules and instantly declare winners without manual steps.",
                },
                {
                iconClass: "bi bi-journal-check text-novum-blue",
                title: "Audit-Ready Transaction Logs",
                text: "Maintain tamper-proof records of each bid with timestamps, identities, and bid outcomes for compliance.",
                },
                {
                iconClass: "bi bi-pie-chart text-novum-blue",
                title: "Performance & Price Insights",
                text: "Get real-time analytics on bidding behavior, price trends, and vendor participation to guide future deals.",
                },
            ]}
        />
       

        <CTA
            bgImage="/assets/img/cta-bg.webp"
            heading="Ready to Streamline Your Commodity Bidding Process?"
            subText="Digitize procurement, improve price discovery, and ensure compliance with our powerful, real-time bidding platform — trusted by leading enterprises."
            buttonText="Request a Demo"
            buttonHref="/contact"
        />

      <Footer />
    </div>
  );
};

export default Nes;