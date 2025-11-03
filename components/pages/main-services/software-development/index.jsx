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
  serviceName="Custom Software Development"
  title="Innovative, Scalable, and Business-Driven Solutions"
  highlightText="Software Development"
  subtitle="Build powerful, tailor-made software solutions with NOVUM. From cloud-ready applications to enterprise platforms, we design, develop, and deploy systems that accelerate growth, enhance efficiency, and drive digital transformation."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/softwaredev/software-hero.webp"
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
      Why Custom Software Development Is <br />
      Essential for Modern Businesses
    </>
  }
  paragraphs={[
    "In a rapidly evolving digital landscape, off-the-shelf solutions often fail to meet unique operational demands. NOVUM’s custom software development ensures that every system is tailored to your business processes, delivering agility, scalability, and long-term value.",
    "By combining technical expertise with strategic insight, we create robust applications that integrate seamlessly with your existing ecosystem. From automating workflows to enhancing customer engagement, our solutions are engineered to drive performance, security, and growth across every department.",
  ]}
  imageSrc="/assets/img/softwaredev/dev-1.webp"
  altText="Custom Software Development Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
     <MainServices
  id="services"
  subtitle="Software Development Services"
  title="Delivering Intelligent, Scalable, and Impactful Software Solutions"
  description="NOVUM provides end-to-end software development services designed to transform your ideas into robust digital products. From initial planning and architecture to deployment and optimization, we ensure every solution aligns with your business goals, technology landscape, and scalability needs. With agile processes and deep engineering expertise, we help enterprises innovate faster and operate smarter."
  image={{
    src: "/assets/img/softwaredev/dev-2.webp",
    alt: "Enterprise Software Development Process",
  }}
  services={[
    {
      title: "Custom Application Development",
      desc: "Designing and building tailored web, desktop, and mobile applications optimized for performance and scalability.",
    },
    {
      title: "Cloud Architecture & Deployment",
      desc: "Developing cloud-native systems that ensure high availability, security, and seamless integration across environments.",
    },
    {
      title: "API Development & Integration",
      desc: "Creating secure, high-performance APIs and connecting new solutions with existing enterprise systems.",
    },
    {
      title: "UI/UX Design & Prototyping",
      desc: "Crafting user-centric designs that blend functionality with intuitive, engaging experiences for all platforms.",
    },
    {
      title: "Agile Project Delivery",
      desc: "Using agile methodologies to deliver iterative, flexible, and transparent software solutions with measurable results.",
    },
    {
      title: "Maintenance & Support",
      desc: "Providing continuous monitoring, updates, and enhancements to ensure long-term reliability and optimal performance.",
    },
  ]}
/>


<ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How NOVUM’s Software Development Drives Digital Transformation"
  description="Partnering with NOVUM for software development empowers organizations to innovate faster, optimize workflows, and enhance business performance through reliable, scalable, and user-focused applications. Our development process ensures agility, quality, and measurable impact across every stage of the software lifecycle."
  items={[
    {
      img: "/assets/img/softwaredev/tab-1.webp",
      title: "Tailored Business Solutions",
      desc: "Every application is custom-built around your goals, ensuring seamless alignment with processes, teams, and customer needs.",
    },
    {
      img: "/assets/img/softwaredev/tab-2.webp",
      title: "Faster Time to Market",
      desc: "Our agile development framework accelerates delivery, helping you launch, test, and iterate new software faster.",
    },
    {
      img: "/assets/img/softwaredev/tab-3.webp",
      title: "Enhanced Scalability & Performance",
      desc: "We design robust architectures capable of handling growth, high traffic, and complex enterprise operations effortlessly.",
    },
    {
      img: "/assets/img/softwaredev/tab-4.webp",
      title: "Seamless Integration",
      desc: "Connect new systems with your existing applications and cloud infrastructure through secure, efficient APIs and integrations.",
    },
    {
      img: "/assets/img/softwaredev/tab-5.webp",
      title: "Continuous Optimization & Support",
      desc: "Benefit from ongoing updates, maintenance, and performance tuning to ensure your software stays future-ready.",
    },
  ]}
/>

   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Partner with NOVUM for Software Development"
  description="NOVUM combines technical excellence with a deep understanding of business challenges to deliver high-quality, scalable software solutions. Our team of experienced developers, architects, and strategists ensures every project is built with precision, innovation, and measurable results that align with your organization’s long-term goals."
  counters={[
    { value: 50, suffix: "+", label: "Custom Solutions Delivered" },
    { value: 15, suffix: "+", label: "Industries Served" },
    { value: 100, suffix: "%", label: "Project Success Rate" },
    { value: 10, suffix: "+", label: "Years of Development Expertise" },
  ]}
  features={[
    {
      icon: "fa-solid fa-code",
      title: "Full-Cycle Development",
      desc: "From discovery to deployment, we manage every stage of the software lifecycle with agile precision and transparency.",
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Scalable Cloud Architecture",
      desc: "We engineer secure, high-performing applications optimized for cloud environments and global scalability.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Collaborative Partnership",
      desc: "Our team works closely with clients to ensure every project aligns with strategic goals and delivers lasting business impact.",
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