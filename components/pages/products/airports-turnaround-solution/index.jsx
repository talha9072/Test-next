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



const Aerospace = () => {
  return (
    <div>
        <HeaderFour />
        <HeroOnly
  serviceName="Airports Turnaround Solution"
  title="Smart Solutions for Faster Turnarounds"
  highlightText="Turnaround Optimization"
  subtitle="Streamline ground operations, reduce delays, and enhance efficiency across every flight movement."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/industries/aerospace/turn-around-hero.png"
  heroButtons={[
    { label: "Request Demo", href: "/contact" },
  ]}
/>
        
        
        
        <SoftwareSolutionsSection
  title={`Smarter Airport Turnaround Management`}
  paragraphs={[
    "Novum’s Airports Turnaround Solution is an intelligent, AI-powered platform that optimizes every stage of aircraft turnaround from touchdown to takeoff. Built for airport authorities, airlines, and ground handling teams, it provides real-time visibility, automated alerts, and centralized dashboards to ensure smooth coordination across all stakeholders.",
    "By leveraging predictive analytics and digital process automation, the system helps improve on-time performance (OTP), minimize idle time, and reduce operational costs, driving greater reliability and efficiency across airport operations."
  ]}
  imageSrc="/assets/img/industries/aerospace/azerbaijan.png"
  altText="Airport Turnaround Solutions"
/>

<Iconlist
  id="airport-operations"
  title="Revolutionize Airport Operations"
  imageSrc="/assets/img/industries/aerospace/aero-2.jpg"
  altText="Airport Solutions"
  features={[
    {
      icon: "bi bi-speedometer2",
      title: "Real-Time Tracking",
      description: "Monitor turnaround progress live with centralized dashboards.",
    },
    {
      icon: "bi bi-cpu",
      title: "AI-Powered Insights",
      description:
        "Predict delays, optimize gate usage, and enhance on-time performance (OTP).",
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "Reduced Costs",
      description:
        "Minimize penalties, reduce gate idle time, and lower operational expenses.",
    },
  ]}
/>
        



    <AirportStakeholdersSection
  heading="Designed for Every Stakeholder in Airport Turnaround"
  subheading="See how our platform empowers airports, airlines, and ground operations teams to improve on-time performance, enhance collaboration, and make faster, data-driven decisions through unified visibility and intelligent automation."
  tabs={[
    {
      label: "Airports",
      imageSrc: "/assets/img/industries/aerospace/tab-1.png",
      altText: "Airports",
      title: "Why Airports Choose Our Platform",
      description: `
        Boost apron efficiency, strengthen vendor accountability, and optimize gate scheduling with real time turnaround visibility. 
        Our centralized dashboards consolidate data from multiple systems including stand guidance, fuel, catering, baggage handling, and cleaning to provide a single, live operational view. 
        Airport Duty Managers can monitor every aircraft event in real time, anticipate potential bottlenecks, and coordinate resources with precision. 
        The result: improved on-time performance (OTP), reduced ground congestion, and measurable gains in operational efficiency and passenger satisfaction.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Airlines",
      imageSrc: "/assets/img/industries/aerospace/tab-2.png",
      altText: "Airlines",
      title: "Built for Airline On-Time Performance",
      description: `
        Ensure timely departures and faster turnarounds through predictive AI, milestone tracking, and automated alerts. 
        The platform integrates flight schedules, crew readiness, and ground task assignments to create a synchronized, transparent workflow between airline operations and airport stakeholders. 
        With integrated dashboards, OCC and flight dispatch teams can identify emerging delays, analyze cause patterns, and proactively reassign ground assets to maintain schedule integrity. 
        Airlines benefit from improved fleet utilization, reduced AOG risks, and increased network reliability driving both cost savings and customer loyalty.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Ground Handling & IT/Ops",
      imageSrc: "/assets/img/industries/aerospace/tab-3.png",
      altText: "Ground Handling & IT/Ops",
      title: "Ground Handling & IT/Ops: Control and Clarity",
      description: `
        Deliver stronger SLAs and reduce administrative overhead with task-level accountability and digital time stamping. 
        Supervisors gain full operational oversight from arrival bay allocation to service completion — ensuring every activity is logged, validated, and traceable. 
        Real time notifications keep teams aligned, while integrated API and ERP connectivity simplifies data sharing between systems. 
        IT & Ops teams can automate performance reporting, invoicing, and SLA compliance metrics, turning manual paperwork into intelligent workflows that scale with operational demand.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
  ]}
/>


<SmartTurnaroundCards
  heading="A Smarter Turnaround System Built for Modern Airports"
  subheading="Real-time visibility, automation, and AI working together to optimize ground operations."
  accentColor="#0D2B75"
  cards={[
    {
      imageSrc: "/assets/img/main-product/sensors.png",
      title: "Sensors + Manual Updates",
      description: "Feed real-time task and equipment data into the central system.",
    },
    {
      imageSrc: "/assets/img/main-product/ml.png",
      title: "AI Models",
      description: "Analyze timelines, detect anomalies, and forecast task durations.",
    },
    {
      imageSrc: "/assets/img/main-product/dashboard.png",
      title: "Live Dashboard",
      description: "Track progress, monitor status, and manage operations in real time.",
    },
    {
      imageSrc: "/assets/img/main-product/reports.png",
      title: "Reports & Invoices",
      description: "Automatically generate reports, billing, and performance summaries.",
    },
  ]}
/>




  
        
      
<WhySection
  heading="Key Features of Our AI-Powered Turnaround Solution"
 subheadingLines={[
  "Monitor, manage, and optimize every step of your ground operations with real-time intelligence, automation, and data driven insights. Gain complete visibility into every turnaround activity from aircraft arrival to final pushback ensuring teams stay synchronized at all times.",
  "From flight preparation to departure, coordinate seamlessly across airlines, airport control centers, and ground handlers. Drive on time performance, resource efficiency, and operational predictability through one unified digital platform.",
]}
  imgSrc="/assets/img/industries/aerospace/aero-hero.jpg"
  imgAlt="Airport Turnaround Dashboard"
  cards={[
    {
      iconClass: "bi bi-speedometer2 text-novum-blue",
      title: "Real-Time Aircraft Status Monitoring",
      text: "Live updates for all turnaround tasks: deboarding, refueling, catering, cleaning, and boarding.",
    },
    {
      iconClass: "bi bi-columns-gap text-novum-blue",
      title: "Centralized Control Dashboard",
      text: "A unified interface for airports, airlines, and ground teams to access critical data and task progress.",
    },
    {
      iconClass: "bi bi-bell-fill text-novum-blue",
      title: "Automated Alerts & Delay Detection",
      text: "AI flags deviations in turnaround milestones, triggering instant alerts for action.",
    },
    {
      iconClass: "bi bi-graph-up-arrow text-novum-blue",
      title: "Ground Handler Performance Analytics",
      text: "Track service providers and vendors by task duration, SLA adherence, and incident trends.",
    },
    {
      iconClass: "bi bi-file-earmark-bar-graph text-novum-blue",
      title: "Smart Invoicing & Billing",
      text: "Seamless, automatic invoice generation based on logged time and performance metrics.",
    },
    {
      iconClass: "bi bi-phone text-novum-blue",
      title: "Mobile & Web Access",
      text: "Fully responsive UI with access on any device, anywhere.",
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

export default Aerospace;