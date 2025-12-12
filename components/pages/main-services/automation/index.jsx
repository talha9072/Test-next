"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import ServiceFeatureSlider from "@/components/data/services/ThreeRowSliderCards";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import PricingCardsSection from "@/components/data/services/PricingCardsSection";
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import ServiceSplitPanel from "@/components/data/services/ServiceSplitPanel";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Automation = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

     <HeroWithRibbon
  serviceName="Automation Services"
  title="Accelerate Operations with Intelligent Automation"
  highlightText="Automation"
  subtitle="Streamline processes improve accuracy and scale your business faster with modern automation across cloud infrastructure applications and security."
  bgImage="/assets/img/automation/bg-automation.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Capabilities", href: "#service-offerings" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Use Case", href: "#usecase" },
    { label: "Why Us?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

<div id="about">
  <ImageWithContentSection
    orderControl={2}
    bgColor="#e5f1ff"
    title="Accelerate Operations with Intelligent Automation"
    imageSrc="/assets/img/automation/automation-main.png"
    imageAlt="Automation Services Overview"

    paragraphs={[
      "Novum’s Automation Services help organisations eliminate manual effort, improve accuracy, and scale operations using modern cloud, application, and security automation.",
      "We design and implement automated workflows that reduce operational overhead, strengthen governance, and accelerate time-to-value across business and IT functions.",
      "Our automation frameworks support everything from infrastructure provisioning and CI/CD pipelines to business process optimisation and security enforcement."
    ]}

    bulletPoints={[
      "Automate cloud operations, provisioning, scaling, and monitoring",
      "Streamline business workflows to remove manual steps and reduce errors",
      "Improve deployment speed and consistency with CI/CD and DevOps automation",
      "Enhance security posture through automated policies and compliance checks",
      "Increase operational efficiency with event-driven and rule-based automation"
    ]}
  />
</div>

<div id="service-offerings">
    <ServiceFeatureSlider
      sectionId="service-offerings"
      title="Core Automation Capabilities"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
      primaryColor="#0d2b75"
      items={[
        {
          image: "/assets/img/automation/tab-1.webp",
          title: "Infrastructure Automation",
          list: [
            "Automated provisioning and configuration",
            "Infrastructure-as-Code (Terraform, Bicep, ARM)",
            "Scalable, consistent environment deployment",
          ],
        },
        {
          image: "/assets/img/automation/tab-2.webp",
          title: "Network Automation",
          list: [
            "Zero-touch network provisioning",
            "Policy enforcement via programmable workflows",
            "Automated monitoring and remediation",
          ],
        },
        {
          image: "/assets/img/automation/tab-3.webp",
          title: "Security Automation",
          list: [
            "Automated threat detection & response (SIEM/SOAR)",
            "Continuous compliance and security scanning",
            "Identity and access governed through automation",
          ],
        },
        {
          image: "/assets/img/automation/tab-4.webp",
          title: "Application Automation & CI/CD",
          list: [
            "Automated builds, testing, and deployments",
            "Full application lifecycle workflows",
            "Faster development with modern CI/CD pipelines",
          ],
        },
        {
          image: "/assets/img/automation/tab-5.webp",
          title: "Cloud Automation & Optimisation",
          list: [
            "Resource provisioning & autoscaling",
            "Automated cloud governance and tagging",
            "Cost optimisation across multi-cloud environments",
          ],
        }
      ]}
    />
</div>


<div id="services">
    <AIUseCaseGrid
      title="Accelerate Transformation with Our Automation Services"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to left top, #e5f1ff, #e5f1ff)"
      columns={3}
      noButton
      items={[
        {
          iconType: "bootstrap",
          icon: "bi-arrows-move",
          title: "Business Process Automation",
          desc: "Automate routine finance, operations, and HR tasks with Dynamics 365 and Power Platform. From invoice approvals to payroll and procurement workflows, Novum streamlines complex business processes into seamless, rule-driven flows. Drive higher accuracy, faster approvals, and real-time visibility across your organization.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-bar-chart-line",
          title: "Data & Analytics Automation",
          desc: "Transform raw data into actionable insights with Microsoft Fabric and Azure. Our automations handle ingestion, transformation, and reporting ensuring real-time KPIs, predictive insights, and data-driven decisions. Eliminate manual reporting and empower every team with automated intelligence.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-people",
          title: "Collaboration & Productivity Automation",
          desc: "Boost team efficiency across Microsoft 365, Teams, and SharePoint. Novum builds smart workflows that automate document approvals, task reminders, and onboarding processes keeping collaboration structured and transparent. Empower your teams to focus on outcomes, not administration.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-code-slash",
          title: "Application & DevOps Automation",
          desc: "Accelerate app delivery and system reliability through Azure DevOps and GitHub Actions. We automate deployments, testing, and environment provisioning for faster innovation and fewer errors. Perfect for organizations scaling custom solutions and ISVs on the Microsoft Cloud.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-robot",
          title: "Customer & Frontline Automation",
          desc: "Enhance customer and frontline experiences with AI-powered, low-code automations. Using Dynamics 365, Power Virtual Agents, and Copilot Studio, Novum delivers self-service chatbots, automated ticket routing, and intelligent field-service scheduling improving satisfaction and reducing manual workload.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-shield-check",
          title: "Governance & Compliance Automation",
          desc: "Simplify tenant management and compliance operations through automated Microsoft 365 and Azure workflows. From license assignment to usage reporting and data retention, Novum ensures governance is proactive and efficient without adding administrative overhead.",
          link: "#",
        },
      ]}
    />
</div>

<div id="approach">
  <PricingCardsSection
    sectionId="automation-approach"
    subtitle="END-TO-END AUTOMATION APPROACH"
    backgroundImage="/assets/img/azure/pricing-bg.avif"
    title="Novum’s End-to-End Automation Delivery Model"
    intro="Novum provides a complete automation lifecycle from initial discovery to enterprise-wide implementation and ongoing optimisation. Our structured framework ensures automation delivers measurable efficiency, speed, and accuracy across your organisation."
    primaryColor="#0d2b75"
    cards={[
      {
        title: "Discovery, Consulting & Strategy Alignment",
        desc: "We assess your current processes, identify automation opportunities, and build a roadmap aligned with business outcomes.",
        list: [
          "Process assessment & automation maturity analysis",
          "Identification of high-impact automation candidates",
          "Alignment with operational, financial & strategic goals",
          "Development of automation roadmap & prioritisation"
        ]
      },
      {
        title: "Proof of Concept (PoC) & Pilot Validation",
        desc: "Novum validates automation solutions in controlled, low-risk environments before scaling to full operations.",
        list: [
          "Pilot design for targeted workflows",
          "Technical feasibility validation",
          "ROI measurement & performance testing",
          "Blueprint creation for scalable deployment"
        ]
      },
      {
        title: "Implementation & Workflow Integration",
        desc: "Full-scale deployment of automation frameworks across cloud, infrastructure, applications, and security.",
        list: [
          "AI-powered workflow automation",
          "System integration & orchestration",
          "CI/CD, IaC & DevOps automation pipelines",
          "Enterprise-grade automation governance"
        ]
      },
      {
        title: "Managed Automation Services",
        desc: "Continuous optimisation, monitoring, and enhancement of enterprise automation systems.",
        list: [
          "Ongoing tuning & workflow optimisation",
          "24/7 health, performance, and incident monitoring",
          "New automation opportunities discovery",
          "Long-term ROI improvement & governance"
        ]
      }
    ]}
  />
</div>

<div id="usecase">  
  <InnovationsRoadmapSection
    sectionId="automation-roadmap"
    sectionClass="py-5"
    backgroundGradient="linear-gradient(to right bottom, #ffffff, #eef3ff)"
    subtitle="USE CASES"
    title="Real-World Automation Use Cases"
    intro="Novum delivers intelligent automation across cloud, security, networks, applications, and business processes enabling high-performance operations with minimal manual effort."
    primaryColor="#0d2b75"
    items={[
      {
        icon: "bi-hdd-network",
        title: "Data Centre & Cloud Operations",
        desc: "Automated provisioning, scaling, patching, backup workflows, and hybrid-cloud orchestration to improve operational speed and reliability."
      },
      {
        icon: "bi-diagram-3",
        title: "Network Provisioning & Policy Enforcement",
        desc: "Zero-touch network deployment, automated configuration updates, and compliance-driven policy enforcement across environments."
      },
      {
        icon: "bi-shield-lock",
        title: "Automated Cybersecurity Response",
        desc: "Real-time detection and automated remediation using SIEM/SOAR workflows, reducing response times and improving security posture."
      },
      {
        icon: "bi-gear-fill",
        title: "DevOps & Continuous Delivery Pipelines",
        desc: "End-to-end build, test, and deployment automation enabling faster software releases and improved reliability across teams."
      },
      {
        icon: "bi-clipboard-check",
        title: "Business Process Automation (BPA)",
        desc: "Streamline finance, HR, and operations workflows by replacing repetitive manual tasks with intelligent, rule-driven automation."
      }
    ]}
  />
</div>

     
    <div id="whyus">    
   <ServiceSplitPanel
  title="Why Choose Novum for Automation?"
  primaryColor="#2d1a78"
  items={[
    {
      label: "Deep Multi-Domain Expertise",
      paragraphs: [
        "Novum brings advanced capability across cloud engineering, DevOps automation, enterprise security, and modern infrastructure. Our teams design high-performance ecosystems where automation becomes a natural extension of your technology landscape.",
        "We help organisations deploy end-to-end automation across hybrid, multi-cloud, and on-premise environments with consistency, security, and reliability."
      ],
      listItems: [
        "Certified Azure, AWS & Google Cloud experts",
        "DevOps, SRE, security & infrastructure specialists",
        "Hands-on experience building enterprise automation"
      ]
    },

    {
      label: "Proven Automation Methodologies",
      paragraphs: [
        "Our delivery framework is built on industry best practices and refined through real enterprise transformation programs. We ensure every automation initiative is structured, measurable, and aligned with business outcomes.",
        "From discovery to rollout, our methodology reduces risk, accelerates adoption, and ensures long-term scalability."
      ],
      listItems: [
        "Structured automation delivery framework",
        "Reusable architectures & workflow blueprints",
        "Outcome-driven planning & execution"
      ]
    },

    {
      label: "Governance & Compliance-Driven Approach",
      paragraphs: [
        "Automation is only effective when it operates within the right controls. We embed governance, identity, security, and compliance guardrails into every workflow to ensure enterprise-grade reliability.",
        "Our teams design automation that aligns with your regulatory, operational, and risk requirements."
      ],
      listItems: [
        "Policy-driven workflows & access governance",
        "Compliance alignment: ISO, CIS, NIST, GDPR",
        "Automated controls & continuous monitoring"
      ]
    },

    {
      label: "Scalable & Customisable Solutions",
      paragraphs: [
        "Automation needs vary by organisation — that’s why we design solutions that scale with your processes, teams, and future roadmap.",
        "Whether you're automating specific workflows or building an enterprise-wide automation program, our approach adapts seamlessly to your environment."
      ],
      listItems: [
        "Modular, extensible automation architectures",
        "Scales across teams, workloads & cloud platforms",
        "Custom workflows tailored to business needs"
      ]
    },

    {
      label: "Long-Term Operational Partnership",
      paragraphs: [
        "Automation is not a one-time project — it requires ongoing optimisation and refinement. Novum continues to support, iterate, and enhance your automation capabilities through managed services.",
        "We ensure your automation ecosystem remains efficient, secure, and aligned to evolving business goals."
      ],
      listItems: [
        "Managed automation operations & monitoring",
        "Ongoing optimisation & workflow enhancements",
        "Continuous improvement & strategic advisory"
      ]
    },

    {
      label: "End-to-End Coverage",
      paragraphs: [
        "Novum supports the entire automation lifecycle — from consulting and architecture to deployment, optimisation, and long-term management.",
        "This unified approach helps organisations achieve seamless automation maturity without relying on multiple vendors or disconnected solutions."
      ],
      listItems: [
        "Consulting, implementation & managed services",
        "Cross-domain coverage: cloud, DevOps, security, data",
        "Unified support across your automation ecosystem"
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

export default Automation;