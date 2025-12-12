"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import ServiceFeatureSlider from "@/components/data/services/ThreeRowSliderCards";
import InsightShowcaseSection from "@/components/data/services/InsightShowcaseSection";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
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
  serviceName="Novum Professional Services"
  title="Cloud Strategy, Migration, Modernization & DevOps"
  highlightText="Professional Services"
  subtitle="Novum provides expert professional services to help organisations design, build, migrate, and optimise cloud and modern IT environments across Azure, AWS, and Google Cloud."
  bgImage="/assets/img/professional-services/bg-2.png"
  // heroImage="/assets/img/professional-services/professional-hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Services", href: "#service-offerings" },
    { label: "Approach", href: "#approach" },
    { label: "Expertise", href: "#expertise" },
    { label: "Why Us?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>


<div id="about">

      <ImageWithContentSection
  orderControl={2}
  title="Professional Services Designed for Modern Enterprises"
  imageSrc="/assets/img/professional-services/professional-1.png"
  imageAlt="Professional Services by Novum"

  paragraphs={[
    "Novum’s Professional Services team helps organisations modernise technology landscapes and accelerate cloud adoption with confidence.",
    "We combine deep technical expertise with a structured delivery approach to ensure every engagement creates measurable value and long-term operational impact."
  ]}

  bulletPoints={[
    "Modernise legacy systems with scalable cloud solutions",
    "Accelerate secure cloud adoption backed by expert guidance",
    "Enhance performance, security, and operational reliability",
    "Implement architectures designed for long-term business growth"
  ]}
/>

</div>

<div id="service-offerings">
<ServiceFeatureSlider
  sectionId="service-offerings"
  title="Core Service Offerings"
  backgroundType="gradient"
  backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
  primaryColor="#0d2b75"
  items={[
    {
      image: "/assets/img/professional-services/tab-1.webp",
      title: "Cloud Strategy & Adoption",
      list: [
        "Align cloud strategy with business goals",
        "Evaluate readiness & architecture",
        "Use Azure, AWS, GCP best practices"
      ],
    },
    {
      image: "/assets/img/professional-services/tab-2.webp",
      title: "Migration Services",
      list: [
        "App, DB, infrastructure migrations",
        "Refactoring / replatforming",
        "Cutover support"
      ],
    },
    {
      image: "/assets/img/professional-services/tab-3.webp",
      title: "Application & Data Modernisation",
      list: [
        "Re-architect monoliths",
        "Microservices / containers",
        "Data platform modernisation"
      ],
    },
    {
      image: "/assets/img/professional-services/tab-4.webp",
      title: "Security & Compliance",
      list: [
        "Zero Trust",
        "Identity governance",
        "Threat monitoring"
      ],
    },
    {
      image: "/assets/img/professional-services/tab-5.webp",
      title: "DevOps & Automation",
      list: [
        "CI/CD pipelines",
        "IaC (Terraform, Bicep)",
        "Automated testing"
      ],
    }
  ]}
/>
</div>

<div id="approach">
  <ImageWithContentSection
  orderControl={1}
  bgColor="#fff"   // now visible
  title="Our Engagement Approach"
  imageSrc="/assets/img/professional-services/professional-4.png"
  imageAlt="Novum Engagement Approach"

  paragraphs={[
    "Novum follows a collaborative, outcome-focused delivery approach designed to ensure clarity, speed, and measurable impact.",
    "Our engagement method includes the following key stages:"
  ]}

  bulletPoints={[
    "Discovery workshops to understand goals and challenges",
    "Solution design sessions for secure, scalable architectures",
    "Implementation and deployment led by certified experts",
    "Knowledge transfer supported by documentation and training",
    "Continuous improvement recommendations for future growth"
  ]}
/>
</div>

<div id="expertise">
<InsightShowcaseSection
  eyebrow="Industry recognition"
  title="Expertise & Industry Recognition"
  backgroundType="color"
  backgroundColor="#e5f1ff"
  description="Novum brings deep technical capability across all major cloud platforms and modern technologies. Our credentials include:"
  bullets={[
    "Certified cloud experts across Azure, AWS, and Google Cloud",
    "Specialists in DevOps, security, data engineering, application development, and AI",
    "Proven delivery across diverse industries",
    "Recognised by technology partners and enterprise clients for quality and innovation"
  ]}
  buttonLabel="Explore our capabilities"
  buttonLink="/contact"
  imageSrc="/assets/img/professional-services/professional-3.png"
  imageAlt="Novum Industry Expertise and Certifications"
/>
</div>


<div id="whyus">
<AIUseCaseGrid
  title="Why Organisations Choose Novum"
  backgroundType="gradient"
backgroundGradient="linear-gradient(to left top, #ffffff, #eef3ff)"
  columns={3}
  noButton
  items={[
    {
      iconType: "bootstrap",
      icon: "bi-cloud-check",
      title: "Multi-cloud & hybrid-cloud expertise",
      desc: "Deep capability across Azure, AWS, and Google Cloud.",
      link: "#",
    },
    {
      iconType: "bootstrap",
      icon: "bi-diagram-3",
      title: "Proven frameworks",
      desc: "Best-practice architectures and delivery accelerators.",
      link: "#",
    },
    {
      iconType: "bootstrap",
      icon: "bi-shield-lock",
      title: "Governance, security & scalability",
      desc: "Architectures aligned to enterprise security standards.",
      link: "#",
    },
    {
      iconType: "bootstrap",
      icon: "bi-people",
      title: "Collaborative delivery",
      desc: "Transparent communication and shared ownership.",
      link: "#",
    },
    {
      iconType: "bootstrap",
      icon: "bi-layers",
      title: "End-to-end support",
      desc: "Strategy, design, implementation and optimisation.",
      link: "#",
    },
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

export default Professional;