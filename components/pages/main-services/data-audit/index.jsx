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

const Dataaudit = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/data-audit/hero.webp"
            icon="/assets/img/service-cards/audit.png"
            title="Data Audit Services"
            borderColorStart="#C9DA28"
            borderColorEnd="#37B34A"
        />
        <SoftwareSolutionsSection
            title={`Data Audit Services That Strengthen Business Decisions`}
            paragraphs={[
            "Novum helps organizations turn raw data into a trusted asset by identifying and resolving quality issues before they impact performance. Our Data Audit service goes beyond a simple health check. We deliver a full analysis of your data landscape, uncovering gaps, redundancies, and compliance risks while providing a clear roadmap for improvement.",
            "Whether you are preparing for a digital transformation, implementing AI, or modernizing your infrastructure, Novum ensures your data foundation is accurate, consistent, and ready to drive strategic outcomes. We focus on enabling reliable insights, not just running reports."
            ]}
            imageSrc="/assets/img/data-audit/audit-1.webp"
            altText="Power BI Consulting"
        />
        <section className="py-5 data-audit" id="ms-sustainability-overview-alt">
            <div className="container">
                
                {/* Row 1 — Accelerate (image left, text right) */}
                <div className="row align-items-center g-4 mb-4 mb-lg-5">
                <div className="col-12 col-lg-6">
                    <img
                    src="/assets/img/data-audit/audit-6.webp"
                    alt="Accelerate Your Sustainability Journey"
                    className="img-fluid rounded-4"
                    />
                </div>
                <div className="col-12 col-lg-6">
                    <div className="feature-rule ps-4 ps-md-4">
                    
                    <h2 className="fw-700 text-dark-gray mb-4">More Than a Technical Review</h2>
                    <p className="text-muted mb-4">
                        We are not in the business of simply scanning data for errors. We deliver a structured process that evaluates your data from a business, technical, and compliance perspective. Our audits address governance, security, and usability to ensure your teams can act confidently on the information they receive.
                    </p>
                    <p className="text-muted mb-4">
                        With advanced tools, deep industry knowledge, and proven methodology, Novum helps you transform your data from a liability into a competitive advantage.
                    </p>
                    <a
                        href="#"
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
      <h2 className="display-6 fw-semibold mb-2">Why You Need Our Help</h2>
      <p className="lead text-muted mb-0">
        Our Data Audit service helps you uncover the full potential of your
        data by identifying risks, improving compliance, and creating a
        foundation for smarter business decisions. Whether you’re facing
        governance challenges, struggling with accuracy, or aiming for
        operational efficiency we guide you every step of the way.
      </p>
    </div>

    {/* 3 cards */}
    <div className="row g-4">
      {/* Data Assessment */}
      <div className="col-12 col-md-6 col-lg-4">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/data-audit/audit-2.webp"
              alt="Comprehensive Data Assessment"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">
              Comprehensive Data Assessment
            </h3>
            <p className="text-muted mb-4">
              Evaluate the quality, accuracy, and completeness of data across
              all systems. Detect inconsistencies, duplication, and
              weaknesses that impact decision-making and efficiency.
            </p>
          </div>
        </article>
      </div>

      {/* Compliance Review */}
      <div className="col-12 col-md-6 col-lg-4">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/data-audit/audit-3.webp"
              alt="Compliance and Governance Review"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">
              Compliance & Governance Review
            </h3>
            <p className="text-muted mb-4">
              Ensure alignment with regulations like GDPR and HIPAA.
              Strengthen governance policies to protect sensitive data and
              maintain accountability across the organization.
            </p>
          </div>
        </article>
      </div>

      {/* Remediation Roadmaps */}
      <div className="col-12 col-md-6 col-lg-4">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/data-audit/audit-4.webp"
              alt="Actionable Remediation Roadmaps"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">
              Actionable Remediation Roadmaps
            </h3>
            <p className="text-muted mb-4">
              Receive clear, prioritized steps from cleansing and
              restructuring data to implementing ongoing quality monitoring
              tailored to your business needs.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

        <SoftwareDetailSection
        imageSrc="/assets/img/data-audit/audit-5.webp"
        imageAlt="Data Audit and Analytics Services"
        numberMain="50"
        numberSub="+"
        label="Successful Data Audit Projects"
        heading={(
            <>
            Areas of{" "}
            <span
                className="highlight-separator mb-0 pb-0"
                data-shadow-animation="true"
                data-animation-delay="500"
            >
                Expertise
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
            "Enterprise data warehouses and analytics platforms",
            "Cloud and hybrid storage environments",
            "Customer relationship management systems (CRM)",
            "Enterprise resource planning systems (ERP)",
            "Industry-specific regulatory compliance frameworks",
            "Data integration and migration projects",
        ]}
        ctaText="Let’s talk now"
        ctaHref="#contact"
        phoneText="971 56 192 06 16"
        phoneHref="tel:971561920616"
        />

       <WhySection
        heading="Why Novum?"
        subheadingLines={[
            "Novum combines technical precision with strategic vision. Our Data Audit service is designed to help clients build a strong data foundation that supports innovation, compliance, and growth.",
            "We provide not only the assessment but also the guidance needed to turn insights into measurable outcomes."
        ]}
        imgSrc="/assets/img/data-audit/audit-why.webp"
        imgAlt="Data Audit Consultation"
        cards={[
            {
            iconClass: 'fa-solid fa-magnifying-glass-chart text-novum-blue',
            title: 'Discovery and Scope Definition',
            text: 'We define your audit objectives, data sources, and desired outcomes to ensure alignment with business goals.'
            },
            {
            iconClass: 'fa-solid fa-chart-pie text-novum-blue',
            title: 'Profiling and Analysis',
            text: 'We apply advanced analytics and profiling tools to detect trends, anomalies, and gaps in data integrity.'
            },
            {
            iconClass: 'fa-solid fa-shield-halved text-novum-blue',
            title: 'Compliance and Security Review',
            text: 'We review security protocols, governance frameworks, and access controls to ensure data is managed responsibly.'
            },
            {
            iconClass: 'fa-solid fa-list-check text-novum-blue',
            title: 'Gap Identification and Recommendations',
            text: 'We deliver a detailed report outlining findings and actionable next steps to enhance data accuracy, governance, and usability.'
            }
        ]}
        />

        

        

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Unlock the Full Potential of Your Data?"
                        subText="Get the clarity and confidence you need to make informed business decisions. Book a consultation with Novum today"
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Dataaudit;