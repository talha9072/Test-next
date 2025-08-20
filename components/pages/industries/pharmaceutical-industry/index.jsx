"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import IssuesSection from "@/components/data/industries/issues";
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

const Health = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/industries/health/health-hero.jpg"
            icon="/assets/img/service-cards/health.png"
            title="Pharmaceutical Industry Solutions"
            borderColorStart="#347BC3"
            borderColorEnd="#C725B4"
        />
        <SoftwareSolutionsSection
            title={`Driving Innovation and Operational Efficiency in Pharma with Scalable Cloud and Data Platforms`}
            paragraphs={[
            "The pharmaceutical industry demands precision, compliance, and the ability to adapt quickly in a highly regulated environment. Novum empowers pharmaceutical companies to modernize their digital infrastructure through secure cloud platforms, data integration tools, and collaborative applications that enhance performance from R&D to distribution.",
            "By implementing Microsoft Azure-based solutions, we help pharmaceutical organizations overcome complex data management challenges, ensure regulatory compliance, and scale with confidence."
            ]}
            imageSrc="/assets/img/industries/health/health-3.jpg"
            altText="Power BI Consulting"
        />
        
        <IssuesSection
          title="Pharmaceutical Sector"
          subtitle="Key Challenges"
          imageSrc="/assets/img/industries/health/health-2.png"
          imageAlt="Pharma Challenges"
          leftCards={[
            { icon: "bi bi-diagram-3", title: "Fragmented Data Systems", text: "Slowing down collaboration and decision-making." },
            { icon: "bi bi-shield-lock", title: "Complex Regulatory Requirements", text: "Needing secure, compliant infrastructure." }
          ]}
          rightCards={[
            { icon: "bi bi-bar-chart-line", title: "Scalability Challenges", text: "Difficulty meeting growing operational and data needs." },
            { icon: "bi bi-intersect", title: "Disconnected Platforms", text: "Across R&D, supply chain, and finance departments." }
          ]}
        />

        <SoftwareDetailSection
            imageSrc="/assets/img/industries/health/health-5.png"
            imageAlt="Measurable Impact Delivered"
            numberMain="6"
            numberSub="+"
            label="Pharmaceutical Partners Served"
            heading={(
            <>Measurable Impact Delivered <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">
                <span className="z-index-minus-1">
                
                </span>
            </span></>
            )}
            listItems={[
            'Faster cross-departmental collaboration through integrated Microsoft 365 and Azure platforms',
            'Centralized data architecture that improved reporting efficiency and insight generation',
            'Scalable infrastructure enabling business continuity and future growth',
            'Secure cloud environment supporting regulatory compliance',
            'Streamlined processes from research to distribution'
            ]}
            ctaText="Let’s talk now"
            ctaHref="#contact"
            phoneText="971 56 192 06 16"
            phoneHref="tel:971561920616"
        />

        <WhySection
          heading="Why Pharmaceutical Companies Choose Novum"
          subheadingLines={[
            "As a Microsoft Solutions Partner with experience in large-scale pharmaceutical transformations, Novum delivers tailored solutions that align with both operational priorities and regulatory requirements.",
            "We understand the importance of secure data, flexible infrastructure, and collaborative efficiency in driving innovation in the life sciences sector.",
            "Our end-to-end services—from cloud migration to analytics dashboards—help pharma leaders future-proof their operations and accelerate results."
          ]}
          imgSrc="/assets/img/industries/health/health-4.jpg"
          imgAlt="Pharmaceutical Digital Transformation"
          cards={[
            {
              iconClass: 'fa-solid fa-cloud text-novum-blue',
              title: 'Cloud-Based Infrastructure on Microsoft Azure',
              text: 'Migrate critical workloads from on-premises environments to a secure, scalable Azure cloud foundation, eliminating maintenance burdens and enabling flexibility.',
            },
            {
              iconClass: 'fa-solid fa-database text-novum-blue',
              title: 'Integrated Data Management',
              text: 'Leverage Azure Data Factory and Azure SQL Database to unify data from multiple departments, ensuring accurate, centralized reporting and analytics.',
            },
            {
              iconClass: 'fa-solid fa-chart-column text-novum-blue',
              title: 'Enterprise Analytics with Power BI Pro',
              text: 'Create real-time dashboards and visual reports to support data-driven decision-making across supply chain, R&D, compliance, and executive teams.',
            },
            {
              iconClass: 'fa-solid fa-cubes text-novum-blue',
              title: 'Advanced Modelling with Azure Analysis Services',
              text: 'Build complex analytical models to support forecasting, product planning, and operational performance monitoring.',
            },
            {
              iconClass: 'fa-solid fa-people-group text-novum-blue',
              title: 'Microsoft 365 for Seamless Collaboration',
              text: 'Empower cross-functional teams with modern communication and productivity tools to support hybrid work and real-time collaboration.',
            },
            {
              iconClass: 'fa-solid fa-shield-halved text-novum-blue',
              title: 'Security and Compliance at Scale',
              text: 'Ensure adherence to global and local pharmaceutical compliance requirements through Azure’s robust governance, identity management, and security features.',
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

export default Health;