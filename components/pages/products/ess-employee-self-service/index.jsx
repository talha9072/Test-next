"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroOnly from "@/components/data/industries/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import Iconlist from "@/components/data/industries/icon-list";
import AirportStakeholdersSection from "@/components/data/industries/tabs";
import SmartTurnaroundCards from "@/components/data/industries/cards";
import WhySection from "@/components/data/services/WhySection";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const FaceRecognition = () => {
  return (
    <div>
        <HeaderFour />
        
        <HeroOnly
  serviceName="Employee Self-Service (ESS) Solutions"
  title="Empower Employees with Seamless Self-Service Access"
  highlightText="HR Digital Transformation"
  subtitle="Give your workforce control over HR tasks like leave and personal data through a secure platform."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/main-product/ess-hero.webp"
  heroButtons={[
    { label: "Request Demo", href: "/contact" },
  ]}
/>
        
        
        
      <SoftwareSolutionsSection
  title={`Empower Employees with Self-Service HR Tools`}
  paragraphs={[
    "Today’s digital workforce values autonomy, transparency, and instant access. Novum’s Employee Self-Service (ESS) Solutions empower employees to manage their HR, payroll, and personal information through a secure, intuitive portal anytime, anywhere.",
    "By reducing HR workload and allowing employees to handle their own data and requests, ESS enhances efficiency, improves data accuracy, and boosts employee satisfaction. Whether integrated with your existing ERP or deployed as a standalone platform, our ESS solutions are scalable and built for modern hybrid workplaces."
  ]}
  imageSrc="/assets/img/main-product/ess-1.webp"
  altText="Employee Self-Service HR Portal by Novum"
/>

<Iconlist
  id="ess-solutions"
  title="Employee Self-Service Features We Provide"
  imageSrc="/assets/img/main-product/ess-2.webp"
  altText="Employee Self-Service Portal Features"
  features={[
    {
      icon: "bi bi-calendar-check-fill",
      title: "Leave & Attendance Management",
      description:
        "Allow employees to view balances, submit leave requests, and track approvals in real time reducing HR workload and improving transparency.",
    },
    {
      icon: "bi bi-wallet2",
      title: "Payroll Access & Payslips",
      description:
        "Enable secure access to payslips, salary details, and tax breakdowns directly from the ESS dashboard, anytime, on any device.",
    },
    {
      icon: "bi bi-person-lines-fill",
      title: "Personal Data Management",
      description:
        "Empower employees to update contact info, emergency contacts, and bank details securely while maintaining data accuracy and compliance.",
    },
  ]}
/>
        



   <AirportStakeholdersSection
  heading="Our Approach to ESS Deployment"
  subheading="Novum delivers secure, user-friendly Employee Self-Service platforms through a structured, transparent deployment process ensuring smooth rollout, system integrity, and strong user adoption across the organization."
  tabs={[
    {
      label: "Needs Assessment & Planning",
      imageSrc: "/assets/img/main-product/ess-3.webp",
      altText: "ESS Needs Assessment and Planning",
      title: "Understanding Your Workforce and HR Priorities",
      description: `
        We begin by collaborating with HR, IT, and key stakeholders to assess current HR workflows, employee needs, and data sources. 
        Our goal is to define the most valuable self-service functionalities from leave management to payroll visibility ensuring that every feature aligns with your business processes and employee experience goals. 
        The result: a clear roadmap for a secure, efficient ESS platform tailored to your organization.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Design & Integration",
      imageSrc: "/assets/img/main-product/ess-4.webp",
      altText: "ESS Design and Integration",
      title: "Building Seamless, Branded, and Secure Experiences",
      description: `
        We design the ESS interface with your brand identity in mind while ensuring intuitive navigation and accessibility across devices. 
        The platform is securely integrated with your HRMS, payroll, and ERP systems to ensure data consistency, real-time synchronization, and compliance with company policies. 
        Each deployment supports single sign-on, localization, and responsive layouts for maximum adoption.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Testing, Rollout & Training",
      imageSrc: "/assets/img/main-product/ess-5.webp",
      altText: "ESS Testing and Rollout",
      title: "Driving Adoption and Long-Term Platform Success",
      description: `
        Before launch, our team performs comprehensive testing verifying security, data accuracy, and performance across modules. 
        We guide HR teams and employees through training sessions and rollout strategies to ensure confident adoption. 
        Post-launch, Novum provides continuous support, performance monitoring, and feature enhancements to keep your ESS platform evolving with your organization’s needs.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
  ]}
/>





<SmartTurnaroundCards
  heading="An Intelligent ESS Platform for the Modern Workforce"
  subheading="Self-service, automation, and integration empowering employees to manage HR tasks efficiently while improving transparency and reducing administrative workload."
  accentColor="#0D2B75"
  cards={[
    {
      imageSrc: "/assets/img/main-product/ess-6.webp",
      title: "Unified Employee Dashboard",
      description:
        "Provide employees with a centralized platform to access leave balances, payslips, documents, and personal data — all in one secure interface.",
    },
    {
      imageSrc: "/assets/img/main-product/ess-7.webp",
      title: "Automated HR Workflows",
      description:
        "Streamline routine HR operations like leave requests, payroll processing, and document approvals with built-in automation and notifications.",
    },
    {
      imageSrc: "/assets/img/main-product/ess-8.webp",
      title: "Seamless System Integration",
      description:
        "Connect your ESS with HRMS, ERP, and payroll systems to ensure accurate, real-time synchronization of employee information across all platforms.",
    },
    {
      imageSrc: "/assets/img/main-product/ess-9.webp",
      title: "Analytics & Employee Insights",
      description:
        "Leverage data analytics to track usage trends, employee engagement, and HR performance enabling smarter workforce decisions.",
    },
  ]}
/>





  
        
      
<WhySection
  heading="Key Features of Our Employee Self-Service (ESS) Platform"
  subheadingLines={[
    "Empower your workforce with secure, user-friendly self-service capabilities designed to streamline HR operations and enhance employee engagement.",
    "From leave management to payroll access, Novum’s ESS platform brings automation, accessibility, and transparency to every employee interaction.",
  ]}
  imgSrc="/assets/img/main-product/ess-10.webp"
  imgAlt="Employee Self-Service Dashboard Overview"
  cards={[
    {
      iconClass: "bi bi-calendar-check text-novum-blue",
      title: "Leave & Attendance Management",
      text: "Simplify leave requests, approvals, and tracking while ensuring full visibility into employee attendance and schedules.",
    },
    {
      iconClass: "bi bi-wallet-fill text-novum-blue",
      title: "Payroll Access & Payslip Download",
      text: "Allow employees to securely view salary breakdowns, payslips, and tax information anytime, on any device.",
    },
    {
      iconClass: "bi bi-person-gear text-novum-blue",
      title: "Personal Information Management",
      text: "Empower employees to update their own details like contact info, banking data, and emergency contacts with built-in validation.",
    },
    {
      iconClass: "bi bi-file-earmark-text text-novum-blue",
      title: "Document Center & Policy Access",
      text: "Centralize HR policies, contracts, and compliance documents in one searchable, easily accessible employee hub.",
    },
    {
      iconClass: "bi bi-link-45deg text-novum-blue",
      title: "Integration with HRMS & ERP Systems",
      text: "Seamlessly connect the ESS platform with HR, payroll, and ERP systems to maintain consistent and accurate employee data.",
    },
    {
      iconClass: "bi bi-shield-lock text-novum-blue",
      title: "Data Security & Role-Based Access",
      text: "Ensure employee data privacy through secure authentication, audit logs, and compliance with organizational policies.",
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

export default FaceRecognition;