"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import BulletPoints from "@/components/data/services/bulletpoints";
import BulletPointsFlip from "@/components/data/services/bulletpoints-flip";
import FunnelSection from "@/components/data/services/funnel";  
import PremiumFeatureSection from "@/components/data/services/PremiumFeatureSection";
import PremiumFeatureSection1 from "@/components/data/services/PremiumFeatureSection-flip";
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
  serviceName="Data Audit & Dataverse Auditing Services"
  title="Dataverse Auditing Services for Compliance, Security, and Data Governance"
  highlightText="Data Audit"
  subtitle="Track Data Changes and User Activity Across Your Dataverse Environment"
  bgImage="/assets/img/data-audit/Data-banner.png"
  heroImage="/assets/img/data-audit/Data-banner-detail.jpg"
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

 
<BulletPoints
  title={<>Why Data Auditing Is Critical</>}
  paragraphs={[
    "Without proper auditing, organizations risk compliance failures, security gaps, and unreliable data. Dataverse auditing ensures every change is traceable, accountable, and aligned with governance standards."
  ]}
  extraParagraph="Auditing enables full transparency across your entire Microsoft Power Platform environment by providing a verifiable record for every data interaction."
  bulletPoints={[
    "Meet compliance and regulatory requirements",
    "Track who accessed or modified data",
    "Improve security and accountability",
    "Strengthen trust in reporting and decision-making"
  ]}
  imageSrc="/assets/img/data-audit/Data-img-1.png"
  altText="Dataverse Audit and Compliance Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>

<BulletPointsFlip
  title={<>What We Audit in Microsoft Dataverse</>}
  paragraphs={[
    "We configure Dataverse auditing to capture changes and access activity across your Power Platform environment."
  ]}
  extraParagraph="Auditing enables full transparency across your entire Microsoft Power Platform environment by providing a verifiable record for every data interaction."
  bulletPoints={[
    "Custom and customizable system tables",
    "Business-critical and sensitive columns",
    "User access via apps, integrations, and SDKs",
    "Data creation, updates, and deletions"
  ]}
  imageSrc="/assets/img/data-audit/Data-img-2.png"
  altText="Dataverse Audit and Compliance Solutions"
  sectionClass="position-relative overflow-hidden py-7 pt-0"
/>

      <FunnelSection
  leftHeading="Flexible Audit Configuration & Governance"
  leftText="Auditing can be enabled and managed at multiple levels to align with your governance model."

  leftCards={[
    {
      title: "Audit History (Record Level)",
      text: "View exact changes on individual records, including previous values, timestamps, and user actions."
    },
    {
      title: "Audit Summary (System Level)",
      text: "Monitor audit activity across the environment to identify trends, risks, or anomalies."
    }
  ]}

  rightHeading="Audit Structure Overview"
  rightText="Dataverse supports multiple layers of auditing for comprehensive tracking."

  funnelLevels={[
    "ENVIRONMENT LEVEL",
    "ORGANIZATION LEVEL",
    "TABLE LEVEL",
    "COLUMN LEVEL"
  ]}
/>
        

<PremiumFeatureSection
  headline="Audit Log Retention & Data Management"
  subtext="We help define audit retention policies that balance compliance requirements with performance and operational needs."
  label="Capabilities include:"
  items={[
    "Retention from 1 day to indefinite",
    "Forward-only retention changes",
    "Deletion by table, access logs, or date range",
    "Aligned with GDPR, ISO, and internal governance policies"
  ]}
  imageSrc="/assets/img/data-audit/Data-img-1.png"
  altText="Audit Log Retention"
  priority={true}
/>


<PremiumFeatureSection1
  headline="API Access & Compliance Integrations"
  subtext="For advanced scenarios, Dataverse auditing integrates seamlessly into your wider compliance and reporting ecosystem."
  label="Integrates with:"
  items={[
    "Dataverse APIs and SDKs",
    "Power Automate workflows",
    "Microsoft Purview",
    "External reporting or SIEM tools"
  ]}
  imageSrc="/assets/img/data-audit/Data-img-2.png"
  altText="API Integrations"
  priority={true}
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