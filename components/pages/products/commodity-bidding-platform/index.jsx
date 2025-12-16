"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import PricingCardsSection from "@/components/data/services/PricingCardsSection";
import WhyChooseSection from "@/components/data/services/whychooseus";
import ServiceFeatureCards from "@/components/data/services/ServiceFeatureCards";
import UseCasesSection from "@/components/data/services/UseCasesSection";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const Bidding = () => {
  return (
    <div>
        <HeaderFour />
        
        
         <HeroWithRibbon
  serviceName="Commodity Bidding Platform"
  title="A secure platform for automated commodity bidding"
  highlightText="Azure"
  subtitle="Novum’s Commodity Bidding Platform streamlines end-to-end bidding cycles with centralized specifications, automated workflows, and real-time analytics"
  bgImage="/assets/img/main-product/bidding-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Product", href: "#usecase" },
    { label: "Workflows", href: "#approval-workflows" },
    { label: "Analytics", href: "#analytics-reporting" },
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security-compliance" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
        
        <div id="overview">
  <ImageWithContentSection
    orderControl={2}
    bgColor="#e5f1ff"
    title="Commodity Bidding Platform Overview"
    imageSrc="/assets/img/main-product/commodity-main.webp" // update image path
    imageAlt="Commodity Bidding Platform Overview"

    paragraphs={[
      "Novum’s Commodity Bidding Platform is a customisable, SaaS-based system designed for trading firms, procurement teams, and enterprise finance departments seeking to modernise and automate their bidding cycles.",
      "The platform streamlines the full commodity lifecycle from specification creation to supplier bidding, approvals, analytics, and final decision-making within a secure, real-time digital workflow.",
    ]}

    bulletPoints={[
      "End-to-end digital bidding workflows for commodities and procurement",
      "Configurable specifications, approval routes, and pricing structures",
      "Real-time analytics for supplier performance and bid evaluation",
      "Secure multi-user environment with full audit trails and compliance controls"
    ]}
  />
</div>


<div id="usecase">
  <InnovationsRoadmapSection
    sectionId="product-specifications"
    sectionClass="py-5"
    backgroundGradient="linear-gradient(to right bottom, #ffffff, #eef3ff)"
    subtitle="PRODUCT MANAGEMENT"
    title="Flexible Product and Specification Management"
    intro="Novum’s Commodity Bidding Platform includes an advanced specification and product management engine that standardises commodities, controls bidding parameters, and ensures structured, compliant procurement processes."
    primaryColor="#0d2b75"
    items={[
      {
        icon: "bi-collection",
        title: "Product Grouping",
        desc: "Organise commodities into structured categories including raw materials, chemicals, industrial components, agricultural goods, and energy to simplify classification and bulk bidding."
      },
      {
        icon: "bi-list-check",
        title: "Custom Specifications",
        desc: "Define detailed attributes such as quantity, grade, purity, packaging, delivery timelines, and shipment conditions to ensure clarity, comparability, and measurable bid responses."
      },
      {
        icon: "bi-cash-coin",
        title: "Pricing Logic",
        desc: "Configure minimum and maximum bid thresholds, reserve prices, ceiling pricing, and tiered models aligned with internal procurement rules or market expectations."
      },
      {
        icon: "bi-sliders",
        title: "Dynamic Attributes",
        desc: "Adjust key parameters based on market conditions, seasonal demand, supplier performance, historic price trends, or regulatory requirements."
      },
      {
        icon: "bi-server",
        title: "ERP & Finance Integration",
        desc: "Synchronise product and procurement data with ERP systems such as Dynamics 365, SAP, and Oracle to eliminate duplication, maintain accuracy, and strengthen financial governance."
      }
    ]}
  />
</div>


<PricingCardsSection
  sectionId="approval-workflows"
  subtitle="Workflows"
  title="Dynamic Approval Workflows"
  intro="Novum’s Commodity Bidding Platform provides fully configurable, multi-level approval workflows that enforce organisational governance, transparency, and risk control throughout the bidding lifecycle."
  primaryColor="#0d2b75"
  cards={[
    {
      title: "Department-Based Authorisation",
      desc: "Approval routing automatically adapts according to the originating department, cost centre, and budget ownership.",
      list: [
        "Role-based routing",
        "Cost-centre aligned workflows",
        "Policy-driven approval paths"
      ]
    },
    {
      title: "Product Type & Trade Volume Rules",
      desc: "Thresholds adjust dynamically based on commodity category, trade value, and bidding frequency.",
      list: [
        "High-value bid escalation",
        "Category-specific workflows",
        "Volume-based approval layers"
      ]
    },
    {
      title: "Risk-Based Automation",
      desc: "Automated risk scoring ensures higher-risk bids trigger enhanced oversight before approval.",
      list: [
        "Supplier risk scoring",
        "Pricing deviation triggers",
        "Compliance-driven escalation"
      ]
    },
    {
      title: "Full Auditability",
      desc: "Complete visibility across every approval step, enhancing transparency and regulatory alignment.",
      list: [
        "Timestamped logs",
        "Approver comments & history",
        "End-to-end traceability"
      ]
    }
  ]}
/>


<WhyChooseSection
  sectionId="analytics-reporting"
  title="Built-In Analytics and Reporting"
  intro="Novum’s analytics engine provides real-time intelligence that strengthens decision-making, enhances pricing strategy, and improves procurement outcomes across all commodity categories."
  items={[
    {
      icon: "bi-clock-history",
      title: "Real-Time Bid History",
      desc: "Monitor active and historical bids with full transparency, enabling audit accuracy and rapid review."
    },
    {
      icon: "bi-currency-exchange",
      title: "Price Comparison & Benchmarking",
      desc: "Compare bids against historical prices, market averages, and supplier trends to validate competitive pricing."
    },
    {
      icon: "bi-people",
      title: "Supplier Performance Analysis",
      desc: "Evaluate supplier reliability based on responsiveness, delivery performance, quality scores, and contract history."
    },
    {
      icon: "bi-graph-up",
      title: "Market Trend Insights",
      desc: "Identify patterns in demand, price fluctuations, seasonality, and emerging risks to support informed strategy."
    },
    {
      icon: "bi-speedometer2",
      title: "Customisable Dashboards",
      desc: "Track KPIs such as cost savings, winning bid averages, supplier participation, negotiation cycles, and time-to-award."
    }
  ]}
/>

<div id="features">
<PricingCardsSection
  sectionId="collaboration-features"
  title="Collaboration Features"
  intro="Novum’s Commodity Bidding Platform enhances communication and transparency across teams, suppliers, and auditors through integrated collaboration tools."
  primaryColor="#0d2b75"
  cards={[
    {
      title: "Document Attachments",
      desc: "Upload and manage all supporting documents directly within the bid record.",
      list: [
        "Contracts & specifications",
        "Compliance documents",
        "Technical drawings & certifications"
      ]
    },
    {
      title: "Internal Comments & Notes",
      desc: "Capture discussions and clarify decisions within the bidding workflow.",
      list: [
        "Negotiation notes",
        "Clarification messages",
        "Approval rationale"
      ]
    },
    {
      title: "Activity Logs",
      desc: "Maintain complete traceability for operational oversight and audit requirements.",
      list: [
        "Full action history",
        "Timestamped records",
        "User participation tracking"
      ]
    },
    {
      title: "Notifications & Reminders",
      desc: "Automated alerts ensure timely actions and prevent missed steps.",
      list: [
        "Bid opening alerts",
        "Deadline reminders",
        "Approval & escalation notifications"
      ]
    }
  ]}
/>
</div>

<div id="security-compliance">
  <ServiceFeatureCards
    title="Advanced Security and Compliance"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
    primaryColor="#0d2b75"
    noButton
    columns={4}
    items={[
      {
        iconType: "bootstrap",
        icon: "bi-person-lock",
        title: "Role-Based Access Control",
        list: [
          "Granular access policies based on roles and departments",
          "Permission control for sensitive bid and supplier data",
          "Approval-rights governance aligned with internal policies"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-shield-lock",
        title: "Encrypted Data Storage",
        list: [
          "End-to-end encryption for all bid records and documents",
          "Encrypted data at rest and in transit",
          "Secure storage aligned with enterprise security standards"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-file-earmark-check",
        title: "Regulatory Compliance",
        list: [
          "Supports SOX, ISO, procurement governance, and audit frameworks",
          "Aligns with financial reporting and internal controls",
          "Configurable rules for industry-specific compliance requirements"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-journal-text",
        title: "Audit Trails",
        list: [
          "Immutable log of all user actions and workflow steps",
          "Complete traceability for internal and external audits",
          "Timestamped, tamper-proof activity histories"
        ]
      }
    ]}
  />
</div>


<div id="business-benefits">
  <ImageWithContentSection
    orderControl={2}
    bgColor="#fff"
    title="Business Benefits"
    imageSrc="/assets/img/main-product/comodity-main2.webp" // update if needed
    imageAlt="Commodity Bidding Platform Business Benefits"
    
    paragraphs={[
      "Organisations using Novum’s Commodity Bidding Platform gain measurable improvements across procurement, trading, and finance through structured workflows, automation, and real-time intelligence.",
      "The platform strengthens governance, boosts operational speed, and supports strategic decision-making across all commodity-related activities."
    ]}

    bulletPoints={[
      "Transparent, structured bidding processes that reduce ambiguity",
      "Accelerated procurement cycles with automated validations and approvals",
      "Data-driven decisions through real-time analytics and benchmarking",
      "Higher operational efficiency with reduced manual workload",
    ]}
  />
</div>


<div id="pillars">
  <UseCasesSection
    sectionId="novum-ecosystem"
    backgroundStyle="#e5f1ff"
    primaryColor="#0d2b75"
    subtitle="NOVUM ECOSYSTEM"
    title="Unified Integration Across Novum’s Technology Suite"
    intro="As part of Novum’s Trade and Financial Technology ecosystem, the Commodity Bidding Platform integrates seamlessly with automation, compliance, and analytics systems—creating a fully connected procurement and trading environment."
    tabs={[
      {
        items: [
          {
            label: "Integration",
            title: "D365 Automations",
            desc: "Automates downstream workflows including post-bid approvals, invoice matching, supplier notifications, and contract lifecycle management.",
            image: "/assets/img/main-product/comodity-automation.png",
            cta: "Learn More",
            link: "/services/microsoft-dynamics-365"
          },
          {
            label: "Integration",
            title: "OCR – Certification Directory",
            desc: "Validates supplier certificates, compliance documents, contracts, and regulatory files to ensure that only verified suppliers participate in bidding.",
            image: "/assets/img/main-product/ocr.png",
            cta: "Explore",
            link: "/contact"
          },
          {
            label: "Integration",
            title: "Analytics & Reporting Modules",
            desc: "Bidding insights flow directly into enterprise dashboards for CFOs, procurement leaders, and executives, enabling real-time financial and strategic oversight.",
            image: "/assets/img/main-product/integration.png",
            cta: "View Analytics",
            link: "/services/system-integration"
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

export default Bidding;