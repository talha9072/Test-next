"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import BulletPoints from "@/components/data/services/bulletpoints";
import ServiceFeatureCards from "@/components/data/services/ServiceFeatureCards";
import PricingCardsSection from "@/components/data/services/PricingCardsSection";
import ServiceSplitPanel from "@/components/data/services/ServiceSplitPanel";
import OverviewComponent from "@/components/data/services/OverviewComponent";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const ManagedServices = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Novum Managed Services"
  title="Multi-Cloud Operations & Always-On Support"
  highlightText="Managed Services"
  subtitle="Proactive cloud management, security, DevOps, and cost optimisation across Azure, AWS, and Google Cloud."
  bgImage="/assets/img/professional-services/bg-managed.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Expertise", href: "#expertise" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>


<div id="about">
<ImageWithContentSection
  orderControl={2}
  bgColor="#e5f1ff"
  title="Modern Managed Services for Cloud-Driven Organisations"
  imageSrc="/assets/img/managed-services/managed-main.png"
  imageAlt="Managed Services Overview"

  paragraphs={[
    "Novum’s Managed Services help organisations focus on innovation while we manage day-to-day cloud operations across Azure, AWS, and Google Cloud.",
    "With flexible service models and certified experts, we optimise performance, improve security maturity, and deliver proactive 24/7 support.",
    "Our approach keeps your cloud environments stable, cost-efficient, and ready for future scale."
  ]}

  bulletPoints={[
    "Proactive 24/7 cloud monitoring and incident response",
    "FinOps-driven cost optimisation for measurable savings",
    "Security-first governance aligned with ISO, CIS, and NIST"
  ]}
/>
</div>


<div id="services">
 
    <ServiceFeatureCards
      title="Key Managed Service Offerings"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
      primaryColor="#0d2b75"
  items={[
    {
      iconType: "bootstrap",
      icon: "bi-people",
      title: "Elastic Engineering (Cloud Pods)",
      list: [
        "Cloud migration & platform onboarding",
        "DevOps support & pipeline automation",
        "Infrastructure as Code (Terraform, Bicep, ARM)",
        "Cost optimisation & FinOps governance",
        "Security hardening & compliance guidance",
        "Backup, DR, and resilience planning",
        "Flexible expertise available when needed"
      ]
    },

    {
      iconType: "bootstrap",
      icon: "bi-cloud-check",
      title: "24/7 Cloud Operations",
      list: [
        "24/7 monitoring & incident response",
        "Environment health checks",
        "Performance tuning & optimisation",
        "Governance, patching & vulnerability management",
        "Release, change & configuration management",
        "Stable, secure, optimised cloud operations"
      ]
    },

    {
      iconType: "bootstrap",
      icon: "bi-cash-stack",
      title: "Cost Optimisation & FinOps",
      list: [
        "In-depth cost analysis & rightsizing",
        "Waste elimination & workload optimisation",
        "Architectural cost-efficiency reviews",
        "CloudHealth & native FinOps tooling",
        "Custom dashboards & forecasting",
        "Measured and proven cost savings"
      ]
    },

    {
      iconType: "bootstrap",
      icon: "bi-hdd-network",
      title: "Platform Support Services",
      list: [
        "OS patching & lifecycle management",
        "Identity & access governance",
        "Backup, restore & escalation support",
        "SLA-driven incident & change management",
        "Keeps platforms secure, stable & resilient"
      ]
    },

    {
      iconType: "bootstrap",
      icon: "bi-shield-lock",
      title: "Cloud Native Security Services",
      list: [
        "Deploy & manage cloud security tools",
        "24/7 SIEM/SOAR threat detection",
        "Identity & access security governance",
        "Vulnerability scanning & compliance reporting",
        "Automated remediation pipelines"
      ]
    },

    {
      iconType: "bootstrap",
      icon: "bi-exclamation-triangle",
      title: "Proactive Detection & Response",
      list: [
        "Real-time breach detection",
        "Attack surface monitoring",
        "Behaviour-based anomaly detection",
        "Immediate containment & remediation actions"
      ]
    },

    {
      iconType: "bootstrap",
      icon: "bi-database-check",
      title: "Proactive Database Management",
      list: [
        "24/7 monitoring & performance optimisation",
        "Backup, restore & recovery",
        "Index tuning & query optimisation",
        "Scaling & performance improvements",
        "SQL, PostgreSQL, MySQL, Cosmos DB, MongoDB support"
      ]
    },

    {
      iconType: "bootstrap",
      icon: "bi-app-indicator",
      title: "Application Services",
      list: [
        "ERP, CRM & digital platform support",
        "Application monitoring & health management",
        "DevOps for continuous improvement",
        "Modernisation & cloud-readiness refactoring",
        "24/7 operational coverage"
      ]
    }
  ]}
    />
  
</div>


<div id="approach">
    <ImageWithContentSection
  orderControl={1}
  title="Our Approach to Managed Services"
  imageSrc="/assets/img/managed-services/managed-main1.png"
  imageAlt="Novum Managed Services Approach"

  paragraphs={[
    "Novum combines proactive cloud operations with a collaborative engagement model shaped around your organisation’s needs.",
    "Our managed services approach focuses on stability, continuous optimisation, and shared ownership."
  ]}

  bulletPoints={[
    "Proactive monitoring and automated issue resolution",
    "Regular optimisation reviews and advisory sessions",
    "Flexible service tiers for different maturity levels",
    "Knowledge transfer and co-ownership with internal teams",
    "Industry-aligned frameworks and engineering best practices"
  ]}
/>
</div>


<div id="expertise">
  <PricingCardsSection
    sectionId="expertise"
    subtitle="ENGINEERING EXPERTISE"
    backgroundImage="/assets/img/azure/pricing-bg.avif"
    title="Expertise & Recognition"
    intro="Novum brings certified, multi-cloud engineering excellence to every engagement delivering trusted, enterprise-grade solutions built on proven skills and industry recognition."
    primaryColor="#0d2b75"
    cards={[
      {
        title: "Multi-Cloud Certified Engineers",
        desc: "Hands-on expertise across leading cloud platforms with proven implementation experience.",
        list: [
          "Azure Solutions Architect & Administrator",
          "AWS Professional & Specialist certifications",
          "Google Cloud Professional Engineers",
          "VMware cloud & virtualisation specialists"
        ]
      },
      {
        title: "Security & Compliance Expertise",
        desc: "Our teams maintain globally recognised security certifications across disciplines.",
        list: [
          "SOC & ISO-compliant architecture expertise",
          "CISSP, CEH, CCSP certified professionals",
          "Identity, governance, and Zero Trust specialists",
          "Advanced security monitoring & compliance skills"
        ]
      },
      {
        title: "Cloud Engineering Specialisations",
        desc: "Certified capability across modern cloud delivery practices.",
        list: [
          "FinOps & cloud cost optimisation practitioners",
          "DevOps, CI/CD & automation experts",
          "SRE & reliability engineering talent",
          "Cloud operations & platform engineering"
        ]
      },
      {
        title: "Industry Recognition",
        desc: "Proven delivery excellence validated by enterprise clients and technology partners.",
        list: [
          "Recognised for innovation and quality delivery",
          "Trusted by major enterprise organisations",
          "Strong track record of successful cloud programmes",
          "High client satisfaction across engagements"
        ]
      }
    ]}
  />
</div>

<div id="whyus">
<ServiceSplitPanel
  title="Why Organisations Choose Novum Managed Services"
  primaryColor="#2d1a78"
  items={[
    {
      label: "Multi-cloud Expertise",
      paragraphs: [
        "Our certified cloud engineers specialise in Azure, AWS, and Google Cloud, delivering deep architectural experience across hybrid and multi-cloud environments.",
        "We design, implement, and optimise cloud platforms that remain scalable, resilient, secure, and cost-efficient as your business grows."
      ],
      listItems: [
        "Azure, AWS & Google Cloud certified specialists",
        "Cloud architecture, migration & modernisation",
        "High availability, resilience & workload optimisation"
      ]
    },

    {
      label: "Flexible Service Models",
      paragraphs: [
        "Every organisation operates differently, which is why we offer modular and fully customisable service models tailored around your workloads, timelines, and operational maturity.",
        "Whether you need on-demand expertise or a fully managed service, our flexible delivery ensures seamless scale-up and scale-down based on business priorities."
      ],
      listItems: [
        "Elastic engineering pods (Cloud, DevOps, Data)",
        "On-demand specialists and dedicated teams",
        "Hybrid, co-managed, and fully managed operating models"
      ]
    },

    {
      label: "24/7 Global Monitoring",
      paragraphs: [
        "Our global cloud operations teams provide around-the-clock monitoring, incident response, and proactive issue prevention to minimise downtime and improve service reliability.",
        "We combine automation, observability tools, and SRE best practices to ensure your mission-critical systems stay healthy and continuously optimised."
      ],
      listItems: [
        "Real-time monitoring & event-driven alerts",
        "SRE-driven incident, problem & change management",
        "Performance tuning & proactive remediation"
      ]
    },

    {
      label: "Security-first Operations",
      paragraphs: [
        "Security is embedded into every layer of our managed services, from identity and access management to automated threat detection and compliance alignment.",
        "We lift your cloud security posture with continuous monitoring, governance guardrails, and industry-aligned best practices."
      ],
      listItems: [
        "Identity, access & policy governance",
        "Threat detection, SIEM/SOAR integration",
        "Compliance alignment: ISO, CIS, NIST, GDPR"
      ]
    },

    {
      label: "Proven Cost Optimisation",
      paragraphs: [
        "Our FinOps-led approach eliminates cloud waste, optimises resource utilisation, and ensures predictable and trackable spending across all environments.",
        "We provide visibility, forecasting, and actionable insights that reduce cost overruns and drive long-term financial efficiency."
      ],
      listItems: [
        "Rightsizing, workload optimisation & automation",
        "Cost visibility dashboards & forecasting",
        "Sustained measurable savings via FinOps maturity"
      ]
    },

    {
      label: "End-to-end Coverage",
      paragraphs: [
        "Our managed services span the full cloud lifecycle — from infrastructure to applications, security, data, and integration — ensuring continuous operational excellence.",
        "We act as a strategic partner to support your transformation goals while keeping your cloud environment stable, secure, and high performing."
      ],
      listItems: [
        "Applications, data, platforms & infrastructure support",
        "Operational governance & lifecycle management",
        "Unified service coverage across your technology stack"
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

export default ManagedServices;