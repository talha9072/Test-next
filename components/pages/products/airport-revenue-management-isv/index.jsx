"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import ServiceSplitPanel from "@/components/data/services/ServiceSplitPanel";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const AirportRevenue = () => {
  return (
    <div>
        <HeaderFour />

        <HeroWithRibbon
  serviceName="Airport Revenue Management"
  title="Automate and optimize airport revenue processes"
  highlightText="Azure"
  subtitle="Automate airport revenue with real-time data, aviation rules, and integrated billing"
  bgImage="/assets/img/main-product/airport-revenue-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#services" },
    { label: "Benefits", href: "#benefits" },
    { label: "Technical Highlights", href: "#technical-highlights" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
        
    <div id="overview"> 
       <ImageWithContentSection
  orderControl={2}
  bgColor="#fff"
  title="A Unified Platform for Airport Revenue Management"
  imageSrc="/assets/img/main-product/airport-revenue-1.webp" // ← update with actual image
  imageAlt="Airport Revenue Management Overview"

  paragraphs={[
    "Airports depend on real-time financial and operational visibility to manage complex revenue streams. Novum’s Airport Revenue Management Solution centralises these processes and aligns operational data with financial outcomes.",
    "Built for airports and aviation service providers, the solution extends Microsoft Dynamics 365 Finance & Operations with aviation-ready mappings, automation, and compliance features."
  ]}

  bulletPoints={[
    "Centralised aeronautical and non-aeronautical revenue workflows",
    "Automated billing driven by operational and flight data",
    "Accurate invoicing aligned with airport regulatory requirements",
    "Real-time visibility from service execution to financial reporting"
  ]}
/> 
</div>   

      <div id="services">
  <AIUseCaseGrid
    title="Key Features of Airport Revenue Management"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to left top, #e5f1ff, #e5f1ff)"
    columns={3}
    noButton
    items={[
      {
        iconType: "bootstrap",
        icon: "bi-diagram-3",
        title: "Industry-Specific Parameters",
        desc: "Preconfigured ICAO/IATA mappings, airport service codes, and regulatory templates ensure aviation-ready setup from day one.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-airplane",
        title: "Flight Schedule Integration",
        desc: "Real-time AODB integration automates flight schedule updates, service events, and revenue capture with complete accuracy.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-truck",
        title: "Ground Handling Revenue",
        desc: "Automated billing for cargo, passenger, and turnaround operations with configurable tariffs, contracts, and service-level rules.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-currency-exchange",
        title: "Dynamic Tariff Management",
        desc: "Flexible rules engine for aeronautical charges including landing, parking, navigation, concession fees, and commercial services.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-bar-chart",
        title: "Dashboards & Analytics",
        desc: "Embedded Power BI dashboards provide real-time insights into flight operations, utilisation, revenue performance, and profitability.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-link-45deg",
        title: "End-to-End Finance Alignment",
        desc: "Native D365 Finance & Operations integration streamlines revenue recognition, invoicing, compliance, and audit controls.",
        link: "#",
      },
    ]}
  />
</div>  

<div id="benefits">
  <InnovationsRoadmapSection
    sectionId="benefits-section"
    sectionClass="py-5"
    backgroundGradient="linear-gradient(to right bottom, #ffffff, #eef3ff)"
    subtitle="BENEFITS"
    title="Key Benefits of Airport Revenue Management"
    intro="Novum’s Airport Revenue Management Solution provides airports with enhanced accuracy, transparency, and operational efficiency across all revenue processes."
    primaryColor="#0d2b75"
    items={[
      {
        icon: "bi-collection",
        title: "Single Source of Truth",
        desc: "Centralized management of flight schedules, services, revenue streams, and billing under one unified platform."
      },
      {
        icon: "bi-lightning-charge-fill",
        title: "Automation",
        desc: "Minimises manual work, reduces billing errors, and accelerates revenue processing through rule-based automation."
      },
      {
        icon: "bi-shield-check",
        title: "Regulatory Compliance",
        desc: "Aligned with ICAO, IATA, and global aviation reporting standards for accurate, audit-ready financial operations."
      },
      {
        icon: "bi-bar-chart-line",
        title: "Revenue Visibility",
        desc: "Predictive analytics and embedded Power BI dashboards deliver insights into revenue performance and profitability."
      },
      {
        icon: "bi-arrows-expand",
        title: "Scalability",
        desc: "Flexible design suited for airports of all sizes with capacity to grow and support future operational expansion."
      }
    ]}
  />
</div>


<div id="technical-highlights">
  <ServiceSplitPanel
    title="Technical Highlights"
    primaryColor="#0d2b75"
    items={[
      {
        label: "Platform Foundation",
        paragraphs: [
          "Built on Microsoft Dynamics 365 Finance & Operations, the solution provides a secure, cloud-native platform designed for aviation-grade financial and operational workloads.",
        ],
        listItems: [
          "Cloud-hosted SaaS deployment",
          "Native Dynamics 365 extensibility",
          "Enterprise-grade reliability & security"
        ]
      },

      {
        label: "Certified ISV Solution",
        paragraphs: [
          "The Airport Revenue Management solution is a certified Microsoft ISV add-on available on AppSource, ensuring compliance with Microsoft’s technical and operational standards."
        ],
        listItems: [
          "Microsoft AppSource certified",
          "Aviation-ready configuration",
          "Fully aligned with Microsoft ecosystem standards"
        ]
      },

      {
        label: "Prebuilt Integrations",
        paragraphs: [
          "Designed for seamless interoperability with aviation systems, the solution includes ready-made API connectors for AODB, ground handling platforms, and airport service systems."
        ],
        listItems: [
          "Integration with AODB & operational databases",
          "Prebuilt APIs for ground handling systems",
          "Supports real-time operational updates"
        ]
      },

      {
        label: "Enterprise Multi-Model Support",
        paragraphs: [
          "Built to support multi-entity, multi-currency, and multi-language environments, ensuring complete flexibility for regional and international airport operations."
        ],
        listItems: [
          "Multi-currency billing",
          "Multi-entity financial structures",
          "Multi-language user experience"
        ]
      },

      {
        label: "Power Platform Extensibility",
        paragraphs: [
          "The solution integrates seamlessly with Microsoft Power Platform for advanced reporting, automation, and AI-driven insights."
        ],
        listItems: [
          "Embedded Power BI dashboards",
          "Process automation with Power Automate",
          "AI-powered capabilities via Copilot Studio"
        ]
      }
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

export default AirportRevenue;