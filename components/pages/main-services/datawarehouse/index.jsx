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
  serviceName="Data Warehouse Solutions"
  title="Centralized, Scalable, and Strategic"
  highlightText="Data Warehouse"
  subtitle="Unify your data, accelerate decisions, and empower insights with NOVUM’s enterprise-grade data warehouse solutions."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/datawarehouse/warehouse-hero.webp"
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
  title={
    <>
      Why Data Warehousing Is Essential <br />
      for Modern Enterprises
    </>
  }
  paragraphs={[
    "As organizations grow, data is generated across countless systems from ERPs and CRMs to cloud apps and IoT devices. When this information remains scattered, it limits visibility and slows down critical decisions.",
    "A centralized data warehouse brings all your business data together into one reliable structure. It ensures accuracy, consistency, and performance across departments while enabling powerful analytics and real time reporting.",
    "By creating a single source of truth, businesses can uncover insights faster, reduce operational inefficiencies, and make informed, data-driven decisions with confidence.",
  ]}
  imageSrc="/assets/img/datawarehouse/warehouse-1.webp"
  altText="Data Warehouse Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
      <MainServices
  id="services"
  subtitle="Data Warehouse Services"
  title="Building a Foundation for Unified, Reliable, and Insight-Driven Data"
  description="NOVUM designs and implements robust data warehouse solutions that centralize information from multiple business systems into a single, trusted source. Our experts ensure seamless integration, optimized performance, and reliable data pipelines that power analytics, reporting, and strategic decision-making across your organization."
  image={{
    src: "/assets/img/datawarehouse/warehouse-2.webp",
    alt: "Enterprise Data Warehouse Architecture",
  }}
  services={[
    { title: "Architecture Design", desc: "Designing scalable data warehouse architectures tailored to your business ecosystem." },
    { title: "ETL & Data Pipelines", desc: "Developing efficient extract, transform, and load processes for accurate and timely data." },
    { title: "Source Integration", desc: "Connecting ERPs, CRMs, cloud applications, and IoT systems for unified analytics." },
    { title: "Performance Tuning", desc: "Optimizing storage, queries, and data refresh cycles for maximum efficiency." },
    { title: "Data Quality & Governance", desc: "Ensuring data accuracy, security, and compliance through structured governance." },
    { title: "Analytics Enablement", desc: "Preparing clean, consistent data ready for BI tools like Power BI and Azure Synapse." },
  ]}
/>


      <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How a Modern Data Warehouse Transforms Business Intelligence"
  description="Implementing a modern data warehouse goes beyond storage it reshapes how organizations collect, access, and act on information. NOVUM’s architecture empowers teams with unified data visibility, faster analytics, and reliable performance at scale."
  items={[
    {
      img: "/assets/img/datawarehouse/unified-data.webp",
      title: "Unified Data Foundation",
      desc: "Bring together structured and unstructured data from diverse systems into one dependable source of truth.",
    },
    {
      img: "/assets/img/datawarehouse/real-time.webp",
      title: "Real-Time Decision Support",
      desc: "Access updated insights instantly with automated refresh cycles and real-time data synchronization.",
    },
    {
      img: "/assets/img/datawarehouse/cost.webp",
      title: "Reduced Operational Costs",
      desc: "Eliminate data silos and redundant storage by centralizing infrastructure for long-term efficiency.",
    },
    {
      img: "/assets/img/datawarehouse/scalable.webp",
      title: "Scalable Architecture",
      desc: "Adapt quickly to new data sources, users, and business needs with a flexible, cloud-ready framework.",
    },
    {
      img: "/assets/img/datawarehouse/compliance.webp",
      title: "Enhanced Compliance & Governance",
      desc: "Maintain full control over data lineage, access, and security to meet regulatory and audit requirements.",
    },
  ]}
/>
   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose NOVUM as Your Data Warehouse Partner"
  description="NOVUM brings together deep technical expertise and cross-industry experience to design data warehouse solutions that deliver measurable impact. From architecture to integration and analytics, we ensure your organization’s data becomes a strategic advantage."
  counters={[
    { value: 40, suffix: "+", label: "Enterprise Implementations" },
    { value: 8, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 35, suffix: "+", label: "Certified Data Professionals" },
  ]}
  features={[
    {
      icon: "fa-solid fa-database",
      title: "Deep Data Expertise",
      desc: "Proven success in building scalable, high-performance data warehouses across industries.",
    },
    {
      icon: "fa-solid fa-link",
      title: "Seamless System Integration",
      desc: "Ensuring unified data flow across ERP, CRM, and cloud platforms for real-time insights.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Data Quality & Governance",
      desc: "Implementing strong governance, validation, and security standards for trusted analytics.",
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