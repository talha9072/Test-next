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
  serviceName="Consulting & Advisory Services"
  title="Cloud Strategy, Modernisation & Digital Transformation"
  highlightText="Consulting and Advisory"
  subtitle="Novum delivers end-to-end cloud consulting and advisory services, including cloud strategy, cost optimisation, security, governance, data modernisation, and innovation planning."
  bgImage="/assets/img/consulting-advisory/bg-consulting.png"
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
  title="Strategic Guidance for Cloud & Digital Transformation"
  orderControl={2}
  imageSrc="/assets/img/consulting-advisory/consulting-main1.webp"
  imageAlt="Professional Services by Novum"

  paragraphs={[
    "Novum provides consulting and advisory services that help organisations move from strategy to execution with clarity and confidence.",
    "Our experts guide you through assessment, planning, architecture design, and implementation to ensure every initiative aligns with business goals.",
    "We craft cloud strategies that drive innovation, efficiency, and scalability empowering your organisation to modernise and grow."
  ]}

  bulletPoints={[
    "End-to-end strategy and advisory support.",
    "Cloud and digital planning aligned to business goals.",
    "Architecture design for scalable, secure solutions.",
    "Implementation guidance from certified experts."
  ]}

  bgColor="#e5f1ff"
  textColor="#000000"
/>
</div>

     
<div id="service-offerings">
    <ServiceFeatureSlider
      sectionId="service-offerings"
      title="Core Areas of Engagement"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
      primaryColor="#0d2b75"
      items={[
        {
          image: "/assets/img/consulting-advisory/tab-1.webp",
          title: "Cloud Migration & Adoption",
          list: [
            "Assess current-state architecture & readiness",
            "Identify risks, dependencies & constraints",
            "Develop phased migration plans",
            "Evaluate cloud cost-benefit scenarios",
            "Align cloud adoption with business objectives"
          ],
        },

        {
          image: "/assets/img/consulting-advisory/tab-2.webp",
          title: "Application Modernisation",
          list: [
            "Define modernisation KPIs & objectives",
            "Identify high-impact workloads",
            "Refactor, replatform, & containerise apps",
            "Implement microservices & API strategies",
            "Build future-ready application roadmaps"
          ],
        },

        {
          image: "/assets/img/consulting-advisory/tab-3.webp",
          title: "Cost Optimisation & FinOps Advisory",
          list: [
            "Cloud spend assessments & benchmarking",
            "Waste analysis & rightsizing actions",
            "Financial governance & cost ownership",
            "FinOps maturity planning",
            "Architecture improvements to reduce cost"
          ],
        },

        {
          image: "/assets/img/consulting-advisory/tab-4.webp",
          title: "Innovation & Growth Enablement",
          list: [
            "Identify new cloud-driven revenue opportunities",
            "Modernise IT operations & processes",
            "Leverage AI, analytics & automation",
            "Align cloud capabilities to business growth",
            "Accelerate time-to-value through innovation"
          ],
        },

        {
          image: "/assets/img/consulting-advisory/tab-5.webp",
          title: "Mergers & Acquisitions Integration",
          list: [
            "Harmonise tools, processes & cloud platforms",
            "Unify governance, identity & security models",
            "Reduce complexity during transitions",
            "Enable operational continuity",
            "Support post-merger integration execution"
          ],
        },

        {
          image: "/assets/img/consulting-advisory/tab-6.webp",
          title: "Cloud Security Advisory",
          list: [
            "Security posture assessments",
            "Identify vulnerabilities & map risks",
            "Zero Trust architecture planning",
            "Secure landing zone design",
            "Compliance alignment: ISO, GDPR, SOC, HIPAA"
          ],
        },

        {
          image: "/assets/img/consulting-advisory/tab-7.webp",
          title: "Governance Frameworks & Operating Models",
          list: [
            "Define cloud governance structures",
            "Identity, access & compliance policies",
            "Future-state operating model design",
            "Process alignment with industry standards",
            "Continuous governance improvement"
          ],
        },

        {
          image: "/assets/img/consulting-advisory/tab-8.webp",
          title: "Data Modernisation Roadmaps",
          list: [
            "Define data & analytics business goals",
            "Assess data platforms & estate architecture",
            "Design cloud-native data strategies",
            "Plan modernisation: Fabric, Databricks, DataLake",
            "Enable AI & advanced analytics readiness"
          ],
        }
      ]}
    />
</div>


<div id="approach">
    <ImageWithContentSection
  title="Our Engagement Approach"
  orderControl={1}
  imageSrc="/assets/img/consulting-advisory/consulting-main2.webp"
  imageAlt="Novum Engagement Approach"

  paragraphs={[
    "Novum delivers a complete service continuum that supports organisations at every stage of their cloud and digital transformation journey. Our goal is to provide clarity, reduce complexity, and ensure that each initiative creates measurable business value.",
    "We combine strategic planning, hands-on implementation, and long-term operational support to help organisations modernise confidently and sustainably."
  ]}

  bulletPoints={[
    "Consulting & Advisory Strategic assessments, roadmap development, and architecture guidance.",
    "Professional Services Implementation, modernisation, integration, and solution delivery.",
    "Managed Services Continuous optimisation, monitoring, operations support, and security management."
  ]}

  paragraphsExtra={[
    "By offering a unified end-to-end model, Novum enables organisations to work with a single trusted partner—from vision and strategy to execution, adoption, and ongoing improvement."
  ]}

  bgColor="#ffffff"
  textColor="#000000"
/>
</div>


<div id="expertise">
    <InsightShowcaseSection
      eyebrow="Credentials & Recognition"
      title="Our Expertise & Industry Recognition"
      backgroundType="color"
      backgroundColor="#e5f1ff"
      description="Novum brings world-class expertise backed by certified professionals, proven delivery capability, and extensive enterprise experience across cloud and modern engineering practices."
      bullets={[
        "Certified experts across Azure, AWS, and Google Cloud",
        "Deep specialisation in data, security, DevOps, and cloud architecture",
        "Recognised by enterprise clients for high-quality delivery and innovation",
      ]}
      buttonLabel="Explore our certifications"
      buttonLink="/contact"
      imageSrc="/assets/img/consulting-advisory/consulting-main3.webp"
      imageAlt="Novum Industry Credentials and Recognition"
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
          icon: "bi-layers",
          title: "End-to-end Cloud & Digital Guidance",
          desc: "Support across strategy, design, migration, modernisation, and ongoing optimisation.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-diagram-3",
          title: "Proven Frameworks",
          desc: "Industry-aligned delivery models tailored to measurable business outcomes.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-cloud-check",
          title: "Strong Multi-cloud Expertise",
          desc: "Certified capability across Azure, AWS, and Google Cloud environments.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-shield-lock",
          title: "Security-first Approach",
          desc: "Architectures, processes, and operations aligned with enterprise security standards.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-people",
          title: "Transparent Delivery",
          desc: "Clear communication, shared ownership, and outcome-driven execution.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-gear",
          title: "Modern Engineering Practices",
          desc: "Adoption of DevOps, automation, IaC, and continuous improvement principles.",
          link: "#",
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

export default Professional;