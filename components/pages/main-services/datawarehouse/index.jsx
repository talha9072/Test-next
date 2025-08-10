"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import WhySection from "@/components/data/services/WhySection";
import CoreCapabilitiesSection from "@/components/data/services/CoreCapabilitiesSection";
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
      imageSrc: '/assets/img/datawarehouse/warehouse-unified.png',
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
      imageSrc: '/assets/img/datawarehouse/warehouse-reporting.png',
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
      imageSrc: '/assets/img/datawarehouse/warehouse-integration.png',
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
      imageSrc: '/assets/img/datawarehouse/warehouse-source.png',
      imageAlt: 'Data Quality and Real-Time Access',
      title: 'From Raw Data to Business Insight',
      paragraphs: [
        'Data Quality and Consistency: Using automated cleansing and transformation methods, we standardize your incoming data to remove duplication, fill gaps, and align formats. This creates a reliable foundation for analytics across your business.',
        'Real-Time Access and Agility: We support near real-time updates to keep your analytics fresh and your operations responsive. With fast data delivery and high visibility, teams can shift from reactive to strategic planning.'
      ]
    }
  },
];

const Datawarehouse = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/datawarehouse/datawarehouse-hero.png"
            icon="/assets/img/service-cards/datawarehouse.svg"
            title="Data Warehouse Solutions"
            borderColorStart="#157569"
            borderColorEnd="#71E9B6"
        />
        <SoftwareSolutionsSection
            title={`Centralized, Scalable,and Strategic`}
            paragraphs={[
            "Today’s businesses rely on data from many systems, teams, and tools. Without a unified structure, this information becomes fragmented, leading to missed insights and slower decisions.",
            "NOVUM builds enterprise-grade data warehouse solutions that bring consistency, performance, and clarity to your data environment. Our approach consolidates your systems into one scalable platform that supports confident, data-driven growth."
            ]}
            imageSrc="/assets/img/datawarehouse/datawarehouse-1.png"
            altText="Datawarehouse about"
        />
       
       <CoreCapabilitiesSection
      heading="Our Core Capabilities"
      tabs={coreTabs}
       />
        

        <WhySection
        heading="Why Choose NOVUM?"
        subheadingLines={[
            "From data architecture to real-time reporting, NOVUM delivers enterprise-grade solutions tailored to your goals. Our expertise spans industries and technologies, ensuring smooth integration and long-term success.",
            
        ]}
        imgSrc="/assets/img/datawarehouse/warehouse-6.png"
        imgAlt="Datawarehouse whychoose"
        cards={[
            {
            iconClass: 'fa-solid fa-database text-novum-blue',
            title: 'Deep Data Expertise',
            text: 'Specialists in modeling, ETL, and warehouse performance optimization.',
            },
            {
            iconClass: 'fa-solid fa-diagram-project text-novum-blue',
            title: 'Seamless Microsoft Integration',
            text: 'Expertise in Microsoft-based and hybrid cloud ecosystems.',
            },
            {
            iconClass: 'fa-solid fa-building-columns text-novum-blue',
            title: 'Enterprise Proven',
            text: 'Success across large enterprises and regulated sectors.',
            },
            {
            iconClass: 'fa-solid fa-puzzle-piece text-novum-blue',
            title: 'Custom-Fit Architecture',
            text: 'Solutions aligned to your size, goals, and reporting needs.',
            },
            {
            iconClass: 'fa-solid fa-plane-departure text-novum-blue',
            title: 'Client Success',
            text: 'Azerbaijan Airlines gained real-time ERP-linked insights with NOVUM warehouse solution.',
            },
            // Add more cards here as needed…
        ]}
        />

        

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Get a Consultation"
                        subText="Is your data fragmented or hard to manage? Let NOVUM help you build a unified warehouse that simplifies analytics, enhances reporting, and drives better decisions. Contact us today to explore your options."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Datawarehouse;