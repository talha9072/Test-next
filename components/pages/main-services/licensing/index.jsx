"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import OverviewComponent from "@/components/data/services/OverviewComponent";
import BulletPoints from "@/components/data/services/bulletpoints";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import UseCasesSection from "@/components/data/services/UseCasesSection";
import WhyChooseSection from "@/components/data/services/whychooseus";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Licensing = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Microsoft Licensing"
  title="Smarter Microsoft licensing for your organisation"
  highlightText="Licensing"
  subtitle="We remove complexity by guiding you through licensing choices, cost optimisation, compliance, and long term management"
  bgImage="/assets/img/licensing/licensing-bg.png"
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
 
<div id="about">
  <OverviewComponent
    title="What We Do"
    primaryColor="#0d2b75"
    backgroundType="color"
    backgroundColor="#e5f1ff"
    
    paragraphs={[
      "Organisations often find Microsoft licensing confusing due to multiple product families, contract types, and usage scenarios. Novum provides end-to-end licensing advisory services to help you evaluate options, forecast usage, standardise procurement, and manage renewals with complete transparency.",
      "Our licensing experts support enterprises, SMBs, government institutions, and educational organisations through every step of the licensing journey—ensuring clarity, optimisation, and cost efficiency."
    ]}
    
    listItems={[
      "Full clarity across Microsoft product families and licensing models",
      "Guidance on selecting the most cost-effective contract structure",
      "Forecasting and optimisation to prevent over-licensing",
      "Standardised procurement processes for predictable budgeting",
      "Renewal management with complete visibility and control"
    ]}
  />
</div>

<div id="licensing-importance">
  <BulletPoints
    sectionId="licensing-importance"
    title={<>Why Microsoft Licensing Matters</>}
    paragraphs={[
      "Microsoft licensing directly impacts cost, security, scalability, and compliance across your entire organisation. Choosing the right agreement ensures predictable budgeting, secure operations, and efficient allocation of tools to your workforce.",
      "Novum brings deep licensing expertise to help organisations make informed, strategic decisions that align technology usage with business goals."
    ]}
    bulletPoints={[
      "Optimise technology spend and eliminate unnecessary costs",
      "Maintain compliance with Microsoft contractual requirements",
      "Equip employees with the right tools and access levels",
      "Scale cloud and on-premises environments more efficiently",
      "Improve visibility and management of your digital estate"
    ]}
    imageSrc="/assets/img/licensing/microsoft-1.webp"
    altText="Microsoft Licensing Advisory and Optimization"
    sectionClass="position-relative overflow-hidden py-7 pb-0"
  />
</div>

<div id="services">
    <AIUseCaseGrid
      title="Our Microsoft Licensing Services"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to left top, #e5f1ff, #e5f1ff)"
      columns={3}
      items={[
        {
          iconType: "bootstrap",
          icon: "bi-journal-check",
          title: "Microsoft Licensing Advisory",
          desc: "We assess your current licensing footprint, identify gaps, and recommend the most efficient, cost effective strategy based on your business and technical needs.",
          button: {
            label: "Start Trial",
            link: "https://www.microsoft.com/en-us/licensing"
          }
        },
        {
          iconType: "bootstrap",
          icon: "bi-cash-coin",
          title: "License Optimisation & Cost Reduction",
          desc: "Novum analyses real usage patterns to eliminate overspend, retire unused licenses, and right size entitlements for measurable cost savings.",
          button: {
            label: "Start Trial",
            link: "https://www.microsoft.com/en-us/licensing"
          }
        },
        {
          iconType: "bootstrap",
          icon: "bi-file-earmark-text",
          title: "Agreement Selection Support",
          desc: "Whether CSP, Open Value, MCA, or Enterprise Agreement, we guide you in selecting the contract that best aligns with your organisation’s size, budget, and roadmap.",
          button: {
            label: "Start Trial",
            link: "https://www.microsoft.com/en-us/licensing"
          }
        },
        {
          iconType: "bootstrap",
          icon: "bi-cloud-arrow-up",
          title: "Cloud Licensing Guidance",
          desc: "Expert support covering Azure, Microsoft 365, Dynamics 365, Power Platform, and hybrid cloud licensing ensuring correct assignments and scalable architecture.",
          button: {
            label: "Start Trial",
            link: "https://www.microsoft.com/en-us/licensing"
          }
        },
        {
          iconType: "bootstrap",
          icon: "bi-shield-lock",
          title: "Compliance & Risk Management",
          desc: "We help you stay compliant with Microsoft licensing requirements, reducing audit risks and ensuring governance across your entire digital estate.",
          button: {
            label: "Start Trial",
            link: "https://www.microsoft.com/en-us/licensing"
          }
        },
        {
          iconType: "bootstrap",
          icon: "bi-bag-check",
          title: "License Procurement & Renewals",
          desc: "Novum streamlines purchasing, renewals, and multi-department consolidation ensuring transparent, predictable licensing management year-round.",
          button: {
            label: "Start Trial",
            link: "https://www.microsoft.com/en-us/licensing"
          }
        }
      ]}
    />

</div>


<div id="licensing-tabs">
  <UseCasesSection
    sectionId="licensing-tabs"
    backgroundStyle="#fff"
    primaryColor="#0d2b75"
    subtitle="MICROSOFT LICENSING"
    title="Cloud, Windows, and Licensing Information"
    intro="Explore Microsoft cloud applications, Windows solutions, and essential licensing resources all in one place."
    tabs={[
      // ----------------------------------
      // TAB 1 — CLOUD APPLICATIONS
      // ----------------------------------
      {
        label: "Cloud Applications",
        items: [
          {
            label: "Cloud Product",
            title: "Azure",
            desc: "Comprehensive cloud platform for compute, data, AI, security, and scalable hybrid workloads.",
            image: "/assets/img/licensing/azure-tab.png",
          },
          {
            label: "Cloud Product",
            title: "Dynamics 365",
            desc: "Unified CRM and ERP suite connecting operations, service, finance, and sales for intelligent business processes.",
            image: "/assets/img/licensing/dynamic365-tab.png",
          },
          {
            label: "Cloud Product",
            title: "Microsoft 365",
            desc: "Modern workplace productivity tools with Office apps, device management, collaboration, and advanced security.",
            image: "/assets/img/licensing/365-tab.png",
          },
          {
            label: "Cloud Product",
            title: "Office & Office 365",
            desc: "Desktop and cloud productivity apps enabling consistent collaboration and business continuity.",
            image: "/assets/img/licensing/365-tab.png",
          },
          {
            label: "Cloud Product",
            title: "Power Platform",
            desc: "Low-code platform for automation, app development, reporting, and AI-driven workflows.",
            image: "/assets/img/licensing/power-platform-tab.png",
          },
          {
            label: "Cloud Product",
            title: "SQL Server",
            desc: "Enterprise-grade hybrid database engine for mission-critical applications and real-time analytics.",
            image: "/assets/img/licensing/sql-tab.png",
          },
        ],
      },

      // ----------------------------------
      // TAB 2 — WINDOWS SOLUTIONS
      // ----------------------------------
      {
        label: "Windows Solutions",
        items: [
          {
            label: "Windows Product",
            title: "Windows 11",
            desc: "Microsoft’s most secure and advanced operating system designed for productivity and protection.",
            image: "/assets/img/licensing/window11-tab.png",
          },
          {
            label: "Windows Product",
            title: "Windows 365",
            desc: "A cloud PC experience that streams personalised Windows desktops to any device securely.",
            image: "/assets/img/licensing/365-tab.png",
          },
          {
            label: "Windows Product",
            title: "Windows Server",
            desc: "Modern server platform for hybrid workloads with built-in Azure integrations and advanced security.",
            image: "/assets/img/licensing/windowserver-tab.png",
          },
          {
            label: "Windows Product",
            title: "System Center",
            desc: "A complete datacenter management suite for hybrid infrastructure, workloads, and applications.",
            image: "/assets/img/licensing/systemcenter-tab.png",
          },
        ],
      },

      // ----------------------------------
      // TAB 3 — LICENSING INFORMATION
      // ----------------------------------
      {
        label: "Licensing Information",
        items: [
          {
            label: "Resource",
            title: "Licensing Briefs",
            desc: "Clear, simplified explanations of Microsoft licensing scenarios, product entitlements, and new technologies.",
            image: "/assets/img/licensing/brief-tab.png",
          },
          {
            label: "Resource",
            title: "Licensing Terms",
            desc: "Official terms and conditions governing Microsoft product rights and Online Services programs.",
            image: "/assets/img/licensing/terms-tab.png",
          },
          
        ],
      },
    ]}
  />
</div>

<WhyChooseSection
  sectionId="whyus-licensing"
  title="Why Organisations Choose Novum for Microsoft Licensing"
  items={[
    {
      icon: "bi-patch-check",
      title: "Certified Microsoft Licensing Experts",
      desc: "Our specialists bring extensive real-world experience across Microsoft licensing programs, contracts, and entitlement structures."
    },
    {
      icon: "bi-layers",
      title: "Deep Knowledge Across All Licensing Models",
      desc: "We understand Microsoft 365, Azure, Dynamics 365, Power Platform, and hybrid licensing scenarios for accurate, strategic guidance."
    },
    {
      icon: "bi-cash-coin",
      title: "Cost Optimisation Strategies",
      desc: "We help organisations eliminate overspend, reduce unused licenses, and standardise purchasing for long-term savings."
    },
    {
      icon: "bi-shield-lock",
      title: "Compliance & Audit Assurance",
      desc: "Our structured documentation and entitlement mapping reduce compliance risks and prepare you for Microsoft audits with confidence."
    },
    {
      icon: "bi-diagram-3",
      title: "End-to-End Licensing Support",
      desc: "From assessment and agreement selection to procurement, renewals, and optimisation — Novum manages your entire licensing lifecycle."
    },
    {
      icon: "bi-people",
      title: "Tailored for All Organisation Types",
      desc: "We support enterprises, SMBs, government, and educational institutions with licensing strategies customised to their needs."
    }
  ]}
/>

<div id="getstarted">
  <AIUseCaseGrid
    title="Take the next step"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to left top, #ffffff, #eef3ff)"
    columns={3}
    items={[
      {
        iconType: "bootstrap",
        icon: "bi-people",
        title: "Buy from a partner",
        desc: "The Cloud Solution Provider (CSP) program is ideal if you're looking for a fully partner-managed licensing solution tailored to your organisational needs.",
        button: {
          label: "Find a partner",
          link: "https://www.microsoft.com/solution-providers/home"
        }
      },
      {
        iconType: "bootstrap",
        icon: "bi-briefcase",
        title: "Buy from a Microsoft seller",
        desc: "The Microsoft Customer Agreement (MCA-E) is designed to support unique enterprise licensing requirements requiring high-level engagement.",
        button: {
          label: "Learn more",
          link: "https://www.microsoft.com/en-us/Licensing/how-to-buy/microsoft-customer-agreement"
        }
      },
      {
        iconType: "bootstrap",
        icon: "bi-cart-check",
        title: "Buy from Microsoft online",
        desc: "Ideal if you want to choose and purchase what you need directly. A fast and convenient way to manage cloud services online.",
        button: {
          label: "Open portals",
          link: "https://admin.microsoft.com/adminportal/home#/subscriptions/vlnew"
        }
      }
    ]}
  />
</div>


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

export default Licensing;