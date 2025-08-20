"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const Agriculture = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/industries/agriculture/agri-hero.jpg"
            icon="/assets/img/service-cards/agriculture.png"
            title="Agriculture Industry Solutions"
            borderColorStart="#F9C74F"
            borderColorEnd="#80B918"
        />
        <SoftwareSolutionsSection
            title={`Powering Agribusiness Efficiency Through Data and Cloud Innovation`}
            paragraphs={[
            "Modern agriculture relies on data to manage resources, forecast production, and optimize yield. Novum helps agribusinesses digitize their operations using scalable cloud platforms, real-time analytics, and AI tools that deliver insight across farming, supply chain, and distribution processes. We support agriculture companies in building data-driven strategies that improve productivity, ensure traceability, and reduce operational costs.",
            ]}
            imageSrc="/assets/img/industries/agriculture/agri-1.jpg"
            altText="Agriculture"
        />
        
        <IssuesSection
        title="Agriculture"
        subtitle="Key Challenges"
        imageSrc="/assets/img/industries/agriculture/agri-4.png"
        imageAlt="Agriculture Challenges"
        leftCards={[
            { icon: "bi bi-diagram-3", title: "Disconnected Systems", text: "Across farm operations, logistics, and distribution." },
            { icon: "bi bi-database", title: "Lack of Centralized Data", text: "For crop forecasting, yield monitoring, and cost analysis." }
        ]}
        rightCards={[
            { icon: "bi bi-eye", title: "Limited Real-Time Visibility", text: "Into resource usage and equipment performance." },
            { icon: "bi bi-shield-check", title: "Compliance and Seasonal Challenges", text: "Ensuring environmental and food safety standards while adapting to seasonal unpredictability." }
        ]}
        />

        <SoftwareDetailSection
        imageSrc="/assets/img/industries/agriculture/agri-3.png"
        imageAlt="Measurable Impact Delivered"
        numberMain="6"
        numberSub="+"
        label="Agriculture Partners Served"
        heading={(
            <>Measurable Impact Delivered <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">
                <span className="z-index-minus-1">
                
                </span>
            </span></>
        )}
        listItems={[
            'Centralized visibility into all aspects of the farming and distribution cycle',
            'Improved planning through AI-powered crop and yield forecasts',
            'Reduced resource waste with real-time monitoring of usage and equipment',
            'Enhanced regulatory compliance and data traceability',
            'Increased operational agility across seasonal cycles'
        ]}
        ctaText="Let’s talk now"
        ctaHref="#contact"
        phoneText="971 56 192 06 16"
        phoneHref="tel:971561920616"
        />

        <WhySection
            heading="Why Agribusinesses Choose Novum"
            subheadingLines={[
                "Novum understands the complexity of modern agriculture and delivers solutions that address the entire value chain.",
                "As a Microsoft Solutions Partner, we help agribusinesses streamline data flows, automate reporting, and respond quickly to change.",
                "Our platforms are built to support long-term growth while delivering short-term efficiencies."
            ]}
            imgSrc="/assets/img/industries/agriculture/agri-2.jpg"
            imgAlt="Agriculture Digital Transformation"
            cards={[
                {
                iconClass: 'fa-solid fa-leaf text-novum-blue',
                title: 'Custom Farm Management Platforms',
                text: 'Build end-to-end software solutions for monitoring field activity, managing inventory, and tracking yield from planting to distribution.',
                },
                {
                iconClass: 'fa-solid fa-cloud text-novum-blue',
                title: 'Azure Infrastructure for Agri-Operations',
                text: 'Deploy secure, scalable cloud systems to centralize farm data and enable continuous access to critical insights.',
                },
                {
                iconClass: 'fa-solid fa-chart-column text-novum-blue',
                title: 'Power BI for Agriculture Analytics',
                text: 'Visualize performance metrics including crop health, input costs, harvest yields, and sales trends in real time to guide smarter decisions.',
                },
                {
                iconClass: 'fa-solid fa-database text-novum-blue',
                title: 'Data Warehousing and Integration',
                text: 'Unify data from weather models, IoT sensors, ERP systems, and supply chains into one source of truth for operational clarity.',
                },
                {
                iconClass: 'fa-solid fa-brain text-novum-blue',
                title: 'AI-Based Forecasting and Risk Analysis',
                text: 'Use machine learning to anticipate production outcomes, market volatility, and environmental risks with greater accuracy.',
                },
                {
                iconClass: 'fa-solid fa-people-group text-novum-blue',
                title: 'Microsoft 365 for Field Team Collaboration',
                text: 'Enhance productivity and coordination between field workers, agronomists, and business teams using secure communication tools.',
                },
            ]}
        />

       

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Transform Your Pharmaceutical Operations?"
                        subText="Let’s build a smarter, more agile digital foundation for your pharmaceutical business.
 Book a consultation with Novum’s pharma solutions experts."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Agriculture;