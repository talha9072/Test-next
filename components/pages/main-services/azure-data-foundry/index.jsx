"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import BulletPoints from "@/components/data/services/bulletpoints";
import CapabilitiesTabsCards from "@/components/data/services/capabilities1";
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import UseCasesSection from "@/components/data/services/UseCasesSection";
import PricingCardsSection from "@/components/data/services/PricingCardsSection";
import WhyChooseSection from "@/components/data/services/whychooseus";
import HighlightsSection from "@/components/data/services/HighlightsSection";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";
import Reveal from "@/components/Reveal";





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
  bgImage="/assets/img/azure/bg-azure-2.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Capabilities", href: "#core-capabilities" },
    { label: "Innovation", href: "#future-roadmap" },
    { label: "Use Case", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "Announcements", href: "#latest-announcements" },
    { label: "Why Us?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

 <Reveal direction="left">
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
  sectionClass="position-relative overflow-hidden py-7 pb-0"
/>
</Reveal>


<Reveal direction="fade" blur={true} delay={0.4} duration={1}>
<CapabilitiesTabsCards
  title="Core Capabilities Of Azure Data Foundry"
  primaryColor="#0d2b75"
  sectionId="core-capabilities"
  backgroundImage="/assets/img/azure/azure-1-bg.png"
  backgroundOverlay={true}
  tabs={[
    {
      label: "Model Access & Customisation",
      cards: [
        {
          image: "/assets/img/azure/azure-1.webp",
          label: "Access",
          title: "Model Access",
          desc: "1,900+ foundation & open-source models via unified Azure API.",
          link: "#"
        },
        {
          image: "/assets/img/azure/azure-2.webp",
          label: "Customisation",
          title: "Model Customisation",
          desc: "Fine-tuning, distillation, multimodal, serverless inference.",
          link: "#"
        }
      ]
    },

    {
      label: "Advanced Agent Toolchain",
      cards: [
        {
          image: "/assets/img/azure/azure-2.webp",
          label: "Agents",
          title: "Enterprise Agents",
          desc: "RAG-ready pipelines & long-running workflows.",
          link: "#"
        },
        {
          image: "/assets/img/azure/azure-1.webp",
          label: "Multi-Agent",
          title: "Multi-Agent Systems",
          desc: "A2A & MCP orchestration, secure RBAC agent flows.",
          link: "#"
        }
      ]
    },

    {
      label: "Tooling & Integration",
      cards: [
        {
          image: "/assets/img/azure/azure-1.webp",
          label: "SDKs",
          title: "SDK Support",
          desc: "Python, C#, JS/TS, Java, GitHub Copilot, VS Code templates.",
          link: "#"
        },
        {
          image: "/assets/img/azure/azure-2.webp",
          label: "Connectors",
          title: "Enterprise Connectors",
          desc: "1,400+ integrations across ERP, CRM, HRM, and more.",
          link: "#"
        }
      ]
    },

    {
      label: "Governance & Observability",
      cards: [
        {
          image: "/assets/img/azure/azure-1.webp",
          label: "Monitoring",
          title: "Observability",
          desc: "Telemetry dashboards, monitoring, usage tracking.",
          link: "#"
        },
        {
          image: "/assets/img/azure/azure-2.webp",
          label: "Governance",
          title: "Responsible AI & Policy",
          desc: "Policy enforcement, audits, responsible AI tools.",
          link: "#"
        }
      ]
    },

    {
      label: "Local & Edge Deployment",
      cards: [
        {
          image: "/assets/img/data-foundry/edge.png",
          label: "Local",
          title: "Foundry Local",
          desc: "Run on Mac/Windows with offline inference support.",
          link: "#"
        },
        {
          image: "/assets/img/data-foundry/edge.png",
          label: "Hybrid",
          title: "Hybrid Cloud",
          desc: "Azure Arc support for on-prem and hybrid deployments.",
          link: "#"
        }
      ]
    }
  ]}
/>
</Reveal>      

<Reveal direction="fade" blur={true} delay={0.4} duration={1}>    
<InnovationsRoadmapSection
  sectionId="future-roadmap"
  backgroundGradient="linear-gradient(to right bottom, #ffffff, #eef3ff)"
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
</Reveal>


<Reveal direction="fade" blur={true} delay={0.4} duration={1}>
<UseCasesSection
  sectionId="use-cases"
  backgroundStyle="#e5f1ff"
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
</Reveal>

<Reveal direction="fade" blur={true} delay={0.4} duration={1}>
<PricingCardsSection
  sectionId="pricing"
  backgroundImage="/assets/img/azure/pricing-bg.avif"
  title="Pricing, Licensing & Cost Considerations"
  intro="Azure Data Foundry is free to explore, and you only pay for the AI services you consume. We help organisations estimate and optimise their spending with the right model and deployment choices."
  primaryColor="#0d2b75"
  cards={[
    {
      title: "Pay-As-You-Go",
      desc: "Flexible usage-based billing across models, compute, and storage.",
      list: [
        "Over 1,900+ AI models billed per token",
        "Only pay for what you use",
        "Full cost visibility"
      ]
    },
    {
      title: "Model Inference",
      desc: "Consumption pricing for LLMs, embedding models, multimodal transformers, and more.",
      list: [
        "LLM token-based billing",
        "Multimodal image/video inference",
        "Optimised routing for cost reduction"
      ]
    },
    {
      title: "Fine-Tuning & Hosting",
      desc: "Scaled hosted fine-tuning and custom model deployment on Azure GPU compute.",
      list: [
        "Training compute billed per-hour",
        "Model hosting priced by GPU/CPU",
        "Auto-scaling for lower cost"
      ]
    },
    {
      title: "Cost Optimisation Support",
      desc: "We help clients reduce spend across model selection, caching, routing, and architecture.",
      list: [
        "Large model optimisation",
        "Token efficiency tuning",
        "Right-size infrastructure planning"
      ],
      cta: "Talk to us",
      link: "#"
    }
  ]}
/>
</Reveal>


<Reveal direction="fade" blur={true} delay={0.4} duration={1}>
<HighlightsSection
  sectionId="latest-announcements"
  leftImage="/assets/img/azure/ppl.avif"
  backgroundGradient="linear-gradient(to bottom right, #ffffff, #eef3ff)"
  cards={[
    {
      icon: "bi-lightning-charge-fill",
      title: "Grok 3 Now on Azure",
      desc: "Microsoft now hosts xAI’s Grok 3 model with full performance parity for enterprise workloads.",
      link: "#",
      cta: "Learn more"
    },
    {
      icon: "bi-diagram-3",
      title: "Hugging Face Catalog Expansion",
      desc: "Expanded support for open-source model catalogs, offering hundreds of new models.",
      link: "#",
      cta: "Learn more"
    },
    {
      icon: "bi-arrows-move",
      title: "Model Context Protocol",
      desc: "Broader interoperability for agents and custom workflows via MCP.",
      link: "#",
      cta: "Learn more"
    },
    {
      icon: "bi-robot",
      title: "Agent Deployment Enhancements",
      desc: "Improved agent orchestration, workflow automation, and enterprise reliability.",
      link: "#",
      cta: "Learn more"
    }
  ]}
/>
</Reveal>


<Reveal direction="fade" blur={true} delay={0.4} duration={1}>
<WhyChooseSection
sectionId="whyus"
  items={[
    {
      icon: "bi-lightbulb",
      title: "AI Strategy & Discovery",
      desc: "We guide organisations to define objectives and identify AI opportunities using Azure Data Foundry."
    },
    {
      icon: "bi-shield-lock",
      title: "Secure Platform Setup",
      desc: "Governance, RBAC, networking, identity, and compliance configured for enterprise deployment."
    },
    {
      icon: "bi-cpu",
      title: "Model Selection & Tuning",
      desc: "Fine-tuning, prompt optimisation, and performance calibration across 1,900+ Azure-hosted models."
    },
    {
      icon: "bi-diagram-3",
      title: "Multi-Agent Architecture",
      desc: "We design scalable multi-agent systems with A2A and MCP standards for enterprise operations."
    },
    {
      icon: "bi-cloud-arrow-down",
      title: "System Integration",
      desc: "Deep integrations with Azure, Power Platform, Microsoft 365, ERP, CRM, and your business systems."
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Cost Optimisation",
      desc: "We optimise token usage, compute costs, hosting, and performance — saving up to 40% monthly."
    }
  ]}
/>
</Reveal>
        
    
<Reveal direction="fade" blur={true} delay={0.4} duration={1}>
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
</Reveal>


<Reveal direction="fade" blur={true} delay={0.4} duration={1}>
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
</Reveal>

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