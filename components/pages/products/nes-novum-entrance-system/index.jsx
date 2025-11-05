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
  serviceName="Novum Entrance System (NES)"
  title="Smarter, Safer, and Seamless Access Control"
  highlightText="AI-Powered Security"
  subtitle="Automate and secure facility access with facial recognition and real-time monitoring."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/main-product/nes-1.webp"
  heroButtons={[
    { label: "Request Demo", href: "/contact" },
  ]}
/>
        
        
        
       <SoftwareSolutionsSection
  title={`Transform Your Facility Security with NES`}
  paragraphs={[
    "Novum’s Entrance System (NES) is a next-generation, AI-driven access control solution that automates, monitors, and secures physical entry points across any facility. From facial recognition to instant identity verification, NES ensures that only authorized personnel gain access reducing human error and enhancing operational safety.",
    "Built for enterprises, airports, and critical infrastructure, NES integrates seamlessly with HR and building management systems, delivering unified visibility, real-time alerts, and data-driven insights for complete access control automation."
  ]}
  imageSrc="/assets/img/main-product/nes-2.webp"
  altText="AI-Powered Novum Entrance System"
/>

<Iconlist
  id="nes-access-control"
  title="Facility Access with Intelligent Security"
  imageSrc="/assets/img/main-product/nes-3.webp"
  altText="Novum Entrance System Features"
  features={[
    {
      icon: "bi bi-person-check-fill",
      title: "AI Facial Recognition",
      description: "Authenticate personnel instantly using high-precision biometric and facial recognition technology.",
    },
    {
      icon: "bi bi-journal-text",
      title: "Automated Access Logging",
      description: "Record every entry and exit automatically with detailed timestamps, user IDs, and access points.",
    },
    {
      icon: "bi bi-shield-lock-fill",
      title: "Real-Time Alerts & Monitoring",
      description: "Receive instant alerts for unauthorized access attempts or system tampering to maintain complete control.",
    },
  ]}
/>
        



   <AirportStakeholdersSection
  heading="Designed for Every Environment and Industry"
  subheading="Discover how Novum Entrance System (NES) enhances safety, compliance, and efficiency across corporate offices, transport hubs, and critical infrastructure through AI-powered access control and real-time monitoring."
  tabs={[
    {
      label: "Corporates & Enterprises",
      imageSrc: "/assets/img/main-product/nes-4.webp",
      altText: "Corporates & Enterprises",
      title: "Smarter Access Control for Modern Workplaces",
      description: `
        Protect your people and property with an intelligent, automated access control solution built for enterprise environments. 
        NES integrates seamlessly with HR systems, visitor management, and attendance tools, ensuring that every entry is verified and logged with precision. 
        Define department-based permissions, manage multi-floor access, and generate audit-ready reports automatically all through one centralized dashboard.
        Empower facility managers to maintain compliance, enhance visitor experience, and eliminate manual security bottlenecks with AI-driven access intelligence.
        The result: stronger control, reduced risk, and a more efficient, secure workplace.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Airports & Transport Hubs",
      imageSrc: "/assets/img/main-product/nes-5.webp",
      altText: "Airports & Transport Hubs",
      title: "Securing High-Traffic Transport Environments",
      description: `
        NES delivers unmatched precision in aviation and public transport security. 
        From airside crew gates to restricted maintenance areas, every access attempt is verified using real-time facial recognition and role-based clearance. 
        Airport and transit authorities can track staff movement, receive AI alerts for anomalies, and instantly revoke or modify credentials as needed.
        Full integration with existing surveillance, time attendance, and personnel databases ensures seamless compliance and faster throughput without compromising safety.
        The result: reduced delays, improved control, and enhanced security visibility across all zones.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Critical Infrastructure & Data Centers",
      imageSrc: "/assets/img/main-product/nes-6.webp",
      altText: "Critical Infrastructure & Data Centers",
      title: "Advanced Protection for Sensitive Facilities",
      description: `
        NES provides tamper-proof, AI-enabled access control for high-security environments such as government sites, energy plants, and data centers. 
        System administrators can define complex multi-tiered permissions, enforce time-restricted access, and monitor entry behavior across all facilities in real time. 
        Integrated alerting and detailed audit trails make it easier to maintain regulatory compliance and respond instantly to unauthorized attempts.
        With its scalable architecture and API-ready integrations, NES ensures operational continuity, security transparency, and complete physical access oversight.
        The result: peace of mind, operational efficiency, and total facility protection 24/7.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
  ]}
/>



<SmartTurnaroundCards
  heading="An Intelligent Access System Built for Modern Facilities"
  subheading="Facial recognition, automation, and AI working together to secure and streamline facility access."
  accentColor="#0D2B75"
  cards={[
    {
      imageSrc: "/assets/img/main-product/nes-7.webp",
      title: "Biometric Identity Capture",
      description: "Employees or visitors are authenticated instantly through AI-powered facial recognition or ID validation at entry points.",
    },
    {
      imageSrc: "/assets/img/main-product/nes-8.webp",
      title: "AI Decision & Authorization Engine",
      description: "NES evaluates predefined access rules, clearance levels, and schedules to grant or deny entry within milliseconds.",
    },
    {
      imageSrc: "/assets/img/main-product/nes-9.webp",
      title: "Centralized Monitoring Dashboard",
      description: "Security teams can view live access status, real-time logs, and receive instant alerts for unauthorized activity.",
    },
    {
      imageSrc: "/assets/img/main-product/nes-10.webp",
      title: "Automated Reporting & Integrations",
      description: "Generate detailed access reports, track entry history, and integrate seamlessly with HR or facility management systems.",
    },
  ]}
/>




  
        
      
<WhySection
  heading="Key Features of Our AI-Powered Entrance Control System"
  subheadingLines={[
    "Secure, automate, and monitor every entry point across your facilities with intelligent access control powered by AI, biometrics, and real-time data analytics.",
    "From identity verification to system-wide monitoring, NES centralizes all access operations into one platform ensuring compliance, safety, and operational efficiency at scale."
  ]}
  imgSrc="/assets/img/main-product/nes-11.webp"
  imgAlt="Novum Entrance System Dashboard"
  cards={[
    {
      iconClass: "bi bi-person-bounding-box text-novum-blue",
      title: "Facial Recognition Access",
      text: "Instant, contactless identification using high-accuracy AI for employees, contractors, and visitors.",
    },
    {
      iconClass: "bi bi-lock text-novum-blue",
      title: "Custom Access Rules & Zones",
      text: "Define role-based permissions, clearance levels, and time-restricted access to different facility zones.",
    },
    {
      iconClass: "bi bi-eye-fill text-novum-blue",
      title: "Live Monitoring & Alerts",
      text: "Track entry and exit activity in real time and receive AI-generated alerts for unauthorized attempts.",
    },
    {
      iconClass: "bi bi-journal-text text-novum-blue",
      title: "Automated Access Logging",
      text: "Maintain detailed, tamper-proof entry records with timestamps, ID verification, and device data.",
    },
    {
      iconClass: "bi bi-diagram-3-fill text-novum-blue",
      title: "System Integration Ready",
      text: "Connect seamlessly with HR, ERP, visitor management, and building control systems for unified oversight.",
    },
    {
      iconClass: "bi bi-shield-exclamation text-novum-blue",
      title: "AI-Powered Security Analytics",
      text: "Analyze access trends, detect unusual patterns, and strengthen security with continuous AI learning.",
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