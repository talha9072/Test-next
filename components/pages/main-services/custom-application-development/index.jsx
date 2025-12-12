"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import MicrosoftNumberedFAQ from "@/components/data/services/MicrosoftNumberedFAQ";
import MicrosoftBannerStats from "@/components/data/services/MicrosoftBannerStats";
import DynamicTabsCards from "@/components/data/services/DynamicTabsCards";
import ImplementSection from "@/components/data/services/implement";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Training = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Low Code Business App Solutions"
  title="Custom Application Development with Power Apps"
  highlightText="Custom Applications"
  subtitle="Accelerate digital transformation with Microsoft Power Apps."
  bgImage="/assets/img/app-dev/bg-app-1.png"
  // heroImage="/assets/img/app-dev/app-hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Power Apps", href: "#powerapps" },
    { label: "Work Flow", href: "#workflow" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

 
<div id="about">
     <ImageWithContentSection
  orderControl={2}
  bgColor="#e5f1ff"
  title="Build Custom Business Apps Faster with Power Apps"
  imageSrc="/assets/img/app-dev/app-main.png"
  imageAlt="Custom Application Development with Power Apps"

  paragraphs={[
    "Microsoft Power Apps enables organisations to build secure, high-performance applications with minimal coding effort.",
    "Novum helps companies design and deploy custom applications that streamline workflows, automate processes, and integrate seamlessly with Microsoft and third-party systems."
  ]}

  bulletPoints={[
    "Rapid development with low-code tools",
    "Apps tailored to real business challenges",
    "Integration with Microsoft and external platforms",
    "Automation of manual and repetitive workflows"
  ]}
/>
</div>

<div id="capabilities">
 <DynamicTabsCards
  title="Core Capabilities of Power Apps"
  primaryColor="#0d2b75"
  backgroundType="gradient"
  backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
  tabs={[
    /* ------------------------------------ */
    /* LOW-CODE DEVELOPMENT (3 cards)       */
    /* ------------------------------------ */
    {
      label: "Low-Code Development",
      cards: [
        {
          image: "/assets/img/app-dev/tab-1.jpg",
          label: "UI Builder",
          title: "Drag-and-Drop UI Creation",
          list: [
            "Create UIs quickly with visual components",
            "No manual HTML/CSS required",
            "Fast business app layout building"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "Templates",
          title: "Prebuilt Templates & Components",
          list: [
            "Accelerate development with ready templates",
            "Reusable components for consistency",
            "Reduces repetitive tasks"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "Prototyping",
          title: "Faster Prototyping & Iteration",
          list: [
            "Validate ideas rapidly",
            "Short testing cycles",
            "Move from concept to production faster"
          ],
          link: "#"
        }
      ]
    },

    /* ------------------------------------ */
    /* DATA CONNECTIVITY (4 cards)          */
    /* ------------------------------------ */
    {
      label: "Data Connectivity",
      cards: [
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "Dataverse",
          title: "Microsoft Dataverse",
          list: [
            "Enterprise-grade relational storage",
            "Security roles and data rules",
            "Scalable for large applications"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "SharePoint",
          title: "SharePoint / SQL / Dynamics 365",
          list: [
            "Instant connection to Microsoft systems",
            "Native integration with business data",
            "Seamless enterprise workflows"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-4.jpg",
          label: "Azure",
          title: "Azure Services",
          list: [
            "Azure Functions",
            "Logic Apps",
            "AI + Cloud-based APIs"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-5.jpg",
          label: "Connectors",
          title: "1,000+ SaaS & API Integrations",
          list: [
            "Third-party SaaS systems",
            "Enterprise application integrations",
            "Prebuilt connectors for fast setup"
          ],
          link: "#"
        }
      ]
    },

    /* ------------------------------------ */
    /* AI & AUTOMATION (4 cards)            */
    /* ------------------------------------ */
    {
      label: "AI & Automation",
      cards: [
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "AI Builder",
          title: "Built-In AI Builder",
          list: [
            "Prediction models",
            "Object detection",
            "Classification and scoring"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "Power Automate",
          title: "Workflow Automation",
          list: [
            "Approvals & notifications",
            "Automated business processes",
            "Low-code logic creation"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-4.jpg",
          label: "Document AI",
          title: "Document Intelligence",
          list: [
            "Extract data from PDFs & forms",
            "OCR & AI-based text recognition",
            "Automated data capture"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-5.jpg",
          label: "ML",
          title: "Machine Learning",
          list: [
            "Prediction & scoring models",
            "Custom ML integrations",
            "AI-driven insights"
          ],
          link: "#"
        }
      ]
    },

    /* ------------------------------------ */
    /* CROSS-PLATFORM SUPPORT (3 cards)     */
    /* ------------------------------------ */
    {
      label: "Cross-Platform Compatibility",
      cards: [
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "Mobile",
          title: "Mobile & Tablet Ready",
          list: [
            "Run across iOS and Android",
            "Adaptive responsive layouts",
            "Optimised performance"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "Web",
          title: "Web Browser Compatibility",
          list: [
            "Runs in any modern browser",
            "No installation required",
            "Instant access via web"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-4.jpg",
          label: "Devices",
          title: "Consistent Performance",
          list: [
            "Smooth rendering across devices",
            "Optimised loading and caching",
            "Unified user experience"
          ],
          link: "#"
        }
      ]
    },

    /* ------------------------------------ */
    /* ENTERPRISE SECURITY (3 cards)        */
    /* ------------------------------------ */
    {
      label: "Enterprise-Grade Security",
      cards: [
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "Security",
          title: "Role-Based Access Control",
          list: [
            "Granular permissions",
            "User-level data access",
            "Secure environment isolation"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "Entra ID",
          title: "Azure AD / Entra ID Security",
          list: [
            "Multi-factor authentication",
            "Conditional access",
            "Identity governance"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-4.jpg",
          label: "Governance",
          title: "Centralised Governance",
          list: [
            "Data policies",
            "Environment monitoring",
            "Compliance tools in Admin Center"
          ],
          link: "#"
        }
      ]
    }
  ]}
/> 
</div>



<div id="powerapps">
<MicrosoftBannerStats
  title="Types of Applications You Can Build"
  subtitle="Power Apps supports multiple application types to suit different scenarios and user experiences."
  backgroundType="gradient"
  backgroundGradient=""
  items={[
    {
      iconType: "bootstrap",
      icon: "bi-grid-1x2",
      title: "Canvas Apps",
      desc: "Create fully customised, pixel-perfect interfaces with complete control over the user experience.",
    },
    {
      iconType: "bootstrap",
      icon: "bi-table",
      title: "Model-Driven Apps",
      desc: "Data-first applications where the UI is automatically generated based on your data model.",
    },
    {
      iconType: "bootstrap",
      icon: "bi-globe",
      title: "Power Apps Portals (Power Pages)",
      desc: "Secure external-facing portals allowing customers, vendors, and partners to access and interact with your data.",
    },
  ]}
/>
</div>


<div id="workflow">
<MicrosoftNumberedFAQ
  sectionId="dev-workflow-faq"
  headline="Our Development Workflow"
  backgroundType="gradient"
  backgroundValue="linear-gradient(to bottom right, #f7faff, #eef3ff)"
  items={[
    {
      question: "Requirements Definition",
      answer:
        "We identify the core problem, business needs, and user expectations."
    },
    {
      question: "Select the Right App Type",
      answer:
        "Canvas, Model-Driven, or Portal — we choose the optimal approach based on your requirements."
    },
    {
      question: "UI & Experience Design",
      answer:
        "Using Power Apps Studio, we design intuitive, user-friendly interfaces that maximise productivity."
    },
    {
      question: "Connect Data Sources",
      answer:
        "We integrate required data systems using secure connectors and Dataverse where appropriate."
    },
    {
      question: "Add Automation & AI",
      answer:
        "We enhance your app with workflows, AI models, triggers, and intelligent processing."
    },
    {
      question: "Test, Secure & Deploy",
      answer:
        "Apps undergo thorough testing before being shared, secured, and deployed across your organisation."
    }
  ]}
/>
</div>




 



<div id="whyus">
<ImplementSection
  id="benefits-impact"
  subtitle="Benefits & Business Impact"
  title="Why Custom Application Development Delivers Real Value"
  description="Low-code Power Apps development empowers organisations to innovate faster, reduce costs, and scale solutions confidently across teams. The approach brings both immediate and long-term business impact through streamlined processes and deep Microsoft ecosystem integration."
  items={[
    {
      img: "/assets/img/app-dev/app-1.webp",
      title: "Accelerated Delivery",
      desc: "Low-code development dramatically reduces build time, speeding up delivery and enabling faster time-to-market for business solutions."
    },
    {
      img: "/assets/img/app-dev/app-2.webp",
      title: "Empowers Business Users",
      desc: "Citizen developers can safely build and iterate solutions while IT retains full governance, security, and oversight."
    },
    {
      img: "/assets/img/app-dev/tab-1.jpg",
      title: "Scalable & Maintainable",
      desc: "Applications built on Power Apps scale easily and evolve alongside your business, ensuring long-term sustainability."
    },
    {
      img: "/assets/img/app-dev/tab-2.jpg",
      title: "Reduced Development Cost",
      desc: "Less manual coding means fewer development hours, reduced reliance on specialised resources, and lower overall cost."
    },
    {
      img: "/assets/img/app-dev/tab-3.jpg",
      title: "Deep Microsoft Integration",
      desc: "Seamless connections with Microsoft 365, Azure, Dynamics 365, and Power Platform deliver unified, reliable performance."
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



<div id="otherservices">
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
</div>

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

export default Training;