"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import BulletPoints from "@/components/data/services/bulletpoints";
import CoreCapabilitiesSection from "@/components/data/services/capabilities1";
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import UseCasesSection from "@/components/data/services/UseCasesSection";
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
  serviceName="Azure Data Foundry"
  title="Build, Scale, and Govern Enterprise AI with Confidence"
  highlightText="Azure"
  subtitle="A unified Azure platform for creating, customising, deploying, and managing advanced AI applications, agents, and multimodal solutions at scale."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/azure/azure-hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Implementation", href: "#implement" },
    { label: "Innovation", href: "#future-roadmap" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

 
<BulletPoints
  sectionId="overview"
  title={<>What Is Azure Data Foundry?</>}
  paragraphs={[
    "Azure Data Foundry is a powerful unified platform as a-service that allows businesses to design, build, customise, deploy, and scale AI applications inside a single, highly governed Azure workspace.",
    "It brings together foundation models, agent runtimes, orchestration tools, data connectors, and enterprise grade governance controls all operating under a central namespace."
  ]}
  bulletPoints={[
    "Unified workspace for AI development and deployment",
    "Consistent RBAC, network governance, and policy controls",
    "End-to-end lifecycle management from prototyping to production",
    "Seamless integration with Azure services, GitHub, and enterprise identity systems"
  ]}
  imageSrc="/assets/img/azure/azure-1.webp"
  altText="Azure Data Foundry Unified AI Platform"
  sectionClass="position-relative overflow-hidden py-7"
/>

<CoreCapabilitiesSection
  title="Core Capabilities of Azure Data Foundry"
  primaryColor="#0d2b75"
  tabs={[
    {
      label: "Model Access & Customisation",
      image: "/assets/img/azure/azure-1.webp",
      features: [
        {
          icon: "ri-brain-line",
          title: "Model Access",
          points: [
            "1,900+ foundation & open-source models",
            "OpenAI, Meta, Mistral, xAI, Hugging Face",
            "Unified Azure API"
          ]
        },
        {
          icon: "ri-tools-line",
          title: "Model Customisation",
          points: [
            "Fine-tuning & distillation",
            "Serverless inference",
            "Multimodal model support"
          ]
        }
      ]
    },

    {
      label: "Advanced Agent Toolchain",
      image: "/assets/img/azure/azure-2.webp",
      features: [
        {
          icon: "ri-robot-line",
          title: "Enterprise Agents",
          points: [
            "RAG-ready agent pipelines",
            "Long-running workflows",
            "Built-in fault recovery"
          ]
        },
        {
          icon: "ri-team-line",
          title: "Multi-Agent Systems",
          points: [
            "A2A & MCP orchestration",
            "Agent-to-Agent communication",
            "Secure RBAC-based flows"
          ]
        }
      ]
    },

    {
      label: "Tooling & Integration",
      image: "/assets/img/azure/azure-1.webp",
      features: [
        {
          icon: "ri-code-line",
          title: "SDK Support",
          points: [
            "Python, C#, JS/TS, Java",
            "GitHub Codespaces, VS Code",
            "Copilot Studio templates"
          ]
        },
        {
          icon: "ri-links-line",
          title: "Enterprise Connectors",
          points: [
            "1,400+ integrations",
            "ERP, CRM, HRM-ready",
            "Authentication via Entra ID"
          ]
        }
      ]
    },

    {
      label: "Governance & Observability",
      image: "/assets/img/azure/azure-2.webp",
      features: [
        {
          icon: "ri-eye-line",
          title: "Observability",
          points: [
            "Telemetry dashboards",
            "Real-time monitoring",
            "Usage & performance tracking"
          ]
        },
        {
          icon: "ri-shield-check-line",
          title: "Governance",
          points: [
            "Responsible AI tools",
            "Policy enforcement",
            "Full audit history"
          ]
        }
      ]
    },

    {
      label: "Local & Edge Deployment",
      image: "/assets/img/data-foundry/edge.png",
      features: [
        {
          icon: "ri-computer-line",
          title: "Foundry Local",
          points: [
            "Run on Windows & Mac",
            "Offline inference support"
          ]
        },
        {
          icon: "ri-cloud-line",
          title: "Hybrid Cloud",
          points: [
            "Azure Arc (coming soon)",
            "On-prem environments"
          ]
        }
      ]
    }
  ]}
/>

      
<BulletPoints
  sectionId="innovations"
  title={<>Innovations & Future Roadmap</>}
  paragraphs={[
    "From cutting-edge model support to breakthrough experimental research in Foundry Labs, the platform is shaping the future of enterprise AI development."
  ]}
  bulletPoints={[
    "Support for emerging next-gen models including Grok 3, Flux Pro 1.1, Sora, and hundreds of Hugging Face models",
    "Smart model router for intelligent cost and performance optimisation",
    "Public release of Foundry Agent Service with enterprise grade deployment templates",
    "Expanded integrations across Microsoft Teams, Office, Slack, Twilio, and a growing third-party ecosystem",
    "Experimental innovation initiatives in Foundry Labs including Project Amelie, Magnetic UI, TypeAgent, EvoDiff, and BioEmu"
  ]}
  imageSrc="/assets/img/azure/azure-1.png"
  altText="Azure AI Foundry Innovation Roadmap"
  sectionClass="position-relative overflow-hidden py-7"
/>
      
<InnovationsRoadmapSection
  sectionId="future-roadmap"
  backgroundColor="#fff"
  subtitle="INNOVATIONS"
  title="Innovations & Future Roadmap"
  intro="Azure Data Foundry continues to evolve with next-generation models, intelligent routing, deep enterprise integrations, and breakthrough research from Foundry Labs."
  primaryColor="#0d2b75"
  items={[
    {
      icon: "bi-lightning-charge",
      title: "Next-Gen Model Support",
      desc: "Support for Grok 3, Flux Pro 1.1, Sora, and hundreds of Hugging Face models."
    },
    {
      icon: "bi-diagram-3",
      title: "Smart Model Router",
      desc: "Automatically optimises cost and performance using Azure’s routing engine."
    },
    {
      icon: "bi-cpu",
      title: "Foundry Agent Service",
      desc: "Enterprise-ready agent deployment templates now publicly available."
    },
    {
      icon: "bi-link-45deg",
      title: "Expanded Integrations",
      desc: "Teams, Office, Slack, Twilio, and growing third-party connectors."
    },
    {
      icon: "bi-flask",
      title: "Foundry Labs Experiments",
      desc: "Includes Project Amelie, TypeAgent, EvoDiff, BioEmu, and more."
    },
    {
      icon: "bi-stars",
      title: "Magnetic UI",
      desc: "A new adaptive interface concept emerging from Foundry Labs."
    }
  ]}
/>

<UseCasesSection
  backgroundImage="/assets/img/azure/bg-azure.avif"
  primaryColor="#0d2b75"
  subtitle="USE CASES"
  title="Use Cases & Industry Applications"
  intro="Azure Data Foundry enables intelligent automation across industries with multimodal AI, intelligent agents, and enterprise-grade orchestration."
  tabs={[
    {
      label: "Popular Use Cases",
      items: [
        {
          label: "Use Case",
          title: "AI Chatbots & Virtual Assistants",
          desc: "Build conversational assistants with secure enterprise agent pipelines.",
          image: "/assets/img/azure/azure-2.webp",
          cta: "Explore",
        },
        {
          label: "Use Case",
          title: "Document Automation",
          desc: "Generate summaries and extract insights from high-volume documents.",
          image: "/assets/img/azure/azure-1.webp",
          cta: "Read more",
        },
        {
          label: "Use Case",
          title: "Multimodal Intelligence",
          desc: "Analyze images, audio, and video using multimodal foundation models.",
          image: "/assets/img/usecases/multimodal.webp",
          cta: "Learn more",
        },
      ],
    },
    {
      label: "Customer Success",
      items: [
        {
          label: "Success",
          title: "Accenture",
          desc: "Enterprise-scale assistant creation with Azure Data Foundry.",
          image: "/assets/img/logos/accenture.webp",
          cta: "Read story",
        },
        {
          label: "Success",
          title: "Nasdaq",
          desc: "Advanced analytics for financial markets using Foundry.",
          image: "/assets/img/logos/nasdaq.webp",
          cta: "View insights",
        },
        {
          label: "Success",
          title: "Carvana",
          desc: "AI systems powering retail and customer engagement.",
          image: "/assets/img/logos/carvana.webp",
          cta: "Explore case",
        },
      ],
    },
  ]}
/>

        
     <MainServices
  id="success-stories"
  subtitle="Success Stories"
  title="Trusted by Global Enterprises"
  description="Azure Data Foundry powers enterprise-scale AI deployments across industries — from finance and retail to sports and professional services."
  image={{
    src: "/assets/img/azure/customers.webp",
    alt: "Azure AI Customer Success",
  }}
  services={[
    {
      title: "Accenture",
      desc: "Enterprise-scale intelligent assistant development and automation solutions.",
    },
    {
      title: "Nasdaq",
      desc: "Advanced analytics and AI-powered market insight systems.",
    },
    
    {
      title: "Carvana",
      desc: "AI systems for retail automation and customer engagement.",
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