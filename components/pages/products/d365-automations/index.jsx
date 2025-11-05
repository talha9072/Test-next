"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroOnly from "@/components/data/industries/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import Iconlist from "@/components/data/industries/icon-list";
import AirportStakeholdersSection from "@/components/data/industries/tabs";
import SmartTurnaroundCards from "@/components/data/industries/cards";
import WhySection from "@/components/data/services/WhySection";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const FaceRecognition = () => {
  return (
    <div>
        <HeaderFour />
        
        <HeroOnly
  serviceName="D365 Automations"
  title="Accelerate Business Efficiency with Intelligent Workflows"
  highlightText="Microsoft Dynamics 365"
  subtitle="Streamline operations, boost productivity with Novum’s D365 automation solutions."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/main-product/d365-hero.webp"
  heroButtons={[
    { label: "Request Demo", href: "/contact" },
  ]}
/>
        
        
        
      <SoftwareSolutionsSection
  title={`Accelerate Business Efficiency with D365`}
  paragraphs={[
    "Modern enterprises using Microsoft Dynamics 365 often face productivity challenges due to manual workflows and disconnected systems. Novum’s D365 Automations solution helps organizations unlock the full potential of Dynamics 365 by introducing intelligent, end-to-end process automation.",
    "By leveraging Power Automate, native D365 workflows, and secure integrations, we streamline operations across sales, customer service, finance, and operations reducing repetitive tasks, eliminating errors, and maximizing team productivity within your existing D365 environment."
  ]}
  imageSrc="/assets/img/main-product/d365-1.webp"
  altText="Microsoft Dynamics 365 Automation Solutions"
/>

<Iconlist
  id="d365-automations"
  title="Microsoft Dynamics 365 Services We Provide"
  imageSrc="/assets/img/main-product/d365-2.webp"
  altText="D365 Automation Services Features"
  features={[
    {
      icon: "bi bi-graph-up-arrow",
      title: "Sales Automation",
      description:
        "Automate lead scoring, follow-ups, opportunity management, and deal lifecycle tasks to accelerate revenue cycles and boost conversion rates.",
    },
    {
      icon: "bi bi-headset",
      title: "Customer Service Automation",
      description:
        "Streamline case routing, escalation workflows, automated responses, and SLA management to improve support delivery and resolution times.",
    },
    {
      icon: "bi bi-cash-stack",
      title: "Finance & Operations Automation",
      description:
        "Automate invoicing, procurement approvals, reconciliation flows, and reporting to improve accuracy, compliance, and processing speed.",
    },
  ]}
/>
        



   <AirportStakeholdersSection
  heading="Our D365 Automation Delivery Process"
  subheading="From discovery to deployment, Novum ensures your Dynamics 365 automation journey is seamless, secure, and aligned with your business goals. Each phase is carefully designed to maximize ROI, reduce manual effort, and ensure long-term scalability."
  tabs={[
    {
      label: "Discovery & Workflow Audit",
      imageSrc: "/assets/img/main-product/d365-4.webp",
      altText: "Discovery and Workflow Audit",
      title: "Identifying High-Impact Automation Opportunities",
      description: `
        We begin by analyzing your current Dynamics 365 setup, identifying repetitive tasks, process bottlenecks, and areas where automation can deliver measurable efficiency gains. 
        Our consultants map workflows across departments sales, service, finance, and operations—to create a clear automation blueprint. 
        The result: a strategic roadmap for intelligent automation aligned with your business priorities and KPIs.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Solution Design & Development",
      imageSrc: "/assets/img/main-product/d365-5.webp",
      altText: "Solution Design and Development",
      title: "Designing Intelligent Workflows for Dynamics 365",
      description: `
        Based on the audit findings, we design and develop customized automation solutions using Power Automate, D365 native workflows, and secure API integrations. 
        Each automation is tailored to department goals ensuring seamless connectivity between Dynamics 365 modules and external systems. 
        We emphasize low-code scalability, security compliance, and performance optimization to future-proof your D365 environment.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Testing, Training & Support",
      imageSrc: "/assets/img/main-product/d365-6.webp",
      altText: "Testing, Training and Support",
      title: "Ensuring Accuracy, Adoption, and Long-Term Success",
      description: `
        Every automation undergoes rigorous testing to ensure data accuracy, performance stability, and role-based security validation. 
        We provide hands-on training to internal teams for smooth adoption and offer continuous post deployment support for optimization and scaling. 
        With transparent documentation and performance monitoring, your organization can achieve sustained efficiency and automation maturity.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
  ]}
/>




<SmartTurnaroundCards
  heading="An Intelligent Automation Framework for Modern Enterprises"
  subheading="Power Automate, AI, and Dynamics 365 working together to streamline workflows, enhance productivity, and ensure operational excellence."
  accentColor="#0D2B75"
  cards={[
    {
      imageSrc: "/assets/img/main-product/d365-7.webp",
      title: "Process Discovery & Optimization",
      description:
        "Identify repetitive tasks and manual bottlenecks across departments, transforming them into efficient, automated workflows powered by D365 and Power Automate.",
    },
    {
      imageSrc: "/assets/img/main-product/d365-8.webp",
      title: "Low-Code Workflow Automation",
      description:
        "Leverage Power Automate to design and deploy low-code solutions that seamlessly connect Dynamics 365 with internal and external systems for real-time efficiency.",
    },
    {
      imageSrc: "/assets/img/main-product/d365-9.webp",
      title: "Cross-Department Integration",
      description:
        "Enable unified data flow between sales, customer service, finance, and operations to eliminate silos and ensure synchronized, automated business processes.",
    },
    {
      imageSrc: "/assets/img/main-product/d365-10.webp",
      title: "Monitoring, Analytics & Reporting",
      description:
        "Gain full visibility into automation performance through dashboards, insights, and audit-ready logs that drive data-informed decision-making.",
    },
  ]}
/>





  
        
      
<WhySection
  heading="Key Features of Our D365 Automation Solution"
  subheadingLines={[
    "Unlock the full potential of Microsoft Dynamics 365 with intelligent automation designed to reduce manual work, improve accuracy, and drive business performance.",
    "From process discovery to continuous optimization, Novum’s D365 Automations integrate seamlessly with your existing systems to deliver measurable efficiency and operational control."
  ]}
  imgSrc="/assets/img/main-product/d365-11.webp"
  imgAlt="Microsoft Dynamics 365 Automation Dashboard"
  cards={[
    {
      iconClass: "bi bi-diagram-3 text-novum-blue",
      title: "Cross-Module Workflow Automation",
      text: "Automate processes across Sales, Customer Service, Finance, and Operations to ensure seamless data flow and consistent performance.",
    },
    {
      iconClass: "bi bi-lightning-charge-fill text-novum-blue",
      title: "Power Automate Integration",
      text: "Design and deploy low-code automation using Microsoft Power Platform for faster delivery and scalability without complex development.",
    },
    {
      iconClass: "bi bi-gear-wide-connected text-novum-blue",
      title: "Custom Workflow Development",
      text: "Build tailored automation flows that align with unique business logic, compliance rules, and operational structures.",
    },
    {
      iconClass: "bi bi-graph-up-arrow text-novum-blue",
      title: "Real-Time Monitoring & Insights",
      text: "Track workflow performance, identify process bottlenecks, and optimize automation efficiency through dynamic dashboards.",
    },
    {
      iconClass: "bi bi-link-45deg text-novum-blue",
      title: "Seamless System Connectivity",
      text: "Connect Dynamics 365 with external CRMs, ERPs, and cloud systems through secure API and connector integrations.",
    },
    {
      iconClass: "bi bi-shield-check text-novum-blue",
      title: "Compliance & Security Controls",
      text: "Ensure role-based access, audit trails, and adherence to data governance policies across all automated workflows.",
    },
  ]}
/>

       

       <ContactWidget />

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

export default FaceRecognition;