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
  serviceName="Artificial Intelligence & IoT Solutions"
  title="Transforming the Future with AI and IoT"
  highlightText="AI & IoT"
  subtitle="Harness AI and IoT to turn automation into advantage."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/ai/ai-hero.webp"
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
      Why AI and IoT Are Revolutionizing
      Modern Business Operations
    </>
  }
  paragraphs={[
    "Artificial Intelligence and the Internet of Things are reshaping how businesses operate automating tasks, predicting outcomes, and enabling real time decision-making across every department.",
    "By connecting devices, sensors, and data through intelligent systems, organizations can unlock valuable insights, reduce downtime, and enhance productivity with smarter workflows.",
    "NOVUM’s AI and IoT solutions empower enterprises to move from reactive to predictive operations driving efficiency, innovation, and competitive advantage in a connected world.",
  ]}
  imageSrc="/assets/img/ai/ai-1.webp"
  altText="AI and IoT Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
      <MainServices
  id="services"
  subtitle="AI and IoT Services"
  title="Intelligent, Connected, and Scalable Solutions for the Future"
  description="NOVUM designs and deploys AI and IoT ecosystems that merge data intelligence with real world operations. From predictive analytics to connected device automation, our solutions help organizations enhance productivity, reduce costs, and unlock new opportunities through intelligent transformation."
  image={{
    src: "/assets/img/ai/ai-2.webp",
    alt: "AI and IoT Systems",
  }}
  services={[
    {
      title: "Machine Learning Development",
      desc: "Custom AI models for forecasting, recommendation engines, anomaly detection, and intelligent automation.",
    },
    {
      title: "Computer Vision Integration",
      desc: "Deploying smart vision systems for object detection, facial recognition, and real time visual insights.",
    },
    {
      title: "IoT Connectivity & Sensors",
      desc: "Integrating sensors, controllers, and smart devices to collect and analyze live operational data.",
    },
    {
      title: "Edge & Cloud Intelligence",
      desc: "Building distributed architectures that process data instantly on the edge or in the cloud for faster decisions.",
    },
    {
      title: "Process Automation",
      desc: "Automating workflows and optimizing resources using AI-driven decision logic and IoT-triggered actions.",
    },
    {
      title: "Predictive Maintenance",
      desc: "Using connected systems and analytics to predict equipment failures before they happen, minimizing downtime.",
    },
  ]}
/>


      <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How AI and IoT Empower Intelligent and Connected Operations"
  description="Implementing AI and IoT solutions enables organizations to move beyond traditional automation toward predictive, adaptive, and self optimizing systems. NOVUM helps enterprises integrate intelligence into every layer of their business for faster decisions and sustainable growth."
  items={[
    {
      img: "/assets/img/ai/predective.webp",
      title: "Predictive Intelligence",
      desc: "Use AI models to forecast trends, detect anomalies, and proactively address operational challenges.",
    },
    {
      img: "/assets/img/ai/real-time.webp",
      title: "Real-Time Insights",
      desc: "Leverage IoT sensors and edge analytics to monitor assets, performance, and conditions in real time.",
    },
    {
      img: "/assets/img/ai/resource.webp",
      title: "Smarter Resource Utilization",
      desc: "Reduce energy consumption, maintenance costs, and downtime through intelligent process automation.",
    },
    {
      img: "/assets/img/ai/adaptive.webp",
      title: "Adaptive Scalability",
      desc: "Easily expand your AI and IoT network as data volumes and connected devices grow without complexity.",
    },
    {
      img: "/assets/img/ai/security.webp",
      title: "Secure & Compliant Infrastructure",
      desc: "Built on enterprise-grade frameworks like Microsoft Azure to ensure data privacy, governance, and reliability.",
    },
  ]}
/>
   
     <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose NOVUM as Your AI and IoT Partner"
  description="NOVUM combines expertise in artificial intelligence, machine learning, and IoT integration to deliver solutions that drive automation, intelligence, and measurable business impact. We help organizations connect devices, data, and decisions into one cohesive ecosystem built for performance and scalability."
  counters={[
    { value: 25, suffix: "+", label: "AI & IoT Projects Delivered" },
    { value: 10, suffix: "+", label: "Industries Served" },
    { value: 100, suffix: "%", label: "Client Retention Rate" },
    { value: 8, suffix: "+", label: "Years of Experience" },
  ]}
  features={[
    {
      icon: "fa-solid fa-robot",
      title: "AI Expertise",
      desc: "End-to-end experience in building and deploying machine learning and intelligent automation systems.",
    },
    {
      icon: "fa-solid fa-network-wired",
      title: "IoT Integration",
      desc: "Connecting sensors, devices, and applications through secure, cloud-enabled architectures.",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Innovation & Scalability",
      desc: "We deliver flexible solutions that grow with your data, users, and connected infrastructure.",
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