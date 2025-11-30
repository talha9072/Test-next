"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import BulletPoints from "@/components/data/services/Bulletpoints";
import ConceptTwoCol from "@/components/data/services/ConceptTwoCol";
import WhyChooseSection from "@/components/data/services/whychooseus";
import FourCardSection from "@/components/data/services/FourPillarsSection";
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
  title="Increase User Adoption & Project Success"
  highlightText="Change Management"
  subtitle="Management & Adoption services align people, processes, and technology to maximise user adoption and reduce project risk."
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

 
<BulletPoints
  sectionId="change-overview"
  title={<>Why Change Management Matters?</>}
  paragraphs={[
    "Successful technology implementation is not only about deploying new tools it’s about preparing people, aligning leadership, and enabling teams to adopt new ways of working.",
    "Our Change Management & Adoption framework ensures your investment delivers real business value by guiding users, reducing resistance, and accelerating organisation-wide adoption."
  ]}
  bulletPoints={[
    "Improves user adoption and reduces change resistance",
    "Aligns leadership and teams on shared expectations and goals",
    "Provides clear communication and structured onboarding",
    "Ensures sustainable use of new systems and processes",
    "Accelerates time-to-value for your technology investment"
  ]}
  imageSrc="/assets/img/change-management-adoption/management-1.webp"
  altText="Change Management and User Adoption"
  sectionClass="position-relative overflow-hidden py-7"
/>

<ConceptTwoCol
backgroundStyle="#e5f1ff"
  title="Align Technology With Desired Business Outcomes"
  intro={[
    "Many projects meet all technical requirements yet still miss their intended business goals.",
    "This happens when user experience and people-readiness are not prioritised.",
    "Change management ensures your solution is adopted, not ignored."
  ]}
  rightPoints={[
    "Increase user adoption across all teams",
    "Improve utilisation and ROI",
    "Reduce change resistance and roll-out friction",
    "Align technology with actual workflows",
    "Enable confident and skilled users",
  ]}
/>



<FourCardSection
  title="Boost Project Success with Structured Change Management"
  intro="Structured change management increases success rates by up to 6x. These four pillars ensure a predictable and scalable approach."
  backgroundStyle="linear-gradient(to bottom right, #ffffff, #f4f7ff);"
  cards={[
    {
      image: "/assets/img/change-management-adoption/tab-1.webp",
      title: "Ongoing Executive Sponsorship",
      desc: "Visible leadership support removes barriers, reinforces priorities, and motivates teams."
    },
    {
      image: "/assets/img/change-management-adoption/tab-2.webp",
      title: "Integrated with Project Management",
      desc: "Change activities run in sync with delivery milestones, communication, and rollout plans."
    },
    {
      image: "/assets/img/change-management-adoption/tab-3.webp",
      title: "Active Employee Engagement",
      desc: "Inclusive engagement reduces resistance and helps users build ownership early."
    },
    {
      image: "/assets/img/change-management-adoption/tab-4.webp",
      title: "Frequent & Transparent Communication",
      desc: "Clear, consistent communication builds trust and keeps all teams aligned."
    }
  ]}
/>

<BulletPoints
  sectionId="service-includes"
  title={<>What Our Change Management & Adoption Service Includes</>}
  paragraphs={[
    "Our Change Management & Adoption service provides a structured, people-centred approach that ensures your technology investment delivers meaningful and sustained business value.",
  ]}
  bulletPoints={[
    "Change impact assessment across teams and processes",
    "Stakeholder mapping, engagement planning, and readiness checks",
    "Communication strategy and clear messaging frameworks",
    "Training material creation — guides, workshops, and enablement plans",
    "Adoption dashboards and performance measurement tracking",
    "Structured feedback loops and iterative improvement cycles",
    "Post-go-live reinforcement to sustain long-term adoption"
  ]}
  imageSrc="/assets/img/change-management-adoption/management-2.webp"
  altText="Change Management & Adoption Services"
  sectionClass="position-relative overflow-hidden py-7"
/>


<WhyChooseSection
title = "Why Choose Our Change Management Services?"
  sectionId="whyus-change"
  items={[
    {
      icon: "bi-diagram-3",
      title: "Proven Prosci-Based Methodology",
      desc: "Our approach is grounded in globally recognised Prosci change management principles ensuring structured, repeatable, and predictable results."
    },
    {
      icon: "bi-briefcase",
      title: "Cross-Industry Experience",
      desc: "We deliver successful change programs across sectors including finance, health, retail, manufacturing, and the public domain."
    },
    {
      icon: "bi-people",
      title: "User-Centred Adoption Strategy",
      desc: "Our framework focuses on real employee behaviour, readiness, and engagement to ensure technology is truly adopted — not just deployed."
    },
    {
      icon: "bi-microsoft",
      title: "Aligned with Microsoft Best Practices",
      desc: "We follow Microsoft’s organisational change adoption guidance ensuring smooth integration with Azure, Power Platform, and enterprise systems."
    },
    {
      icon: "bi-sliders2-vertical",
      title: "Flexible Support Models",
      desc: "Choose from full program support, project-based engagement, or lightweight advisory services based on your business needs."
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Maximised Technology ROI",
      desc: "Our structured adoption programs help you realise value faster, reduce resistance, and accelerate productivity across the organisation."
    }
  ]}
/>


     



<Testimonials
  subtitle="Client Stories"
  title="What Clients Say About Working With Novum"
  items={[
    {
      img: "/assets/img/clients/thumbnail_99x99_Huseyn_Zeynalli.jpg",
      text: "With a cloud solution custom-designed for the pharmaceutical industry by Novum Information Technology, we consolidated data from multiple systems into one unified platform. Now department heads access real-time reports instantly, manual consolidation is gone, and decision-making is faster and more secure.",
      author: "Majid Ismailov",
      position: "Head of Data Management, Avromed",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Elvin_Mammadov.jpg",
      text: "With Microsoft Dynamics 365 implemented and tailored for the aviation industry by Novum Information Technology, we transformed our finance operations from manual, time-consuming processes into a unified, intelligent system. Real-time insights now guide our decisions, and our teams are more agile and empowered than ever.",
      author: "Zaur Dibirov",
      position: "Director of Finance & Accounting, Azerbaijan Airlines",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Nizami_Mansirov.jpg",
      text: "Partnering with Novum Information Technology, we migrated our entire infrastructure to the Microsoft Cloud — adopting Microsoft 365 and leveraging Data & AI services tailored to our business model. Through seamless integrations and custom development, Novum helped us unify data, automate workflows, and empower every department with intelligent insights that drive faster, smarter decisions.",
      author: "Daniel V",
      position: "IT & Security Director, Kitopi",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Nizami_Mansirov.jpg",
      text: "Working with Novum has transformed the way Aster Pharmacy manages its operations. Their tailored solutions and expert guidance have streamlined our processes, improved efficiency, and enabled better decision-making across all departments. The partnership with Novum has been truly valuable, and we look forward to continued success together.",
      author: "Ashish Panday",
      position: "IT Director, Aster Pharmacy",
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