"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const Government = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/industries/government/government-hero.jpg"
            icon="/assets/img/service-cards/goverment.png"
            title="Government Solutions"
            borderColorStart="#758030"
            borderColorEnd="#55682C"
        />
        <SoftwareSolutionsSection
            title={`Supporting Digital Transformation Across Public Sector Services`}
            paragraphs={[
            "Government institutions are under growing pressure to improve service delivery, manage data securely, and operate more efficiently. Novum partners with public sector organizations to modernize their digital infrastructure through cloud platforms, integrated data environments, and analytics-driven decision-making tools. Our solutions enhance transparency, performance, and responsiveness across government services.",
            ]}
            imageSrc="/assets/img/industries/government/gover-1.jpg"
            altText="Goverment"
        />
        
        <IssuesSection
        title="Government and Public Sector"
        subtitle="Key Challenges"
        imageSrc="/assets/img/industries/government/gover-4.png"
        imageAlt="Government and Public Sector Challenges"
        leftCards={[
            { icon: "bi bi-diagram-3", title: "Fragmented Systems", text: "Across departments with limited data visibility." },
            { icon: "bi bi-hourglass-split", title: "Manual Processes", text: "Slowing down service delivery and reporting." }
        ]}
        rightCards={[
            { icon: "bi bi-shield-lock", title: "Need for Secure Cloud Infrastructure", text: "Supporting growing demands with scalability and resilience." },
            { icon: "bi bi-bar-chart-line", title: "Lack of Real-Time Insights", text: "Hindering policy decisions and operational planning." }
        ]}
        />

        <SoftwareDetailSection
        imageSrc="/assets/img/industries/government/gover-5.png"
        imageAlt="Measurable Impact Delivered"
        numberMain="6"
        numberSub="+"
        label="Government & Public Sector Partners Served"
        heading={(
            <>Measurable Impact Delivered <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">
                <span className="z-index-minus-1">
                
                </span>
            </span></>
        )}
        listItems={[
            'Faster and more accurate decision-making across departments',
            'Improved citizen experience through digital self-service and automation',
            'Greater efficiency in internal operations and budget control',
            'Centralized data governance and improved reporting accuracy',
            'Scalable systems prepared for future policy and technology changes'
        ]}
        ctaText="Let’s talk now"
        ctaHref="#contact"
        phoneText="971 56 192 06 16"
        phoneHref="tel:971561920616"
        />

        <WhySection
            heading="Why Government Organizations Choose Novum"
            subheadingLines={[
                "Novum brings technical excellence, security-first design, and a deep understanding of public sector processes.",
                "As a Microsoft Solutions Partner, we help government clients modernize infrastructure, improve service quality, and align digital tools with mission objectives.",
                "Our solutions are built to meet the demands of security, scalability, and transparency."
            ]}
            imgSrc="/assets/img/industries/government/gover-2.jpg"
            imgAlt="Government Digital Transformation"
            cards={[
                {
                iconClass: 'fa-solid fa-cloud text-novum-blue',
                title: 'Cloud-Based Infrastructure with Microsoft Azure',
                text: 'Modernize public sector IT systems with scalable, secure cloud platforms that improve service availability and reduce maintenance overhead.',
                },
                {
                iconClass: 'fa-solid fa-database text-novum-blue',
                title: 'Integrated Data Warehousing',
                text: 'Centralize data from departments, legacy systems, and third-party sources into a single platform for unified reporting and analysis.',
                },
                {
                iconClass: 'fa-solid fa-chart-column text-novum-blue',
                title: 'Power BI Dashboards for Public Sector Oversight',
                text: 'Enable real-time monitoring of service performance, budget utilization, citizen engagement, and internal KPIs across government programs.',
                },
                {
                iconClass: 'fa-solid fa-robot text-novum-blue',
                title: 'AI and Automation for Service Optimization',
                text: 'Apply intelligent automation to reduce manual tasks, improve citizen response times, and forecast public demand with greater accuracy.',
                },
                {
                iconClass: 'fa-solid fa-gears text-novum-blue',
                title: 'Custom Applications for Departmental Operations',
                text: 'Develop tailored solutions to support workflows in areas such as licensing, document processing, HR, and procurement.',
                },
                {
                iconClass: 'fa-solid fa-people-group text-novum-blue',
                title: 'Microsoft 365 for Inter-Agency Collaboration',
                text: 'Improve coordination, document sharing, and project management across departments and remote teams using secure productivity tools.',
                },
            ]}
            />

       

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Modernize Public Sector Operations?"
                        subText="Speak with Novum’s government solutions team to explore how cloud, data, and automation can improve service delivery and decision-making.
                                 Book a consultation today."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Government;