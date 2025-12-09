"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import BulletPoints from "@/components/data/services/bulletpoints";
import BulletPointsFlip from "@/components/data/services/bulletpoints-flip";
import FunnelSection from "@/components/data/services/funnel";  
import PremiumFeatureSection from "@/components/data/services/PremiumFeatureSection";
import PremiumFeatureSection1 from "@/components/data/services/PremiumFeatureSection-flip";
import MainServices from "@/components/data/services/main-services";
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
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Audit Configuration", href: "#audit-config" },
    { label: "Audit Structure", href: "#structure" },
    { label: "Audit Approach", href: "#approach" },
    { label: "Services For", href: "#serviceAudience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

<div id="overview">
<BulletPoints
sectionId="overview"
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
</div>


<div id="audit-config">
<BulletPointsFlip
sectionId="audit-config"
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
</div>

<div id="structure">
      <FunnelSection
      sectionId="structure"
      backgroundStyle="#e5f1ff"
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
</div>      




<PremiumFeatureSection
sectionId="audit-retention"
  headline="Audit Log Retention & Data Management"
  subtext="We help define audit retention policies that balance compliance requirements with performance and operational needs."
  label="Capabilities include:"
  items={[
    "Retention from 1 day to indefinite",
    "Forward-only retention changes",
    "Deletion by table, access logs, or date range",
    "Aligned with GDPR, ISO, and internal governance policies"
  ]}
  imageSrc="/assets/img/data-audit/audit-main3.webp"
  altText="Audit Log Retention"
  priority={true}
/>






<PremiumFeatureSection1
sectionId="api"
  headline="API Access & Compliance Integrations"
  subtext="For advanced scenarios, Dataverse auditing integrates seamlessly into your wider compliance and reporting ecosystem."
  label="Integrates with:"
  items={[
    "Dataverse APIs and SDKs",
    "Power Automate workflows",
    "Microsoft Purview",
    "External reporting or SIEM tools"
  ]}
  imageSrc="/assets/img/data-audit/audit-main1.webp"
  altText="API Integrations"
  priority={true}
/>




<div id="approach">
<BulletPoints
  title={<>Our Proven Data Audit Approach</>}
  paragraphs={[
    "We don’t just switch auditing on we design it around your business and compliance goals."
  ]}
  extraParagraph="Auditing enables full transparency across your entire Microsoft Power Platform environment by providing a verifiable record for every data interaction."
  bulletPoints={[
    "Audit readiness & environment review",
    "Table and column-level audit design",
    "Retention policy configuration",
    "Role-based access governance"
  ]}
  imageSrc="/assets/img/data-audit/audit-main2.webp"
  altText="Dataverse Audit and Compliance Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
</div>




<div id="serviceAudience">
    <MainServices
  subtitle="Who This Service Is For"
  title="Designed for Teams That Need Strong Data Governance"
  description="Our auditing solutions help teams who require full transparency, strong oversight, and reliable change tracking across their Dataverse environments."
  image={{
    src: "/assets/img/data-audit/audit-2.webp",
    alt: "Who This Service Is For",
  }}
  services={[
    {
      title: "Regulated Industries",
      desc: "Industries where compliance, traceability, and audit readiness are essential for operations.",
    },
    {
      title: "Enterprise Power Platform Users",
      desc: "Large organizations with complex data structures and mission-critical Dataverse environments.",
    },
    {
      title: "IT, Security & Compliance Teams",
      desc: "Teams responsible for safeguarding data access, ensuring governance, and monitoring user activity.",
    },
  ]}
/>

</div>



   
      

<div id="testimonials">
<Testimonials
  subtitle="Client Stories"
  title="What Clients Say About Working With Novum"
  items={[
    {
      img: "/assets/img/clients/thumbnail_99x99_Huseyn_Zeynalli.jpg",
      text: "With a cloud solution custom-designed for the pharmaceutical industry by Novum Information Technology, we consolidated data from multiple systems into one unified platform. Now department heads access real-time reports instantly, manual consolidation is gone, and decision-making is faster and more secure.",
      author: "Majid Ismailov",
      position: "Head of Data Management, Avromed",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Elvin_Mammadov.jpg",
      text: "With Microsoft Dynamics 365 implemented and tailored for the aviation industry by Novum Information Technology, we transformed our finance operations from manual, time-consuming processes into a unified, intelligent system. Real-time insights now guide our decisions, and our teams are more agile and empowered than ever.",
      author: "Zaur Dibirov",
      position: "Director of Finance & Accounting, Azerbaijan Airlines",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Nizami_Mansirov.jpg",
      text: "Partnering with Novum Information Technology, we migrated our entire infrastructure to the Microsoft Cloud — adopting Microsoft 365 and leveraging Data & AI services tailored to our business model. Through seamless integrations and custom development, Novum helped us unify data, automate workflows, and empower every department with intelligent insights that drive faster, smarter decisions.",
      author: "Daniel V",
      position: "IT & Security Director, Kitopi",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Nizami_Mansirov.jpg",
      text: "Working with Novum has transformed the way Aster Pharmacy manages its operations. Their tailored solutions and expert guidance have streamlined our processes, improved efficiency, and enabled better decision-making across all departments. The partnership with Novum has been truly valuable, and we look forward to continued success together.",
      author: "Ashish Panday",
      position: "IT Director, Aster Pharmacy",
    },
  ]}
/>
</div>



<div id="otherservices">
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
</div>

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