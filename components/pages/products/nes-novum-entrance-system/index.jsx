"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import ServiceFeatureCards from "@/components/data/services/ServiceFeatureCards";
import PricingCardsSection from "@/components/data/services/PricingCardsSection";
import ServiceSplitPanel from "@/components/data/services/ServiceSplitPanel";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const NES = () => {
  return (
    <div>
        <HeaderFour />
        
        
        <HeroWithRibbon
  serviceName="NES – Novum Entrance System"
  title="Smart Automated Access Management"
  highlightText="NES"
  subtitle="A next-generation visitor and access management platform that enhances security and delivers a seamless entry experience."
  paragraph="Built on .NET Core and Azure, NES automates visitor handling, strengthens facility security, and reduces manual workload across corporate and government environments."
  bgImage="/assets/img/main-product/nes-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" }
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Security", href: "#security" },
    { label: "Features", href: "#features" },
    { label: "Architecture", href: "#architecture" },
    { label: "Business Value", href: "#business" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" }
  ]}
/>

<div id="overview">
<ImageWithContentSection
  orderControl={2}
  bgColor="#e5f1ff"
  title="Modern Enterprise Entrance & Access Management"
  imageSrc="/assets/img/main-product/nes-main1.png" // update path
  imageAlt="NES – Novum Entrance System Overview"
  
  paragraphs={[
    "NES is Novum’s advanced entrance and access management platform designed to modernise visitor handling, building entry, and corporate security workflows.",
    "Built for enterprise campuses, financial institutions, and high-traffic facilities, NES digitises the full entry process driving efficiency, accuracy, and secure access control powered by .NET Core and Azure."
  ]}

  bulletPoints={[
    "Digitised visitor registration and check-in",
    "Secure, automated access control workflows",
    "Ideal for high-traffic enterprise environments",
    "Built on .NET Core with Azure-scale reliability"
  ]}
/>
</div>

<div id="security">
<ImageWithContentSection
  orderControl={1}
  bgColor="#fff"
  title="Advanced Visitor Experience & Security"
  imageSrc="/assets/img/main-product/nes-main2.png" // update path
  imageAlt="NES Visitor Experience and Automation"

  paragraphs={[
    "NES replaces manual visitor processes with a seamless, fully automated entry experience reducing reception workload and strengthening building security.",
    "Visitors use pre-registration, QR-based entry, and time-bound access permissions to move through facilities quickly and securely."
  ]}

  bulletPoints={[
    "Pre-registration via corporate portal",
    "QR-code fast entry at kiosks",
    "Time-based and zone-based access rules",
    "Reduced queues and faster onboarding"
  ]}
/>
</div>

<div id="features">
  <ServiceFeatureCards
    title="Enterprise-Level Features"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
    primaryColor="#0d2b75"
    noButton
    items={[
      {
        iconType: "bootstrap",
        icon: "bi-person-badge",
        title: "Real-Time Visitor Tracking",
        list: [
          "Live monitoring of all visitors inside the building",
          "Instant visibility for security and compliance teams",
          "Supports evacuation and emergency planning"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-people",
        title: "Live Occupancy Insights",
        list: [
          "Real-time building population metrics",
          "Zone-level occupancy for regulatory compliance",
          "Data-driven space utilisation and planning"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-printer",
        title: "Automated Badge Printing",
        list: [
          "Instant digital or printed visitor badges",
          "Customisable badge layouts for departments or tenants",
          "Improves security at entry points"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-journal-check",
        title: "Full Audit History",
        list: [
          "Logs every entry and exit event",
          "Supports compliance and incident investigations",
          "Tamper-proof event tracking for governance"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-diagram-3",
        title: "Seamless System Integrations",
        list: [
          "Integrates with HR, ERP, and access control systems",
          "Compatible with gates, turnstiles, and biometric devices",
          "Ensures consistent, accurate data across platforms"
        ]
      }
    ]}
  />
</div>

<div id="architecture">
<PricingCardsSection
  sectionId="architecture"
  subtitle="Architecture"
  title="Cloud-Ready, Azure-Optimised Architecture"
  intro="NES is engineered with modern cloud-native principles, ensuring high performance, scalability, and secure identity management across enterprise environments."
  primaryColor="#0d2b75"
  cards={[
    {
      title: "High Performance",
      desc: "Designed for instant validation and real-time updates even in high-traffic environments.",
      list: [
        "Instant QR and visitor validation",
        "Low-latency data processing",
        "Optimised for peak-hour performance"
      ]
    },
    {
      title: "Scalable Architecture",
      desc: "Built to scale effortlessly as visitor traffic grows across locations or departments.",
      list: [
        "Handles thousands of daily check-ins",
        "Elastic scaling on Azure",
        "Suitable for multi-site deployments"
      ]
    },
    {
      title: "Seamless Sync & Backup",
      desc: "Continuous synchronization ensures operational continuity without data loss.",
      list: [
        "Real-time system sync",
        "Automated cloud backups",
        "High availability across environments"
      ]
    },
    {
      title: "Secure Identity Management",
      desc: "Azure-native identity and access controls ensure a secure, governed environment.",
      list: [
        "Azure AD authentication",
        "Role-based access control",
        "Compliance-ready architecture"
      ]
    }
  ]}
/>
</div>


<div id="business">
  <ServiceSplitPanel
    title="Business Value for Modern Enterprises"
    primaryColor="#2d1a78"
    items={[
      {
        label: "Enhanced Building Security",
        paragraphs: [
          "NES strengthens access governance by eliminating unauthorized entry and providing complete visibility into who enters and exits your facility.",
          "Real-time monitoring and digital logs ensure every movement is tracked with accuracy."
        ],
        listItems: [
          "Stronger access oversight",
          "Real-time visitor tracking",
          "Full audit trails for compliance"
        ]
      },

      {
        label: "Faster Visitor Flow",
        paragraphs: [
          "Automated check-in, QR scanning, and pre-registration significantly shorten wait times and streamline the guest journey.",
          "Enterprises experience smoother front-desk operations even during peak periods."
        ],
        listItems: [
          "Instant QR-based entry",
          "Reduced queue times",
          "Better guest experience"
        ]
      },

      {
        label: "Reduced Human Error",
        paragraphs: [
          "Manual data entry and paper logs introduce avoidable mistakes—NES automates these processes for accuracy and consistency.",
          "All visitor details are captured digitally, eliminating duplication and errors."
        ],
        listItems: [
          "Automated visitor records",
          "Policy-aligned validation",
          "Error-free digital workflows"
        ]
      },

      {
        label: "Modern Digital Experience",
        paragraphs: [
          "NES aligns reception and security workflows with smart-building standards, creating a professional, technology-driven first impression.",
          "Visitors, employees, and tenants benefit from a seamless, fully digital experience."
        ],
        listItems: [
          "Smart, digital-first onboarding",
          "Professional visitor experience",
          "Modern corporate image"
        ]
      },

      {
        label: "Lower Operational Overhead",
        paragraphs: [
          "By automating visitor handling, NES reduces reliance on large reception teams and manual verification processes.",
          "Organisations can reallocate staff to higher-value activities and reduce cost pressures."
        ],
        listItems: [
          "Reduced front-desk workload",
          "Lower staffing requirements",
          "Fewer manual processes"
        ]
      },

      {
        label: "Future-Ready Integration",
        paragraphs: [
          "NES is part of Novum’s Smart Building Solutions portfolio and integrates seamlessly with upcoming IoT, AI, and automation capabilities.",
          "This ensures long-term relevance, security, and technology alignment for large enterprises."
        ],
        listItems: [
          "Built for IoT & automation expansion",
          "Integrates with corporate systems",
          "Scalable for multi-site deployments"
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

export default NES;