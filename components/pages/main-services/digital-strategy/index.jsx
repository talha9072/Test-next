"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";


const tabsData = [
  {
    id: "ms",
    label: "Microsoft Sources",
    items: [
      { src: "https://novum-ae.netlify.app/images/power-bi/dynamics.png", alt: "Dynamics 365" },
      { src: "https://novum-ae.netlify.app/images/power-bi/sql-server.png", alt: "SQL Server" },
      { src: "https://novum-ae.netlify.app/images/power-bi/azure.png", alt: "Azure" },
      { src: "https://novum-ae.netlify.app/images/power-bi/sharepoint.png", alt: "SharePoint" },
    ],
  },
  {
    id: "files",
    label: "Files & Analytics",
    items: [
      { src: "https://novum-ae.netlify.app/images/power-bi/excel.png", alt: "Excel" },
      { src: "https://novum-ae.netlify.app/images/power-bi/csv.png", alt: "CSV" },
      { src: "https://novum-ae.netlify.app/images/power-bi/google-analytics.png", alt: "Google Analytics" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Web APIs",
    items: [
      { src: "https://novum-ae.netlify.app/images/power-bi/power-apps.png", alt: "Power Apps" },
      { src: "https://novum-ae.netlify.app/images/power-bi/rest-api.png", alt: "Web APIs" },
      { src: "https://novum-ae.netlify.app/images/power-bi/cloud.png", alt: "Cloud Systems" },
    ],
  },
  {
    id: "iot",
    label: "IoT & Streaming",
    items: [
      { src: "https://novum-ae.netlify.app/images/power-bi/iot.png", alt: "IoT Devices" },
      { src: "https://novum-ae.netlify.app/images/power-bi/streaming-data.png", alt: "Streaming Data" },
    ],
  },
];

const coreTabs = [
  {
    id: 'tab_architecture',
    label: 'Unified Data Architecture',
    content: {
      imageSrc: 'https://novum-ae.netlify.app/images/datawarehouse/warehouse-unified.png',
      imageAlt: 'Unified Data Architecture',
      title: 'Unified Data Architecture',
      paragraphs: [
        'We design flexible architectures that bring together data from ERPs, CRMs, legacy systems, files, IoT devices, and cloud applications. Our solutions offer complete organizational visibility and are built to evolve as your business grows.'
      ]
    }
  },
  {
    id: 'tab_reporting',
    label: 'Advanced Reporting',
    content: {
      imageSrc: 'https://novum-ae.netlify.app/images/datawarehouse/warehouse-reporting.png',
      imageAlt: 'Advanced Reporting',
      title: 'Advanced Reporting and KPIs',
      paragraphs: [
        'Centralized data enables consistent reporting and insight generation. We help your teams build performance dashboards and custom KPIs across departments such as finance, sales, supply chain, and operations.'
      ]
    }
  },
  {
    id: 'tab_integration',
    label: 'Seamless Integration',
    content: {
      imageSrc: 'https://novum-ae.netlify.app/images/datawarehouse/warehouse-integration.png',
      imageAlt: 'Seamless Source Integration',
      title: 'Seamless Source Integration',
      paragraphs: [
        'Our solutions work with your ecosystem. We offer native compatibility with Microsoft Dynamics 365, Azure Synapse, Power BI, SQL Server, and more. This ensures smooth data flow between your systems and analytics platforms.'
      ]
    }
  },
  {
    id: 'tab_quality',
    label: 'Data Insight',
    content: {
      imageSrc: 'https://novum-ae.netlify.app/images/datawarehouse/warehouse-source.png',
      imageAlt: 'Data Quality and Real-Time Access',
      title: 'From Raw Data to Business Insight',
      paragraphs: [
        'Data Quality and Consistency: Using automated cleansing and transformation methods, we standardize your incoming data to remove duplication, fill gaps, and align formats. This creates a reliable foundation for analytics across your business.',
        'Real-Time Access and Agility: We support near real-time updates to keep your analytics fresh and your operations responsive. With fast data delivery and high visibility, teams can shift from reactive to strategic planning.'
      ]
    }
  },
];

const DigitalStrategy = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/digital-strategy/digital-strategy-hero.webp"
            icon="/assets/img/service-cards/digital-strategy.png"
            title="Digital Strategy Services"
            borderColorStart="#0D2B75"
            borderColorEnd="#193781"
        />
        <SoftwareSolutionsSection
            title={`Building Future-Ready Roadmaps That Drive Results`}
            paragraphs={[
            "Novum helps organizations shape digital strategies that connect business objectives with the right technologies and execution plans. We create tailored roadmaps that enable scalable transformation, improve efficiency, and unlock new value across every level of the enterprise. Our framework is grounded in real-world industry insight and built to adapt as customer needs and market conditions evolve.",
            "Digital transformation is not about adopting technology for the sake of change. It is about aligning people, processes, and platforms to achieve measurable business outcomes. At Novum, we place human experience at the center of every strategy, ensuring that digital initiatives lead to long-term impact."
            ]}
            imageSrc="/assets/img/digital-strategy/strategy-1.webp"
            altText="Digital Strategy"
        />

        <SoftwareDetailSection
        imageSrc="/assets/img/digital-strategy/strategy-2.webp"
        imageAlt="On-Demand Power BI Services"
        numberMain="50"
        numberSub="+"
        label="Successful Digital Transformations"
        heading={(
            <>
            A Strategy That Moves With You{" "}
            <span
                className="highlight-separator mb-0 pb-0"
                data-shadow-animation="true"
                data-animation-delay="500"
            >
                Key Outcomes
                <span className="z-index-minus-1">
                <img
                    src="images/demo-digital-agency-highlight-separator.png"
                    alt=""
                />
                </span>
            </span>
            </>
        )}
        listItems={[
            "Increased revenue and profitability through digitized operations",
            "Greater customer satisfaction and engagement through personalized experiences",
            "Improved workforce productivity and collaboration",
            "Reduced technical debt, IT support overhead, and operational bottlenecks",
            "Stronger alignment between digital investments and business priorities",
            "A flexible, scalable roadmap that grows with your organization",
        ]}
        ctaText="Let’s talk now"
        ctaHref="#contact"
        phoneText="971 56 192 06 16"
        phoneHref="tel:971561920616"
        />
        
        <WhySection
        heading="Why Novum?"
        subheadingLines={[
            "Our strategy team brings a unique blend of technical expertise, creative problem-solving, and deep industry knowledge.",
            "We collaborate closely with your stakeholders to deliver strategies that are practical, measurable, and built for scale. As a Microsoft Solutions Partner, Novum ensures every plan is grounded in modern technologies that enable future innovation.",
        ]}
        imgSrc="/assets/img/digital-strategy/strategy-3.webp"
        imgAlt="Strategy Planning Meeting"
        cards={[
            {
            iconClass: 'fa-solid fa-lightbulb text-novum-blue',
            title: 'Vision and Roadmapping',
            text: 'We work with your leadership team to define a clear transformation vision, backed by phased roadmaps that prioritize high-value initiatives.',
            },
            {
            iconClass: 'fa-solid fa-server text-novum-blue',
            title: 'Technology Alignment',
            text: 'Our experts evaluate your existing systems and recommend modern, scalable technologies that align with your business model and future needs.',
            },
            {
            iconClass: 'fa-solid fa-users-gear text-novum-blue',
            title: 'Change Enablement',
            text: 'We design strategies that prepare your teams for change, build internal capabilities, and foster adoption from day one.',
            },
            {
            iconClass: 'fa-solid fa-file-invoice-dollar text-novum-blue',
            title: 'Business Case Development',
            text: 'We help quantify the value of your transformation efforts through detailed ROI models, budget scenarios, and benefit tracking.',
            },
            {
            iconClass: 'fa-solid fa-handshake text-novum-blue',
            title: 'Ongoing Advisory Support',
            text: 'Novum stays engaged beyond the initial planning phase to guide you through implementation, course corrections, and continuous optimization.',
            },
        ]}
        />

        

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Define Your Digital Strategy?"
                        subText="Let Novum help you build a roadmap that connects vision to value. Book a consultation today."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default DigitalStrategy;