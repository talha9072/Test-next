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



const Government = () => {
  return (
    <div>
        <HeaderFour />
        <HeroOnly
  serviceName="Government & Public Sector"
  title="Building Secure, Data-Driven Public Services"
  highlightText="Government & Public Sector"
  subtitle="Helping governments modernize operations, and deliver better citizen experiences"
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/industries/government/government-hero.webp"
  heroButtons={[
    { label: "Explore Solutions", href: "#solutions" },
    { label: "Contact Experts", href: "/contact" },
  ]}
/>

        
       <SoftwareSolutionsSection
  title="Connecting Public Services Through Secure, Unified Platforms"
  paragraphs={[
    "Government organizations rely on accurate, transparent, and connected systems to serve citizens effectively. Novum’s secure cloud and data platforms integrate information from departments, agencies, and public programs to enable real-time visibility, collaboration, and accountability. The result faster service delivery, improved decision-making, and greater public trust.",
  ]}
  imageSrc="/assets/img/industries/government/gover-1.webp"
  altText="Government Digital Solutions"
/>
        
        <IssuesSection
  title="Government & Public Sector"
  subtitle="Key Challenges"
  imageSrc="/assets/img/industries/government/gover-4.png"
  imageAlt="Government and Public Sector Challenges"
  leftCards={[
    {
      icon: "bi bi-diagram-3",
      title: "Disconnected Department Systems",
      text: "Siloed data across ministries and agencies limits coordination and policy effectiveness.",
    },
    {
      icon: "bi bi-hourglass-split",
      title: "Manual, Paper-Based Processes",
      text: "Outdated workflows slow down service delivery and increase administrative workload.",
    },
  ]}
  rightCards={[
    {
      icon: "bi bi-shield-lock",
      title: "Security and Compliance Pressures",
      text: "Growing data volumes require resilient cloud infrastructure and strict data governance.",
    },
    {
      icon: "bi bi-bar-chart-line",
      title: "Limited Real-Time Insights",
      text: "Lack of live analytics reduces transparency and delays evidence-based decision-making.",
    },
  ]}
/>




        <SoftwareDetailSection
  imageSrc="/assets/img/industries/government/gover-2.webp"
  imageAlt="Measurable Impact Delivered"
  heading={<>Measurable Impact Delivered</>}
  listItems={[
    'Faster, data-driven decision-making across departments and agencies',
    'Improved citizen experience through digital self-service and automation',
    'Enhanced transparency and accountability with centralized reporting systems',
    'Stronger data security and scalability through modern cloud infrastructure',
  ]}
/>

       <WhySection
  heading="Why Government Organizations Choose Novum"
  subheadingLines={[
    "Novum helps public sector institutions modernize digital infrastructure, strengthen data security, and improve citizen services through cloud innovation.",
    "As a Microsoft Solutions Partner, we deliver scalable, transparent, and secure platforms that enable smarter governance and better public outcomes.",
  ]}
  imgSrc="/assets/img/industries/government/gover-2.webp"
  imgAlt="Government Digital Transformation"
  cards={[
    {
      iconClass: 'fa-solid fa-cloud text-novum-blue',
      title: 'Azure Cloud Infrastructure',
      text: 'Build secure, scalable cloud environments that improve reliability and reduce IT maintenance costs.',
    },
    {
      iconClass: 'fa-solid fa-database text-novum-blue',
      title: 'Data Integration & Warehousing',
      text: 'Unify departmental and legacy data into a single source of truth for better analytics and reporting.',
    },
    {
      iconClass: 'fa-solid fa-chart-column text-novum-blue',
      title: 'Power BI Dashboards',
      text: 'Gain real-time insights into public services, budgets, and citizen engagement metrics.',
    },
    {
      iconClass: 'fa-solid fa-robot text-novum-blue',
      title: 'AI & Automation',
      text: 'Automate routine administrative tasks, speed up processes, and improve service delivery accuracy.',
    },
    {
      iconClass: 'fa-solid fa-shield-halved text-novum-blue',
      title: 'Security & Compliance',
      text: 'Ensure data protection and compliance with national and international government standards.',
    },
    {
      iconClass: 'fa-solid fa-people-group text-novum-blue',
      title: 'Microsoft 365 Collaboration',
      text: 'Enhance communication, document sharing, and teamwork across agencies with modern productivity tools.',
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

export default Government;