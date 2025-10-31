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





const Ai = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Microsoft Azure Solutions"
  title="Empower Your Business with the Cloud"
  highlightText="Azure"
  subtitle="Accelerate innovation, enhance scalability, and strengthen security with NOVUM’s end-to-end Microsoft Azure cloud solutions built for agility, performance, and growth."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/azure/azure-hero.webp"
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
      Why Microsoft Azure Is the Foundation <br />
      of Modern Cloud Transformation
    </>
  }
  paragraphs={[
    "Microsoft Azure empowers organizations to move beyond traditional IT infrastructure offering unmatched scalability, reliability, and intelligence in the cloud.",
    "From data hosting and AI services to security and analytics, Azure enables businesses to innovate faster, optimize operations, and securely connect people, systems, and data across hybrid and multi-cloud environments.",
    "NOVUM helps enterprises modernize their infrastructure, migrate applications, and implement cloud-native solutions using Azure’s powerful ecosystem driving agility, resilience, and long-term growth.",
  ]}
  imageSrc="/assets/img/azure/azure-1.webp"
  altText="Microsoft Azure Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
      <MainServices
  id="services"
  subtitle="Microsoft Azure Services"
  title="Flexible, Secure, and Scalable Cloud Solutions for Modern Enterprises"
  description="NOVUM helps organizations leverage the full potential of Microsoft Azure by designing, deploying, and managing end-to-end cloud solutions. From infrastructure modernization to AI integration and DevOps automation, our Azure services empower businesses to scale faster, innovate smarter, and stay secure in a connected world."
  image={{
    src: "/assets/img/azure/azure-2.webp",
    alt: "Microsoft Azure Cloud Architecture",
  }}
  services={[
    {
      title: "Cloud Infrastructure Deployment",
      desc: "Designing and implementing high-performance virtual networks, servers, and storage solutions on Azure.",
    },
    {
      title: "Migration & Modernization",
      desc: "Seamlessly moving workloads, databases, and applications from on-premises or other clouds to Microsoft Azure.",
    },
    {
      title: "Azure Data & AI Services",
      desc: "Leveraging Azure AI, Machine Learning, and Synapse Analytics to deliver actionable insights and automation.",
    },
    {
      title: "Security & Compliance",
      desc: "Implementing Azure Security Center and Defender tools for identity, threat, and compliance management.",
    },
    {
      title: "DevOps & Automation",
      desc: "Enhancing delivery pipelines using Azure DevOps, GitHub Actions, and Infrastructure as Code (IaC) best practices.",
    },
    {
      title: "Managed Cloud Operations",
      desc: "Ongoing optimization, monitoring, and cost management to ensure peak performance and reliability.",
    },
  ]}
/>


      <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How Microsoft Azure Accelerates Digital Transformation"
  description="Microsoft Azure gives enterprises the flexibility, intelligence, and performance needed to stay ahead in a cloud-first world. NOVUM’s Azure implementations help organizations modernize infrastructure, secure workloads, and enable smarter, data-driven decision-making at scale."
  items={[
    {
      img: "/assets/img/azure/cloud-migration.webp",
      title: "Seamless Cloud Migration",
      desc: "Move applications, databases, and workloads to Azure with zero downtime ensuring business performance.",
    },
    {
      img: "/assets/img/azure/multi-cloud.webp",
      title: "Hybrid & Multi-Cloud Flexibility",
      desc: "Operate across on-premises and cloud environments effortlessly using Azure Arc and hybrid infrastructure support.",
    },
    {
      img: "/assets/img/azure/azure-ai.webp",
      title: "AI-Powered Insights",
      desc: "Leverage Azure AI and Machine Learning services to transform data into predictive, actionable business intelligence.",
    },
    {
      img: "/assets/img/azure/azure-security.webp",
      title: "Enterprise-Grade Security",
      desc: "Protect your data and assets with Azure’s built-in identity, compliance, and threat protection frameworks.",
    },
    {
      img: "/assets/img/azure/azure-cost.webp",
      title: "Cost Optimization & Efficiency",
      desc: "Reduce infrastructure costs and improve operational efficiency through automated scaling and Azure Cost Management tools.",
    },
  ]}
/>
   
<Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose NOVUM as Your Microsoft Azure Partner"
  description="NOVUM brings years of experience in cloud architecture, migration, and optimization within the Microsoft ecosystem. As a trusted Azure Solutions Partner, we help organizations accelerate innovation, strengthen security, and modernize their infrastructure through intelligent, scalable, and cost-effective cloud solutions."
  counters={[
    { value: 35, suffix: "+", label: "Azure Implementations" },
    { value: 12, suffix: "+", label: "Industries Served" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 9, suffix: "+", label: "Years of Cloud Expertise" },
  ]}
  features={[
    {
      icon: "fa-solid fa-cloud",
      title: "Certified Azure Expertise",
      desc: "Our team of Microsoft-certified engineers delivers end-to-end Azure architecture, deployment, and management.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Security & Compliance",
      desc: "Implementing robust identity, governance, and protection frameworks powered by Azure Security Center and Defender.",
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Scalable Innovation",
      desc: "Helping enterprises adopt AI, IoT, and hybrid cloud technologies that grow with your business needs.",
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

export default Ai;