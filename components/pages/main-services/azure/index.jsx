"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import DynamicsTabs from "@/components/data/services/DynamicsTabs";
import CTAPage from '@/components/data/services/CTAPage';
import UseCasesSection from "@/components/data/services/UseCasesSection";
import HighlightsSection from "@/components/data/services/HighlightsSection";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";


const tabsData = [
  {
    label: "IT Professionals",
    title: "Modernise and optimise IT operations with Azure",
    description:
      "Azure gives IT teams secure, scalable tools to manage infrastructure, optimise workloads, strengthen governance, and modernise hybrid environments with confidence.",

    bullets: [
      "Infrastructure and cloud environment management",
      "Governance, compliance, and identity controls",
      "Security, monitoring, and threat protection",
      "Hybrid and multi-cloud readiness and operations"
    ],

    

    images: [
      "/assets/img/azure-service/it-prof.avif",
    ]
  },

  {
    label: "Developers",
    title: "Build, deploy, and scale intelligent applications faster",
    description:
      "Azure empowers developers with cloud native tools, DevOps automation, and AI services to accelerate development cycles and create modern, scalable applications.",

    bullets: [
      "App modernisation and cloud-native development",
      "GitHub integration with CI/CD and DevOps automation",
      "APIs, containers, microservices, and serverless",
      "AI-powered services for intelligent applications"
    ],

    images: [
      "/assets/img/azure-service/developers.avif",
    ]
  },

  {
    label: "Data Analysts",
    title: "Unlock real-time insights with unified Azure data solutions",
    description:
      "Azure helps analysts extract insights, run analytics at scale, and support strategic decision making through unified data services and advanced analytics capabilities.",

    bullets: [
      "Modern data warehousing and storage solutions",
      "Real-time analytics pipelines and processing",
      "Advanced dashboards, reporting, and visualisation",
      "Enterprise-grade data governance and quality controls"
    ],

    images: [
      "/assets/img/azure-service/data-analyst.avif",
    ]
  },

  {
    label: "Business Leaders",
    title: "Drive innovation and value creation with Azure and AI",
    description:
      "Azure enables organisations to reduce risk, optimise costs, and accelerate AI-led transformation helping leaders unlock competitive advantage across the business.",

    bullets: [
      "AI adoption and business value acceleration",
      "Cost optimisation and measurable cloud ROI",
      "Strategic cloud and digital transformation planning",
      "Enterprise continuity, resilience, and security"
    ],

    images: [
      "/assets/img/azure-service/leaders.avif",
    ]
  },
];



const Azure = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Azure Services"
  title="Your Azure journey begins with one step"
  highlightText="Azure"
  subtitle="Move to Azure with confidence and gain a secure, scalable, and AI-ready cloud environment"
  bgImage="/assets/img/azure-service/azure-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Applications", href: "#product" },
    { label: "Cloud Transformation", href: "#cloud" },
    { label: "Use Case", href: "#use-cases" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

<div id="about">
  <ImageWithContentSection
    orderControl={2}
    bgColor="#e5f1ff"
    title="What Is Microsoft Azure?"
    imageSrc="/assets/img/azure-service/azure-main.png"
    imageAlt="Microsoft Azure Overview"

    paragraphs={[
      "Microsoft Azure is a secure, scalable cloud platform that helps organisations run applications, manage data, and build intelligent solutions across cloud, hybrid, and edge environments.",
      "Azure enables businesses to modernise operations, accelerate innovation, and adopt advanced capabilities such as AI, analytics, and automation."
    ]}

    bulletPoints={[
      "Run workloads securely across cloud, hybrid, and edge",
      "Use powerful AI, analytics, and data services",
      "Scale infrastructure globally on demand",
      "Strengthen security with built-in identity and compliance",
      "Integrate seamlessly with Microsoft 365, Dynamics 365, and Power Platform"
    ]}
  />
</div>

<section className="dynamics-section py-5" id="product">
  <div className="container">
    <h2 className="section-title text-center mb-4">Transform the way you work</h2>
    <p className="section-desc text-center">
      See how AI works with Dynamics 365 applications to give every team an edge.
    </p>

    <DynamicsTabs tabs={tabsData} />
  </div>
</section>


<div id="cloud">
<HighlightsSection
  sectionId="latest-announcements"
  backgroundGradient="linear-gradient(to bottom right, #e5f1ff, #fff)"
  leftImage="/assets/img/azure-service/left-img.webp"
  leftTitle="Insights for Cloud & AI Success"
  leftDesc="Explore practical guidance to help you modernise cloud environments, enhance data value, optimise costs, and adopt responsible AI."
  title="Guidance for AI, Data, and Cloud Transformation"
  subtitle="Short, actionable insights for smarter cloud adoption"
  cards={[
    {
      icon: "bi-shield-lock",
      title: "Trust your cloud",
      desc: "Security built into every layer with expert-led protection and proactive compliance.",
      link: "https://azure.microsoft.com/",
      cta: "Explore insights"
    },
    {
      icon: "bi-cloud-upload",
      title: "Operate hybrid seamlessly",
      desc: "Manage on-prem, multi-cloud, and edge environments with integrated hybrid tools.",
      link: "https://azure.microsoft.com/",
      cta: "Learn more"
    },
    {
      icon: "bi-people-fill",
      title: "Build on your teams",
      desc: "Develop using any language or framework with full open-source support and flexibility.",
      link: "https://azure.microsoft.com/",
      cta: "View guidance"
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Be future-ready",
      desc: "Stay ahead with Microsoft's continuous innovation powering tomorrow’s solutions.",
      link: "https://azure.microsoft.com/",
      cta: "Read strategy"
    }
  ]}
/>
</div>


<div id="use-cases">
<UseCasesSection
  sectionId="get-to-know-azure"
  backgroundStyle="#e5f1ff"
  primaryColor="#0d2b75"
  subtitle="GET TO KNOW AZURE"
  title="Explore Azure for Every Role"
  intro="Azure helps teams build intelligent apps, modernise infrastructure, and drive secure innovation across IT, development, and analytics."
  tabs={[
    /* -------------------------
       IT PROFESSIONALS
    -------------------------- */
    {
      label: "IT Professionals",
      items: [
        {
          label: "IT",
          title: "Infrastructure & Hybrid Management",
          desc: "Manage cloud, on-prem, and edge workloads seamlessly with Azure’s unified tools.",
          image: "/assets/img/azure-service/it-professionals.png",
          cta: "Learn more",
          link:"https://azure.microsoft.com/en-us/explore/global-infrastructure"
        },
        {
          label: "IT",
          title: "Security & Compliance",
          desc: "Strengthen protection with built-in security, identity governance, and monitoring.",
          image: "/assets/img/azure-service/it-security.png",
          cta: "View details",
          link:"https://azure.microsoft.com/en-us/blog/microsoft-is-a-leader-in-the-2024-gartner-magic-quadrant-for-cloud-ai-developer-services/"
        },
        {
          label: "IT",
          title: "Operational Efficiency",
          desc: "Optimise workloads, automate tasks, and improve system reliability at scale.",
          image: "/assets/img/azure-service/operation.png",
          cta: "Explore",
          link:"https://azure.microsoft.com/en-us/solutions/adaptive-cloud/"
        }
      ]
    },

    /* -------------------------
       DEVELOPERS
    -------------------------- */
    {
      label: "Developers",
      items: [
        {
          label: "Developers",
          title: "Build Modern Applications",
          desc: "Use cloud-native tools, containers, and serverless services to ship faster.",
          image: "/assets/img/azure-service/developer-1.png",
          cta: "Learn more",
          link:"https://azure.microsoft.com/en-us/products/ai-foundry/tools"
        },
        {
          label: "Developers",
          title: "CI/CD & DevOps Automation",
          desc: "Streamline development with GitHub, pipelines, and AI-powered automations.",
          image: "/assets/img/azure-service/developer-2.png",
          cta: "View details",
          link:"https://azure.microsoft.com/en-us/products/ai-foundry/tools"
        },
        {
          label: "Developers",
          title: "Intelligent Apps with AI",
          desc: "Integrate Azure AI for smarter features, automation, and enhanced UX.",
          image: "/assets/img/azure-service/developer-3.png",
          cta: "Explore",
          link:"https://azure.microsoft.com/en-us/resources/developers/"
        }
      ]
    },

    /* -------------------------
       DATA ANALYSTS
    -------------------------- */
    {
      label: "Data Analysts",
      items: [
        {
          label: "Analytics",
          title: "Unified Data & Storage",
          desc: "Bring data together across systems for cleaner, faster analytics.",
          image: "/assets/img/azure-service/analyst-1.png",
          cta: "Learn more",
          link:"https://azure.microsoft.com/en-us/solutions/ai"
        },
        {
          label: "Analytics",
          title: "Real-Time Insights",
          desc: "Use Azure Synapse, Fabric, and AI to analyse massive data volumes instantly.",
          image: "/assets/img/azure-service/analyst-2.png",
          cta: "View insights",
          link:"https://azure.microsoft.com/en-us/explore/innovation-insights/"
        },
        {
          label: "Analytics",
          title: "Reporting & Visualisation",
          desc: "Create dashboards and intelligence models that support confident decisions.",
          image: "/assets/img/azure-service/analyst-3.png",
          cta: "Explore",
          link:"https://azure.microsoft.com/en-us/solutions/ai/responsible-ai-with-azure/"
        }
      ]
    }
  ]}
/>
</div>
 

<CTAPage
  title="Accelerate your cloud and AI transformation"
  description="Unlock the full potential of Azure with secure infrastructure, intelligent data capabilities, and enterprise-grade AI. Modernise faster, reduce complexity, and build a future-ready technology foundation with Novum."
  buttonLabel="Start Your Azure Journey"
  buttonLink="/contact"
  backgroundType="image"
  backgroundImage="/assets/img/azure-service/azure-cta.webp"
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

export default Azure;