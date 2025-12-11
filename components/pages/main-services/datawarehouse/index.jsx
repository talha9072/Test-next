"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import OverviewComponent from "@/components/data/services/OverviewComponent";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import ServiceSplitPanel from "@/components/data/services/ServiceSplitPanel";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import FourCardSection from "@/components/data/services/FourPillarsSection";
import CTAPage from '@/components/data/services/CTAPage';
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Datawarehouse = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Data Warehouse Services"
  title="Unify Your Data to Unlock Deeper Intelligence"
  highlightText="Data Warehouse"
  subtitle="Novum helps organisations centralise data from ERP, CRM, databases, and applications into a unified warehouse that enables accurate reporting and smarter decision-making."
  bgImage="/assets/img/banner-imgs/8.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "About", href: "#about" },
    { label: "Foundation", href: "#foundation" },
    { label: "Usecases", href: "#usecase" },
    { label: "Enterprise", href: "#enterprise" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
 

<div id="overview">
  <OverviewComponent
    title="Establish a Strong Data Foundation for Enterprise Analytics"
    primaryColor="#0d2b75"
    backgroundType="color"
    backgroundColor="#e5f1ff"

    paragraphs={[
      "In the modern business landscape, effective data management is essential for building a successful analytics environment and a data-driven culture. Global enterprises rely on data warehousing to unify information from multiple locations, divisions, and systems while SMEs use it to centralise raw data from every business unit.",
      "Novum helps organisations consolidate all business intelligence data from ERP, CRM, databases, flat files, cloud applications, and manufacturing equipment into a single advanced data warehouse. This unified environment powers deeper analytics, structured reporting, automated data processing, and enterprise grade BI capabilities.",
      "A robust data warehouse enables organisations to standardise information, reduce errors, improve accuracy, automate data allocation, and build a reliable foundation for dashboards, KPIs, and advanced analytics."
    ]}

    listItems={[
      "Centralise data from ERP, CRM, cloud apps, IoT devices, and legacy systems into one unified platform.",
      "Improve data quality through standardisation, deduplication, and automated validation rules.",
      "Enable faster reporting with scheduled data refreshes, automated ETL pipelines, and governed datasets.",
      "Support advanced analytics, forecasting, and AI-driven insights using reliable, structured data models.",
      "Reduce manual reporting effort and eliminate inconsistent spreadsheets across departments.",
      "Provide a scalable foundation for enterprise dashboards, KPIs, and cross-functional BI solutions."
    ]}
  />
</div>

<div id="about">
      <SoftwareSolutionsSection
  title={
    <>
      What Is a Data Warehouse?
    </>
  }
  paragraphs={[
    "A data warehouse (DW or DWH) is a central repository designed to store integrated data from multiple, diverse systems across the organisation. It consolidates both historical and real-time information to support business intelligence, reporting, and advanced analytics.",
    "By standardising data formats and structures, a data warehouse ensures that teams across Finance, Sales, Operations, Supply Chain, and Management all work with consistent, trusted information.",
    "With a unified and well-governed data foundation, organisations can analyse trends, share insights, and make strategic decisions with far greater accuracy and speed."
  ]}
  imageSrc="/assets/img/datawarehouse/warehouse-1.webp"
  altText="Data Warehouse Architecture and Business Intelligence"
  sectionClass="position-relative overflow-hidden py-7"
/>
</div>

<div id="foundation">
  <ServiceSplitPanel
    title="The Foundation for Modern, Insight-Driven Organisations"
    primaryColor="#0d2b75"
    items={[
     
      // ------------------------------------------
      // 1️⃣ Finance
      // ------------------------------------------
      {
        label: "Finance",
        paragraphs: [
          "A centralised data warehouse enables accurate, consistent, and real-time financial intelligence across the organisation. By unifying data from accounting systems, ERPs, and operational sources, finance leaders gain a comprehensive and trusted view of organisational performance. This foundation strengthens planning, enhances financial controls, and supports faster, evidence-based strategic decision-making."
        ],
        listItems: [
          "Reliable and standardised financial reporting across business units",
          "Budgeting insights using consolidated revenue and expenditure data",
          "Improved forecasting accuracy through trend modelling and historical analysis",
          "Automated performance dashboards for CFOs and finance teams"
        ]
      },

      // ------------------------------------------
      // 2️⃣ Supply Chain
      // ------------------------------------------
      {
        label: "Supply Chain",
        paragraphs: [
          "Supply chain operations rely on timely, accurate data from multiple systems including inventory, logistics, procurement, and fulfilment. A modern data warehouse consolidates these sources to deliver real-time visibility, helping organisations optimise flows, reduce disruptions, and respond to market conditions with greater speed and accuracy."
        ],
        listItems: [
          "End-to-end visibility across inventory, logistics, vendor performance, and procurement",
          "Real-time cost, demand, and fulfilment tracking",
          "Improved demand and supply planning with predictive insights",
          "Operational intelligence that reduces delays, stock-outs, and inefficiencies"
        ]
      },

      // ------------------------------------------
      // 3️⃣ Sales & Marketing
      // ------------------------------------------
      {
        label: "Sales & Marketing",
        paragraphs: [
          "Sales and marketing teams thrive when customer, pipeline, and campaign data is connected. A data warehouse enables unified customer journeys, deeper behaviour insights, and accurate forecasting. This helps organisations maximise revenue performance and make smarter decisions across the entire sales and marketing lifecycle."
        ],
        listItems: [
          "Customer behaviour analytics and segmentation intelligence",
          "Sales forecasting based on historical, seasonal, and predictive trends",
          "Campaign ROI tracking across channels and customer touchpoints",
          "Unified revenue reporting to support growth and performance optimisation"
        ]
      },

      // ------------------------------------------
      // 4️⃣ Manufacturing
      // ------------------------------------------
      {
        label: "Manufacturing",
        paragraphs: [
          "Manufacturing teams depend on consistent production, quality, and machine data to optimise throughput and minimise risk. A data warehouse consolidates operational and IoT sources to reveal performance trends, quality variations, and early warning signals, enabling more efficient processes and greater production reliability."
        ],
        listItems: [
          "Production performance monitoring with real-time visibility",
          "Quality metrics tracking supported by standardised reporting models",
          "Downtime analysis that identifies root causes and prevention strategies",
          "IoT machine data integration enabling predictive maintenance and efficiency gains"
        ]
      },

      // ------------------------------------------
      // 5️⃣ Operations & Quality
      // ------------------------------------------
      {
        label: "Operations & Quality",
        paragraphs: [
          "Operational excellence requires clear visibility into processes, performance, and compliance. A data warehouse consolidates and standardises these datasets, allowing organisations to uncover inefficiencies, improve quality outcomes, and maintain strong governance frameworks supported by trustworthy analytics."
        ],
        listItems: [
          "Standardised operational reporting across all departments",
          "Root-cause analysis for recurring issues and process bottlenecks",
          "Optimisation insights to enhance productivity and reduce variability",
          "Compliance, safety, and quality monitoring through unified data structures"
        ]
      },

      // ------------------------------------------
      // 6️⃣ HR & Workforce Management
      // ------------------------------------------
      {
        label: "HR & Workforce Management",
        paragraphs: [
          "HR leaders rely on accurate workforce information to strengthen culture, improve retention, and plan strategically. A data warehouse centralises employee, recruitment, performance, and engagement data, giving HR teams the insight needed to build a resilient and high-performing organisation."
        ],
        listItems: [
          "Employee performance intelligence and workforce metrics",
          "Recruitment funnel visibility and candidate pipeline analytics",
          "Retention analysis that highlights workforce risks and engagement patterns",
          "Workforce planning dashboards to support strategic resourcing and growth"
        ]
      }
    ]}
  />
</div>



<div id="usecase">
  <AIUseCaseGrid
    title="How Data Warehousing Supports the Entire Organisation"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to left top, #ffffff, #eef3ff)"
    columns={3}
    items={[
      
      // -------------------------------
      // NEW 9 Azure-Fabric Inspired Cards
      // -------------------------------

      {
        iconType: "bootstrap",
        icon: "bi-diagram-3",
        title: "Data Integration",
        desc: "Unify your data estate with robust integration tools that simplify complex ETL scenarios and ensure consistent, governed data flows.",
        link: "https://learn.microsoft.com/en-us/fabric/data-factory/data-factory-overview?culture=en-us&country=us",
      },
      {
        iconType: "bootstrap",
        icon: "bi-cpu",
        title: "Data Engineering",
        desc: "Build scalable data pipelines and structured systems to organise, transform, and optimise large volumes of enterprise data.",
        link: "https://learn.microsoft.com/en-us/fabric/data-engineering/data-engineering-overview?culture=en-us&country=us",
      },
      {
        iconType: "bootstrap",
        icon: "bi-robot",
        title: "Data Science",
        desc: "Use AI-powered tooling to enrich datasets, automate workflows, and generate deeper predictive and machine learning insights.",
        link: "https://learn.microsoft.com/en-us/fabric/data-science/data-science-overview?culture=en-us&country=us",
      },
      {
        iconType: "bootstrap",
        icon: "bi-server",
        title: "Data Warehouse",
        desc: "Scale compute and storage independently while delivering industry-leading SQL performance for analytics and reporting workloads.",
        link: "https://learn.microsoft.com/en-us/fabric/data-warehouse/data-warehousing?culture=en-us&country=us",
      },
      {
        iconType: "bootstrap",
        icon: "bi-lightning-charge",
        title: "Real-time Intelligence",
        desc: "Analyze, explore, and act on streaming data with near real-time insights, enabling faster decisions with low-latency processing.",
        link: "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/overview?culture=en-us&country=us",
      },
      {
        iconType: "bootstrap",
        icon: "bi-bar-chart",
        title: "Business Intelligence",
        desc: "Transform your data into interactive dashboards and insights, and integrate visual analytics seamlessly across Microsoft 365.",
        link: "https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview?culture=en-us&country=us",
      },
      {
        iconType: "bootstrap",
        icon: "bi-stars",
        title: "Copilot in Fabric",
        desc: "Accelerate productivity with natural language prompts that automate tasks in notebooks, data pipelines, and Power BI reports.",
        link: "https://learn.microsoft.com/en-us/fabric/fundamentals/copilot-fabric-overview",
      },
      {
        iconType: "bootstrap",
        icon: "bi-collection",
        title: "Databases",
        desc: "Build powerful, insight-driven applications with a unified database platform that scales across cloud environments.",
        link: "https://learn.microsoft.com/en-us/fabric/database/sql/overview?culture=en-us&country=us",
      },
      {
        iconType: "bootstrap",
        icon: "bi-cloud-arrow-down",
        title: "Data Lake",
        desc: "Access and manage your entire multi-cloud data estate from a unified, organisation-wide data lake for advanced analytics.",
        link: "https://learn.microsoft.com/en-us/fabric/onelake/",
      }
    ]}
  />
</div>


<div id="enterprise">
  <FourCardSection
    title="Enterprise Data Warehouse (EDW)"
    intro="An Enterprise Data Warehouse supports analytics across the entire organisation not just a single department. EDWs give large companies a unified, consistent view of their operations even when data comes from many systems, locations, and business units."
    backgroundStyle="linear-gradient(to bottom right, #ffffff, #f4f7ff);"
    cards={[
      {
        image: "/assets/img/datawarehouse/tab-1.webp",
        title: "Unified Analytics Environment",
        desc: "An EDW consolidates data from multiple, fragmented systems into one central environment, enabling enterprise-wide analysis."
      },
      {
        image: "/assets/img/datawarehouse/tab-2.webp",
        title: "Centralised Reporting",
        desc: "All departments access the same trusted, governed data—ensuring consistent dashboards, KPIs, and performance reports."
      },
      {
        image: "/assets/img/datawarehouse/tab-3.webp",
        title: "Cross-Departmental Insights",
        desc: "Finance, Supply Chain, Sales, Manufacturing, HR, and Leadership all gain shared visibility for better planning and decisions."
      },
      {
        image: "/assets/img/datawarehouse/tab-4.webp",
        title: "Standardised Performance Metrics",
        desc: "A single source of truth ensures metrics stay consistent across regions, teams, and business units, reducing errors and duplication."
      }
    ]}
  />
</div>


<CTAPage
  title="Start Building a Unified, Insight-Driven Data Warehouse"
  description="If you’re ready to centralise your data, improve reporting, and unlock advanced analytics, our data warehousing experts are here to help."
  buttonLabel="Download Presentation"
  buttonLink="/assets/img/datawarehouse/NOVUM.ppsx"
  backgroundType="image"
  backgroundImage="/assets/img/datawarehouse/bg-data-cta.webp"
  textColor="#ffffff"
  sectionClass="py-7"
  overlayOpacity={0.65}
/>

      


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

export default Datawarehouse;