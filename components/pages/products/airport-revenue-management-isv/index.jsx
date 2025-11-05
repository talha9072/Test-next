"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroOnly from "@/components/data/industries/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import Iconlist from "@/components/data/industries/icon-list";
import AirportStakeholdersSection from "@/components/data/industries/tabs";
import SmartTurnaroundCards from "@/components/data/industries/cards";
import WhySection from "@/components/data/services/WhySection";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const AirportRevenue = () => {
  return (
    <div>
        <HeaderFour />
        
        <HeroOnly
  serviceName="Airport Revenue Management ISV Solutions"
  title="Optimize Airport Revenue with Smart Automation"
  highlightText="Intelligent Airport Finance"
  subtitle="Automate billing and enhance financial control with Novum’s Airport Revenue Management platform."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/main-product/airport-revenue-hero.webp"
  heroButtons={[
    { label: "Request Demo", href: "/contact" },
  ]}
/>
        
        
        
      <SoftwareSolutionsSection
  title={`Maximize Airport Revenue with Smart Financial Management`}
  paragraphs={[
    "Modern airports manage complex revenue streams spanning aeronautical fees, retail concessions, and lease contracts. Novum’s Airport Revenue Management ISV solutions centralize and automate these processes to ensure accuracy, transparency, and control.",
    "Built for airports of all sizes, the platform simplifies aeronautical billing, concession tracking, and financial reporting helping you eliminate revenue leakage, enhance compliance, and make faster, data-driven decisions."
  ]}
  imageSrc="/assets/img/main-product/airport-revenue-1.webp"
  altText="Airport Revenue Management Platform by Novum"
/>


<Iconlist
  id="airport-revenue-management"
  title="Key Features of Airport Revenue Management"
  imageSrc="/assets/img/main-product/airport-revenue-2.webp"
  altText="Airport Revenue Management System Features"
  features={[
    {
      icon: "bi bi-receipt-cutoff",
      title: "Automated Billing",
      description:
        "Generate invoices for landing, parking, and passenger fees instantly using live flight data.",
    },
    {
      icon: "bi bi-shop-window",
      title: "Concession Tracking",
      description:
        "Track and reconcile retail and F&B revenues with automated billing and smart analytics.",
    },
    {
      icon: "bi bi-file-earmark-text-fill",
      title: "Contract Management",
      description:
        "Manage leases, renewals, and rental terms digitally with full visibility and control.",
    },
  ]}
/>
        



   <AirportStakeholdersSection
  heading="Our Approach to Airport Revenue Management Deployment"
  subheading="Novum ensures smooth implementation of Airport Revenue Management ISV solutions through a structured process focused on accuracy, compliance, and long-term performance."
  tabs={[
    {
      label: "Discovery & Analysis",
      imageSrc: "/assets/img/main-product/airport-revenue-3.webp",
      altText: "Discovery and Gap Analysis",
      title: "Assessing Revenue Processes and Gaps",
      description: `
        We start by evaluating your current revenue workflows, aeronautical billing structures, and concession models to uncover inefficiencies and improvement areas. 
        This stage involves stakeholder workshops, data audits, and integration mapping to ensure a comprehensive understanding of your financial ecosystem. 
        The outcome is a strategic automation roadmap that aligns with your airport’s business goals, revenue streams, and compliance requirements.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Configuration & Integration",
      imageSrc: "/assets/img/main-product/airport-revenue-4.webp",
      altText: "System Configuration and Integration",
      title: "Building a Unified Revenue Platform",
      description: `
        We configure modules to automate billing, lease management, and concession revenue tracking while ensuring compliance with aviation financial standards. 
        The system integrates seamlessly with ERP, AODB, and airline APIs to synchronize operational and financial data in real time. 
        Our approach ensures scalable architecture, centralized dashboards, and secure user access for end-to-end visibility across departments.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Testing & Go-Live",
      imageSrc: "/assets/img/main-product/airport-revenue-5.webp",
      altText: "Testing and Go-Live Support",
      title: "Validating Accuracy and Driving Adoption",
      description: `
        Before deployment, every process undergoes comprehensive testing to verify accuracy, reporting reliability, and system performance. 
        Finance, commercial, and operations teams participate in validation cycles to ensure business continuity and smooth transition. 
        Once live, Novum provides structured user training, documentation, and continuous support helping your airport achieve revenue optimization and ongoing platform success.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
  ]}
/>





<SmartTurnaroundCards
  heading="An Intelligent Revenue Platform for Modern Airports"
  subheading="Automation, analytics, and integration working together to optimize billing, concessions, and lease revenue for airports of all sizes."
  accentColor="#0D2B75"
  cards={[
    {
      imageSrc: "/assets/img/main-product/airport-revenue-6.webp",
      title: "Centralized Revenue Dashboard",
      description:
        "Gain a unified view of all income streams aeronautical, non-aeronautical, and concession through interactive dashboards and analytics.",
    },
    {
      imageSrc: "/assets/img/main-product/airport-revenue-7.webp",
      title: "Automated Billing & Invoicing",
      description:
        "Eliminate manual errors with automated generation of invoices for landing fees, rentals, and vendor payments linked to live flight and sales data.",
    },
    {
      imageSrc: "/assets/img/main-product/airport-revenue-8.webp",
      title: "Contract & Lease Management",
      description:
        "Digitally manage agreements, renewals, and rate revisions for airlines, cargo, and retail tenants with smart alerts and full traceability.",
    },
    {
      imageSrc: "/assets/img/main-product/airport-revenue-9.webp",
      title: "Performance Analytics & Insights",
      description:
        "Analyze revenue trends, track concession performance, and forecast growth with AI-powered reporting for finance and operations teams.",
    },
  ]}
/>





  
        
      
<WhySection
  heading="Key Features of Our Airport Revenue Management ISV"
  subheadingLines={[
    "Gain total control over aeronautical and non-aeronautical income streams with automation, transparency, and real-time financial intelligence.",
    "Novum’s Airport Revenue Management ISV unifies billing, concessions, and contract management to help airports optimize revenue and enhance compliance.",
  ]}
  imgSrc="/assets/img/main-product/airport-revenue-10.webp"
  imgAlt="Airport Revenue Management Dashboard"
  cards={[
    {
      iconClass: "bi bi-receipt-cutoff text-novum-blue",
      title: "Automated Aeronautical Billing",
      text: "Calculate and generate invoices automatically for landing, parking, and passenger fees based on live flight and operations data.",
    },
    {
      iconClass: "bi bi-shop-window text-novum-blue",
      title: "Concession Revenue Management",
      text: "Track and reconcile revenue from retail, duty-free, and F&B tenants through sales-based billing and real-time reporting.",
    },
    {
      iconClass: "bi bi-file-earmark-text text-novum-blue",
      title: "Lease & Contract Management",
      text: "Digitally manage contracts, renewals, and rate structures for airlines, vendors, and cargo operators in a centralized repository.",
    },
    {
      iconClass: "bi bi-graph-up-arrow text-novum-blue",
      title: "Revenue Analytics & Dashboards",
      text: "Visualize key metrics, forecast trends, and compare performance across revenue streams to drive data-backed decisions.",
    },
    {
      iconClass: "bi bi-hdd-network text-novum-blue",
      title: "AODB & ERP Integration",
      text: "Integrate seamlessly with Airport Operational Databases, ERP systems, and BI tools for synchronized financial control.",
    },
    {
      iconClass: "bi bi-shield-check text-novum-blue",
      title: "Compliance & Data Security",
      text: "Ensure adherence to ICAO/IATA standards with full audit trails, access controls, and secure financial data management.",
    },
  ]}
/>


       

       <ContactWidget />

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

export default AirportRevenue;