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
      Why Dataverse Auditing Matters
      for Security and Compliance
    </>
  }
  paragraphs={[
    "Dataverse auditing plays a vital role in helping organizations meet compliance, security, and governance requirements. It creates a clear record of who made changes, when they were made, and how data was accessed across the environment.",
    "Auditing ensures full visibility into user actions by tracking updates, deletions, and modifications whether they happen through an app or through the software development kit.",
  ]}
  imageSrc="/assets/img/data-audit/audit-1.webp"
  altText="Dataverse Audit and Compliance Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
    <MainServices
  id="services"
  subtitle="Dataverse Audit Capabilities"
  title="Full Visibility Across Data Changes and User Activity"
  description="Dataverse auditing provides a clear and structured way to monitor changes across tables, records, and columns. It ensures that organizations have complete insight into how data is accessed and updated, supporting stronger governance and audit readiness."
  image={{
    src: "/assets/img/data-audit/audit-2.webp",
    alt: "Dataverse Audit and Monitoring",
  }}
  services={[
    {
      title: "Custom Table Auditing",
      desc: "Apply auditing to custom and most customizable tables to track changes and maintain a reliable data history.",
    },
    {
      title: "Column Level Tracking",
      desc: "Enable auditing on selected columns to capture updates to critical fields with precision.",
    },
    {
      title: "Record Level Audit History",
      desc: "View detailed changes on each record through the Audit History tab for full transparency.",
    },
    {
      title: "Audit Summary View",
      desc: "Access a consolidated overview of audit activities across the system for faster analysis.",
    },
    {
      title: "Environment and Organization Controls",
      desc: "Manage where auditing is active by configuring it at the environment or organization level.",
    },
    {
      title: "Role Based Administration",
      desc: "Ensure only System Administrators and System Customizers can configure audit settings for secure control.",
    },
  ]}
/>




<ImplementSection
  id="implement"
  subtitle="Administration"
  title="How Dataverse Audit Controls Strengthen Governance"
  description="Administrators have precise control over how auditing works across the environment. From enabling or disabling settings to managing retention periods, Dataverse offers the flexibility required for secure and compliant data governance."
  items={[
    {
      img: "/assets/img/data-audit/tab-1.webp",
      title: "Configurable Audit Levels",
      desc: "Enable or disable auditing at the environment, organization, table, or column level to match your governance needs.",
    },
    {
      img: "/assets/img/data-audit/tab-2.webp",
      title: "Role Based Configuration",
      desc: "Only users with administrator or customizer roles can change audit settings, ensuring secure and controlled access.",
    },
    {
      img: "/assets/img/data-audit/tab-3.webp",
      title: "Flexible Retention Settings",
      desc: "Choose retention periods ranging from one day to indefinite based on compliance and storage requirements.",
    },
    {
      img: "/assets/img/data-audit/tab-4.webp",
      title: "Selective Log Removal",
      desc: "Delete audit logs based on table, access category, or specific date ranges to optimize storage and management.",
    },
    {
      img: "/assets/img/data-audit/tab-5.webp",
      title: "Lifecycle Aware Log Handling",
      desc: "Retention changes apply to new logs only, ensuring existing audit records remain intact and traceable.",
    },
  ]}
/>


   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Partner with NOVUM for Dataverse Audit Services"
  description="NOVUM helps organizations build compliant and transparent systems by combining deep knowledge of Dataverse architecture, governance frameworks, and enterprise reporting. Our experts ensure your audit processes are reliable, efficient, and ready for regulatory standards."
  counters={[
    { value: 70, suffix: "+", label: "Data Audits Completed" },
    { value: 18, suffix: "+", label: "Industries Supported" },
    { value: 99, suffix: "%", label: "Data Accuracy Achieved" },
    { value: 10, suffix: "+", label: "Years of Data Excellence" },
  ]}
  features={[
    {
      icon: "fa-solid fa-database",
      title: "Advanced API Integration",
      desc: "Use APIs and developer tools to retrieve audit history, enable or disable auditing, and manage log data programmatically.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Compliance Ready Reporting",
      desc: "Integrate audit information into reporting solutions and compliance workflows using Microsoft Purview and other enterprise tools.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Automation and Workflow Support",
      desc: "Enhance governance by connecting audit events to Power Platform automation for real time alerts and monitoring.",
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