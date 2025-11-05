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



const Bidding = () => {
  return (
    <div>
        <HeaderFour />
        <HeroOnly
  serviceName="Face Recognition & Detection"
  title="Smarter Surveillance, Instant Identification"
  highlightText="AI Vision Intelligence"
  subtitle="Enhance security and automate identity verification with real-time facial recognition."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/main-product/face-1.webp"
  heroButtons={[
    { label: "Request Demo", href: "/contact" },
  ]}
/>
        
        
        
       <SoftwareSolutionsSection
  title={`Smart Surveillance with AI Face Recognition`}
  paragraphs={[
    "Novum’s Face Recognition & Detection system brings next-level intelligence to modern surveillance. Powered by advanced computer vision and deep learning algorithms, it identifies and verifies individuals instantly ensuring higher security and operational awareness across facilities, campuses, and public spaces.",
    "Designed for enterprises, government agencies, and critical security environments, the platform integrates seamlessly with existing CCTV systems and databases, providing real-time alerts, automated logging, and actionable insights for faster, data-driven decisions."
  ]}
  imageSrc="/assets/img/main-product/face-2.webp"
  altText="AI-Powered Face Recognition System"
/>

<Iconlist
  id="face-recognition"
  title="Transform Surveillance with Face Detection"
  imageSrc="/assets/img/main-product/face-3.webp"
  altText="Face Recognition & Detection Features"
  features={[
    {
      icon: "bi bi-eye-fill",
      title: "Real-Time Face Detection",
      description: "Detect and identify individuals instantly across multiple camera feeds using AI-powered image processing.",
    },
    {
      icon: "bi bi-people-fill",
      title: "Blacklist & Whitelist Management",
      description: "Automatically flag or allow recognized faces based on predefined access or watchlist configurations.",
    },
    {
      icon: "bi bi-bell-fill",
      title: "Instant Threat Alerts",
      description: "Trigger real-time notifications for unknown faces, restricted area breaches, or abnormal behavior detection.",
    },
  ]}
/>
        



   <AirportStakeholdersSection
  heading="Designed for Every Security Scenario"
  subheading="See how Novum’s Face Recognition & Detection system enhances safety, surveillance, and operational intelligence across cities, buildings, and events with AI-driven vision technology."
  tabs={[
    {
      label: "Urban Surveillance",
      imageSrc: "/assets/img/main-product/face-4.webp",
      altText: "Urban Surveillance",
      title: "Smarter Cities, Safer Streets",
      description: `
        Strengthen public safety with AI-powered face detection that identifies persons of interest and monitors high-traffic zones in real time. 
        Integrate seamlessly with municipal CCTV networks to detect, track, and alert authorities about potential threats or missing individuals instantly. 
        The system supports facial recognition even in challenging lighting conditions or crowded areas, ensuring dependable 24/7 situational awareness.
        Empower law enforcement and city administrators to make data-driven decisions and improve incident response times with unified facial analytics.
        The result: proactive crime prevention, faster investigations, and safer communities.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Building Access & Enterprises",
      imageSrc: "/assets/img/main-product/face-5.webp",
      altText: "Building Access & Enterprises",
      title: "Touchless, Intelligent Entry for Modern Workplaces",
      description: `
        Replace traditional keycards and PIN systems with fast, contactless facial authentication. 
        Ideal for corporate offices, hospitals, and research facilities, the platform enables seamless entry for authorized personnel while preventing tailgating and unauthorized access. 
        Integrated with HR and attendance systems, it automates entry logs, reduces administrative effort, and improves employee convenience without compromising security.
        Enable multi-site visibility, centralized monitoring, and compliance reporting all through one AI-powered control interface.
        The result: safer buildings, smoother access, and reduced operational friction.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Event & Venue Security",
      imageSrc: "/assets/img/main-product/face-6.webp",
      altText: "Event & Venue Security",
      title: "Real-Time Identity Intelligence for Public Venues",
      description: `
        Secure stadiums, exhibition halls, and large public gatherings with automated face recognition and crowd analytics. 
        Instantly identify ticket holders, VIPs, or blacklisted individuals across multiple cameras and checkpoints. 
        AI algorithms analyze crowd behavior to detect anomalies, suspicious movement, or potential security breaches before they escalate.
        Security teams can receive mobile alerts, review flagged footage, and generate post-event reports with full audit trails.
        The result: enhanced visitor safety, faster screening, and complete operational control for every event.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
  ]}
/>



<SmartTurnaroundCards
  heading="An Intelligent Face Recognition System for Modern Security"
  subheading="AI vision, automation, and analytics working together to deliver real-time identification, surveillance, and threat detection."
  accentColor="#0D2B75"
  cards={[
    {
      imageSrc: "/assets/img/main-product/face-7.webp",
      title: "AI-Powered Face Detection",
      description: "Continuously scans live video feeds to detect and track human faces with exceptional accuracy in real time.",
    },
    {
      imageSrc: "/assets/img/main-product/face-8.webp",
      title: "Identity Recognition Engine",
      description: "Matches detected faces against authorized databases or watchlists using deep learning–based facial vector analysis.",
    },
    {
      imageSrc: "/assets/img/main-product/face-9.webp",
      title: "Behavioral Analysis & Alerts",
      description: "Monitors patterns like tailgating or unusual movement and sends instant alerts for potential security threats.",
    },
    {
      imageSrc: "/assets/img/main-product/face-10.webp",
      title: "Comprehensive Reporting & Logs",
      description: "Automatically records detections, matches, and flagged events with timestamps for audits and forensic review.",
    },
  ]}
/>




  
        
      
<WhySection
  heading="Key Features of Our AI-Powered Face Recognition Solution"
  subheadingLines={[
    "Experience the next generation of intelligent surveillance and identity verification powered by advanced facial recognition and deep learning analytics.",
    "From live video monitoring to automated alerts and reporting, Novum’s system centralizes face detection, verification, and security management for smarter, safer environments."
  ]}
  imgSrc="/assets/img/main-product/face-11.webp"
  imgAlt="AI Face Recognition Dashboard"
  cards={[
    {
      iconClass: "bi bi-eye-fill text-novum-blue",
      title: "Real-Time Face Detection",
      text: "Instantly detect and identify individuals across live CCTV or IP camera feeds using AI-powered vision technology.",
    },
    {
      iconClass: "bi bi-cpu text-novum-blue",
      title: "AI-Powered Identity Matching",
      text: "Compare facial data with secure databases or watchlists to verify identities within milliseconds.",
    },
    {
      iconClass: "bi bi-bell-fill text-novum-blue",
      title: "Smart Alerts & Notifications",
      text: "Trigger automated alerts for unknown faces, restricted area breaches, or blacklisted individuals.",
    },
    {
      iconClass: "bi bi-journal-check text-novum-blue",
      title: "Automated Logging & Reports",
      text: "Generate complete activity logs with facial snapshots, timestamps, and event summaries for audits or investigations.",
    },
    {
      iconClass: "bi bi-hdd-network text-novum-blue",
      title: "Seamless System Integration",
      text: "Integrate effortlessly with existing CCTV infrastructure, VMS, or third-party analytics platforms.",
    },
    {
      iconClass: "bi bi-shield-check text-novum-blue",
      title: "Behavioral & Threat Analysis",
      text: "Leverage AI to detect anomalies, track unusual movements, and identify potential security threats in real time.",
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

export default Bidding;