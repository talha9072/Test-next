"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import ServiceFeatureSlider from "@/components/data/services/ThreeRowSliderCards";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Digitalstrategy = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Digital Strategy & Transformation"
  title="Future-Ready Roadmaps for Sustainable Growth"
  highlightText="Digital Strategy"
  subtitle="Connecting vision, technology, and measurable business outcomes."
  bgImage="/assets/img/digital-strategy/digital-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Vision", href: "#vision" },
    { label: "Services", href: "#services" },
    { label: "Offerings", href: "#service-offerings" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
 

<div id="overview">
   <ImageWithContentSection
  orderControl={2}
  bgColor="#e5f1ff"
  title="Why Digital Strategy Is Critical for Modern Enterprises"
  imageSrc="/assets/img/digital-strategy/strategy-1.webp"
  imageAlt="Digital Strategy Solutions"

  paragraphs={[
    "In a fast-evolving business landscape, technology alone is not enough. Organizations need a clear digital strategy to align innovation with measurable business outcomes.",
    "NOVUM’s digital strategy services help enterprises define a structured transformation roadmap, ensuring every initiative supports growth, agility, and long-term customer value."
  ]}

  bulletPoints={[
    "Aligns business vision with technology execution",
    "Enables modernization of core operations",
    "Improves decision-making through data-driven insights",
    "Optimizes processes for efficiency and scale",
    "Builds future-ready enterprise architecture"
  ]}
/>
</div>

<div id="vision">
 <ImageWithContentSection
  orderControl={1}
  bgColor="#fff"
  title="Transforming Vision into Actionable, Scalable Strategies"
  imageSrc="/assets/img/digital-strategy/strategy-2.webp"
  imageAlt="Enterprise Digital Strategy Process"

  paragraphs={[
    "NOVUM helps organizations craft digital strategies that align business goals with the right technologies, processes, and execution models.",
    "From current-state assessments to roadmap creation and implementation planning, we ensure every initiative delivers measurable impact, agility, and long-term competitiveness."
  ]}

  bulletPoints={[
    "Business-aligned digital transformation roadmaps",
    "Clear prioritization of technology and initiatives",
    "Scalable strategies built for long-term growth",
    "Improved agility, innovation, and execution focus"
  ]}
/>
</div>

<div id="services">
  <AIUseCaseGrid
    title="Digital Strategy Services"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to left top, #ffffff, #eef3ff)"
    columns={3}
    noButton
    items={[
      {
        iconType: "bootstrap",
        icon: "bi-graph-up-arrow",
        title: "Digital Maturity Assessment",
        desc: "Assessing current digital capabilities to identify gaps, strengths, and priority transformation opportunities.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-map",
        title: "Technology Roadmapping",
        desc: "Defining phased technology investments and implementation plans aligned with business goals.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-gear-wide-connected",
        title: "Process Optimization",
        desc: "Redesigning workflows to improve efficiency, scalability, and cross-functional collaboration.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-people-check",
        title: "Change Management Strategy",
        desc: "Driving adoption through structured change planning, communication, and workforce readiness.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-bar-chart-line",
        title: "Data & Insights Strategy",
        desc: "Leveraging analytics and business intelligence to improve decision-making and uncover growth opportunities.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-shield-check",
        title: "Governance & Risk Management",
        desc: "Establishing governance frameworks to ensure compliance, accountability, and execution control.",
        link: "#",
      },
    ]}
  />
</div>

<div id="service-offerings">
  <ServiceFeatureSlider
    sectionId="service-offerings"
    title="How Digital Strategy Empowers Business Transformation"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #e5f1ff, #e5f1ff)"
    primaryColor="#0d2b75"
    items={[
      {
        image: "/assets/img/digital-strategy/tab-1.webp",
        title: "Aligned Business & Technology Goals",
        list: [
          "Aligns digital initiatives with leadership vision",
          "Ensures technology investments support business priorities",
          "Creates a clear link between strategy and execution"
        ],
      },
      {
        image: "/assets/img/digital-strategy/tab-2.webp",
        title: "Accelerated Transformation",
        list: [
          "Phased roadmaps for faster modernization",
          "Reduced complexity across departments",
          "Early wins that build momentum"
        ],
      },
      {
        image: "/assets/img/digital-strategy/tab-3.webp",
        title: "Enhanced Decision Intelligence",
        list: [
          "Data-driven decision-making frameworks",
          "KPIs and dashboards for real-time insights",
          "Supports continuous strategic adjustment"
        ],
      },
      {
        image: "/assets/img/digital-strategy/tab-4.webp",
        title: "Operational Efficiency",
        list: [
          "Optimized workflows and systems",
          "Reduced redundancy and manual effort",
          "Improved collaboration and productivity"
        ],
      },
      {
        image: "/assets/img/digital-strategy/tab-5.webp",
        title: "Future-Ready Scalability",
        list: [
          "Adaptable strategy and governance models",
          "Prepared for emerging technologies",
          "Scales with business growth and market change"
        ],
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

export default Digitalstrategy;