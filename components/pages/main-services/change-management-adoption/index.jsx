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





const Change = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Change Management & Adoption"
  title="Successful Transformation Through People"
  highlightText="Change Management"
  subtitle="Empowering teams to embrace technology, adapt faster, and sustain long-term success."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/change-management-adoption/management-hero.webp"
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
      Why Change Management Is
      Critical for Digital Transformation
    </>
  }
  paragraphs={[
    "Technology alone doesn’t drive transformation people do. NOVUM’s Change Management & Adoption services help organizations align their workforce with new systems, ensuring every digital initiative is embraced, understood, and sustained. We build the bridge between technical deployment and human adoption, minimizing disruption and maximizing ROI.",
    "Through structured communication, training, and engagement strategies, we empower teams to adapt confidently and maintain momentum long after go-live. Our approach combines behavioral insight, organizational psychology, and practical implementation support for measurable, lasting success."
  ]}
  imageSrc="/assets/img/change-management-adoption/management-1.webp"
  altText="Change Management and Adoption Services"
  sectionClass="position-relative overflow-hidden py-7"
/>

<MainServices
  id="services"
  subtitle="Change Management Services"
  title="Empowering People to Drive Lasting Transformation"
  description="NOVUM’s Change Management & Adoption services help organizations ensure that digital transformation succeeds not just technologically, but culturally. We develop structured engagement frameworks, leadership alignment strategies, and tailored enablement programs that inspire adoption and long-term commitment. Our proven methodologies foster readiness, resilience, and measurable business impact."
  image={{
    src: "/assets/img/change-management-adoption/management-2.webp",
    alt: "Change Management and Adoption Framework",
  }}
  services={[
    {
      title: "Organizational Readiness Assessment",
      desc: "Assess your organization’s culture, communication, and capabilities to prepare teams for upcoming transformation initiatives.",
    },
    {
      title: "Change Strategy Development",
      desc: "Design comprehensive strategies that combine clear communication, leadership support, and behavioral change planning.",
    },
    {
      title: "Stakeholder Engagement & Alignment",
      desc: "Build leadership sponsorship and involve key influencers to create trust, alignment, and shared accountability.",
    },
    {
      title: "Training & Role-Based Enablement",
      desc: "Deliver hands-on, targeted learning experiences that empower employees to confidently adopt new systems and workflows.",
    },
    {
      title: "Adoption Tracking & Performance Analytics",
      desc: "Monitor user engagement, training progress, and adoption metrics to evaluate impact and guide ongoing improvement.",
    },
    {
      title: "Post-Implementation Reinforcement",
      desc: "Provide ongoing support, refresher sessions, and performance feedback loops to sustain adoption and maximize ROI.",
    },
  ]}
/>




<ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How NOVUM’s Change Management Services Drive Successful Transformation"
  description="Partnering with NOVUM helps organizations achieve true transformation by aligning people, processes, and technology. Our structured change management approach fosters readiness, minimizes resistance, and ensures sustained adoption empowering teams to embrace innovation and deliver measurable business outcomes."
  items={[
    {
      img: "/assets/img/change-management-adoption/tab-1.webp",
      title: "Improved User Adoption",
      desc: "Ensure employees confidently embrace new systems and workflows through clear communication, training, and support frameworks.",
    },
    {
      img: "/assets/img/change-management-adoption/tab-2.webp",
      title: "Reduced Implementation Resistance",
      desc: "Address challenges early and build organizational buy-in with proactive engagement and leadership alignment strategies.",
    },
    {
      img: "/assets/img/change-management-adoption/tab-3.webp",
      title: "Faster ROI on Digital Investments",
      desc: "Accelerate the realization of business value by ensuring technologies are effectively utilized and integrated across teams.",
    },
    {
      img: "/assets/img/change-management-adoption/tab-4.webp",
      title: "Enhanced Employee Engagement",
      desc: "Foster a culture of collaboration, empowerment, and accountability through inclusive communication and continuous feedback.",
    },
    {
      img: "/assets/img/change-management-adoption/tab-5.webp",
      title: "Sustained Organizational Agility",
      desc: "Build long-term resilience with adaptive frameworks that prepare teams for future change and evolving digital priorities.",
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

export default Change;