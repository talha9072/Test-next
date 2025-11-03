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





const Datawarehouse = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Microsoft Dynamics 365 Solutions"
  title="Empower Your Business with Unified Intelligence"
  highlightText="Dynamics 365"
  subtitle="Transform operations, elevate customer experiences, and accelerate growth with NOVUM’s Microsoft Dynamics 365 implementation and consulting solutions."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/dynamics365/dynamics-hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "AI Integration", href: "#ai" },
    { label: "Departments", href: "#departments" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Get Started", href: "#cta" },
  ]}
/>
 


      <SoftwareSolutionsSection
  title={
    <>
      Why Microsoft Dynamics 365 Is
      Transforming Modern Enterprises
    </>
  }
  paragraphs={[
    "In today’s digital economy, organizations need connected, intelligent systems that drive collaboration and insight across every department. Microsoft Dynamics 365 delivers exactly that a unified platform that integrates CRM and ERP capabilities under one powerful cloud ecosystem.",
    "By connecting finance, sales, operations, and customer service data, Dynamics 365 enables real-time visibility, predictive decision-making, and seamless automation. It eliminates silos, enhances productivity, and creates a single version of truth across the enterprise.",
  ]}
  imageSrc="/assets/img/dynamics365/dynamics-1.webp"
  altText="Microsoft Dynamics 365 Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
     <MainServices
  id="services"
  subtitle="Dynamics 365 Services"
  title="Empowering Businesses with Unified, Intelligent, and Scalable Solutions"
  description="NOVUM helps organizations deploy, customize, and scale Microsoft Dynamics 365 applications to streamline operations and improve decision-making. From CRM and ERP integration to automation and AI insights, we enable enterprises to unify data, enhance collaboration, and accelerate growth on a single cloud platform. Our certified consultants ensure every implementation delivers measurable value, efficiency, and innovation."
  image={{
    src: "/assets/img/dynamics365/dynamics-3.webp",
    alt: "Microsoft Dynamics 365 Architecture",
  }}
  services={[
    {
      title: "Implementation & Deployment",
      desc: "Seamless end-to-end implementation of Dynamics 365 modules — tailored to your business processes and goals.",
    },
    {
      title: "Customization & Integration",
      desc: "Integrating Dynamics 365 with Power BI, Azure, and third-party systems to create a unified digital ecosystem.",
    },
    {
      title: "CRM & ERP Modernization",
      desc: "Upgrading legacy systems to modern, cloud-based Dynamics 365 environments for enhanced performance and flexibility.",
    },
    {
      title: "Process Automation",
      desc: "Leveraging Power Automate and AI capabilities to automate manual tasks, streamline workflows, and reduce costs.",
    },
    {
      title: "User Training & Adoption",
      desc: "Ensuring successful platform adoption through tailored training, user enablement, and continuous support programs.",
    },
    {
      title: "Managed Services & Support",
      desc: "Providing proactive maintenance, updates, and optimization to keep your Dynamics 365 environment secure and efficient.",
    },
  ]}
/>


      <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How Dynamics 365 Accelerates Business Transformation"
  description="Microsoft Dynamics 365 connects data, operations, and intelligence across every department. With NOVUM’s implementation expertise, businesses gain the agility to adapt quickly, improve productivity, and make smarter, faster decisions through an integrated digital platform."
  items={[
    {
      img: "/assets/img/dynamics365/tab-1.webp",
      title: "End-to-End Process Automation",
      desc: "Automate workflows across sales, service, finance, and operations to eliminate manual tasks and boost efficiency.",
    },
    {
      img: "/assets/img/dynamics365/tab-2.png",
      title: "Predictive Forecasting",
      desc: "Leverage AI-powered insights to forecast demand, manage pipelines, and optimize supply chain performance.",
    },
    {
      img: "/assets/img/dynamics365/tab-3.webp",
      title: "Unified Customer Insights",
      desc: "Combine CRM and ERP data to get a 360° view of customers, enabling personalization and stronger engagement.",
    },
    {
      img: "/assets/img/dynamics365/tab-4.webp",
      title: "Increased Workforce Productivity",
      desc: "Empower teams with connected apps, guided workflows, and automation that reduce friction in daily operations.",
    },
    {
      img: "/assets/img/dynamics365/tab-5.png",
      title: "Native Microsoft Integration",
      desc: "Work seamlessly across Microsoft 365, Teams, and Power Platform for a unified business experience.",
    },
  ]}
/>
   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose NOVUM as Your Microsoft Dynamics 365 Partner"
  description="NOVUM helps businesses unlock the full potential of Microsoft Dynamics 365 by combining deep product knowledge with real-world industry experience. Our certified consultants ensure seamless implementation, rapid adoption, and measurable ROI across every stage of your digital transformation."
  counters={[
    { value: 30, suffix: "+", label: "Dynamics 365 Deployments" },
    { value: 10, suffix: "+", label: "Industries Served" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
    { value: 8, suffix: "+", label: "Years of Microsoft Partnership" },
  ]}
  features={[
    {
      icon: "fa-solid fa-handshake",
      title: "Certified Microsoft Partner",
      desc: "Recognized for delivering enterprise-grade implementations and ongoing solution optimization.",
    },
    {
      icon: "fa-solid fa-gears",
      title: "Tailored Business Solutions",
      desc: "Customizing Dynamics 365 modules to align perfectly with your organization’s structure and objectives.",
    },
    {
      icon: "fa-solid fa-brain",
      title: "AI-Driven Optimization",
      desc: "Integrating Power Platform and AI tools to enhance forecasting, automation, and business intelligence.",
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

export default Datawarehouse;