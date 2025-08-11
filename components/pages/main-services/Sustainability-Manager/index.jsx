"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import WhySection from "@/components/data/services/WhySection";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const Sustainability = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/sustainability/Sustainability-hero.webp"
            icon="/assets/img/service-cards/sustainability.svg"
            title="Microsoft Sustainability Solutions"
            borderColorStart="#4CD1DA"
            borderColorEnd="#1085A4"
        />
        <SoftwareSolutionsSection
        title={`See How Every Sector Can Advance\nwith Microsoft Sustainability Solutions`}
        paragraphs={[
            "Discover how Microsoft’s sustainability tools empower organizations to track, manage, and enhance environmental performance.",
            "From reducing carbon footprints to improving operational efficiency, these solutions support long-term growth while meeting regulatory and corporate sustainability goals."
        ]}
        imageSrc="/assets/img/sustainability/sustain-1.webp"
        altText="Microsoft Sustainability Solutions"
        />
        
        <section className="py-5" id="ms-sustainability-overview-alt">
            <div className="container">
                {/* Heading + intro */}
                <div className="mb-4 mb-md-5">
                <p className="lead text-muted mb-0">
                    Discover how Microsoft tools help industries track, manage, and improve environmental performance
                    while supporting long-term business growth.
                </p>
                </div>

                {/* Row 1 — Accelerate (image left, text right) */}
                <div className="row align-items-center g-4 mb-4 mb-lg-5">
                <div className="col-12 col-lg-6">
                    <img
                    src="/assets/img/sustainability/sustain-4.webp"
                    alt="Accelerate Your Sustainability Journey"
                    className="img-fluid rounded-4"
                    />
                </div>
                <div className="col-12 col-lg-6">
                    <div className="feature-rule ps-4 ps-md-4">
                    <div className="small text-uppercase text-secondary mb-2">Guidance</div>
                    <h3 className="h3 fw-bold mb-3">Accelerate Your Sustainability Journey</h3>
                    <p className="text-muted mb-4">
                        Partner with Microsoft and NOVUM to speed up progress toward your environmental, social, and governance goals.
                        With a growing suite of ESG tools and partner solutions, you can embed sustainability into your core operations
                        and drive lasting impact.
                    </p>
                    <a
                        href="https://www.microsoft.com/en-us/sustainability/cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-two"
                    >
                        Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                    </div>
                </div>
                </div>

                {/* Row 2 — Monitor (image right, text left) */}
                <div className="row align-items-center g-4">
                <div className="col-12 col-lg-6 order-lg-2">
                    <img
                    src="/assets/img/sustainability/sustain-6.webp"
                    alt="Monitor and Manage Your Environmental Performance"
                    className="img-fluid rounded-4"
                    />
                </div>
                <div className="col-12 col-lg-6 order-lg-1">
                    <div className="feature-rule ps-4 ps-md-4">
                    <div className="small text-uppercase text-secondary mb-2">Product</div>
                    <h3 className="h3 fw-bold mb-3">Monitor and Manage Your Environmental Performance</h3>
                    <p className="text-muted mb-4">
                        Record, analyze, and reduce emissions with Microsoft Sustainability Manager Essentials and Premium.
                        These tools offer automated data connections, intelligent insights, and flexible reporting features
                        that empower teams to make informed, sustainable decisions.
                    </p>
                    <a
                        href="https://www.microsoft.com/en-us/sustainability/microsoft-sustainability-manager"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-two"
                    >
                        Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>


        <section className="py-5 about__four" id="ms-guidance-cards">
            <div className="container">
                {/* Heading + intro */}
                <div className="mb-4 mb-md-5">
                <h2 className="display-6 fw-semibold mb-2">
                    Start Your Transformation with Strategic Guidance
                </h2>
                <p className="lead text-muted mb-0">
                    Whether you lead finance, IT, or operations, Microsoft’s leadership guide offers practical strategies
                    for building your digital sustainability foundation. Learn how to unify your data, measure performance,
                    and control costs while advancing environmental goals.
                </p>
                </div>

                {/* 3 cards: lg=3 / md=2 / sm=1 */}
                <div className="row g-4">
                {/* Assess */}
                <div className="col-12 col-md-6 col-lg-4">
                    <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                        <img
                        src="/assets/img/sustainability/card-1.webp"
                        alt="Assess Your Impact"
                        className="w-100 h-100 p-2 rounded-5"
                        style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                        <h3 className="h4 fw-bold mb-2">Assess Your Impact</h3>
                        <p className="text-muted mb-4">
                        Use your existing data infrastructure to measure carbon emissions, track waste, and
                        evaluate resource consumption. Turn insights into action with scalable reporting tools
                        that highlight areas for improvement.
                        </p>
                        <div className="mt-auto">
                        <a
                            href="https://www.microsoft.com/en-us/sustainability/sustainability-thought-leadership"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-two"
                        >
                            Assess <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                        </div>
                    </div>
                    </article>
                </div>

                {/* Accelerate */}
                <div className="col-12 col-md-6 col-lg-4">
                    <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                        <img
                        src="/assets/img/sustainability/card-2.webp"
                        alt="Accelerate Progress"
                        className="w-100 h-100 p-2 rounded-5"
                        style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                        <h3 className="h4 fw-bold mb-2">Accelerate Progress</h3>
                        <p className="text-muted mb-4">
                        Adopt data-driven technologies to reduce emissions, automate reporting, and improve supply
                        chain sustainability. Microsoft’s cloud-based platforms help you act quickly and demonstrate
                        measurable improvements.
                        </p>
                        <div className="mt-auto">
                        <a
                            href="https://www.microsoft.com/en-us/sustainability/sustainability-thought-leadership"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-two"
                        >
                            Accelerate <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                        </div>
                    </div>
                    </article>
                </div>

                {/* Transform */}
                <div className="col-12 col-md-6 col-lg-4">
                    <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                        <img
                        src="/assets/img/sustainability/card3.webp"
                        alt="Transform Your Business"
                        className="w-100 h-100 p-2 rounded-5"
                        style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                        <h3 className="h4 fw-bold mb-2">Transform Your Business</h3>
                        <p className="text-muted mb-4">
                        Rethink your systems and business models with innovative digital tools that support circular
                        economy goals. Leverage automation, analytics, and cloud intelligence to build a more
                        sustainable and resilient organization.
                        </p>
                        <div className="mt-auto">
                        <a
                            href="https://www.microsoft.com/en-us/sustainability/sustainability-thought-leadership"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-two"
                        >
                            Transform <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                        </div>
                    </div>
                    </article>
                </div>
                </div>
            </div>

        </section>

        

        <WhySection
            heading="Reaching Net Zero: A Shared Global Commitment"
            subheadingLines={[
                "Microsoft is investing in new technologies, collaborations, and initiatives to support global decarbonization.",
                "Learn how we are helping partners innovate, reduce impact, and lead with transparency on the path to net zero."
            ]}
            imgSrc="/assets/img/sustainability/sustain-5.webp"
            imgAlt="Microsoft Sustainability and Net Zero"
            cards={[
                {
                iconClass: 'fa-solid fa-car text-novum-blue',
                title: 'Automotive',
                text: 'Connect people, vehicles, and data to support clean mobility goals and sustainable manufacturing.'
                },
                {
                iconClass: 'fa-solid fa-bolt text-novum-blue',
                title: 'Energy',
                text: 'Deploy tools that accelerate the shift to renewable energy, increase grid resilience, and optimize operations.'
                },
                {
                iconClass: 'fa-solid fa-building-columns text-novum-blue',
                title: 'Financial Services',
                text: 'Integrate ESG data into risk models and compliance strategies while enabling value creation and ethical growth.'
                },
                {
                iconClass: 'fa-solid fa-industry text-novum-blue',
                title: 'Manufacturing',
                text: 'Reduce waste, improve operational safety, and meet environmental targets with smart factory solutions.'
                },
                {
                iconClass: 'fa-solid fa-store text-novum-blue',
                title: 'Retail',
                text: 'Optimize energy usage, supply chain transparency, and waste management with digital retail tools.'
                },
                {
                iconClass: 'fa-solid fa-city text-novum-blue',
                title: 'Sustainable Buildings',
                text: 'Use digital twins and IoT sensors to monitor, manage, and reduce resource consumption across buildings and campuses.'
                }
            ]}
            />

        

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Need a solution? Request a call!"
                        subText="For pricing information about services simply complete the form below and one of our sales professionals will contact you within one business day."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Sustainability;