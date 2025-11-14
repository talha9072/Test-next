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
  serviceName="Professional Services"
  title="Accelerate Your Cloud and Technology Goals"
  highlightText="Professional Services"
  subtitle="Expert support to design build and optimize modern solutions."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/professional-services/professional-hero.webp"
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
  title={`Why Professional Services Matter for Modern Organizations`}
  paragraphs={[
    "NOVUM’s Professional Services provide expert guidance and hands on implementation to help organizations design build and optimize their technology solutions.",
    "Our focus is on accelerating cloud adoption modernizing IT environments and maximizing return on investment so your business can innovate faster and operate more efficiently."
  ]}
  imageSrc="/assets/img/professional-services/professional-1.webp"
  altText="Professional Services by Novum"
  sectionClass="position-relative overflow-hidden py-7"
/>

        
     <MainServices
  id="services"
  subtitle="Professional Services"
  title="Expert Support to Design Build and Optimize Modern Solutions"
  description="NOVUM’s Professional Services follow a collaborative engagement model that includes discovery workshops design sessions implementation and knowledge transfer. Our team applies proven frameworks and best practice methodologies to accelerate cloud adoption modernization and solution delivery ensuring strong outcomes for every project."
  image={{
    src: "/assets/img/professional-services/professional-2.webp",
    alt: "Professional Services by Novum",
  }}
  services={[
    {
      title: "Collaborative Engagement Model",
      desc: "We partner closely with your teams through discovery workshops solution design implementation and full knowledge transfer.",
    },
    {
      title: "Proven Frameworks and Best Practices",
      desc: "Our delivery approach is grounded in industry aligned methods that accelerate project timelines and improve outcomes.",
    },
    {
      title: "Certified Cloud Expertise",
      desc: "NOVUM experts are certified across major cloud platforms including Azure AWS Google Cloud and VMware.",
    },
    {
      title: "Cloud Strategy and Adoption",
      desc: "Develop actionable cloud adoption plans that align technology with business goals and long term growth.",
    },
    {
      title: "Application and Data Modernization",
      desc: "Re architect applications and modernize data platforms to support scalability analytics and AI integration.",
    },
    {
      title: "Security Architecture and Compliance",
      desc: "Design secure and compliant cloud environments with advanced monitoring governance and protection tools.",
    },
  ]}
/>



     <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="What You Gain from NOVUM Professional Services"
  description="NOVUM’s Professional Services strengthen your cloud journey by delivering structured guidance expert implementation and continuous improvement across your entire technology stack."
  items={[
    {
      img: "/assets/img/professional-services/tab-1.jpg",
      title: "Cloud Strategy and Adoption",
      desc: "Develop clear cloud adoption plans aligned to business goals supported by deep expertise across Azure AWS and Google Cloud.",
    },
    {
      img: "/assets/img/professional-services/tab-2.jpg",
      title: "Seamless Migration Services",
      desc: "Plan and execute smooth migrations with reduced downtime lower risk and complete alignment with your operational needs.",
    },
    {
      img: "/assets/img/professional-services/tab-3.jpg",
      title: "Application and Data Modernization",
      desc: "Re architect applications modernize data platforms and prepare systems for analytics and AI powered innovation.",
    },
    {
      img: "/assets/img/professional-services/tab-4.jpg",
      title: "Security and Compliance Architecture",
      desc: "Design secure environments that meet compliance standards supported by advanced monitoring and protection tools.",
    },
    {
      img: "/assets/img/professional-services/tab-5.jpg",
      title: "DevOps and Automation",
      desc: "Build automated pipelines provision infrastructure and streamline development for improved speed and reliability.",
    },
    {
      img: "/assets/img/professional-services/tab-6.jpg",
      title: "Performance and Cost Optimization",
      desc: "Improve system performance increase cost efficiency and enhance resilience with continuous optimization services.",
    },
  ]}
/>

   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose Novum for Professional Services"
  description="Novum delivers strategic guidance strong technical capability and proven delivery frameworks to help organizations accelerate cloud adoption modernize technology and improve long term performance."
  counters={[
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 40, suffix: "+", label: "Cloud Certified Experts" },
    { value: 12, suffix: "+", label: "Industries Served" },
    { value: 10, suffix: "+", label: "Years of Solution Excellence" },
  ]}
  features={[
    {
      icon: "fa-solid fa-user-tie",
      title: "Certified Multi Cloud Experts",
      desc: "Experienced professionals across Azure AWS Google Cloud and VMware bringing deep platform knowledge.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "Proven Delivery Frameworks",
      desc: "Structured discovery design implementation and transfer model ensures clear progress and predictable outcomes.",
    },
    {
      icon: "fa-solid fa-expand",
      title: "Collaborative Engagement",
      desc: "We work closely with your teams through workshops design sessions and continuous support to drive lasting results.",
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