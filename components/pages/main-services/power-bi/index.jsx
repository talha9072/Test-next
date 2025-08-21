"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import TechStackTabs from "@/components/data/services/TechStack";
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


const PowerBI = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="https://novum-ae.netlify.app/images/power-bi-hero.jpg"
            icon="https://novum-ae.netlify.app/images/service-cards/powerbi.svg"
            title="Power BI Consulting Services"
            borderColorStart="#F7E078"
            borderColorEnd="#DA9B0E"
        />
        <SoftwareSolutionsSection
            title={`Empower Smarter Decisions\nwith Data-Driven Intelligence`}
            paragraphs={[
            "At NOVUM, we specialize in Power BI consulting services that help businesses transform raw data into actionable insights. Using Microsoft’s industry-leading Power BI platform, we design, build, and optimize reporting systems that improve visibility, enhance strategic decision-making, and support digital transformation.",
            "Our consultants work closely with your team to implement scalable dashboards, create dynamic data models, and streamline integration with systems like Microsoft Dynamics 365, SQL, Azure, and more. Whether you're building your BI from the ground up or refining an existing solution, we deliver results that align with your business goals."
            ]}
            imageSrc="https://novum-ae.netlify.app/images/power-bi/power-bi1.jpg"
            altText="Power BI Consulting"
        />
        <SoftwareDetailSection
            imageSrc="https://novum-ae.netlify.app/images/power-bi/power-bi-2.jpg"
            imageAlt="On-Demand Power BI Services"
            numberMain="24"
            numberSub="+"
            label="Clients Supported Remotely"
            heading={(
            <>On-Demand Power BI <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">
                Consulting<span className="z-index-minus-1">
                
                </span>
            </span> Experts.</>
            )}
            listItems={[
            'Optimize and troubleshoot existing Power BI models',
            'Enhance dashboards using advanced DAX and visuals',
            'Rapid design and delivery of custom reports',
            'One-on-one support for internal BI teams'
            ]}
            ctaText="Let’s talk now"
            ctaHref="#contact"
            phoneText="971 56 192 06 16"
            phoneHref="tel:971561920616"
        />

        <TechStackTabs
        title="Supported Data Sources &"
        highlight="Power BI Integration"
        description="Power BI integrates with 200+ data sources—ranging from cloud services to IoT streams—to unify data and deliver intelligent insights across your enterprise."
        tabs={tabsData}
        />

        <WhySection
        heading="Why Power BI?"
        subheadingLines={[
            "<strong>Power BI</strong> is a cloud-based business intelligence platform from Microsoft, designed to centralize and visualize your organization's data in real-time.",
            "It empowers teams to make smarter decisions through interactive dashboards, seamless integrations, and powerful forecasting tools that support every department from finance to operations.",
        ]}
        imgSrc="https://novum-ae.netlify.app/images/power-bi/power-bi-3.jpg"
        imgAlt="Power BI Dashboard"
        cards={[
            {
            iconClass: 'fa-solid fa-chart-column text-novum-blue',
            title: 'Live Dashboards',
            text: 'Visualize your data with interactive, real-time dashboards and reports.',
            },
            {
            iconClass: 'fa-solid fa-signal text-novum-blue',
            title: 'Real-Time Monitoring',
            text: 'Track performance metrics and KPIs across departments instantly.',
            },
            {
            iconClass: 'fa-solid fa-microchip text-novum-blue',
            title: 'IoT Integration',
            text: 'Connect and analyze data from IoT devices and sensors with ease.',
            },
            {
            iconClass: 'fa-solid fa-chart-line text-novum-blue',
            title: 'Forecasting Tools',
            text: 'Plan ahead using predictive insights for inventory and sales.',
            },
            {
            iconClass: 'fa-solid fa-layer-group text-novum-blue',
            title: 'Cross-Department Analytics',
            text: 'Monitor operations across finance, sales, and supply chain in one place.',
            },
            // Add more cards here as needed…
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

export default PowerBI;