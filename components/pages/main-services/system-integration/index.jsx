"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import MainServices from "@/components/data/services/main-services";
import ExpertiseSplitSection from "@/components/data/services/ExpertiseSplitSection";
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
    { label: "Services", href: "#services" },
    { label: "Implementation", href: "#implement" },
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

        
     <MainServices
  id="services"
  subtitle="System Integration Services"
  title="Design Build and Operate Modern Azure Environments"
  description="Novum delivers system integration services that help organizations build strong cloud native foundations on Azure. Our certified specialists support architecture planning container platforms serverless design DevOps automation migration and full operational workflows. We combine proven methods with real enterprise experience to ensure every solution is reliable scalable and ready for long term growth."
  image={{
    src: "/assets/img/system-integration/system-integration-2.webp",
    alt: "System Integration Services by Novum",
  }}
  services={[
    {
      title: "Cloud Center of Excellence",
      desc: "We provide assessment planning training and proof of concept support to build a strong Azure foundation that aligns with your business goals.",
    },
    {
      title: "Container and Platform Services",
      desc: "Design and implement Azure Kubernetes Service App Service and container solutions for modern scalable application environments.",
    },
    {
      title: "Serverless Architecture",
      desc: "Build event driven systems using Azure Functions and Logic Apps to simplify workloads and improve operational efficiency.",
    },
    {
      title: "Infrastructure as Code",
      desc: "Use ARM Bicep and Terraform to automate deployments and create consistent secure and repeatable Azure environments.",
    },
    {
      title: "DevOps and CI CD Pipelines",
      desc: "Implement automated pipelines with Azure DevOps and GitHub Actions to streamline development testing and deployment processes.",
    },
    {
      title: "Migration and Modernization",
      desc: "Migrate workloads applications and identity systems to Azure and modernize legacy platforms with API development data services and machine learning support.",
    },
  ]}
/>




     <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="What You Gain from NOVUM System Integration Services"
  description="Novum strengthens your cloud environment by delivering modern Azure architectures automated deployment processes and stable long term operations. Our system integration services ensure that your solutions are secure scalable and optimized for real enterprise performance."
  items={[
    {
      img: "/assets/img/system-integration/tab-1.jpg",
      title: "Stronger Cloud Native Architecture",
      desc: "Build modern Azure environments using container platforms serverless frameworks and cloud native design patterns.",
    },
    {
      img: "/assets/img/system-integration/tab-2.jpg",
      title: "Faster and Safer Deployments",
      desc: "Automate infrastructure and application delivery through pipelines that reduce manual effort and improve release speed.",
    },
    {
      img: "/assets/img/system-integration/tab-3.jpg",
      title: "Improved Application Modernization",
      desc: "Modernize applications legacy systems and data platforms to support current analytics workloads and future growth.",
    },
    {
      img: "/assets/img/system-integration/tab-4.jpg",
      title: "Secure and Stable Operations",
      desc: "Enable secure design strong identity controls monitoring systems and governance models that improve operational health.",
    },
    {
      img: "/assets/img/system-integration/tab-5.jpg",
      title: "Continuous Automation and DevOps Flow",
      desc: "Implement DevOps practices CI CD workflows and IaC methods to support continuous improvement and reliable delivery.",
    },
    {
      img: "/assets/img/system-integration/tab-6.jpg",
      title: "Proactive Managed Operations",
      desc: "Gain stable operations with twenty four seven monitoring patching issue handling and operational design based on best practices.",
    },
  ]}
/>

   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose Novum for System Integration Services"
  description="Novum brings certified Azure expertise strong system integration capability and proven delivery methods to help organizations build modern cloud native environments. Our teams are experienced in design deployment automation and long term operations ensuring every solution is stable secure and ready for future growth."
  counters={[
    { value: 100, suffix: "+", label: "Azure Certified Specialists" },
    { value: 150, suffix: "+", label: "Enterprise Deployments" },
    { value: 20, suffix: "+", label: "Cloud Native Competencies" },
    { value: 10, suffix: "+", label: "Years of Integration Excellence" },
  ]}
  features={[
    {
      icon: "fa-solid fa-user-tie",
      title: "Azure Focused Expertise",
      desc: "Certified professionals with deep knowledge in Azure PaaS AI container platforms serverless systems and DevOps pipelines.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "Strong System Integration Capability",
      desc: "Experience across containers serverless IaC CI CD virtualization and full modernization workflows for enterprise environments.",
    },
    {
      icon: "fa-solid fa-expand",
      title: "Reliable Operations and Support",
      desc: "Operational designs based on industry best practices supported by monitoring patching incident handling and continuous improvement.",
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

export default System;