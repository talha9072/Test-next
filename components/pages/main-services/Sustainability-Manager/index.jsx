"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import OverviewComponent from "@/components/data/services/OverviewComponent";
import BulletPoints from "@/components/data/services/bulletpoints";
import CTAPage from '@/components/data/services/CTAPage';
import UseCasesSection from "@/components/data/services/UseCasesSection";
import VideoHero from "@/components/data/services/VideoHero";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Sustainability = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Microsoft Sustainability Solutions"
  title="Modernise ESG Reporting and Advance Your Net-Zero Strategy"
  highlightText="Sustainability"
  subtitle="Harness cloud-powered sustainability tools to unify environmental data, improve performance, and drive measurable impact. From emissions tracking to operational optimisation, empower your organisation to move faster and more responsibly."
  bgImage="/assets/img/sustainability/sustain-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Performance", href: "#perfermance" },
    { label: "Pillars", href: "#pillars" },
    { label: "Use Case", href: "#usecase" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

 
<div id="about">
<OverviewComponent
  title="Accelerate Your Sustainability Journey"
  primaryColor="#0d2b75"
  backgroundType="color"
  backgroundColor="#e5f1ff"

  paragraphs={[
    "Sustainability is now a strategic priority for every modern organisation. With powerful ESG tools and cloud-driven insights, businesses can accelerate progress toward environmental and operational goals.",
    "Novum helps organisations use Microsoft’s sustainability technologies to measure impact, reduce emissions, improve transparency, and scale environmental initiatives with confidence."
  ]}

  listItems={[
    "Gain real-time visibility across carbon, water, waste, and operational sustainability metrics.",
    "Automate ESG data collection to improve reporting accuracy and reduce manual workloads.",
    "Use AI-powered insights to identify reduction opportunities and optimise resource usage.",
    "Scale environmental initiatives across teams, supply chains, and multi-site operations.",
    
  ]}
/>
</div>


<div id="perfermance">
  
    <BulletPoints
      sectionId="overview"
      title={<>Monitor and Manage Your Environmental Sustainability Performance</>}
      paragraphs={[
        "Record, analyse, and optimise your environmental footprint using automated data collection and intelligent insights across your organisation."
      ]}
      extraParagraph="Microsoft Sustainability Manager, available in Essentials and Premium editions, enables organisations to monitor emissions, streamline ESG reporting, and stay compliant with global sustainability standards."
      bulletPoints={[
        "Automated data ingestion across systems and business units",
        "Unified dashboards for carbon, water, and waste tracking",
        "AI-powered insights to identify and reduce emissions",
        "Support for global ESG frameworks and reporting standards"
      ]}
      imageSrc="/assets/img/sustainability/sustain-1.webp"
      altText="Microsoft Sustainability Manager – ESG Tracking and Insights"
      sectionClass="position-relative overflow-hidden py-7"
    />
</div>

<CTAPage
  title="Start your sustainability transformation with the leader’s guide"
  description="Whether you operate in finance, operations, supply chain, or IT, this guide helps leaders define a scalable sustainability strategy. Discover how to build a digital foundation capable of capturing environmental data, reducing operational costs, and accelerating progress toward net-zero commitments."
  buttonLabel="Download the e-book"
  buttonLink="https://info.microsoft.com/ww-landing-leaders-guide-to-sustainable-business-transformation.html"
  backgroundType="image"
  backgroundImage="/assets/img/sustainability/earth.webp"
  textColor="#ffffff"
  sectionClass="py-7"
/>

<div id="pillars">
  <UseCasesSection
    sectionId="use-cases"
    backgroundStyle="#e5f1ff"
    primaryColor="#0d2b75"
    subtitle="SUSTAINABILITY PILLARS"
    title="Three Pillars of Sustainable Progress"
    intro="Microsoft sustainability solutions help organisations build a continuous pathway from assessment to acceleration to complete business transformation—powered by accurate data, intelligent insights, and future-ready technologies."
    tabs={[
      {
       
        items: [
          {
            label: "Pillar",
            title: "Assess Your Impact",
            desc: "Fully leverage your data ecosystem to measure and monitor your environmental footprint with accuracy and transparency.",
            image: "/assets/img/sustainability/tab-1.webp",
            cta: "Assess",
            link: "https://www.microsoft.com/en-us/sustainability/sustainability-thought-leadership",
          },
          {
            label: "Pillar",
            title: "Accelerate Progress",
            desc: "Adopt data-driven sustainability solutions to reduce emissions, improve energy performance, and drive operational improvements across the business.",
            image: "/assets/img/sustainability/tab-2.webp",
            cta: "Accelerate",
            link: "https://www.microsoft.com/en-us/sustainability/sustainability-thought-leadership",
          },
          {
            label: "Pillar",
            title: "Transform Your Business",
            desc: "Reimagine processes and business models with innovative digital technologies that support long-term sustainability and future-ready operations.",
            image: "/assets/img/sustainability/tab-3.webp",
            cta: "Transform",
            link: "https://www.microsoft.com/en-us/sustainability/sustainability-thought-leadership",
          },
        ],
      },
    ]}
  />
</div>

<VideoHero
  backgroundImage="/assets/img/sustainability/sustainability-video-background.png"
  overlayOpacity={0.45}
  title="Reaching net zero: a global, collaborative effort"
  description="At Microsoft, we’re committed to helping the world reach our collective goals while creating new value for organizations."
  videoUrl="/assets/img/sustainability/sustainability.mp4" // Replace with your video
/>


<div id="usecase">
    <AIUseCaseGrid
      title="Industry-Specific Sustainability Solutions"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to left top, #ffffff, #eef3ff)"
      columns={3}
      items={[
        {
          iconType: "bootstrap",
          icon: "bi-car-front",
          title: "Automotive",
          desc: "Enhance mobility ecosystems and reduce emissions by connecting people, vehicles, and manufacturing processes through cloud technologies.",
          link: "/contact"
        },
        {
          iconType: "bootstrap",
          icon: "bi-lightning-fill",
          title: "Energy",
          desc: "Accelerate the shift to cleaner, more efficient, and resilient energy systems using Microsoft’s advanced digital capabilities.",
          link: "/contact"
        },
        {
          iconType: "bootstrap",
          icon: "bi-bank",
          title: "Financial Services",
          desc: "Manage risk, strengthen governance, and drive sustainable growth while improving transparency and ESG reporting.",
          link: "/contact"
        },
        {
          iconType: "bootstrap",
          icon: "bi-gear-wide-connected",
          title: "Manufacturing",
          desc: "Reduce waste, optimise resource usage, and improve workplace safety through intelligent manufacturing and operational insights.",
          link: "/contact"
        },
        {
          iconType: "bootstrap",
          icon: "bi-cart-check",
          title: "Retail",
          desc: "Enhance energy efficiency, lower environmental impact, and modernise retail operations with cloud-enabled sustainability tools.",
          link: "/contact"
        },
        {
          iconType: "bootstrap",
          icon: "bi-building-check",
          title: "Sustainable Buildings & Smart Infrastructure",
          desc: "Optimise energy consumption in buildings, campuses, and cities with advanced analytics and smart resource management technologies.",
          link: "/contact"
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
  
</div>



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

export default Sustainability;