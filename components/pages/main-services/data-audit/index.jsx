"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import MainServices from "@/components/data/services/main-services";
import ImplementSection from "@/components/data/services/implement";
import Whyus from "@/components/data/services/whyus";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Dataaudit = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Data Audit Services"
  title="Building Trust Through Data Accuracy and Compliance"
  highlightText="Data Audit"
  subtitle="Evaluate, cleanse, and strengthen your data for smarter decisions."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/data-audit/hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Implementation", href: "#implement" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

 


      <SoftwareSolutionsSection
  title={
    <>
      Why Data Auditing Is 
      Essential for Modern Enterprises
    </>
  }
  paragraphs={[
    "In today’s data-driven world, decisions are only as good as the information behind them. NOVUM’s Data Audit Services provide the foundation for trusted, high-quality data by identifying inconsistencies, compliance gaps, and integrity risks across your ecosystem.",
    "Our structured auditing approach goes beyond technical validation it aligns governance, security, and usability to ensure your organization can rely on data for accurate insights, confident reporting, and strategic growth. With NOVUM, your data becomes not just compliant, but actionable.",
  ]}
  imageSrc="/assets/img/data-audit/audit-1.webp"
  altText="Data Audit and Compliance Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
    <MainServices
  id="services"
  subtitle="Data Audit Services"
  title="Enhancing Data Integrity, Compliance, and Business Intelligence"
  description="NOVUM’s Data Audit Services help organizations uncover data inconsistencies, governance gaps, and performance risks before they affect decision-making. Our experts conduct comprehensive evaluations across systems, ensuring your data is clean, compliant, and business-ready. From accuracy validation to security reviews and remediation planning, we transform your data into a trusted foundation for analytics and transformation."
  image={{
    src: "/assets/img/data-audit/audit-2.webp",
    alt: "Data Audit and Validation Process",
  }}
  services={[
    {
      title: "Data Quality Assessment",
      desc: "Evaluate data accuracy, completeness, and consistency across all systems to eliminate errors and redundancies.",
    },
    {
      title: "Governance & Compliance Review",
      desc: "Audit your data management practices to ensure alignment with GDPR, HIPAA, and other regulatory standards.",
    },
    {
      title: "Security & Access Analysis",
      desc: "Assess user access levels, encryption standards, and security protocols to safeguard sensitive information.",
    },
    {
      title: "Data Cleansing & Standardization",
      desc: "Identify and correct duplicates, inconsistencies, and outdated records to improve reporting accuracy.",
    },
    {
      title: "Integration & System Mapping",
      desc: "Analyze how data flows between applications, databases, and APIs to optimize performance and reliability.",
    },
    {
      title: "Remediation & Optimization Planning",
      desc: "Receive actionable recommendations and implementation roadmaps to maintain long-term data health.",
    },
  ]}
/>




<ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How NOVUM’s Data Audit Services Strengthen Business Intelligence"
  description="Partnering with NOVUM enables organizations to build confidence in their data by ensuring accuracy, compliance, and security. Our comprehensive audit process transforms fragmented data landscapes into reliable sources of truth — improving decision-making, reducing risk, and enabling seamless analytics and reporting."
  items={[
    {
      img: "/assets/img/data-audit/tab-1.webp",
      title: "Improved Data Accuracy",
      desc: "Detect and resolve data inconsistencies, duplication, and inaccuracies to enhance trust in business insights.",
    },
    {
      img: "/assets/img/data-audit/tab-2.webp",
      title: "Regulatory Compliance Assurance",
      desc: "Ensure adherence to data governance and privacy standards such as GDPR, HIPAA, and ISO certifications.",
    },
    {
      img: "/assets/img/data-audit/tab-3.webp",
      title: "Enhanced Decision-Making",
      desc: "Empower leadership with validated, high-quality data that drives strategic and evidence-based decisions.",
    },
    {
      img: "/assets/img/data-audit/tab-4.webp",
      title: "Reduced Operational Risk",
      desc: "Identify and mitigate risks associated with inaccurate, outdated, or unsecured data across systems and departments.",
    },
    {
      img: "/assets/img/data-audit/tab-5.webp",
      title: "Long-Term Data Governance",
      desc: "Establish frameworks for continuous monitoring, standardization, and data quality management at scale.",
    },
  ]}
/>


   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Partner with NOVUM for Data Audit Services"
  description="NOVUM delivers precision-driven data auditing that helps organizations enhance data integrity, strengthen compliance, and unlock business intelligence. Our certified experts combine technical depth, regulatory understanding, and proven methodologies to ensure your data becomes a reliable strategic asset across all departments."
  counters={[
    { value: 70, suffix: "+", label: "Data Audits Completed" },
    { value: 18, suffix: "+", label: "Industries Supported" },
    { value: 99, suffix: "%", label: "Data Accuracy Achieved" },
    { value: 10, suffix: "+", label: "Years of Data Excellence" },
  ]}
  features={[
    {
      icon: "fa-solid fa-database",
      title: "Comprehensive Data Expertise",
      desc: "Our specialists audit structured and unstructured data across systems to ensure integrity, consistency, and reliability.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Governance & Compliance Focus",
      desc: "We design and validate frameworks that align with international data protection and governance standards.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Trusted Strategic Partnership",
      desc: "NOVUM works collaboratively with your teams to deliver insights, remediation plans, and continuous improvement strategies.",
    },
  ]}
/>



<Testimonials
  subtitle="Client Stories"
  title="What Clients Say About Working With Novum"
  items={[
    {
      img: "/assets/img/clients/thumbnail_99x99_Huseyn_Zeynalli.jpg",
      text: "In today’s world of big data, Novum helped us visualize complex information simply and effectively.",
      author: "Huseyn Zeynalli",
      position: "Head of Brand Management, Italdizain Group",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Elvin_Mammadov.jpg",
      text: "Novum created a custom dashboard for our event catering logistics — over 65k meals planned perfectly.",
      author: "Elvin Mammadov",
      position: "Venue Operations Manager, Baku City Circuit",
    },
  ]}
/>



      <OtherServices
  subtitle="Our Expertise"
  title="Other Services We Provide"
  description="We partner with organizations to deliver smart, scalable digital solutions. Our services combine deep technical expertise with a focus on real business outcomes."
  services={[
    {
      title: "Software Development",
      imgSrc: "/assets/img/service-cards/softwaredev.svg",
      description:
        "We develop tailored solutions on a variety of platforms using a broad range of technologies.",
      link: "/services/software-development",
      gradient: "linear-gradient(90deg, #8746CA, #8746CA)",
    },
    {
      title: "Power BI Consulting",
      imgSrc: "/assets/img/service-cards/powerbi.svg",
      description:
        "We transform and model data into insights that drive data-driven decisions.",
      link: "/services/power-bi",
      gradient: "linear-gradient(90deg, #F7E078, #DA9B0E)",
    },
    {
      title: "Digital Services",
      imgSrc: "/assets/img/service-cards/digitalmarketing.png",
      description: "We bring transformative digital outcomes to organizations.",
      link: "#",
      gradient: "linear-gradient(90deg, #216868, #14B8BF)",
    },
    
    {
      title: "Artificial Intelligence & IoT",
      imgSrc: "/assets/img/service-cards/ai.svg",
      description:
        "We build AI solutions with Microsoft Cognitive Services and integrate IoT hardware.",
      link: "/services/artificial-intelligence-iot",
      gradient: "linear-gradient(90deg, #1B71EB, #A555C0)",
    },
    {
      title: "Microsoft Azure",
      imgSrc: "/assets/img/service-cards/azure.svg",
      description: "Swiftly shift your business resources to cloud infrastructure.",
      link: "/services/azure",
      gradient: "linear-gradient(90deg, #32ADE9, #095EAA)",
    },
    {
      title: "Microsoft 365",
      imgSrc: "/assets/img/service-cards/microsoft365.svg",
      description: "A suite of apps to help you stay connected and get things done.",
      link: "/services/microsoft-365-deployment",
      gradient: "linear-gradient(90deg, #2353C4, #848FF0)",
    },
    {
      title: "Dynamics 365",
      imgSrc: "/assets/img/service-cards/dynamic365.svg",
      description:
        "Boost efficiency and customer experiences with an agile business platform.",
      link: "/services/microsoft-dynamics-365",
      gradient: "linear-gradient(90deg, #3352C0, #5875E5)",
    },
    {
      title: "Sustainability",
      imgSrc: "/assets/img/service-cards/sustainability.svg",
      description:
        "Drive ESG goals with Microsoft's expanding sustainability solutions.",
      link: "/services/microsoft-sustainability",
      gradient: "linear-gradient(90deg, #4CD1DA, #1085A4)",
    },
    {
      title: "Copilot",
      imgSrc: "/assets/img/service-cards/copilot.png",
      description:
        "An AI assistant that automates tasks and provides real-time insights.",
      link: "#",
      gradient: "linear-gradient(90deg, #6EB75B, #F36E7B, #1D56D2)",
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

export default Dataaudit;