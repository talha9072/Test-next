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



const Natural = () => {
  return (
    <div>
        <HeaderFour />
       <HeroOnly
  serviceName="Natural Resources"
  title="Powering Safer, Smarter Energy and Mining Operations"
  highlightText="Oil, Gas & Mining"
  subtitle="Helping energy and mining organizations enhance efficiency, safety, and sustainability through cloud and data innovation."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/industries/natural/natural-hero.webp"
  heroButtons={[
    { label: "Explore Solutions", href: "#solutions" },
    { label: "Contact Experts", href: "/contact" },
  ]}
/>

        
      <SoftwareSolutionsSection
  title="Connecting Field Operations for Real-Time Control and Safety"
  paragraphs={[
    "Oil, gas, and mining organizations rely on accurate, connected data to maintain safety, efficiency, and sustainability. Novum’s integrated cloud platforms bring together information from exploration, production, and logistics to enable real-time visibility, predictive insights, and compliance tracking. The result — reduced downtime, improved decision-making, and safer, more efficient operations.",
  ]}
  imageSrc="/assets/img/industries/natural/natural-1.webp"
  altText="Natural Resources Digital Solutions"
/>
        
        <IssuesSection
  title="Oil, Gas & Mining"
  subtitle="Key Challenges"
  imageSrc="/assets/img/industries/natural/natural-3.png"
  imageAlt="Oil, Gas and Mining Challenges"
  leftCards={[
    {
      icon: "bi bi-diagram-3",
      title: "Disconnected Field Systems",
      text: "Fragmented data between exploration, production, and logistics reduces coordination and accuracy.",
    },
    {
      icon: "bi bi-gear-wide-connected",
      title: "Equipment & Asset Downtime",
      text: "Lack of predictive monitoring increases maintenance costs and unplanned outages.",
    },
  ]}
  rightCards={[
    {
      icon: "bi bi-shield-exclamation",
      title: "Safety & Environmental Risks",
      text: "Limited visibility into field operations increases exposure to safety and compliance issues.",
    },
    {
      icon: "bi bi-bar-chart-line",
      title: "Reporting & Regulatory Delays",
      text: "Manual data collection slows environmental reporting and operational decision-making.",
    },
  ]}
/>




        <SoftwareDetailSection
  imageSrc="/assets/img/industries/natural/natural-2.webp"
  imageAlt="Measurable Impact Delivered"
  heading={<>Measurable Impact Delivered</>}
  listItems={[
    'Greater operational control and visibility across field and production sites',
    'Reduced downtime and maintenance costs through predictive analytics',
    'Improved compliance and reporting accuracy with centralized data systems',
    'Enhanced safety performance through real-time monitoring and alerts',
  ]}
/>

       <WhySection
  heading="Why Natural Resources Companies Choose Novum"
  subheadingLines={[
    "Novum helps oil, gas, and mining organizations strengthen safety, efficiency, and sustainability through data and cloud innovation.",
    "As a Microsoft Solutions Partner, we deliver secure, scalable platforms that improve operational visibility, reduce downtime, and support regulatory compliance.",
  ]}
  imgSrc="/assets/img/industries/natural/natural-3.webp"
  imgAlt="Natural Resources Digital Transformation"
  cards={[
    {
      iconClass: 'fa-solid fa-cloud text-novum-blue',
      title: 'Azure Cloud Infrastructure',
      text: 'Deploy secure, high-performance cloud environments that support complex industrial operations at scale.',
    },
    {
      iconClass: 'fa-solid fa-database text-novum-blue',
      title: 'Data Integration & Warehousing',
      text: 'Unify IoT, SCADA, and ERP data for real-time visibility across field and production sites.',
    },
    {
      iconClass: 'fa-solid fa-chart-column text-novum-blue',
      title: 'Power BI Dashboards',
      text: 'Monitor production, energy use, safety, and performance KPIs through real-time dashboards.',
    },
    {
      iconClass: 'fa-solid fa-robot text-novum-blue',
      title: 'AI & Predictive Maintenance',
      text: 'Use machine learning to forecast equipment issues, reduce downtime, and improve asset reliability.',
    },
    {
      iconClass: 'fa-solid fa-shield-halved text-novum-blue',
      title: 'Security & Compliance',
      text: 'Ensure data integrity and meet environmental and operational standards through advanced governance tools.',
    },
    {
      iconClass: 'fa-solid fa-people-group text-novum-blue',
      title: 'Microsoft 365 Collaboration',
      text: 'Connect field engineers, operations teams, and management with secure, modern communication tools.',
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

export default Natural;