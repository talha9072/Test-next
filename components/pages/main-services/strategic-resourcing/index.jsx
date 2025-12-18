"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import ServiceFeatureSlider from "@/components/data/services/ThreeRowSliderCards";
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
  bgImage="/assets/img/strategic-resourcing/strategic-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Flexible Talent", href: "#flexible" },
    { label: "Services", href: "#services" },
    { label: "Benefits", href: "#service-benefits" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
 

<div id="overview">
      <ImageWithContentSection
  orderControl={2}
  bgColor="#e5f1ff"
  title="Why Strategic IT Resourcing Is Essential for Modern Enterprises"
  imageSrc="/assets/img/strategic-resourcing/strategy-1.webp"
  imageAlt="Strategic IT Resourcing Solutions"

  paragraphs={[
    "In today’s fast-paced technology environment, organizations need access to specialized skills that can scale with evolving business demands. NOVUM’s Strategic IT Resourcing enables enterprises to extend their teams with certified professionals while maintaining agility and cost efficiency.",
    "Our approach goes beyond traditional staffing by delivering technically aligned resources that integrate seamlessly with your operations, ensuring measurable value across digital transformation initiatives, ongoing IT workloads, and critical skill gaps."
  ]}

  bulletPoints={[
    "On-demand access to certified IT professionals",
    "Scalable resourcing aligned with business needs",
    "Reduced long-term hiring and overhead costs",
    "Seamless integration with enterprise teams",
    "Immediate impact with measurable outcomes"
  ]}
/>
</div>

<div id="flexible">
<ImageWithContentSection
  orderControl={1}
  bgColor="#fff"
  title="Empowering Businesses with Scalable, Skilled, and Flexible Talent"
  imageSrc="/assets/img/strategic-resourcing/strategic-2.webp"
  imageAlt="Strategic IT Resourcing Process"

  paragraphs={[
    "NOVUM delivers strategic IT resourcing solutions that provide immediate access to expert talent without the long-term overhead of traditional hiring models.",
    "From short-term project support to embedded technical roles, our resourcing approach ensures organizations have the right skills at the right time while maintaining performance, governance, and compliance."
  ]}

  bulletPoints={[
    "Immediate access to certified IT professionals",
    "Flexible resourcing models for changing demands",
    "Reduced hiring risk and operational overhead",
    "Governed delivery with measurable outcomes"
  ]}
/>
</div>

<div id="services">
  <AIUseCaseGrid
    title="Strategic IT Resourcing Services"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to left top, #ffffff, #eef3ff)"
    columns={3}
    noButton
    items={[
      {
        iconType: "bootstrap",
        icon: "bi-person-badge",
        title: "Dedicated Resourcing",
        desc: "Full-time certified professionals embedded into your teams for consistent, long-term delivery.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-clock-history",
        title: "Designated Resourcing",
        desc: "Part-time or on-demand specialists backed by NOVUM’s broader delivery ecosystem.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-globe",
        title: "Hybrid & Remote Support",
        desc: "Flexible delivery models aligned with operational, security, and compliance requirements.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-cpu",
        title: "Technical Specialization",
        desc: "Access to certified experts across cloud, data, cybersecurity, and infrastructure domains.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-diagram-3",
        title: "Agile Team Extension",
        desc: "Rapidly scale development and IT teams with agile-ready professionals.",
        link: "#",
      },
      {
        iconType: "bootstrap",
        icon: "bi-clipboard-check",
        title: "Ongoing Management & Support",
        desc: "Structured oversight, performance tracking, and proactive engagement management.",
        link: "#",
      }
    ]}
  />
</div>
        

<div id="service-benefits">
  <ServiceFeatureSlider
    sectionId="service-benefits"
    title="How Strategic IT Resourcing Strengthens IT Operations"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #e5f1ff, #e5f1ff)"
    primaryColor="#0d2b75"
    items={[
      {
        image: "/assets/img/strategic-resourcing/tab-1.webp",
        title: "On-Demand Expertise",
        list: [
          "Access certified specialists across cloud, data, cybersecurity, and development",
          "Scale expertise instantly as project needs change",
          "Eliminate skill gaps without long hiring cycles"
        ],
      },
      {
        image: "/assets/img/strategic-resourcing/tab-2.webp",
        title: "Reduced Operational Overhead",
        list: [
          "Avoid long-term hiring and fixed employment costs",
          "Flexible resourcing aligned to business demand",
          "Optimized cost control across IT initiatives"
        ],
      },
      {
        image: "/assets/img/strategic-resourcing/tab-3.webp",
        title: "Faster Project Delivery",
        list: [
          "Experienced professionals ready to contribute immediately",
          "Seamless integration into existing workflows",
          "Accelerated timelines with reduced onboarding effort"
        ],
      },
      {
        image: "/assets/img/strategic-resourcing/tab-4.png",
        title: "Seamless Team Integration",
        list: [
          "Resources align with your tools and delivery frameworks",
          "Collaborative, team-first engagement model",
          "Consistent productivity and delivery standards"
        ],
      },
      {
        image: "/assets/img/strategic-resourcing/tab-5.webp",
        title: "Scalable Workforce Model",
        list: [
          "Rapidly scale resources up or down as required",
          "Supports short-term projects and long-term programmes",
          "Maintains agility without sacrificing quality"
        ],
      }
    ]}
  />
</div>

   
<div id="testimonials">
         <Testimonials
           subtitle="Client Stories"
           title="What Clients Say About Working With Novum"
           items={[
         {
           img: "/assets/img/clients/majid Ismayilov-Avromed.jpeg",
           text: "With a cloud solution custom-designed for the pharmaceutical industry by Novum Information Technology, we consolidated data from multiple systems into one unified platform. Now department heads access real-time reports instantly, manual consolidation is gone, and decision-making is faster and more secure.",
           author: "Majid Ismailov",
           position: "Head of Data Management, Avromed",
         },
         {
           img: "/assets/img/clients/Zaur Dibirov - Azal.jpeg",
           text: "With Microsoft Dynamics 365 implemented and tailored for the aviation industry by Novum Information Technology, we transformed our finance operations from manual, time-consuming processes into a unified, intelligent system. Real-time insights now guide our decisions, and our teams are more agile and empowered than ever.",
           author: "Zaur Dibirov",
           position: "Director of Finance & Accounting, Azerbaijan Airlines",
         },
         {
           img: "/assets/img/clients/Daniel Viranyi- Kitopi.png",
           text: "Partnering with Novum Information Technology, we migrated our entire infrastructure to the Microsoft Cloud — adopting Microsoft 365 and leveraging Data & AI services tailored to our business model. Through seamless integrations and custom development, Novum helped us unify data, automate workflows, and empower every department with intelligent insights that drive faster, smarter decisions.",
           author: "Daniel V",
           position: "IT & Security Director, Kitopi",
         },
         {
           img: "/assets/img/clients/Ashish Pandey-Aster.jpeg",
           text: "Working with Novum has transformed the way Aster Pharmacy manages its operations. Their tailored solutions and expert guidance have streamlined our processes, improved efficiency, and enabled better decision-making across all departments. The partnership with Novum has been truly valuable, and we look forward to continued success together.",
           author: "Ashish Panday",
           position: "IT Director, Aster Pharmacy",
         },
       ]}
         />
       
     </div>

<div id="otherservices">
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
</div>


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