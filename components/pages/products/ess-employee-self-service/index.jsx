"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import ServiceFeatureSlider from "@/components/data/services/ThreeRowSliderCards";
import UseCasesSection from "@/components/data/services/UseCasesSection";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const ESS = () => {
  return (
    <div>
        <HeaderFour />
        
     

<HeroWithRibbon
  serviceName="Employee Self-Service (ESS)"
  title="A modern, unified HR self Service portal"
  highlightText="Dynamics 365"
  subtitle="A secure, automated HR platform giving employees and managers instant access to personal data, leave requests, salary slips, and team insights."
  paragraph="Built on Microsoft Dynamics 365, the ESS platform streamlines HR tasks, reduces manual work, and delivers a smooth digital experience across the organisation."
  bgImage="/assets/img/main-product/ess-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" }
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "Automation", href: "#automation" },
    { label: "Benefits", href: "#benefits" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" }
  ]}
/>
        
        <div id="overview">
  <ImageWithContentSection
    orderControl={2}
    bgColor="#e5f1ff"
    title="AZAL Employee Self-Service (ESS) with Dynamics 365"
    imageSrc="/assets/img/main-product/ess-main.png" // Update with actual image
    imageAlt="Employee Self-Service Overview"

    paragraphs={[
      "The AZAL ESS platform is a modern HR self-service portal seamlessly integrated with Microsoft Dynamics 365 Human Resources. It gives employees and managers real-time, secure access to essential HR tools and personal information.",
      "With automated workflows and unified data syncing across D365, the portal improves transparency, reduces manual administrative work, and enhances productivity across the organisation."
    ]}

    bulletPoints={[
      "Real-time employee and manager access to HR data",
      "Native integration with Microsoft Dynamics 365 HR",
      "Automated workflows for leave, approvals, and updates",
      "Improved accuracy through unified data synchronisation"
    ]}
  />
</div>

<div id="features">
  <ServiceFeatureSlider
    sectionId="ess-features"
    title="Key Features of AZAL Employee Self-Service"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
    primaryColor="#0d2b75"
    items={[
      /* ------------------------------------------
          1. SINGLE SIGN-ON
      ------------------------------------------- */
      {
        image: "/assets/img/main-product/ess-1.webp",
        title: "Single Sign-On Login",
        list: [
          "Employees sign in using Microsoft D365 credentials",
          "Centralized authentication improves security",
          "Frictionless access from any device"
        ]
      },

      /* ------------------------------------------
          2. EMPLOYEE PROFILE MANAGEMENT
      ------------------------------------------- */
      {
        image: "/assets/img/main-product/ess-2.webp",
        title: "Employee Information Management",
        list: [
          "View and update personal details and contact info",
          "Synchronised with Dynamics 365 HR in real time",
          "Ensures accurate, unified employee records"
        ]
      },

      /* ------------------------------------------
          3. LEAVE MANAGEMENT
      ------------------------------------------- */
      {
        image: "/assets/img/main-product/ess-3.webp",
        title: "Leave Management",
        list: [
          "Dashboard showing available, used, and expiring leave",
          "Clean leave request form with attachments",
          "Auto-validation prevents policy violations",
          "Track request status with full audit history"
        ]
      },

      /* ------------------------------------------
          4. SALARY SLIP ACCESS
      ------------------------------------------- */
      {
        image: "/assets/img/main-product/ess-4.webp",
        title: "Salary Slip Access",
        list: [
          "Secure monthly salary slip download",
          "Detailed breakdown of earnings & deductions",
          "Access previous months for HR or visa needs",
          "Encrypted storage ensures confidentiality"
        ]
      },

      /* ------------------------------------------
          5. MANAGER DASHBOARD
      ------------------------------------------- */
      {
        image: "/assets/img/main-product/ess-5.webp",
        title: "Manager Dashboard",
        list: [
          "Team overview with roles & experience",
          "Approve or reject leave instantly",
          "Real-time visibility into team availability",
          "Attach notes or documents with decisions"
        ]
      }
    ]}
  />
</div>


<div id="benefits">
  <ImageWithContentSection
    orderControl={1}
    bgColor="#fff"
    title="Organisational Benefits of AZAL ESS"
    imageSrc="/assets/img/main-product/ess-main2.png"  // update image path
    imageAlt="ESS Benefits Overview"

    paragraphs={[
      "The AZAL Employee Self-Service platform strengthens HR efficiency and enhances employee experience through a fully automated and integrated self-service environment.",
      "By synchronising directly with Microsoft Dynamics 365, the platform ensures accurate, reliable workforce insights across the organisation."
    ]}

    bulletPoints={[
      "Enhanced employee engagement through transparency and self-service",
      "Reduced HR workload by eliminating manual administrative tasks",
      "Improved data accuracy with real-time D365 synchronisation",
      "Better decision-making with insights into workforce status and availability"
    ]}
  />
</div>


<div id="use-cases">
  <UseCasesSection
    sectionId="ess-use-cases"
    backgroundStyle="#e5f1ff"
    primaryColor="#0d2b75"
    subtitle="USE CASES"
    title="How Employees and Managers Use AZAL ESS"
    intro="The AZAL Employee Self-Service platform empowers staff and managers with tools that streamline HR tasks, improve transparency, and enhance workforce productivity."
    
    tabs={[
      {
        label: "ESS Use Cases",
        items: [
          {
            label: "Employees",
            title: "Employee Self-Service Actions",
            desc: "Employees can manage their core HR needs independently through a secure, user-friendly portal.",
            image: "/assets/img/main-product/ess-tab1.png", // update image
            list: [
              "Submit and track leave requests",
              "View and download monthly pay slips",
              "Update personal and contact information"
            ]
          },
          {
            label: "Managers",
            title: "Manager Oversight & Approvals",
            desc: "Managers gain real-time visibility into their team and can take action instantly from their dashboard.",
            image: "/assets/img/main-product/ess-tab2.png", // update image
            list: [
              "Monitor team availability and leave balances",
              "Approve or reject leave requests instantly",
              "Maintain departmental productivity through better visibility"
            ]
          }
        ]
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

       

       <ContactWidget />

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

export default ESS;