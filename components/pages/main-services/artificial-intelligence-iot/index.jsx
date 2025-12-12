"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import PricingCardsSection from "@/components/data/services/PricingCardsSection";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import CTAPage from '@/components/data/services/CTAPage';
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Ai = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Artificial Intelligence & IoT"
  title="AI-Driven Insights and Intelligent Device Integration"
  highlightText="AI & IoT"
  subtitle="Novum leverages Microsoft Cognitive Services to develop smart applications, automate workflows, recognise patterns, and connect IoT hardware for real-time and predictive operations."
  bgImage="/assets/img/ai/ai-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Use Cases", href: "#usecases" },
    { label: "IOT", href: "#iot" },
    { label: "IOT Value", href: "#iot-value" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

<div id="about">
<ImageWithContentSection
  title="AI and IoT Solutions for Real-World Results"
  orderControl={2}
  imageSrc="/assets/img/ai/ai-main-1.png"
  imageAlt="AI and IoT Solutions"

  paragraphs={[
    "Novum delivers practical AI and IoT solutions powered by Microsoft Cognitive Services, TensorFlow, Python, and OpenCV. We build production-ready machine learning models, computer vision systems, and intelligent automation that enhance operational performance.",
    "Our IoT capabilities connect devices, monitor assets, and provide real-time insights to support predictive maintenance and improve visibility across critical operations."
  ]}

  bulletPoints={[
    "Extract insights from large and complex datasets",
    "Automate repetitive and high-risk workflows",
    "Identify patterns with ML and computer vision",
    "Improve forecasting accuracy across operations",
    "Enable predictive maintenance with connected IoT data"
  ]}

  bgColor="#e5f1ff"
  textColor="#000000"
/>
</div> 

<div id="services">
<PricingCardsSection
    sectionId="ai-services"
    subtitle="Services"
    backgroundImage="/assets/img/azure/bg-azure-2.png"
    title="Our AI Development Services"
    intro="Novum designs and deploys intelligent AI and IoT solutions that enhance operational efficiency, automate workflows, and unlock new business value through data-driven innovation."
    primaryColor="#0d2b75"
    cards={[

      {
        title: "Machine Learning Development",
        desc: "Custom ML models built to identify patterns, forecast outcomes, and convert unstructured data into actionable intelligence.",
        list: [
          "Predictive analytics and forecasting",
          "Classification, clustering, and anomaly detection",
          "Model training, optimisation, and deployment"
        ]
      },

      {
        title: "Computer Vision Solutions",
        desc: "Advanced recognition systems for images, objects, and faces built using deep learning and modern vision frameworks.",
        list: [
          "Face and object detection",
          "Visual search and product recognition",
          "Image classification and automated inspection"
        ]
      },

      {
        title: "Business Intelligence Automation",
        desc: "AI-powered automation integrated with dashboards, KPIs, and operational systems to streamline decision-making.",
        list: [
          "Real-time performance analytics",
          "Behavioural and trend modelling",
          "Automated reporting and insight generation"
        ]
      },

      {
        title: "Conversational AI & Chatbots",
        desc: "Human-like conversational systems designed to improve customer support, internal operations, and personalised engagement.",
        list: [
          "AI chatbots and virtual assistants",
          "Natural language understanding (NLU)",
          "Omni-channel support automation"
        ],
        cta: "Talk to Us",
        link: "#"
      }

    ]}
  />
  </div>

<div id="usecases">
  <AIUseCaseGrid
      title="AI & IoT Solutions Tailored for Every Industry"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to left top, #ffffff, #eef3ff)"
      columns={3}
      noButton
      
      items={[
        {
          iconType: "bootstrap",
          icon: "bi-bag-check",
          title: "Retail",
          desc: "Enhance customer behaviour insights, improve inventory accuracy, automate checkout experiences, and deliver personalised product recommendations using AI-driven intelligence.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-heart-pulse",
          title: "Healthcare",
          desc: "Optimise patient data management, support diagnostics with AI models, and streamline care delivery through automated decision support systems.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-truck",
          title: "Supply Chain & Logistics",
          desc: "Improve forecasting accuracy, automate manual operational tasks, and eliminate inefficiencies with real-time AI-powered analytics.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-cpu",
          title: "Manufacturing",
          desc: "Enable predictive maintenance, monitor production lines, detect anomalies, and enhance equipment performance with integrated AI + IoT solutions.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-bank",
          title: "Finance",
          desc: "Automate risk analysis, detect fraud, strengthen compliance monitoring, and leverage real-time AI insights for fast, accurate decision-making.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-globe2",
          title: "Enterprise Operations",
          desc: "Support workforce efficiency, optimise workflows, and drive operational intelligence across all departments using connected AI systems.",
          link: "#",
        }
      ]}
    />
    </div>

<div id="iot">
<ImageWithContentSection
  title="What Is IoT?"
  orderControl={1}
  imageSrc="/assets/img/ai/ai-main1.png"
  imageAlt="AI and IoT Solutions"

  paragraphs={[
    "The Internet of Things (IoT) connects physical devices—such as sensors, vehicles, machinery, and equipment—to the internet so they can collect, exchange, and analyse data in real time. This continuous flow of structured data transforms how organisations monitor, manage, and optimise their operations.",
  ]}

  bulletPoints={[
    "Monitor equipment, assets, and field operations in real time",
    "Enable predictive maintenance to prevent unplanned downtime",
    "Automate on-site or remote processes through connected devices",
    "Improve safety and compliance with smart sensors and alerts",
    "Optimise resource usage through intelligent data insights",
    "Support analytics, forecasting, and digital transformation initiatives"
  ]}

  bgColor="#e5f1ff"
  textColor="#000000"
/>
</div>

<CTAPage
  title="Accelerate innovation with AI and IoT"
  description="Leverage AI, machine learning, and IoT integration to optimise workflows, enhance visibility, and drive smarter decision-making"
  buttonLabel="Get Started"
  buttonLink="/contact"
  backgroundType="image"
  backgroundImage="/assets/img/ai/bg-cta-ai.png"
  textColor="#ffffff"
  sectionClass="py-7"
  overlayOpacity={0.65}
/>


<div id="iot-value">
<InnovationsRoadmapSection
    sectionId="iot-value"
    backgroundGradient="linear-gradient(to right bottom, #ffffff, #eef3ff)"
    subtitle="IOT VALUE"
    title="How IoT Creates Value Across Your Organisation"
    intro="IoT enables real-time monitoring of materials, equipment, assets, production, and distribution—while AI enhances automation, predictive insights, and operational optimisation across the entire business."
    primaryColor="#0d2b75"
    sectionClass = "py-5 position-relative"
    items={[
      {
        icon: "bi-graph-up",
        title: "Operational Data Visibility",
        desc: "Access real-time insights from equipment, supply chains, workplaces, and environmental sensors to improve decision-making."
      },
      {
        icon: "bi-people",
        title: "Deeper Customer Understanding",
        desc: "Analyse behaviour, demand patterns, and usage metrics to enhance products, services, and engagement strategies."
      },
      {
        icon: "bi-box-seam",
        title: "Inventory & Flow Optimisation",
        desc: "Track and optimise inventory levels with intelligent monitoring across distribution and fulfilment networks."
      },
      {
        icon: "bi-robot",
        title: "Lower Operational Costs",
        desc: "Reduce manual effort and eliminate downtime through automation, intelligent workflows, and predictive operations."
      },
      {
        icon: "bi-speedometer2",
        title: "Real-Time Monitoring & Control",
        desc: "Get accurate, instant visibility into asset performance and operational health from any location."
      },
      {
        icon: "bi-broadcast",
        title: "Stronger Remote Operations",
        desc: "Enhance workforce and equipment management through connected devices and secure remote monitoring capabilities."
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

export default Ai;