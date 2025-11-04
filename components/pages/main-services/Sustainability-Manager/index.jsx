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





const Sustainability = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Microsoft Sustainability Solutions"
  title="Accelerate Your Journey Toward a Greener Future"
  highlightText="Sustainability"
  subtitle="Empowering organizations to achieve environmental goals with data driven Microsoft solutions."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/sustainability/Sustainability-hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Solutions", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Implementation", href: "#implement" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

 


      <SoftwareSolutionsSection
  title={
    <>
      Why Sustainability Matters
      for Modern Enterprises
    </>
  }
  paragraphs={[
    "Sustainability is no longer just a corporate responsibility it’s a strategic advantage. NOVUM helps organizations harness Microsoft’s sustainability solutions to measure, manage, and reduce their environmental impact while improving operational efficiency and transparency.",
    "By integrating intelligent data tools, real time analytics, and automated reporting, we enable enterprises to transform sustainability goals into measurable results. Our approach ensures compliance, drives innovation, and helps build a resilient, low-carbon future across every industry.",
  ]}
  imageSrc="/assets/img/sustainability/sustain-1.webp"
  altText="Microsoft Sustainability Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
     <MainServices
  id="services"
  subtitle="Sustainability Services"
  title="Empowering Businesses to Build a Greener, Data-Driven Future"
  description="NOVUM helps organizations implement Microsoft Sustainability solutions that combine environmental responsibility with operational excellence. From emissions tracking to ESG reporting and renewable integration, we guide enterprises through every stage of their sustainability transformation. Our experts ensure transparency, compliance, and measurable results powered by intelligent data and cloud innovation."
  image={{
    src: "/assets/img/sustainability/sustain-2.webp",
    alt: "Microsoft Sustainability Solutions Process",
  }}
  services={[
    {
      title: "Carbon & Emission Management",
      desc: "Track, analyze, and reduce carbon emissions across your operations using Microsoft Sustainability Manager.",
    },
    {
      title: "Sustainability Data Integration",
      desc: "Connect data from multiple systems energy, logistics, and production into a unified sustainability platform.",
    },
    {
      title: "ESG Reporting & Compliance",
      desc: "Automate sustainability reporting and align with global standards such as GHG Protocol, CDP, and CSRD.",
    },
    {
      title: "Renewable Energy Optimization",
      desc: "Leverage data insights to improve energy efficiency, manage consumption, and support renewable initiatives.",
    },
    {
      title: "Cloud & AI-Powered Insights",
      desc: "Use Azure and AI analytics to gain real-time visibility into sustainability metrics and resource performance.",
    },
    {
      title: "Sustainable Operations Strategy",
      desc: "Develop long-term sustainability frameworks that balance growth, cost-efficiency, and environmental goals.",
    },
  ]}
/>



<ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How Microsoft Sustainability Solutions Drive Measurable Impact"
  description="Partnering with NOVUM helps organizations turn sustainability goals into actionable, data-driven outcomes. Through Microsoft’s cloud and AI platforms, we enable enterprises to monitor performance, reduce emissions, and report progress with accuracy and transparency delivering long-term environmental and operational value."
  items={[
    {
      img: "/assets/img/sustainability/tab-1.webp",
      title: "Data-Driven Sustainability",
      desc: "Centralize and analyze environmental data across energy, logistics, and operations to uncover actionable insights.",
    },
    {
      img: "/assets/img/sustainability/tab-2.webp",
      title: "Automated ESG Reporting",
      desc: "Generate reliable, audit-ready sustainability reports that align with global frameworks and regulatory standards.",
    },
    {
      img: "/assets/img/sustainability/tab-3.webp",
      title: "Carbon Reduction Insights",
      desc: "Track and forecast emissions, identify inefficiencies, and implement reduction strategies supported by AI analytics.",
    },
    {
      img: "/assets/img/sustainability/tab-4.webp",
      title: "Operational Efficiency Gains",
      desc: "Integrate sustainability data with business processes to reduce waste, optimize resource usage, and lower costs.",
    },
    {
      img: "/assets/img/sustainability/tab-5.webp",
      title: "Future-Ready Resilience",
      desc: "Adopt cloud-based tools and predictive intelligence to build adaptive, sustainable operations for a low-carbon future.",
    },
  ]}
/>


   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Partner with NOVUM for Sustainability Solutions"
  description="NOVUM helps organizations embed sustainability into their operations through data-driven, Microsoft-powered solutions. Our experts combine environmental insight with cloud and analytics expertise to create measurable impact. From carbon tracking to ESG reporting, we empower businesses to innovate responsibly and achieve long-term resilience."
  counters={[
    { value: 80, suffix: "+", label: "Sustainability Projects Delivered" },
    { value: 15, suffix: "+", label: "Industries Supported" },
    { value: 98, suffix: "%", label: "Data Accuracy in Reporting" },
    { value: 10, suffix: "+", label: "Years of Cloud Experience" },
  ]}
  features={[
    {
      icon: "fa-solid fa-leaf",
      title: "Sustainability Expertise",
      desc: "Our team blends environmental knowledge with Microsoft’s technology ecosystem to deliver tangible sustainability outcomes.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Data-Driven Transformation",
      desc: "We leverage AI and analytics to provide transparent, actionable insights that drive operational efficiency and carbon reduction.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Trusted Microsoft Partnership",
      desc: "As a Microsoft Solutions Partner, NOVUM ensures seamless implementation, compliance, and ongoing optimization across your sustainability journey.",
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

export default Sustainability;