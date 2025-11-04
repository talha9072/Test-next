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





const Softwaredev = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Digital Strategy & Transformation"
  title="Future-Ready Roadmaps for Sustainable Growth"
  highlightText="Digital Strategy"
  subtitle="Connecting vision, technology, and measurable business outcomes."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/digital-strategy/digital-strategy-hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Implementation", href: "#implement" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
 


      <SoftwareSolutionsSection
  title={
    <>
      Why Digital Strategy Is 
      Critical for Modern Enterprises
    </>
  }
  paragraphs={[
    "In a fast-evolving business landscape, technology alone isn’t enough organizations need a clear strategy to align innovation with measurable outcomes. NOVUM’s digital strategy services help businesses define a clear roadmap for transformation, ensuring that every initiative supports growth, agility, and customer value.",
    "By bridging the gap between business vision and technology execution, we enable organizations to modernize operations, improve decision-making, and scale efficiently. Our strategies combine data-driven insights, process optimization, and future-ready architecture to ensure lasting impact across your enterprise.",
  ]}
  imageSrc="/assets/img/digital-strategy/strategy-1.webp"
  altText="Digital Strategy Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
     <MainServices
  id="services"
  subtitle="Digital Strategy Services"
  title="Transforming Vision into Actionable, Scalable Strategies"
  description="NOVUM helps organizations craft digital strategies that align business goals with the right technologies, processes, and execution models. From current-state assessments to roadmap creation and implementation planning, we ensure every initiative drives measurable impact and sustainable growth. Our experts translate vision into actionable strategies that enhance agility, innovation, and long-term competitiveness."
  image={{
    src: "/assets/img/digital-strategy/strategy-2.webp",
    alt: "Enterprise Digital Strategy Process",
  }}
  services={[
    {
      title: "Digital Maturity Assessment",
      desc: "Evaluating your organization’s current digital capabilities to identify gaps, strengths, and transformation opportunities.",
    },
    {
      title: "Technology Roadmapping",
      desc: "Defining strategic technology investments and phased implementation plans that align with business priorities.",
    },
    {
      title: "Process Optimization",
      desc: "Redesigning workflows and operations to maximize efficiency, scalability, and cross-department collaboration.",
    },
    {
      title: "Change Management Strategy",
      desc: "Building adoption and readiness plans that empower teams to embrace new technologies and ways of working.",
    },
    {
      title: "Data & Insights Strategy",
      desc: "Leveraging analytics and business intelligence to guide decision-making and uncover new growth opportunities.",
    },
    {
      title: "Governance & Risk Management",
      desc: "Establishing frameworks that ensure compliance, accountability, and transparency across all digital initiatives.",
    },
  ]}
/>



<ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How NOVUM’s Digital Strategy Empowers Business Transformation"
  description="Partnering with NOVUM for digital strategy enables organizations to align technology with vision, streamline operations, and accelerate innovation. Our strategic frameworks connect leadership goals with practical execution plans ensuring measurable outcomes, improved agility, and sustainable growth across all business functions."
  items={[
    {
      img: "/assets/img/digital-strategy/tab-1.webp",
      title: "Aligned Business & Technology Goals",
      desc: "Bridge the gap between strategic vision and digital execution, ensuring technology investments directly support business priorities.",
    },
    {
      img: "/assets/img/digital-strategy/tab-2.webp",
      title: "Accelerated Transformation",
      desc: "Implement clear, phased roadmaps that fast-track modernization, reduce complexity, and deliver early wins across departments.",
    },
    {
      img: "/assets/img/digital-strategy/tab-3.webp",
      title: "Enhanced Decision Intelligence",
      desc: "Leverage analytics, KPIs, and dashboards to enable data-driven decision-making and real-time strategic adjustments.",
    },
    {
      img: "/assets/img/digital-strategy/tab-4.webp",
      title: "Operational Efficiency",
      desc: "Optimize workflows and systems to eliminate redundancy, improve collaboration, and maximize productivity enterprise-wide.",
    },
    {
      img: "/assets/img/digital-strategy/tab-5.webp",
      title: "Future-Ready Scalability",
      desc: "Build adaptable frameworks and governance models that evolve with emerging technologies and changing market demands.",
    },
  ]}
/>


   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Partner with NOVUM for Digital Strategy"
  description="NOVUM helps organizations define, plan, and execute digital transformation with clarity and confidence. Our strategic experts combine business insight with technological depth to create actionable roadmaps that deliver measurable impact. We don’t just plan change we help you make it sustainable, scalable, and aligned with your long-term vision."
  counters={[
    { value: 60, suffix: "+", label: "Digital Strategies Delivered" },
    { value: 20, suffix: "+", label: "Industries Served" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
    { value: 10, suffix: "+", label: "Years of Strategic Experience" },
  ]}
  features={[
    {
      icon: "fa-solid fa-lightbulb",
      title: "Strategic Expertise",
      desc: "Our consultants bring cross-industry knowledge and proven methodologies to design transformation strategies that work in the real world.",
    },
    {
      icon: "fa-solid fa-gear",
      title: "Execution-Focused Planning",
      desc: "We bridge the gap between vision and implementation, ensuring every recommendation is practical, measurable, and results-oriented.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Long-Term Partnership",
      desc: "NOVUM remains engaged beyond strategy delivery guiding you through adoption, optimization, and continuous improvement.",
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

export default Softwaredev;