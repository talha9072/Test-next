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





const Training = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Corporate Trainings"
  title="Empowering Teams Through Practical, Expert-Led Learning"
  highlightText="Corporate Training"
  subtitle="Upskill your workforce with certified Microsoft workshops and hands-on professional development."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/corporate-training/corporate-training-hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Programs", href: "#services" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

 


      <SoftwareSolutionsSection
  title={
    <>
      Why Corporate Training Is
      Essential for Organizational Growth
    </>
  }
  paragraphs={[
    "In an evolving digital landscape, continuous learning is critical for maintaining a competitive edge. NOVUM’s Corporate Training programs equip teams with practical, real-world skills in Microsoft technologies, analytics, and digital transformation helping businesses enhance productivity, collaboration, and innovation.",
    "Led by certified experts and Microsoft MVPs, our workshops blend theory with hands-on practice to ensure knowledge retention and measurable results. From leadership coaching to technical mastery, NOVUM empowers your workforce to perform with confidence and deliver lasting business value.",
  ]}
  imageSrc="/assets/img/corporate-training/cooperate-1.webp"
  altText="Corporate Training and Professional Development Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
    <MainServices
  id="services"
  subtitle="Corporate Training Services"
  title="Developing Skills That Drive Performance and Innovation"
  description="NOVUM’s Corporate Training programs are designed to empower professionals with hands-on, high-impact learning experiences. Led by certified Microsoft experts and industry specialists, our sessions bridge the gap between theory and real-world application. From technical mastery to leadership growth, we deliver tailored training that enhances productivity, collaboration, and long-term organizational success."
  image={{
    src: "/assets/img/corporate-training/cooperate-2.webp",
    alt: "Corporate Training and Workforce Development",
  }}
  services={[
    {
      title: "Microsoft Product Workshops",
      desc: "Instructor-led sessions covering Power BI, Excel, Office 365, and more focused on practical, real-world business applications.",
    },
    {
      title: "Train the Trainer Program",
      desc: "Enable your internal trainers to deliver certified, impactful sessions aligned with Microsoft’s MCT and ISC standards.",
    },
    {
      title: "Customized Corporate Learning",
      desc: "Bespoke programs designed to match your organization’s industry, skill levels, and strategic goals.",
    },
    {
      title: "Technical Skills Development",
      desc: "Hands-on upskilling in areas like cloud computing, analytics, and digital transformation to future-proof your workforce.",
    },
    {
      title: "Leadership & Communication Training",
      desc: "Interactive workshops that strengthen leadership, teamwork, and communication across all departments.",
    },
    {
      title: "Flexible Learning Formats",
      desc: "Delivered online, on-site, or hybrid ensuring maximum participation and convenience for every team.",
    },
  ]}
/>





<ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How NOVUM’s Corporate Training Programs Elevate Workforce Performance"
  description="Partnering with NOVUM helps organizations build stronger, more capable teams ready to meet modern business challenges. Our tailored training programs combine practical instruction, real-world applications, and continuous learning to enhance productivity, innovation, and overall employee engagement across all departments."
  items={[
    {
      img: "/assets/img/corporate-training/tab-1.webp",
      title: "Enhanced Employee Productivity",
      desc: "Equip teams with the latest tools and techniques to streamline daily tasks, improve efficiency, and achieve business objectives faster.",
    },
    {
      img: "/assets/img/corporate-training/tab-2.webp",
      title: "Improved Technical Competence",
      desc: "Strengthen your workforce’s expertise in Microsoft products, analytics, and emerging technologies through certified, hands-on training.",
    },
    {
      img: "/assets/img/corporate-training/tab-3.webp",
      title: "Stronger Collaboration & Communication",
      desc: "Foster teamwork and knowledge-sharing across departments with training that improves communication and cross-functional cooperation.",
    },
    {
      img: "/assets/img/corporate-training/tab-4.webp",
      title: "Employee Retention & Growth",
      desc: "Invest in your people with professional development opportunities that boost satisfaction, loyalty, and long-term retention.",
    },
    {
      img: "/assets/img/corporate-training/tab-5.webp",
      title: "Organizational Agility",
      desc: "Build a flexible, future-ready workforce capable of adapting quickly to new technologies, processes, and business priorities.",
    },
  ]}
/>

   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Partner with NOVUM for Corporate Training"
  description="NOVUM empowers organizations to upskill their teams through expert-led, hands-on corporate training designed for measurable results. Our certified instructors combine technical mastery with real-world experience to create learning experiences that enhance productivity, engagement, and long-term business success."
  counters={[
    { value: 500, suffix: "+", label: "Professionals Trained" },
    { value: 25, suffix: "+", label: "Corporate Clients Served" },
    { value: 98, suffix: "%", label: "Satisfaction Rate" },
    { value: 10, suffix: "+", label: "Years of Training Expertise" },
  ]}
  features={[
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Certified Microsoft Instructors",
      desc: "Our trainers include Microsoft MVPs, MCTs, and industry-certified professionals with deep expertise in modern tools and technologies.",
    },
    {
      icon: "fa-solid fa-users-gear",
      title: "Tailored Learning Solutions",
      desc: "Each program is customized to fit your business objectives, skill levels, and operational workflows for maximum relevance and impact.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "End-to-End Support",
      desc: "From planning and scheduling to delivery and feedback, NOVUM ensures seamless coordination and measurable outcomes.",
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

export default Training;