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
      Why Change Management Matters
      for Successful Transformation
    </>
  }
  paragraphs={[
    "A clear and structured change plan prevents the most common reasons digital projects fail such as low adoption, weak engagement, and misaligned expectations.",
    "Without effective change management, even strong technical solutions risk becoming simple data entry tools instead of real business value creators.",
    "Our approach ensures that people understand the purpose of the change and have the confidence and capability to use the new solution in a meaningful way."
  ]}
  imageSrc="/assets/img/change-management-adoption/management-1.webp"
  altText="Change Management and Adoption Services"
  sectionClass="position-relative overflow-hidden py-7"
/>


<MainServices
  id="services"
  subtitle="Change Management Programs"
  title="Align Your Digital Solution with Real Business Outcomes"
  description="Many projects meet technical requirements but still struggle because the human experience is not considered. Our programs help teams understand, adopt, and effectively use new solutions so the business achieves the results it expects."
  image={{
    src: "/assets/img/change-management-adoption/management-2.webp",
    alt: "Change Management and Adoption Framework",
  }}
  services={[
    {
      title: "Outcome Focused Planning",
      desc: "We ensure that every project is designed around the business goals and the real needs of the people who will use the solution.",
    },
    {
      title: "User Experience Alignment",
      desc: "We work with cross functional teams including development to embed user experience into the design process.",
    },
    {
      title: "Readiness and Communication Support",
      desc: "We prepare teams for change through simple and clear communication that builds excitement and reduces uncertainty.",
    },
    {
      title: "Role Based Enablement",
      desc: "We deliver targeted learning experiences that help employees feel confident and capable when using the new system.",
    },
    {
      title: "Adoption Measurement",
      desc: "We track usage, engagement, and performance to ensure the solution delivers the intended outcomes.",
    },
    {
      title: "Continuous Reinforcement",
      desc: "We help maintain long term momentum through ongoing support, feedback loops, and coaching.",
    },
  ]}
/>




<ImplementSection
  id="implement"
  subtitle="Capabilities"
  title="How Structured Change Management Improves Project Success"
  description="Using proven frameworks such as the Prosci Change Management approach, we help organizations achieve stronger outcomes by ensuring users are prepared, supported, and engaged throughout the transformation journey."
  items={[
    {
      img: "/assets/img/change-management-adoption/tab-1.webp",
      title: "Stronger Executive Sponsorship",
      desc: "Ongoing support from leadership ensures that change is visible, credible, and aligned with business priorities.",
    },
    {
      img: "/assets/img/change-management-adoption/tab-2.webp",
      title: "Integrated Project Collaboration",
      desc: "Close coordination with project management and development teams keeps user experience at the center of all decisions.",
    },
    {
      img: "/assets/img/change-management-adoption/tab-3.webp",
      title: "Higher User Engagement",
      desc: "Active involvement of employees builds trust, reduces resistance, and increases readiness for new ways of working.",
    },
    {
      img: "/assets/img/change-management-adoption/tab-4.webp",
      title: "Clear and Frequent Communication",
      desc: "Transparent updates and simplified messaging help users understand the purpose of the change and what is expected.",
    },
    {
      img: "/assets/img/change-management-adoption/tab-5.webp",
      title: "Better Achievement of Project Goals",
      desc: "Projects with structured change management are significantly more likely to achieve the expected business results.",
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