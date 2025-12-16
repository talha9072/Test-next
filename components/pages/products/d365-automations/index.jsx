"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import DynamicsTabs from "@/components/data/services/DynamicsTabs";
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";

const tabsData = [
  {
    label: "Finance Automation",
    title: "Automate financial operations for accuracy and speed",
    description:
      "Novum digitises core finance workflows within Dynamics 365 Finance, reducing manual effort, improving accuracy, and accelerating financial cycle times.",

    bullets: [
      "Automated Accounts Payable and Accounts Receivable workflows",
      "OCR-based invoice processing to eliminate manual entry",
      "Automated PO–Invoice–Receipt matching for compliant procurement",
      "Tax rule validation across regulatory and multi-country scenarios",
      "Multi-level approval workflows for finance governance",
    ],

    images: ["/assets/img/main-product/automation-1.webp"]
  },

  {
    label: "HR & Payroll Automation",
    title: "Enhance workforce processes with intelligent HR automation",
    description:
      "Integrated with D365 HR and payroll systems, Novum's automation simplifies employee management and ensures accurate, policy-aligned workforce operations.",

    bullets: [
      "Automated routing of leave requests based on policies and hierarchy",
      "Real-time leave balance validation with no manual checks",
      "Timesheet validation and auto-submission for accurate billing",
      "Automated payroll slip distribution and payroll rollups",
      "Employee profile and organisation structure synchronisation across modules"
    ],

    images: ["/assets/img/main-product/payroll-1.webp"]
  },

  {
    label: "Sales & CRM Automation",
    title: "Boost sales productivity with intelligent CRM automation",
    description:
      "Novum accelerates deal cycles and improves customer engagement through automated workflows built for Dynamics 365 Sales.",

    bullets: [
      "Lead scoring and qualification workflows for better prioritisation",
      "Automated opportunity follow-ups for timely engagement",
      "Auto-generation of quotes, proposals, and contracts",
      "Customer onboarding workflows from sales to service",
      "Email and SMS notifications powered by Microsoft Graph API"
    ],

    images: ["/assets/img/main-product/salescrm.webp"]
  },

  {
    label: "Procurement Automation",
    title: "Streamline procurement with rule-driven automation",
    description:
      "Ideal for large enterprises managing complex vendor ecosystems, these automations standardise approvals and improve procurement accuracy.",

    bullets: [
      "Vendor onboarding workflows with compliance validation",
      "Configurable purchase request approval rules",
      "Automated stock replenishment based on demand forecasts",
      "Receipt confirmations and discrepancy notifications"
    ],

    images: ["/assets/img/main-product/procurment.webp"]
  },

  {
    label: "Operations & Inventory Automation",
    title: "Improve operational efficiency with automated supply chain workflows",
    description:
      "For organisations using D365 Supply Chain Management, Novum automates logistics, inventory control, and warehouse coordination.",

    bullets: [
      "Inventory level alerts based on predefined thresholds",
      "Automated replenishment triggered by demand signals",
      "Warehouse task automation for picking, packing, and movement orders",
      "Logistics coordination workflows for smoother operations"
    ],

    images: ["/assets/img/main-product/inventory.webp"]
  }
];


const D365 = () => {
  return (
    <div>
        <HeaderFour />

        <HeroWithRibbon
  serviceName="D365 Automations"
  title="Automate and optimize business operations in Dynamics 365"
  highlightText="Azure"
  subtitle="Novum’s D365 Automations streamlines Finance, HR, Procurement, Sales, and Operations with workflows that reduce manual effort and improve accuracy across your Dynamics 365 environment"
  bgImage="/assets/img/main-product/d365-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Automation", href: "#automation" },
    { label: "Capabilities", href: "#usecase" },
    { label: "Business Values", href: "#values" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
        
       <div id="overview">
  <ImageWithContentSection
    orderControl={2}
    bgColor="#e5f1ff"
    title="D365 Automations Overview"
    imageSrc="/assets/img/main-product/d365-main.png" // update image if needed
    imageAlt="D365 Automations Overview"
    
    paragraphs={[
      "Novum’s D365 Automations enhances Microsoft Dynamics 365 with intelligent workflows that eliminate repetitive tasks and improve accuracy across business operations.",
      "Built on Microsoft Power Platform and Azure, it delivers scalable, compliant, and efficient automation for Finance, HR, Procurement, Sales, and Operations."
    ]}

    bulletPoints={[
      "Automated workflows across core business functions",
      "Rule-based validation to improve accuracy and reduce errors",
      "Seamless integration within the Dynamics 365 ecosystem",
      "Scalable automation supporting long-term digital transformation"
    ]}
  />
</div>
        
    <section className="dynamics-section py-5" id="automation">
  <div className="container">
    <h2 className="section-title text-center mb-4">Comprehensive Automation Across the Entire Organisation</h2>
    <p className="section-desc text-center">
      Explore how Novum turbocharges Dynamics 365 with intelligent automation across Finance, HR, Procurement, Sales, and Operations.
    </p>

    <DynamicsTabs tabs={tabsData} />
  </div>
</section>  

<div id="usecase">
  <InnovationsRoadmapSection
    sectionId="automation-capabilities"
    sectionClass="py-5"
    backgroundGradient="linear-gradient(to right bottom, #ffffff, #eef3ff)"
    subtitle="TECHNOLOGIES"
    title="Novum’s Advanced Automation Capabilities"
    intro="D365 Automations is built on modern Microsoft technologies that deliver real-time logic, seamless integration, and enterprise-grade scalability."
    primaryColor="#0d2b75"
    items={[
      {
        icon: "bi-lightning",
        title: "Power Automate",
        desc: "Orchestrates complex, multi-step workflows across Dynamics 365 and connected systems."
      },
      {
        icon: "bi-ui-checks-grid",
        title: "Power Apps",
        desc: "Enables custom forms, approval screens, and mobile-ready user experiences."
      },
      {
        icon: "bi-cloud-check",
        title: "Azure Functions",
        desc: "Powers serverless, event-driven automation scenarios with high performance and elasticity."
      },
      {
        icon: "bi-envelope-paper",
        title: "Microsoft Graph API",
        desc: "Enables communication, notifications, and deep integration across Microsoft services."
      },
      {
        icon: "bi-gear-wide-connected",
        title: "Custom D365 Plugins",
        desc: "Executes precise, real-time business logic tailored to enterprise operational needs."
      }
    ]}
  />
</div>


<div id="values">
  <ImageWithContentSection
    orderControl={1}
    bgColor="#e5f1ff"
    title="Business Value"
    imageSrc="/assets/img/main-product/d365-main1.png" // update if needed
    imageAlt="D365 Automations Business Value"
    
    paragraphs={[
      "Organizations using Novum’s D365 Automations experience measurable improvements across finance, HR, procurement, sales, and operations through intelligent, rule-driven automation.",
      "These automations strengthen accuracy, speed up approvals, improve compliance, and create connected workflows that support long-term digital transformation."
    ]}

    bulletPoints={[
      "40–60% reduction in manual workload across departments",
      "Higher process accuracy through consistent rule-driven automation",
      "Faster approval cycles improving operational throughput",
      "End-to-end connected processes with full audit visibility",
      "Greater employee productivity and fewer operational bottlenecks",
      "A foundational pillar for automation-led enterprise transformation"
    ]}
  />
</div>

      


        


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

export default D365;