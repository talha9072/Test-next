"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroOnly from "@/components/data/industries/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const Aerospace = () => {
  return (
    <div>
        <HeaderFour />
        <HeroOnly
  serviceName="Aerospace & Transportation"
  title="Driving Efficiency, Safety, and Innovation in Modern Mobility"
  highlightText="Aerospace & Transportation"
  subtitle="Empowering airlines and logistics providers with real-time insights and automation."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/industries/aerospace/aero-hero-plane.webp"
  heroButtons={[
    { label: "Explore Solutions", href: "#solutions" },
    { label: "Contact Experts", href: "/contact" },
  ]}
/>

        
        <SoftwareSolutionsSection
  title="Connecting Operations for Real-Time Control and Efficiency"
  paragraphs={[
    "Aerospace and transportation organizations depend on precision and speed. Novum’s integrated digital platforms connect data from fleet management, maintenance, logistics, and scheduling to enable real-time visibility and smarter decisions. The result — safer operations, reduced delays, and seamless coordination across every level of the network.",
  ]}
  imageSrc="/assets/img/industries/aerospace/aero-2.webp"
  altText="Aerospace and Transportation Digital Solutions"
/>
        
        <IssuesSection
  title="Aerospace and Transportation"
  subtitle="Key Challenges"
  imageSrc="/assets/img/industries/aerospace/aero-4.png"
  imageAlt="Aerospace and Transportation Challenges"
  leftCards={[
    {
      icon: "bi bi-eye",
      title: "Real-Time Visibility",
      text: "Lack of unified dashboards limits awareness of fleet status and asset health.",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Disconnected Systems",
      text: "Fragmented maintenance, scheduling, and logistics systems reduce operational coordination.",
    },
  ]}
  rightCards={[
    {
      icon: "bi bi-clipboard-data",
      title: "Manual KPI Tracking",
      text: "Dependence on spreadsheets slows reporting and delays critical decision-making.",
    },
    {
      icon: "bi bi-graph-up",
      title: "Demand and Resource Forecasting Gaps",
      text: "Inconsistent analytics hinder energy planning, cost control, and disruption response.",
    },
  ]}
/>


        <SoftwareDetailSection
  imageSrc="/assets/img/industries/aerospace/aero-5.webp"
  imageAlt="Measurable Impact Delivered"
  heading={<>Measurable Impact Delivered</>}
  listItems={[
    'Real-time monitoring of fleet and logistics performance',
    'Automated alerts reducing turnaround delays and downtime',
    'Improved delivery reliability across transport operations',
    'Predictive analytics enabling proactive maintenance decisions'
  ]}
/>

        <WhySection
  heading="Why Choose Novum"
  subheadingLines={[
    "Novum empowers carriers and transport operators with real-time data, AI, and cloud innovation.",
    "As a Microsoft Solutions Partner, we combine technical depth with industry know-how to deliver scalable, connected platforms.",
  ]}
  imgSrc="/assets/img/industries/aerospace/aero-6.webp"
  imgAlt="Aerospace and Transportation Digital Transformation"
  cards={[
    {
      iconClass: 'fa-solid fa-truck-plane text-novum-blue',
      title: 'Turnaround and Logistics Platforms',
      text: 'Monitor fleet activities, streamline workflows, and improve accountability across every operation.',
    },
    {
      iconClass: 'fa-solid fa-cloud text-novum-blue',
      title: 'Azure Cloud Infrastructure',
      text: 'Run high-performance, secure, and centralized operations with Microsoft Azure migration.',
    },
    {
      iconClass: 'fa-solid fa-chart-column text-novum-blue',
      title: 'Power BI Dashboards',
      text: 'Gain instant visibility into performance, delivery, and utilization KPIs across your network.',
    },
    {
      iconClass: 'fa-solid fa-brain text-novum-blue',
      title: 'AI and Predictive Insights',
      text: 'Leverage machine learning to forecast demand, prevent delays, and optimize resource planning.',
    },
    {
      iconClass: 'fa-solid fa-database text-novum-blue',
      title: 'Data Warehouse Integration',
      text: 'Unify scheduling, telemetry, and maintenance data into a single analytics environment.',
    },
    {
      iconClass: 'fa-solid fa-people-group text-novum-blue',
      title: 'Microsoft 365 Collaboration',
      text: 'Empower teams to coordinate seamlessly across sites with secure Microsoft tools.',
    },
  ]}
/>

       

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Upgrade Your Aerospace or Transportation Operations?"
                        subText="Speak with Novum’s specialists to learn how cloud and data solutions can enhance your logistics, safety, and service performance.
                                 Book a consultation today."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Aerospace;