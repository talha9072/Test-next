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



const Agriculture = () => {
  return (
    <div>
        <HeaderFour />
        <HeroOnly
  serviceName="Agriculture"
  title="Growing Smarter with Data and Innovation"
  highlightText="Agriculture"
  subtitle="Empowering agribusinesses with real-time insights, automation, and AI-driven decision-making."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/industries/agriculture/agri-hero-farm.webp"
  heroButtons={[
    { label: "Explore Solutions", href: "#solutions" },
    { label: "Contact Experts", href: "/contact" },
  ]}
/>

        
        <SoftwareSolutionsSection
  title="Connecting Fields and Insights in Real Time"
  paragraphs={[
    "Modern agriculture relies on precision, sustainability, and data-driven planning. Novum’s integrated digital platforms connect data from farm operations, equipment, logistics, and distribution to deliver real-time visibility and smarter decision-making. The result higher productivity, reduced waste, and better coordination across the entire agricultural value chain.",
  ]}
  imageSrc="/assets/img/industries/agriculture/agri-2.webp"
  altText="Agriculture Digital Solutions"
/>
        
        <IssuesSection
  title="Agriculture"
  subtitle="Key Challenges"
  imageSrc="/assets/img/industries/agriculture/agri-4.png"
  imageAlt="Agriculture Challenges"
  leftCards={[
    {
      icon: "bi bi-diagram-3",
      title: "Disconnected Farm Systems",
      text: "Fragmented data across cultivation, logistics, and sales limits coordinated operations.",
    },
    {
      icon: "bi bi-cloud-drizzle",
      title: "Unreliable Environmental Data",
      text: "Inconsistent weather and soil data reduce accuracy in planning and forecasting.",
    },
  ]}
  rightCards={[
    {
      icon: "bi bi-eye",
      title: "Limited Real-Time Insights",
      text: "Lack of visibility into resource usage affects yield and operational efficiency.",
    },
    {
      icon: "bi bi-shield-exclamation",
      title: "Compliance and Sustainability Gaps",
      text: "Difficulty maintaining traceability and meeting environmental reporting standards.",
    },
  ]}
/>


        <SoftwareDetailSection
  imageSrc="/assets/img/industries/agriculture/agri-3.webp"
  imageAlt="Measurable Impact Delivered"
  heading={<>Measurable Impact Delivered</>}
  listItems={[
    'Real-time monitoring of crop health, soil, and equipment performance',
    'Improved yield accuracy through AI-driven forecasting and planning',
    'Reduced resource waste with data-guided irrigation and input management',
    'Enhanced traceability and compliance across the entire supply chain',
  ]}
/>

       <WhySection
  heading="Why Agribusinesses Choose Novum"
  subheadingLines={[
    "Novum helps agriculture leaders harness real-time data, AI, and cloud innovation to improve productivity and sustainability.",
    "As a Microsoft Solutions Partner, we combine deep technical expertise with industry insight to deliver scalable, connected platforms.",
  ]}
  imgSrc="/assets/img/industries/agriculture/agri-2.webp"
  imgAlt="Agriculture Digital Transformation"
  cards={[
    {
      iconClass: 'fa-solid fa-leaf text-novum-blue',
      title: 'Farm Management Platforms',
      text: 'Monitor crop health, automate reporting, and improve accountability across all field operations.',
    },
    {
      iconClass: 'fa-solid fa-cloud text-novum-blue',
      title: 'Azure Cloud Infrastructure',
      text: 'Centralize and secure farm data through scalable Microsoft Azure environments.',
    },
    {
      iconClass: 'fa-solid fa-chart-column text-novum-blue',
      title: 'Power BI Dashboards',
      text: 'Track crop yields, input costs, and sales trends with real-time visual insights.',
    },
    {
      iconClass: 'fa-solid fa-brain text-novum-blue',
      title: 'AI and Predictive Insights',
      text: 'Use machine learning to forecast demand, plan harvests, and manage resources efficiently.',
    },
    {
      iconClass: 'fa-solid fa-database text-novum-blue',
      title: 'Data Warehouse Integration',
      text: 'Unify IoT, weather, and logistics data for accurate analysis and traceability.',
    },
    {
      iconClass: 'fa-solid fa-people-group text-novum-blue',
      title: 'Microsoft 365 Collaboration',
      text: 'Enable seamless communication between agronomists, suppliers, and management teams.',
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

export default Agriculture;