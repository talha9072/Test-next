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





const Professional = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

     <HeroWithRibbon
  serviceName="Consulting and Advisory Services"
  title="Strategic Guidance for Confident Cloud Transformation"
  highlightText="Consulting and Advisory"
  subtitle="Expert support to assess plan and guide your cloud and technology journey."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/consulting-advisory/consulting-hero.png"
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
  title={`Why Consulting and Advisory Services Matter for Modern Organizations`}
  paragraphs={[
    "Novum provides end to end cloud consulting and advisory services guiding organizations from early assessment and strategy through to full implementation.",
    "Our approach focuses on creating cloud strategies that align with real business goals enabling stronger innovation better efficiency and long term scalability across the entire technology landscape."
  ]}
  imageSrc="/assets/img/consulting-advisory/consulting-1.webp"
  altText="Consulting and Advisory Services by Novum"
  sectionClass="position-relative overflow-hidden py-7"
/>

        
    <MainServices
  id="services"
  subtitle="Consulting and Advisory Services"
  title="Strategic Guidance for Every Stage of Your Cloud Journey"
  description="Novum provides a complete consulting and advisory model that supports organizations from early assessment through design implementation and ongoing improvement. Our approach combines collaborative workshops proven delivery frameworks and deep technical expertise to create strategies that drive innovation scalability and long term success."
  image={{
    src: "/assets/img/consulting-advisory/consulting-2.webp",
    alt: "Consulting and Advisory Services by Novum",
  }}
  services={[
    {
      title: "Engagement Across the Full Cloud Journey",
      desc: "We offer consulting advisory professional services and managed services ensuring support at every stage of transformation.",
    },
    {
      title: "Collaborative Consulting Approach",
      desc: "Our process includes discovery sessions strategy design implementation support and full knowledge transfer for long term ownership.",
    },
    {
      title: "Certified Cloud Expertise",
      desc: "Novum teams include certified specialists across Azure AWS Google Cloud and VMware with broad multi platform capability.",
    },
    {
      title: "Cloud Strategy and Adoption",
      desc: "We build cloud strategies aligned with business goals balancing performance cost efficiency and growth plans.",
    },
    {
      title: "Application and Data Modernization",
      desc: "We modernize applications and data platforms to support agility analytics AI and future ready architectures.",
    },
    {
      title: "Security Architecture and Governance",
      desc: "We strengthen cloud environments through secure design governance frameworks compliance support and advanced monitoring.",
    },
  ]}
/>



     <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="What You Gain from NOVUM Consulting and Advisory Services"
  description="Novum strengthens your cloud journey by providing structured assessments clear strategies and expert guidance across every stage of transformation. Our advisory approach ensures that your technology landscape supports long term growth innovation and operational excellence."
  items={[
    {
      img: "/assets/img/consulting-advisory/tab-1.jpg",
      title: "Cloud Migration and Adoption",
      desc: "Assess readiness identify risks and create clear migration plans that support smooth transitions and strong business outcomes.",
    },
    {
      img: "/assets/img/consulting-advisory/tab-2.jpg",
      title: "Application Modernization",
      desc: "Define modernization goals prioritize high value processes and build roadmaps that improve agility and long term scalability.",
    },
    {
      img: "/assets/img/consulting-advisory/tab-3.jpg",
      title: "Cost Optimization Strategy",
      desc: "Align cloud spend with business objectives through detailed assessments improved architecture and proactive optimization plans.",
    },
    {
      img: "/assets/img/consulting-advisory/tab-4.jpg",
      title: "Innovation and Growth Enablement",
      desc: "Identify new opportunities enhance IT operations and design strategies that support sustained business growth.",
    },
    {
      img: "/assets/img/consulting-advisory/tab-5.jpg",
      title: "Mergers and Acquisitions Integration",
      desc: "Unify tools systems and teams through structured integration models that simplify transitions and reduce disruption.",
    },
    {
      img: "/assets/img/consulting-advisory/tab-6.jpg",
      title: "Cloud Security and Governance",
      desc: "Strengthen security uncover vulnerabilities establish governance models and ensure secure dependable cloud deployments.",
    },
  ]}
/>


   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose Novum for Consulting and Advisory Services"
  description="Novum provides deep strategic insight strong cloud expertise and structured advisory frameworks that help organizations plan transform and grow with confidence. Our approach ensures every decision aligns with long term business objectives and delivers measurable impact."
  counters={[
    { value: 1700, suffix: "+", label: "Technical Certifications" },
    { value: 11000, suffix: "+", label: "Individual Skill Accreditations" },
    { value: 25, suffix: "+", label: "Cloud and Technology Specializations" },
    { value: 10, suffix: "+", label: "Years of Advisory Excellence" },
  ]}
  features={[
    {
      icon: "fa-solid fa-user-tie",
      title: "Certified Multi Cloud Specialists",
      desc: "Experts certified across Azure AWS Google Cloud and VMware delivering strong architectural and advisory capability.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "Structured Advisory Frameworks",
      desc: "Clear discovery planning and roadmap design supported by proven methods used to accelerate decision making and delivery.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "End to End Cloud Guidance",
      desc: "Support across strategy modernization governance security and cost management ensuring alignment with business goals.",
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

export default Professional;