"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import ServiceFeatureCards from "@/components/data/services/ServiceFeatureCards";
import MainServices from "@/components/data/services/main-services";
import ImplementSection from "@/components/data/services/implement";
import Whyus from "@/components/data/services/whyus";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Reveal from "@/components/Reveal";
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const PowerBI = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Novum Managed Services"
  title="Multi-Cloud Operations, Security, Cost Optimisation & 24/7 Support"
  highlightText="Managed Services"
  subtitle="Novum delivers proactive managed services across Azure, AWS, and Google Cloud including DevOps, security operations, cost optimisation, infrastructure management, database services, and modern application support."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/managed-services/managed-hero.webp"
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
  title={`Modern Managed Services for Cloud-Driven Organisations`}
  paragraphs={[
    "Novum’s Managed Services empower businesses to focus on innovation while we take care of the day-to-day management of cloud operations.",
    "With flexible service models, certified cloud experts, and proactive 24/7 support, we help organisations optimise performance, improve security maturity, and maximise cloud ROI across Azure, AWS, and Google Cloud."
  ]}
  imageSrc="/assets/img/managed-services/managed-1.webp"
  altText="Managed Services by Novum"
  sectionClass="position-relative overflow-hidden py-7"
/>



<div id="service-offerings">
  <Reveal direction="fade" blur={true} delay={0.4} duration={1}>
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
  </Reveal>
</div>



        
      <MainServices
  id="services"
  subtitle="Managed Services"
  title="Proactive Cloud Management for Performance Security and Innovation"
  description="NOVUM delivers managed services that combine proactive monitoring flexible service models and deep cloud expertise. Our approach helps organizations improve performance strengthen security and operate confidently across multi cloud environments including Azure AWS and Google Cloud. With certified specialists and industry aligned practices we ensure your cloud operations remain stable secure and ready for continuous innovation."
  image={{
    src: "/assets/img/managed-services/managed-2.webp",
    alt: "Managed Cloud Services",
  }}
  services={[
    {
      title: "Proactive Monitoring",
      desc: "Round the clock monitoring to maintain stability optimize resources and identify issues before they impact operations.",
    },
    {
      title: "Flexible Service Models",
      desc: "Adaptable support that aligns with your business needs from reactive assistance to fully managed operations.",
    },
    {
      title: "Multi Cloud Expertise",
      desc: "Certified specialists across Azure AWS Google Cloud VMware and security disciplines providing expert technical guidance.",
    },
    {
      title: "Performance and Security Optimization",
      desc: "Continuous improvement through best practice architecture reviews security assessments and operational tuning.",
    },
    {
      title: "Collaborative Delivery",
      desc: "A partnership model where NOVUM works closely with your internal teams to support growth transformation and innovation.",
    },
    {
      title: "Industry Recognized Quality",
      desc: "Trusted by leading enterprises and backed by proven cloud frameworks and recognized certifications.",
    },
  ]}
/>



      <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="What You Gain from NOVUM’s Managed Services"
  description="NOVUM’s Managed Services deliver proactive support flexible operations and certified cloud expertise to help organizations run secure high performing and resilient environments across Azure AWS and Google Cloud."
  items={[
    {
      img: "/assets/img/managed-services/tab-1.webp",
      title: "Elastic Engineering Support",
      desc: "On demand access to cloud engineers who provide migration DevOps cost optimization infrastructure as code security guidance and disaster recovery support.",
    },
    {
      img: "/assets/img/managed-services/tab-2.webp",
      title: "Modern Multi Cloud Operations",
      desc: "Round the clock management of Azure AWS and Google Cloud environments to maintain stability improve performance and enable continuous innovation.",
    },
    {
      img: "/assets/img/managed-services/tab-3.webp",
      title: "Cost Optimization and Insights",
      desc: "Financial consultancy proactive monitoring architecture reviews and advanced optimization tools to reduce cloud spend and improve operational efficiency.",
    },
    {
      img: "/assets/img/managed-services/tab-4.webp",
      title: "Operational Platform Support",
      desc: "Ongoing technical and operational support including OS management access control escalation handling and routine cloud administration.",
    },
    {
      img: "/assets/img/managed-services/tab-5.webp",
      title: "Cloud Security and Threat Detection",
      desc: "Deployment management and monitoring of security tools with round the clock threat detection SIEM integration and rapid incident response.",
    },
    {
      img: "/assets/img/managed-services/tab-6.webp",
      title: "Database Lifecycle Management",
      desc: "Full lifecycle management for relational and NoSQL databases including monitoring backups performance tuning and recovery operations.",
    },
    {
      img: "/assets/img/managed-services/tab-7.webp",
      title: "Application Management Services",
      desc: "Continuous modernization and operational support for ERPs CRMs and digital platforms backed by round the clock coverage.",
    },
  ]}
/>

   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose Novum as Your Managed Services Partner"
  description="NOVUM provides certified cloud expertise proactive monitoring and a flexible service model that helps organizations operate with confidence across Azure AWS and Google Cloud. Our approach combines deep technical skill with a collaborative partnership ethos to deliver reliable secure and high performing cloud environments."
  counters={[
    { value: 24, suffix: "+", label: "Cloud Environments Managed" },
    { value: 100, suffix: "+", label: "Certified Cloud Experts" },
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 5, suffix: "★", label: "Client Satisfaction Rating" },
  ]}
  features={[
    {
      icon: "fa-solid fa-user-tie",
      title: "Certified Multi Cloud Experts",
      desc: "Specialists certified across Azure AWS Google Cloud VMware and security disciplines ensuring high quality cloud operations.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "Best Practice Frameworks",
      desc: "We apply industry recognized methods and cloud standards to enhance stability performance and security.",
    },
    {
      icon: "fa-solid fa-expand",
      title: "Flexible and Collaborative Model",
      desc: "Our delivery model adapts to your business needs providing support from rapid issue resolution to full operational management.",
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

export default PowerBI;