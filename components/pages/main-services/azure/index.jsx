"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import MainServices from "@/components/data/services/main-services";
import ImplementSection from "@/components/data/services/implement";
import Whyus from "@/components/data/services/whyus";
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
  serviceName="Microsoft Azure Solutions"
  title="Empower Your Business with the Cloud"
  highlightText="Azure"
  subtitle="Scale smarter with secure, high performance Azure cloud solutions."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/azure/azure-hero.webp"
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

 


      <SoftwareSolutionsSection
  title={
    <>
      Azure AI Foundry: The Unified Platform
      for Building and Scaling Enterprise AI
    </>
  }
  paragraphs={[
    "Azure AI Foundry (formerly Azure AI Studio) is a unified, Azure-hosted platform-as-a-service designed for building, customizing, managing, and scaling AI applications and agents across the enterprise.",
    "It brings together models, developer tools, agents, and governance under a single namespace all secured with unified RBAC, networking controls, and policy management for consistent and safe AI operations.",
    "With end-to-end capabilities spanning model access, fine tuning, observability, and agent orchestration, Azure AI Foundry empowers organizations to rapidly innovate and deploy AI solutions with enterprise grade security, reliability, and scalability."
  ]}
  imageSrc="/assets/img/azure/azure-1.webp"
  altText="Azure AI Foundry Overview"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
      <MainServices
  id="services"
  subtitle="Azure AI Foundry Capabilities"
  title="A Unified Platform to Build, Customize, and Scale Enterprise AI"
  description="Azure AI Foundry brings everything enterprises need to build and operationalize AI into one unified environment models, tools, agents, observability, governance, and deployment. These core capabilities make it the most powerful AI development platform in the Microsoft ecosystem."
  image={{
    src: "/assets/img/azure/azure-2.webp",
    alt: "Azure AI Foundry Capabilities",
  }}
  services={[
    {
      title: "Model Access & Customization",
      desc: "Access foundation and open-source models including OpenAI, Meta, Mistral, and more with support for fine-tuning, prompt flow optimization, and serverless inference.",
    },
    {
      title: "Agent Toolchain & Project Environment",
      desc: "Build intelligent agents using RAG, fine-tuning, distillation, and reusable tools within collaborative project environments with isolated workspaces.",
    },
    {
      title: "Tooling & Integration",
      desc: "Integrate seamlessly with GitHub, VS Code, Copilot Studio, and use SDKs for Python, C#, JavaScript/TypeScript, and Java for faster AI development.",
    },
    {
      title: "Observability, Trust & Governance",
      desc: "Monitor real-time performance, apply enterprise identity controls, enforce safety filters, and maintain responsible governance across the AI lifecycle.",
    },
    {
      title: "Multi-Agent Orchestration",
      desc: "Coordinate multiple agents that can call each other, run long workflows, and support open standards like A2A and MCP for interoperable agent systems.",
    },
    {
      title: "Local & Edge Deployment",
      desc: "Deploy AI models locally using Foundry Local on Windows or Mac, with Azure Arc support coming soon for hybrid and edge environments.",
    },
  ]}
/>



      <ImplementSection
  id="implement"
  subtitle="Innovations"
  title="How Azure AI Foundry Accelerates Enterprise AI Transformation"
  description="Azure AI Foundry continues to evolve with new models, orchestration tools, and platform-level advancements—helping organizations build, deploy, and scale next-generation AI applications with greater speed, reliability, and intelligence."
  items={[
    {
      img: "/assets/img/azure/cloud-migration.webp", // same image
      title: "Next-Generation Model Access",
      desc: "Access cutting-edge models like Grok 3, Flux Pro 1.1, Sora, and a broad range of open-source models through the Hugging Face catalog all available directly within Azure AI Foundry.",
    },
    {
      img: "/assets/img/azure/multi-cloud.webp", // same image
      title: "Intelligent Model Routing",
      desc: "A built-in model router intelligently selects the optimal model for each request, balancing performance and cost without manual tuning.",
    },
    {
      img: "/assets/img/azure/azure-ai.webp", // same image
      title: "Enterprise Agent Service (GA)",
      desc: "Build AI agents using 1,400+ connectors with deployment support for Teams, Office, Slack, and Twilio now generally available for enterprise use.",
    },
    {
      img: "/assets/img/azure/azure-security.webp", // same image
      title: "Advanced Multi-Agent Orchestration",
      desc: "Support for multi-agent collaboration, long-running workflows, error handling, and open standards such as A2A and Model Context Protocol (MCP).",
    },
    {
      img: "/assets/img/azure/azure-cost.webp", // same image
      title: "Foundry Labs Innovations",
      desc: "Explore emerging capabilities including Project Amelie, Magnetic-UI, TypeAgent, EvoDiff, and BioEmu pushing forward the next wave of AI innovation.",
    },
  ]}
/>
   
<Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose NOVUM for Azure AI Foundry"
  description="NOVUM brings deep expertise in the Microsoft AI ecosystem with strong capabilities across model integration, enterprise agent development, observability, and governance. We help organizations build reliable and intelligent AI systems that scale securely across the entire enterprise."
  counters={[
    { value: 35, suffix: "+", label: "AI and Cloud Implementations" },
    { value: 12, suffix: "+", label: "Industries Served" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 9, suffix: "+", label: "Years of AI Expertise" },
  ]}
  features={[
    {
      icon: "fa-solid fa-cloud",
      title: "Strong AI and Model Expertise",
      desc: "We work with a wide range of foundation and open source models and help teams customize, fine tune, and apply them for real business use cases.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Governance and Trust",
      desc: "We guide enterprises in setting up clear access control, safety filters, responsible AI rules, and complete visibility across the AI lifecycle.",
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Enterprise Agent Development",
      desc: "We design intelligent agents using advanced tools, connectors, and multi agent patterns that support secure and reliable enterprise operations.",
    },
  ]}
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