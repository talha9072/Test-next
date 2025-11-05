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



const OCR = () => {
  return (
    <div>
        <HeaderFour />
        <HeroOnly
  serviceName="OCR Certification Directory"
  title="Digitize, Organize, and Secure Your Records"
  highlightText="Intelligent Document Processing"
  subtitle="Transform paper archives into searchable, compliant digital assets with AI-powered OCR technology."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/main-product/ocr-hero.webp"
  heroButtons={[
    { label: "Schedule Demo", href: "/contact" },
  ]}
/>
        
        
        
       <SoftwareSolutionsSection
  title={`Revolutionize Document Management with OCR`}
  paragraphs={[
    "Novum’s OCR Certification Directory transforms paper-based archives, certificates, and records into structured, searchable digital assets. Using advanced Optical Character Recognition (OCR) and AI-driven text extraction, it enables organizations to eliminate manual data entry, reduce errors, and achieve instant information retrieval.",
    "Built for enterprises, government departments, and certification authorities, the platform automates document scanning, indexing, and compliance management providing a secure, centralized system for efficient record keeping and audit readiness."
  ]}
  imageSrc="/assets/img/main-product/ocr-1.webp"
  altText="AI-Powered OCR Document Management System"
/>

<Iconlist
  id="ocr-certification"
  title="Digitize, Classify, and Retrieve with OCR"
  imageSrc="/assets/img/main-product/ocr-2.webp"
  altText="OCR Certification Directory Features"
  features={[
    {
      icon: "bi bi-file-earmark-text-fill",
      title: "AI-Powered Text Extraction",
      description: "Convert scanned or handwritten documents into accurate, editable, and searchable digital text instantly.",
    },
    {
      icon: "bi bi-folder2-open",
      title: "Automated Categorization",
      description: "Organize certificates and records by type, metadata, or department with intelligent tagging and indexing.",
    },
    {
      icon: "bi bi-search",
      title: "Instant Document Retrieval",
      description: "Find records in seconds using keyword or field-based search — no manual scrolling or sorting required.",
    },
  ]}
/>
        



   <AirportStakeholdersSection
  heading="Built for Every Document-Intensive Industry"
  subheading="Discover how Novum’s OCR Certification Directory empowers organizations across education, government, and enterprise sectors to digitize, manage, and secure their critical records with AI precision."
  tabs={[
    {
      label: "Education & Certification Boards",
      imageSrc: "/assets/img/main-product/ocr-3.webp",
      altText: "Education & Certification Boards",
      title: "Digitize Academic & Training Certificates at Scale",
      description: `
        Transform stacks of student records, transcripts, and certificates into searchable, verifiable digital archives. 
        Novum’s OCR engine captures data from multiple formats printed, stamped, or handwritten — ensuring accuracy and consistency across all scanned materials. 
        Enable institutions to instantly retrieve student data, validate authenticity, and issue replacements without manual effort. 
        With built-in metadata tagging and audit-ready traceability, compliance and accreditation workflows become faster and more transparent.
        The result: reduced paper dependency, improved service speed, and modernized certification management.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Government & Public Sector",
      imageSrc: "/assets/img/main-product/ocr-4.webp",
      altText: "Government & Public Sector",
      title: "AI-Powered Archiving for Public Institutions",
      description: `
        Empower ministries, agencies, and municipal bodies to digitize decades of paper archives with intelligent OCR classification. 
        The system reads multilingual and legacy documents, indexing them by department, year, or subject for instant retrieval. 
        Ensure compliance with record retention laws and enhance transparency with structured, role-based access. 
        Real-time analytics and auto-tagging simplify document governance while reducing physical storage and maintenance costs.
        The result: improved accessibility, accountability, and faster citizen service delivery.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Enterprises & Corporations",
      imageSrc: "/assets/img/main-product/ocr-5.webp",
      altText: "Enterprises & Corporations",
      title: "Automate Document Workflows Across Departments",
      description: `
        Replace manual document handling with AI-driven scanning and indexing that keeps contracts, invoices, and reports secure and searchable. 
        Integrated with ERP, CRM, and HR systems, the platform ensures that every document from purchase orders to compliance certificates is traceable and version-controlled. 
        Enable global teams to collaborate through a centralized document repository with real-time search and exportable audit logs.
        The result: faster workflows, lower administrative overhead, and improved information accuracy across business operations.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
  ]}
/>




<SmartTurnaroundCards
  heading="An Intelligent OCR Platform for Smarter Document Management"
  subheading="AI, automation, and analytics working together to digitize, classify, and secure large-scale document archives with precision and speed."
  accentColor="#0D2B75"
  cards={[
    {
      imageSrc: "/assets/img/main-product/ocr-6.webp",
      title: "Automated Document Scanning",
      description: "Capture and convert physical documents into high-quality digital images with intelligent preprocessing for clarity and accuracy.",
    },
    {
      imageSrc: "/assets/img/main-product/ocr-7.webp",
      title: "AI-Powered Text Extraction",
      description: "Leverage advanced OCR algorithms to recognize printed or handwritten text, symbols, and layouts with exceptional precision.",
    },
    {
      imageSrc: "/assets/img/main-product/ocr-8.webp",
      title: "Metadata Tagging & Classification",
      description: "Automatically identify key fields such as names, dates, and certificate numbers for structured organization and instant retrieval.",
    },
    {
      imageSrc: "/assets/img/main-product/ocr-9.webp",
      title: "Centralized Archiving & Reports",
      description: "Store and manage digitized records securely with exportable reports, version control, and compliance-ready audit logs.",
    },
  ]}
/>




  
        
      
<WhySection
  heading="Key Features of Our AI-Powered OCR Certification Directory"
  subheadingLines={[
    "Unlock faster, more reliable document processing through advanced Optical Character Recognition powered by AI and automation.",
    "From bulk scanning to intelligent classification and compliance-ready archiving, Novum’s OCR system centralizes document management for accuracy, traceability, and security at scale."
  ]}
  imgSrc="/assets/img/main-product/ocr-10.webp"
  imgAlt="OCR Certification Directory Dashboard"
  cards={[
    {
      iconClass: "bi bi-file-earmark-text-fill text-novum-blue",
      title: "AI-Powered Text Recognition",
      text: "Extract printed or handwritten text from scanned files with exceptional accuracy using deep learning–based OCR models.",
    },
    {
      iconClass: "bi bi-tags text-novum-blue",
      title: "Smart Classification & Tagging",
      text: "Automatically categorize and label documents by type, department, or metadata fields for faster retrieval.",
    },
    {
      iconClass: "bi bi-search text-novum-blue",
      title: "Advanced Search & Filtering",
      text: "Locate certificates or records instantly using keyword, metadata, or field-based search queries.",
    },
    {
      iconClass: "bi bi-folder2-open text-novum-blue",
      title: "Secure Archiving & Storage",
      text: "Maintain a centralized, encrypted repository for long-term document preservation and compliance management.",
    },
    {
      iconClass: "bi bi-link-45deg text-novum-blue",
      title: "Integration with Enterprise Systems",
      text: "Connect seamlessly with ERP, HR, or database systems for synchronized document access and workflow automation.",
    },
    {
      iconClass: "bi bi-shield-check text-novum-blue",
      title: "Compliance & Audit Readiness",
      text: "Generate audit logs, track revisions, and ensure every document action is traceable and regulation-compliant.",
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

export default OCR;