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





const Strategicresourcing = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Strategic IT Resourcing"
  title="Flexible and Outcome Driven Talent Solutions"
  highlightText="Strategic Resourcing"
  subtitle="Seamlessly scale your team with certified NOVUM professionals."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/strategic-resourcing/Strategic-resourcing-hero.webp"
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
      Why Strategic IT Resourcing Is <br />
      Essential for Modern Enterprises
    </>
  }
  paragraphs={[
    "In today’s fast-paced technology environment, organizations need access to specialized skills that can scale with evolving business demands. NOVUM’s Strategic IT Resourcing empowers enterprises to extend their teams with certified professionals, ensuring agility, expertise, and cost efficiency without long-term overhead.",
    "Our model goes beyond traditional staffing delivering technically aligned resources who integrate seamlessly with your operations. Whether supporting digital transformation, managing ongoing IT workloads, or filling critical skill gaps, NOVUM ensures every resource contributes measurable value and lasting impact.",
  ]}
  imageSrc="/assets/img/strategic-resourcing/strategy-1.webp"
  altText="Strategic IT Resourcing Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
     <MainServices
  id="services"
  subtitle="Strategic IT Resourcing Services"
  title="Empowering Businesses with Scalable, Skilled, and Flexible Talent"
  description="NOVUM delivers specialized IT resourcing solutions that provide immediate access to expert talent without the long-term overhead. From short-term project support to embedded technical roles, our resourcing model ensures your teams have the right skills, at the right time, to drive operational success. With a focus on quality, governance, and adaptability, we help organizations scale efficiently while maintaining performance and compliance."
  image={{
    src: "/assets/img/strategic-resourcing/strategic-2.webp",
    alt: "Strategic IT Resourcing Process",
  }}
  services={[
    {
      title: "Dedicated Resourcing",
      desc: "Deploying full-time technical experts who integrate seamlessly into your team for consistent, long-term project delivery.",
    },
    {
      title: "Designated Resourcing",
      desc: "Providing part-time or on-demand professionals supported by NOVUM’s wider delivery network for continuous reliability.",
    },
    {
      title: "Hybrid & Remote Support",
      desc: "Offering flexible working models that align with your organization’s operational, security, and compliance requirements.",
    },
    {
      title: "Technical Specialization",
      desc: "Sourcing certified professionals across cloud, data, cybersecurity, and infrastructure domains to fill critical skill gaps.",
    },
    {
      title: "Agile Team Extension",
      desc: "Scaling your development and IT teams with agile-ready experts who accelerate delivery and improve collaboration.",
    },
    {
      title: "Ongoing Management & Support",
      desc: "Ensuring smooth operations through structured oversight, performance tracking, and proactive engagement management.",
    },
  ]}
/>


<ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How NOVUM’s Strategic Resourcing Strengthens IT Operations"
  description="Partnering with NOVUM for strategic resourcing gives organizations the flexibility to scale, innovate, and deliver projects with confidence. Our model provides skilled professionals, operational continuity, and measurable efficiency helping businesses maintain momentum while optimizing internal resources."
  items={[
    {
      img: "/assets/img/strategic-resourcing/tab-1.webp",
      title: "On-Demand Expertise",
      desc: "Access certified specialists across cloud, data, cybersecurity, and development whenever your projects require additional support.",
    },
    {
      img: "/assets/img/strategic-resourcing/tab-2.webp",
      title: "Reduced Operational Overhead",
      desc: "Eliminate long hiring cycles and fixed costs with flexible resourcing models that adapt to your evolving business needs.",
    },
    {
      img: "/assets/img/strategic-resourcing/tab-3.webp",
      title: "Faster Project Delivery",
      desc: "Accelerate implementation timelines with experienced professionals who integrate seamlessly into your workflows.",
    },
    {
      img: "/assets/img/strategic-resourcing/tab-4.png",
      title: "Seamless Team Integration",
      desc: "Our resources work as part of your team, aligning with your tools, culture, and delivery frameworks for collaboration.",
    },
    {
      img: "/assets/img/strategic-resourcing/tab-5.webp",
      title: "Scalable Workforce Model",
      desc: "Easily ramp up or scale down resources based on demand, ensuring agility and cost efficiency across projects.",
    },
  ]}
/>

   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Partner with NOVUM for Strategic IT Resourcing"
  description="NOVUM delivers more than just technical staffing we provide a strategic partnership that strengthens your IT capabilities and accelerates delivery. Our resourcing framework combines proven expertise, flexibility, and governance to ensure every engagement delivers measurable value, operational efficiency, and long-term collaboration."
  counters={[
    { value: 60, suffix: "+", label: "Technical Experts Deployed" },
    { value: 10, suffix: "+", label: "Industries Supported" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
    { value: 9, suffix: "+", label: "Years of Resourcing Experience" },
  ]}
  features={[
    {
      icon: "fa-solid fa-users-gear",
      title: "Skilled & Certified Talent",
      desc: "Access a curated pool of specialists across cloud, infrastructure, cybersecurity, and software development domains.",
    },
    {
      icon: "fa-solid fa-diagram-project",
      title: "Flexible Engagement Models",
      desc: "Choose from dedicated, designated, or hybrid resourcing structures designed to match your operational goals.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Enduring Partnerships",
      desc: "We build lasting relationships by aligning resources with your culture, delivery frameworks, and strategic priorities.",
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

export default Strategicresourcing;