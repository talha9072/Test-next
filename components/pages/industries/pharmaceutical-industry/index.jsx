"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroOnly from "@/components/data/industries/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const Pharmaceutical = () => {
  return (
    <div>
        <HeaderFour />
        <HeroOnly
  serviceName="Pharmaceutical Industry"
  title="Transforming Pharma Through Data and Cloud Innovation"
  highlightText="Pharmaceutical Industry"
  subtitle="Empowering life sciences organizations with secure, compliant, and intelligent digital platforms."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/industries/health/health-hero.webp"
  heroButtons={[
    { label: "Explore Solutions", href: "#solutions" },
    { label: "Contact Experts", href: "/contact" },
  ]}
/>

        
       <SoftwareSolutionsSection
  title="Connecting Pharma Operations with Data-Driven Precision"
  paragraphs={[
    "The pharmaceutical sector demands accuracy, security, and agility across every stage from research and production to distribution. Novum’s integrated cloud platforms connect data from R&D, supply chain, quality control, and compliance systems to deliver real-time visibility and actionable insights. The result faster innovation, reduced risk, and smarter, compliant operations.",
  ]}
  imageSrc="/assets/img/industries/health/health-1.webp"
  altText="Pharmaceutical Digital Solutions"
/>
        
        <IssuesSection
  title="Pharmaceutical Industry"
  subtitle="Key Challenges"
  imageSrc="/assets/img/industries/health/health-2.png"
  imageAlt="Pharmaceutical Industry Challenges"
  leftCards={[
    {
      icon: "bi bi-diagram-3",
      title: "Disconnected Data Systems",
      text: "Fragmented information across R&D, manufacturing, and logistics limits visibility and coordination.",
    },
    {
      icon: "bi bi-shield-lock",
      title: "Strict Regulatory Compliance",
      text: "Complex governance and validation processes slow digital transformation and innovation.",
    },
  ]}
  rightCards={[
    {
      icon: "bi bi-bar-chart-line",
      title: "Limited Real-Time Insights",
      text: "Delayed analytics hinder decision-making in production, supply chain, and quality assurance.",
    },
    {
      icon: "bi bi-gear-wide-connected",
      title: "Integration and Scalability Gaps",
      text: "Legacy systems make it difficult to scale securely and connect global operations.",
    },
  ]}
/>




        <SoftwareDetailSection
  imageSrc="/assets/img/industries/health/health-2.webp"
  imageAlt="Measurable Impact Delivered"
  heading={<>Measurable Impact Delivered</>}
  listItems={[
    'Improved collaboration across research, production, and distribution workflows',
    'Faster reporting and regulatory compliance through centralized data systems',
    'Enhanced visibility into supply chain and quality control operations',
    'Reduced risk with secure, scalable, and validated cloud infrastructure',
  ]}
/>

       <WhySection
  heading="Why Pharmaceutical Companies Choose Novum"
  subheadingLines={[
    "Novum empowers pharmaceutical leaders with secure, compliant, and data-driven digital solutions.",
    "As a Microsoft Solutions Partner, we deliver scalable platforms that enhance collaboration, insight, and innovation across the life sciences ecosystem.",
  ]}
  imgSrc="/assets/img/industries/health/health-5.webp"
  imgAlt="Pharmaceutical Digital Transformation"
  cards={[
    {
      iconClass: 'fa-solid fa-cloud text-novum-blue',
      title: 'Azure Cloud Infrastructure',
      text: 'Modernize IT systems with secure, scalable Microsoft Azure environments purpose-built for regulated industries.',
    },
    {
      iconClass: 'fa-solid fa-database text-novum-blue',
      title: 'Data Management & Integration',
      text: 'Unify R&D, manufacturing, and logistics data for better traceability and informed decision-making.',
    },
    {
      iconClass: 'fa-solid fa-chart-column text-novum-blue',
      title: 'Power BI Dashboards',
      text: 'Visualize key metrics across compliance, production, and supply chain performance in real time.',
    },
    {
      iconClass: 'fa-solid fa-brain text-novum-blue',
      title: 'AI & Predictive Insights',
      text: 'Use machine learning to improve forecasting, automate quality checks, and accelerate research cycles.',
    },
    {
      iconClass: 'fa-solid fa-shield-halved text-novum-blue',
      title: 'Security & Compliance',
      text: 'Ensure adherence to global pharmaceutical regulations with advanced governance and data protection tools.',
    },
    {
      iconClass: 'fa-solid fa-people-group text-novum-blue',
      title: 'Microsoft 365 Collaboration',
      text: 'Enable seamless communication between research, production, and compliance teams with modern Microsoft tools.',
    },
  ]}
/>

       <Widget />

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

export default Pharmaceutical;