"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import ServiceFeatureSlider from "@/components/data/services/ThreeRowSliderCards";
import ServiceFeatureCards from "@/components/data/services/ServiceFeatureCards";
import PricingCardsSection from "@/components/data/services/PricingCardsSection";
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import ServiceSplitPanel from "@/components/data/services/ServiceSplitPanel";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const OCR = () => {
  return (
    <div>
        <HeaderFour />
        <HeroWithRibbon
  serviceName="OCR Certification Directory"
  title="AI Powered Document Digitization & Compliance"
  highlightText="OCR"
  subtitle="Enterprise grade OCR and AI document processing for certification and regulatory archives."
  paragraph="Convert paper based certificates and records into secure, searchable digital data using intelligent OCR, automated classification, and compliance ready workflows."
  bgImage="/assets/img/main-product/ocr-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" }
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Capabilities", href: "#core-capabilities" },
    { label: "Use Cases", href: "#industry-applications" },
    { label: "Applications", href: "#business-applications" },
    { label: "Benefits", href: "#key-benefits" },
    { label: "Why Novum?", href: "#business" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" }
  ]}
/>
       
<div id="overview">
  <ImageWithContentSection
    orderControl={2}
    bgColor="#e5f1ff"
    title="Enterprise OCR & Certification Digitization"
    imageSrc="/assets/img/main-product/ocr-main.png" // update path
    imageAlt="OCR Certification Directory Overview"

    paragraphs={[
      "OCR Certification Directory is Novum’s enterprise solution for digitizing, processing, and managing large volumes of physical and scanned certification documents.",
      "Using advanced OCR, AI document analysis, and intelligent indexing, the platform converts unstructured paper archives into secure, searchable, and structured digital assets as part of Novum’s Digital Transformation Suite."
    ]}

    bulletPoints={[
      "AI powered OCR for scanned and physical documents",
      "Intelligent classification and metadata extraction",
      "Fully searchable and structured digital repository",
      "Compliance ready and enterprise scale by design"
    ]}
  />
</div>        
        
<div id="core-capabilities">
  <ServiceFeatureSlider
    sectionId="core-capabilities"
    title="Core Capabilities"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #fff, #fff)"
    primaryColor="#0d2b75"
    items={[
      {
        image: "/assets/img/main-product/ocr-1.webp",
        title: "Intelligent Document Digitization",
        list: [
          "AI powered OCR for printed and handwritten documents",
          "Supports multiple languages, fonts, stamps, and complex layouts",
          "Preserves original structure, formatting, tables, and visuals"
        ]
      },
      {
        image: "/assets/img/main-product/ocr-2.webp",
        title: "Automated Classification & Indexing",
        list: [
          "Automatic document type identification and categorization",
          "Metadata extraction including dates, IDs, issuers, and validity",
          "Intelligent keyword tagging for instant retrieval"
        ]
      },
      {
        image: "/assets/img/main-product/ocr-3.webp",
        title: "Centralized Enterprise Repository",
        list: [
          "Secure, scalable storage for all digitized documents",
          "Role based access control and multi-level permissions",
          "Version control with compliance ready archival standards"
        ]
      },
      {
        image: "/assets/img/main-product/ocr-4.webp",
        title: "Advanced Search & Retrieval",
        list: [
          "Full-text search across all scanned and digitized records",
          "Filter by document type, date, category, or custom tags",
          "High-speed indexing for large scale archives"
        ]
      },
      {
        image: "/assets/img/main-product/ocr-5.webp",
        title: "Workflow & Compliance Automation",
        list: [
          "Automated approval, verification, and review workflows",
          "Alerts for expiring certificates and compliance gaps",
          "Complete audit trails with user and timestamp tracking"
        ]
      },
      {
        image: "/assets/img/main-product/ocr-6.webp",
        title: "Cloud & On-Premise Deployment",
        list: [
          "Cloud, hybrid, or on-premise deployment options",
          "Enterprise integrations with ERP, D365, and Azure services",
          "Secure access across global teams and departments"
        ]
      }
    ]}
  />
</div>  

<div id="industry-applications">
  <ServiceFeatureCards
    title="Industries & Use Cases"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #e5f1ff, #e5f1ff)"
    primaryColor="#0d2b75"
    noButton
    items={[
      {
        iconType: "bootstrap",
        icon: "bi-building-gear",
        title: "Government Agencies",
        list: [
          "Digitizes permits, licenses, and regulatory documents",
          "Converts public records and administrative forms into searchable data",
          "Supports secure, audit ready document management"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-buildings",
        title: "Large Enterprises",
        list: [
          "Centralizes HR files, contracts, and financial records",
          "Improves document accessibility across departments",
          "Strengthens compliance and data governance"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-gear-wide-connected",
        title: "Industrial Organizations",
        list: [
          "Digitizes maintenance logs and inspection reports",
          "Manages safety certificates and quality documentation",
          "Ensures long term traceability and compliance"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-clipboard-check",
        title: "Compliance & Regulatory Teams",
        list: [
          "Manages ISO certifications and regulatory submissions",
          "Supports audits with structured, searchable records",
          "Tracks validity periods and compliance requirements"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-heart-pulse",
        title: "Healthcare & Education",
        list: [
          "Digitizes medical files, student records, and transcripts",
          "Secures sensitive data with role based access control",
          "Improves retrieval speed and record accuracy"
        ]
      }
    ]}
  />
</div>


<div id="business-applications">
  <PricingCardsSection
    sectionId="business-applications"
    subtitle="BUSINESS APPLICATIONS"
    title="Business Applications"
    intro="Organizations use Novum’s OCR Certification Directory to digitize critical records, improve compliance visibility, and enable faster, audit-ready access to enterprise documentation."
    primaryColor="#0d2b75"
    cards={[
      {
        title: "Regulatory Certificates & Licenses",
        desc: "Ensures continuous compliance and eliminates risks linked to expired or missing certifications.",
        list: [
          "Centralized tracking of certificates and licenses",
          "Automated alerts for expiry and renewals",
          "Audit-ready documentation at all times",
          "Improved regulatory compliance oversight"
        ]
      },
      {
        title: "Government Documentation Management",
        desc: "Enables secure archiving and rapid retrieval of critical government records.",
        list: [
          "Digitization of permits, legal notices, and records",
          "Structured, searchable document repositories",
          "Secure access controls and audit trails",
          "Long-term archival compliance"
        ]
      },
      {
        title: "Invoice & Contract Archiving",
        desc: "Supports financial audits with fully searchable and structured records.",
        list: [
          "OCR-based digitization of invoices and contracts",
          "Metadata extraction for faster verification",
          "Improved financial transparency",
          "Reduced audit preparation time"
        ]
      },
      {
        title: "Operational Record Digitization",
        desc: "Automates storage and retrieval of operational and safety documentation.",
        list: [
          "Digitization of logs, manuals, and checklists",
          "Centralized access to operational records",
          "Improved traceability and accountability",
          "Supports safety and quality compliance"
        ]
      }
    ]}
  />
</div>


<InnovationsRoadmapSection
  sectionId="key-benefits"
  sectionClass="py-5"
  backgroundGradient="linear-gradient(to right bottom, #e5f1ff, #e5f1ff)"
  subtitle="KEY BENEFITS"
  title="Operational & Compliance Benefits"
  intro="Novum’s OCR Certification Directory delivers measurable efficiency, security, and compliance advantages for organizations managing high volumes of critical documentation."
  primaryColor="#0d2b75"
  items={[
    {
      icon: "bi-speedometer2",
      title: "Efficiency & Productivity",
      desc: "Eliminates manual filing, scanning, and document searching, significantly reducing administrative effort and operational delays."
    },
    {
      icon: "bi-shield-lock",
      title: "Secure Storage",
      desc: "Encrypted, centralized repositories ensure long-term protection of sensitive and regulated information."
    },
    {
      icon: "bi-search",
      title: "Fast Retrieval",
      desc: "Provides instant access to documents, even across archives spanning decades of historical records."
    },
    {
      icon: "bi-clipboard-check",
      title: "Improved Compliance",
      desc: "Supports audit readiness with automated tracking, alerts, and full document traceability."
    },
    {
      icon: "bi-archive",
      title: "Long-Term Digital Preservation",
      desc: "Reduces physical storage costs while protecting documents from damage, loss, or degradation."
    },
    {
      icon: "bi-diagram-3",
      title: "Integration & Scalability",
      desc: "Seamlessly integrates with enterprise systems and scales across multiple departments, locations, and business units."
    }
  ]}
/>


<div id="business">
  <ServiceSplitPanel
    title="Why Novum OCR Is Different"
    primaryColor="#2d1a78"
    items={[
      {
        label: "Beyond Simple OCR",
        paragraphs: [
          "Novum’s OCR Certification Directory is not just a document conversion tool. It is a strategic platform designed to drive enterprise digital transformation.",
          "The platform combines OCR, AI intelligence, workflow automation, and compliance monitoring into a single unified system."
        ],
        listItems: [
          "Enterprise-grade OCR",
          "AI-driven intelligence",
          "End-to-end digital workflows"
        ]
      },

      {
        label: "AI-Based Classification & Intelligence",
        paragraphs: [
          "Advanced AI automatically classifies documents, extracts critical metadata, and transforms unstructured records into structured digital assets.",
          "Every document becomes searchable, discoverable, and audit-ready from day one."
        ],
        listItems: [
          "Automated document categorization",
          "Intelligent metadata extraction",
          "Instant search and discovery"
        ]
      },

      {
        label: "Workflow & Compliance Automation",
        paragraphs: [
          "Built-in workflows automate document approvals, verifications, and compliance actions without manual intervention.",
          "Automated alerts and audit trails ensure continuous regulatory readiness."
        ],
        listItems: [
          "Approval and verification workflows",
          "Expiry and compliance alerts",
          "Complete audit traceability"
        ]
      },

      {
        label: "Secure Enterprise Storage",
        paragraphs: [
          "All documents are stored in encrypted, centralized repositories with strict access control and governance policies.",
          "This ensures long-term preservation of sensitive information while meeting regulatory requirements."
        ],
        listItems: [
          "Encrypted document storage",
          "Role-based access control",
          "Compliance-ready archiving"
        ]
      },

      {
        label: "Measurable Business Impact",
        paragraphs: [
          "Organizations using Novum OCR gain transparency, reduce operational costs, and improve efficiency across departments.",
          "Paper-bound processes are replaced with automated, scalable, and data-driven workflows."
        ],
        listItems: [
          "Increased operational transparency",
          "Stronger regulatory assurance",
          "Significant cost and time savings"
        ]
      },

      {
        label: "Future-Ready Digital Platform",
        paragraphs: [
          "As part of Novum’s Digital Transformation Platform, the solution is designed to scale with enterprise growth and evolving compliance needs.",
          "It integrates seamlessly with existing systems and future AI, data, and automation initiatives."
        ],
        listItems: [
          "Scalable enterprise architecture",
          "Integration-ready design",
          "Long-term digital transformation enablement"
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

export default OCR;