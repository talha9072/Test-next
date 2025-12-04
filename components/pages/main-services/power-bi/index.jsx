"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import OverviewComponent from "@/components/data/services/OverviewComponent";
import BulletPoints from "@/components/data/services/bulletpoints";
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import DataSourcesSection from "@/components/data/services/DataSourcesSection";
import CTAPage from '@/components/data/services/CTAPage';
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const PowerBI = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Power BI Consulting"
  title="Transform Data into Insights that Power Better Decision Making"
  highlightText="Power BI"
  subtitle="Novum helps organisations model, prepare, and visualise data using Power BI to build a truly data-driven culture. Unlock meaningful insights, streamline reporting, and enable smarter strategic decisions across every department."
  bgImage="/assets/img/power-bi/power-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Implementation", href: "#implement" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>


<div id="about">
<OverviewComponent
  title="Accelerate Your Sustainability Journey"
  primaryColor="#0d2b75"
  backgroundType="color"
  backgroundColor="#e5f1ff"

  paragraphs={[
    "In today’s data-driven environment, data modelling and visual reporting have become essential capabilities for every modern organisation. Power BI, a leading Microsoft analytics tool, enables teams to build interactive dashboards, generate insights, and develop data-centric solutions integrated with Azure Analytics.",
    "With the right Power BI strategy, organisations can uncover business opportunities, reduce costs, improve margins, track operational performance, and support strategic planning across Finance, Supply Chain, Manufacturing, Sales & Marketing, Operations, Management, and HR.",
    "Novum provides a full suite of Power BI services designed to help organisations maximise the value of their data assets.",
  ]}

  listItems={[
  "Build real-time dashboards that give instant visibility across finance, operations, sales, and supply chain performance.",
  "Automate data preparation and reporting workflows to eliminate manual effort and improve reporting accuracy.",
  "Use AI-enhanced analytics to uncover trends, identify risks, and highlight improvement opportunities across the business.",
  "Connect data from multiple systems to create a unified, organisation-wide view for faster, insight-driven decision-making.",
]}
/>
</div>


<div id="perfermance">
  <BulletPoints
    sectionId="overview"
    title={<>Power BI Consulting On-Demand Expertise for Your Organisation</>}
    
    paragraphs={[
      "If your organisation already has a Power BI environment in place and requires updates, enhancements, or advanced analytical capabilities, Novum's specialists are ready to support you. Our consultants bring deep expertise across Microsoft technologies and deliver end-to-end Power BI solutions tailored to evolving business needs."
    ]}

    extraParagraph="From complex data models and automated dashboards to custom integrations and performance optimisation, our On-Demand Power BI Consulting service ensures your analytics ecosystem is scalable, efficient, and enterprise-ready."

    bulletPoints={[
      "Expert Power BI support tailored to your BI team’s ideas and requirements",
      "Consulting aligned with real business use cases and measurable outcomes",
      "A dedicated consultant assigned exclusively to your organisation",
      "Immediate online or on-site assistance for urgent needs and rapid issue resolution",
      "Development of robust dashboards, scalable data models, and enterprise-grade analytics"
    ]}

    imageSrc="/assets/img/power-bi/power-bi-hero.png"
    altText="Power BI Consulting and Analytics Expertise"
    sectionClass="position-relative overflow-hidden py-7"
  />
</div>


<InnovationsRoadmapSection
    sectionId="future-roadmap"
    backgroundGradient="linear-gradient(to right bottom, #ffffff, #eef3ff)"
    subtitle="POWER BI BENEFITS"
    title="Why Organisations Need Business Intelligence"
    intro="Microsoft Power BI enables organisations to convert raw operational data into meaningful insights. By integrating Power BI with Dynamics 365 and internal systems, businesses gain real-time visibility and actionable intelligence across all functions."
    primaryColor="#0d2b75"
    items={[
      {
        icon: "bi-graph-up",
        title: "Real-Time Dashboards",
        desc: "Monitor key business metrics with live dashboards that update instantly as data changes."
      },
      {
        icon: "bi-bar-chart-line",
        title: "Advanced Visual Analytics",
        desc: "Access rich visualisations including charts, maps, KPIs, and custom graphs for deeper insight."
      },
      {
        icon: "bi-wifi",
        title: "IoT Monitoring",
        desc: "Track IoT device performance in real time to improve asset reliability and operational efficiency."
      },
      {
        icon: "bi-box-seam",
        title: "Inventory Intelligence",
        desc: "Monitor stock levels, predict demand, and forecast sales trends with built-in analytics."
      },
      {
        icon: "bi-diagram-3-fill",
        title: "Process & Operations Analysis",
        desc: "Analyse business processes across Supply Chain, Finance, Sales, and Operations to identify optimisation opportunities."
      },
      {
        icon: "bi-pin-map",
        title: "Cross-System Integration",
        desc: "Connect data from Dynamics 365, ERP, CRM, IoT, and third-party tools to build a unified analytics view."
      }
    ]}
  />

  <DataSourcesSection
  fullImage="/assets/img/power-bi/data-sources.png"
  icons={[
    { src: "/assets/img/power-bi/icons/microsoft-access.png", name: "Microsoft Access" },
    { src: "/assets/img/power-bi/icons/directory.png", name: "Microsoft Directory" },
    { src: "/assets/img/power-bi/icons/acu.png", name: "Acumatica" },
    { src: "/assets/img/power-bi/icons/adobe-analytics.png", name: "Adobe Analytics" },
    { src: "/assets/img/power-bi/icons/sql.png", name: "Sql Server" },
    { src: "/assets/img/power-bi/icons/af.jpeg", name: "App Figure" },
    { src: "/assets/img/power-bi/icons/quickbooks.png", name: "Quick Books" },
    { src: "/assets/img/power-bi/icons/salesforce.png", name: "SalesForce" },
     { src: "/assets/img/power-bi/icons/sendgrid.png", name: "Send Grid" },
     { src: "/assets/img/power-bi/icons/sharepoint.png", name: "Share Point" },
    
       
  ]}
/>

<CTAPage
  title="GET SAMPLE REPORTS"
  description="After reviewing your data landscape and system infrastructure, Novum’s Power BI consultants will create a tailored BI strategy and roadmap to transform your unused or unorganised data into powerful insights. Our sample reports demonstrate how data visualisation can support informed decision-making and highlight opportunities for operational improvement."
  buttonLabel="View samples"
  buttonLink="https://app.powerbi.com/view?r=eyJrIjoiNDFkMmJmM2ItNGNmMi00MDU2LWJlZDgtYTY4NTU4YjU3MGU5IiwidCI6Ijk0ZTZlOGZjLThkNmQtNDNiNy1iNjJlLWRjZDBjY2YwMWE0ZCIsImMiOjl9"
  backgroundType="image"
  backgroundImage="/assets/img/power-bi/powerbi-cta.png"
  textColor="#ffffff"
  sectionClass="py-7"
  overlayOpacity={0.1}
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
      title: "Digital Services",
      imgSrc: "/assets/img/service-cards/digitalmarketing.png",
      description: "We bring transformative digital outcomes to organizations.",
      link: "#",
      gradient: "linear-gradient(90deg, #216868, #14B8BF)",
    },
    {
      title: "Data Warehouse",
      imgSrc: "/assets/img/service-cards/datawarehouse.svg",
      description:
        "We consolidate intelligence data from multiple sources to unlock deeper insights.",
      link: "/services/data-warehouse",
      gradient: "linear-gradient(90deg, #157569, #71E9B6)",
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

export default PowerBI;