"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
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
  title="Turn Data into Actionable Insights with Power BI"
  highlightText="Power BI"
  subtitle="Novum helps organisations model, prepare, and visualise data using Power BI to unlock insights, streamline reporting, and support smarter decision-making."
  bgImage="/assets/img/power-bi/power-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Benefits", href: "#benefits" },
    { label: "Data Sources", href: "#datasources" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>


<div id="about">
<ImageWithContentSection
  title="Unlock Insights with Modern Power BI Analytics"
  orderControl={2}
  imageSrc="/assets/img/power-bi/powerbi-main1.png"
  imageAlt="Power BI Overview"

  paragraphs={[
    "Power BI enables organisations to create interactive dashboards, uncover insights, and integrate analytics across Azure and enterprise systems.",
    "A strong data strategy helps teams reduce costs, improve performance, and make faster, insight-driven decisions across finance, operations, manufacturing, sales, and HR.",
    "Novum delivers end-to-end Power BI services that maximise the value of your data assets."
  ]}

  bulletPoints={[
    "Build real-time dashboards with organisation-wide visibility.",
    "Automate data preparation to reduce manual reporting.",
    "Use AI-driven analytics to identify patterns and risks.",
    "Unify data from multiple systems for faster decisions."
  ]}
/>
</div>


<div id="expertise">
 <ImageWithContentSection
  title="On-Demand Power BI Expertise for Your Organisation"
  orderControl={1}
  bgColor = "#fff"
  imageSrc="/assets/img/power-bi/powerbi-main.png"
  imageAlt="Power BI Consulting and Analytics Expertise"

  paragraphs={[
    "If your organisation already uses Power BI and requires enhancements, upgrades, or advanced analytical capabilities, Novum’s specialists are ready to support you. Our consultants bring deep Microsoft expertise and deliver end-to-end Power BI solutions tailored to evolving business needs.",
    "From complex data models and automated dashboards to integrations and performance optimisation, our on-demand consulting ensures your analytics ecosystem is scalable, efficient, and enterprise-ready."
  ]}

  bulletPoints={[
    "Expert Power BI support aligned with your BI team’s requirements.",
    "Consulting focused on real business use cases and measurable results.",
    "A dedicated consultant assigned exclusively to your organisation.",
    "Immediate online or on-site assistance for urgent issues.",
    "Development of robust dashboards, scalable models, and enterprise-grade analytics."
  ]}
/>
</div>

<div id="benefits">
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
</div>

<div id="datasources">
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
</div>

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


      


<div id="testimonials">
    <Testimonials
      subtitle="Client Stories"
      title="What Clients Say About Working With Novum"
      items={[
    {
      img: "/assets/img/clients/majid Ismayilov-Avromed.jpeg",
      text: "With a cloud solution custom-designed for the pharmaceutical industry by Novum Information Technology, we consolidated data from multiple systems into one unified platform. Now department heads access real-time reports instantly, manual consolidation is gone, and decision-making is faster and more secure.",
      author: "Majid Ismailov",
      position: "Head of Data Management, Avromed",
    },
    {
      img: "/assets/img/clients/Zaur Dibirov - Azal.jpeg",
      text: "With Microsoft Dynamics 365 implemented and tailored for the aviation industry by Novum Information Technology, we transformed our finance operations from manual, time-consuming processes into a unified, intelligent system. Real-time insights now guide our decisions, and our teams are more agile and empowered than ever.",
      author: "Zaur Dibirov",
      position: "Director of Finance & Accounting, Azerbaijan Airlines",
    },
    {
      img: "/assets/img/clients/Daniel Viranyi- Kitopi.png",
      text: "Partnering with Novum Information Technology, we migrated our entire infrastructure to the Microsoft Cloud — adopting Microsoft 365 and leveraging Data & AI services tailored to our business model. Through seamless integrations and custom development, Novum helped us unify data, automate workflows, and empower every department with intelligent insights that drive faster, smarter decisions.",
      author: "Daniel V",
      position: "IT & Security Director, Kitopi",
    },
    {
      img: "/assets/img/clients/Ashish Pandey-Aster.jpeg",
      text: "Working with Novum has transformed the way Aster Pharmacy manages its operations. Their tailored solutions and expert guidance have streamlined our processes, improved efficiency, and enabled better decision-making across all departments. The partnership with Novum has been truly valuable, and we look forward to continued success together.",
      author: "Ashish Panday",
      position: "IT Director, Aster Pharmacy",
    },
  ]}
    />
  
</div>



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