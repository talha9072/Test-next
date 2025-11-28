"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import MainServices from "@/components/data/services/main-services";
import ExpertiseSplitSection from "@/components/data/services/ExpertiseSplitSection";
import PricingCardsSection from "@/components/data/services/PricingCardsSection";
import BigCardTabsSection from "@/components/data/services/BigCardWithGridSection";
import WhyChooseSection from "@/components/data/services/whychooseus";
import ImplementSection from "@/components/data/services/implement";
import Whyus from "@/components/data/services/whyus";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const System = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="APC Azure System Integration Services"
  title="Cloud Native Design, Migration & Managed Operations"
  highlightText="System Integration"
  subtitle="APC delivers enterprise-grade Azure system integration, cloud-native deployments, DevOps pipelines, Kubernetes, serverless, IaC, monitoring, and 24/7 managed services powered by certified Azure experts."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/system-integration/system-integration-hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Expertise", href: "#Expertise" },
    { label: "CLOUD STRATEGY", href: "#ccoe" },
    { label: "Services", href: "#services" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>



      <SoftwareSolutionsSection
  title={`Cloud Native System Integration Powered by APC & Azure`}
  paragraphs={[
    "AP Communications (APC) is a specialist Azure System Integration provider with deep expertise in designing, deploying, and operating cloud-native environments.",
    "As a long-standing Azure partner, APC supports organisations through every phase of their cloud journey from assessment and PoC to full production rollout and ongoing managed operations."
  ]}
  imageSrc="/assets/img/system-integration/system-integration-1.webp"
  altText="System Integration Services by Novum"
  sectionClass="position-relative overflow-hidden py-7"
/>

<ExpertiseSplitSection
sectionId="Expertise"
  title="Expertise & Industry Recognition"
  subtitle="APC is recognised globally for its excellence in Azure-driven transformation."
  tabs={[
    {
      label: "Certifications",
      title: "Microsoft Solution Partner Certifications",
      desc: "APC is certified across multiple Azure disciplines:",
      points: [
        "Digital & App Innovation (Azure)",
        "Infrastructure (Azure)",
        "Data & AI (Azure)",
        "Recognised for secure, scalable cloud delivery"
      ],
      cta: "View Certifications"
    },
    {
      label: "Our Experts",
      title: "Highly Qualified Azure Specialists",
      desc: "Industry-leading certified engineers delivering enterprise-scale solutions.",
      points: [
        "100+ Microsoft Azure certified professionals",
        "Extensive enterprise deployment experience",
        "Advanced specialisations across cloud, AI, and data"
      ],
      cta: "Meet the Team"
    },
    {
      label: "Industry Presence",
      title: "Global Recognition & Contributions",
      desc: "APC actively contributes to top-tier technology conferences and events.",
      points: [
        "Developer Summit",
        "Japan Container Days",
        "Interop Tokyo",
        "Thought leadership across cloud and AI ecosystems"
      ],
      cta: "Upcoming Events"
    }
  ]}
/>


  <PricingCardsSection
  sectionId="ccoe"
  subtitle="CLOUD STRATEGY"
  backgroundImage="/assets/img/azure/pricing-bg.avif"
  title="Cloud Center of Excellence (CCoE)"
  intro="APC’s Cloud Center of Excellence helps organisations build a strong Azure foundation through structured planning, training, and validation services."
  primaryColor="#0d2b75"
  cards={[
    {
      title: "Assessment & Strategy",
      desc: "Establish a cloud-native roadmap aligned with your business goals.",
      list: [
        "Evaluate current systems and cloud readiness",
        "Define cloud-native architecture principles",
        "Create migration, modernization & containerisation pathways"
      ]
    },
    {
      title: "Training & Upskilling",
      desc: "Equip teams with Azure-first cloud skills for long-term capability building.",
      list: [
        "Azure fundamentals & architecture education",
        "DevOps, CI/CD, and Kubernetes enablement",
        "Hands-on cloud-native team enablement"
      ]
    },
    {
      title: "Proof of Concept (PoC)",
      desc: "Validate architecture decisions with structured PoCs and Azure starter kits.",
      list: [
        "Requirement definition workshops",
        "Deployment of Azure starter kits",
        "Technical PoC implementation support"
      ],
      cta: "Start a PoC",
      link: "/contact"
    }
  ]}
/>


<BigCardTabsSection
sectionId="services"
  subtitle="AZURE SERVICES"
  title="Modern System Integration & Managed Cloud Operations"
  tabs={[
    {
      label: "System Integration (SI)",
      leftImage: "/assets/img/azure/ppl.avif",
      leftTitle: "Cloud-Native System Integration",
      leftDesc: "APC builds complete Azure architectures across containers, serverless, IaC, DevOps, networking, and modernization.",
      cards: [
        {
          icon: "bi-diagram-3",
          title: "Container Services",
          desc: "AKS, ACI, App Services, governance, scaling, security."
        },
        {
          icon: "bi-lightning-charge",
          title: "Serverless & Events",
          desc: "Functions, Logic Apps, Event Grid, Service Bus automation."
        },
        {
          icon: "bi-code-slash",
          title: "Infrastructure as Code",
          desc: "ARM, Bicep, Terraform for consistent deployments."
        },
        {
          icon: "bi-git",
          title: "CI/CD Pipelines",
          desc: "Azure DevOps, GitHub Actions, automated releases."
        },
        {
          icon: "bi-cloud-arrow-up",
          title: "Migration & Modernisation",
          desc: "IaaS, Identity, Networking, Hybrid Cloud, security hardening."
        },
        {
          icon: "bi-display",
          title: "Monitoring & Virtualisation",
          desc: "Azure Monitor, Elastic, AVD, performance observability."
        }
      ]
    },

    {
      label: "Managed Operations",
      leftImage: "/assets/img/azure/ppl.avif",
      leftTitle: "24/7 Azure Operations & Reliability",
      leftDesc: "We manage your Azure workloads with proactive monitoring, ITIL processes, security patching, and operational excellence.",
      cards: [
        {
          icon: "bi-clock-history",
          title: "24/7 Monitoring",
          desc: "Real-time logs, patching, security updates, certificates."
        },
        {
          icon: "bi-shield-check",
          title: "ITIL-Based Operations",
          desc: "Incident, change, config management, reporting."
        },
        {
          icon: "bi-gear",
          title: "Operational Design",
          desc: "Kubernetes ops, DevOps workflows, access governance."
        }
      ]
    }
  ]}
/>


<WhyChooseSection
  sectionId="whyus"
  title="Why Choose APC for Azure System Integration?"
  subtitle=""
  items={[
    {
      icon: "bi-lightning-charge-fill",
      title: "Deep Microsoft Azure Partnership",
      desc: "APC is a long-standing Azure partner with proven expertise across cloud-native architecture and modernisation."
    },
    {
      icon: "bi-mortarboard-fill",
      title: "100+ Certified Azure Professionals",
      desc: "Our architects, DevOps engineers, and cloud consultants hold advanced Azure certifications across infra, DevOps, Kubernetes, and security."
    },
    {
      icon: "bi-diagram-3-fill",
      title: "Enterprise-Scale Delivery Experience",
      desc: "We have successfully delivered Azure solutions for large enterprises requiring reliability, scalability, and compliance."
    },
    {
      icon: "bi-cpu-fill",
      title: "Kubernetes, DevOps & Serverless Expertise",
      desc: "Specialised capability in AKS, IaC, GitHub Actions, Azure DevOps, Functions, and event-driven architectures."
    },
    {
      icon: "bi-infinity",
      title: "End-to-End Service Model",
      desc: "We support the full cloud lifecycle: strategy, design, build, DevOps automation, optimisation, and managed operations."
    },
    {
      icon: "bi-stars",
      title: "Continuous Improvement Through CCoE",
      desc: "Our Cloud Center of Excellence ensures governance, consistency, and rapid innovation across your organisation."
    }
  ]}
/>



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

export default System;