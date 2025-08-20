"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const NaturalResources = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/industries/natural/natural-hero.jpg"
            icon="/assets/img/service-cards/natural-resources.png"
            title="Natural Resources (Oil & Gas, Mining) Solutions"
            borderColorStart="#FFAA4A"
            borderColorEnd="#FFCC47"
        />
        <SoftwareSolutionsSection
            title={`Enhancing Operational Control and Safety Through Data and Cloud Technology`}
            paragraphs={[
            "In the oil, gas, and mining industries, efficiency, safety, and compliance are critical to long-term success. Novum supports natural resources organizations with end-to-end digital solutions that centralize data, enable predictive insights, and improve operational visibility. From field sites to head offices, our cloud platforms and analytics tools help companies manage complex assets, monitor performance in real time, and stay ahead of regulatory requirements.",
            ]}
            imageSrc="/assets/img/industries/natural/natural-1.jpg"
            altText="Natural Resources"
        />
        
        <IssuesSection
        title="Oil, Gas, and Mining"
        subtitle="Key Challenges"
        imageSrc="/assets/img/industries/natural/natural-3.png"
        imageAlt="Oil, Gas, and Mining Challenges"
        leftCards={[
            { icon: "bi bi-diagram-3", title: "Disconnected Systems", text: "Across exploration, production, logistics, and compliance." },
            { icon: "bi bi-eye", title: "Lack of Real-Time Data", text: "On equipment performance, site activity, and safety incidents." }
        ]}
        rightCards={[
            { icon: "bi bi-clipboard-data", title: "Manual Reporting Delays", text: "In high-risk and time-sensitive operational environments." },
            { icon: "bi bi-graph-down", title: "Environmental & Cost Challenges", text: "Difficulty tracking environmental impact, energy usage, and operational risk." }
        ]}
        />

        <SoftwareDetailSection
        imageSrc="/assets/img/industries/natural/natural-2.png"
        imageAlt="Measurable Impact Delivered"
        numberMain="6"
        numberSub="+"
        label="Oil, Gas, and Mining Partners Served"
        heading={(
            <>Measurable Impact Delivered <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">
                <span className="z-index-minus-1">
                
                </span>
            </span></>
        )}
        listItems={[
            'Greater operational oversight across extraction, processing, and logistics',
            'Reduced unplanned downtime and improved asset reliability',
            'Improved regulatory compliance with streamlined reporting and documentation',
            'Enhanced safety visibility through live monitoring and predictive alerts',
            'More informed decisions supported by real-time performance data'
        ]}
        ctaText="Let’s talk now"
        ctaHref="#contact"
        phoneText="971 56 192 06 16"
        phoneHref="tel:971561920616"
        />

       <WhySection
        heading="Why Natural Resources Companies Choose Novum"
        subheadingLines={[
            "Novum brings a deep understanding of the operational complexity and regulatory landscape facing oil, gas, and mining organizations.",
            "As a Microsoft Solutions Partner, we deliver platforms built for resilience, scalability, and real-world application.",
            "Our team enables resource-driven companies to modernize their infrastructure, manage risk, and improve long-term performance using reliable, integrated digital solutions."
        ]}
        imgSrc="/assets/img/industries/natural/natural-4.jpg"
        imgAlt="Natural Resources Digital Transformation"
        cards={[
            {
            iconClass: 'fa-solid fa-cloud text-novum-blue',
            title: 'Azure Infrastructure for Industrial Environments',
            text: 'Implement secure, scalable cloud systems for centralized data access across field operations, control rooms, and corporate teams.',
            },
            {
            iconClass: 'fa-solid fa-chart-column text-novum-blue',
            title: 'Power BI for Operational and Environmental Analytics',
            text: 'Track production volumes, equipment health, energy usage, emissions, and safety metrics in real time through intuitive dashboards.',
            },
            {
            iconClass: 'fa-solid fa-gears text-novum-blue',
            title: 'Custom Software for Asset and Compliance Management',
            text: 'Develop solutions to track asset utilization, regulatory reporting, maintenance schedules, and risk assessments across multiple sites.',
            },
            {
            iconClass: 'fa-solid fa-robot text-novum-blue',
            title: 'AI-Driven Predictive Maintenance',
            text: 'Leverage machine learning models to forecast equipment failures, reduce downtime, and optimize maintenance strategies for field assets.',
            },
            {
            iconClass: 'fa-solid fa-database text-novum-blue',
            title: 'Data Warehouse Integration',
            text: 'Consolidate data from SCADA systems, IoT sensors, ERP platforms, and safety logs into a unified environment for reporting and decision-making.',
            },
            {
            iconClass: 'fa-solid fa-people-group text-novum-blue',
            title: 'Microsoft 365 for Cross-Site Collaboration',
            text: 'Facilitate secure communication and workflow coordination across remote teams and field engineers using Microsoft productivity tools.',
            },
        ]}
        />

       

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Modernize Your Oil, Gas, or Mining Operations?"
                        subText="Explore how Novum’s cloud and analytics technologies can help your organization improve safety, efficiency, and environmental performance.
                                 Book a consultation with our experts today."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default NaturalResources;