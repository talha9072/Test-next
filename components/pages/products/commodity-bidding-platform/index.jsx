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



const Aerospace = () => {
  return (
    <div>
        <HeaderFour />
        <HeroOnly
  serviceName="Commodity Bidding Platform"
  title="Power Smarter Commodity Trading"
  highlightText="Intelligent Bidding"
  subtitle="Enable transparent, real-time auctions across global commodity markets."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/main-product/bid-1.webp"
  heroButtons={[
    { label: "Request Demo", href: "/contact" },
  ]}
/>
        
        
        
        <SoftwareSolutionsSection
  title={`Revolutionize Commodity Trading with Smart Bidding`}
  paragraphs={[
    "Novum’s Commodity Bidding Platform empowers enterprises, traders, and suppliers to conduct transparent, real-time auctions across multiple commodities. Designed for speed, fairness, and security, it simplifies procurement and sales through intelligent automation and live price visibility.",
    "With integrated analytics and automated validation, the platform enhances decision-making, reduces manual oversight, and ensures compliance helping businesses achieve faster trade cycles and improved market competitiveness."
  ]}
  imageSrc="/assets/img/main-product/bid-2.png"
  altText="Digital Commodity Bidding Platform"
 />

<Iconlist
  id="bidding-platform"
  title="Transform Commodity Auctions with Intelligent Bidding"
  imageSrc="/assets/img/main-product/bid-3.webp"
  altText="Commodity Bidding Platform Features"
  features={[
    {
      icon: "bi bi-lightning-charge-fill",
      title: "Real-Time Bidding Engine",
      description: "Host transparent, live auctions with instant bid validation and dynamic pricing updates.",
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "AI-Driven Insights",
      description: "Analyze bid trends, pricing behavior, and participation to optimize trading strategies.",
    },
    {
      icon: "bi bi-shield-check",
      title: "Secure & Compliant Transactions",
      description: "Ensure fairness and full traceability through verified users and audit-ready reporting.",
    },
  ]}
/>
        



   <AirportStakeholdersSection
  heading="Designed for Every Participant in Commodity Bidding"
  subheading="See how our platform empowers enterprises, logistics providers, and manufacturers to drive transparency, efficiency, and profitability through intelligent, data-driven bidding automation."
  tabs={[
    {
      label: "Enterprises & Corporates",
      imageSrc: "/assets/img/main-product/bid-4.webp",
      altText: "Enterprises & Corporates",
      title: "Smarter Sourcing for Large Enterprises",
      description: `
        Streamline high-value procurement processes with rule-based bidding, supplier insights, and full audit trails. 
        Our intelligent platform centralizes sourcing workflows, enabling verified vendors to participate securely while ensuring transparent price discovery across every auction.
        Procurement teams gain complete visibility across ongoing and historical bids, monitor vendor performance in real time, and automate contract approvals and documentation.
        Built-in compliance checks, budget alerts, and detailed analytics simplify governance while boosting decision accuracy.
        The result: faster approvals, lower costs, and stronger, data-backed supplier relationships that drive long-term business resilience.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Transport & Logistics",
      imageSrc: "/assets/img/main-product/bid-5.webp",
      altText: "Transport & Logistics",
      title: "Competitive Freight & Route Bidding",
      description: `
        Optimize freight procurement and contract bidding through real-time, competitive auctions tailored for logistics networks. 
        Shippers and carriers can transparently bid on lanes, routes, or capacity blocks, ensuring cost optimization and fair competition. 
        Integrated dashboards provide complete visibility into freight rates, carrier reliability, and performance metrics — helping procurement teams make faster, data-driven decisions.
        Automated comparisons, AI-based ranking, and smart contract management streamline vendor selection and negotiation cycles. 
        The result: reduced logistics overheads, improved route efficiency, and scalable freight operations with measurable ROI.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
    {
      label: "Manufacturing & Processing",
      imageSrc: "/assets/img/main-product/bid-6.webp",
      altText: "Manufacturing & Processing",
      title: "Streamlined Raw Material Procurement",
      description: `
        Simplify the sourcing of commodities such as metals, grains, and chemicals through centralized, intelligent bidding automation. 
        Manufacturers gain end-to-end visibility in supplier selection, price comparison, and delivery commitments — all validated through secure, system-driven workflows.
        The platform tracks every auction, from listing to delivery confirmation, providing full accountability and traceability at every stage.
        AI-powered analytics uncover supplier performance patterns, cost trends, and demand forecasts, enabling more accurate and proactive procurement strategies.
        The result: reduced sourcing risks, faster turnaround, and smarter purchasing decisions for mission-critical materials that impact production continuity.
      `,
      buttonText: "Explore More",
      buttonHref: "/contact",
    },
  ]}
/>



<SmartTurnaroundCards
  heading="An Intelligent Bidding System Built for Modern Enterprises"
  subheading="Real-time auctions, automation, and AI working together to simplify and optimize commodity trading."
  accentColor="#0D2B75"
  cards={[
    {
      imageSrc: "/assets/img/main-product/bid-10.png",
      title: "AI-Based Commodity Listing Engine",
      description: "Sellers can create verified listings with specifications, reserve pricing, and eligibility conditions for smarter bidding.",
    },
    {
      imageSrc: "/assets/img/main-product/bid-11.webp",
      title: "Live Bidding & Auto Validation",
      description: "Run real-time auctions with instant bid validation, duplicate prevention, and transparent participant visibility.",
    },
    {
      imageSrc: "/assets/img/main-product/bid-8.png",
      title: "Auction Insights & Market Analytics",
      description: "Access interactive dashboards that reveal bid behavior, market trends, and supplier performance insights in real time.",
    },
    {
      imageSrc: "/assets/img/main-product/bid-9.png",
      title: "Auto-Finalization & Audit Reports",
      description: "Automatically close auctions, declare winners, and generate tamper-proof reports for compliance and recordkeeping.",
    },
  ]}
/>




  
        
      
<WhySection
  heading="Key Features of Our Intelligent Commodity Bidding Platform"
  subheadingLines={[
    "Digitize, manage, and optimize every stage of your commodity procurement and trading process with real-time intelligence, automation, and analytics. Gain complete visibility into live auctions, bids, and participant activity for faster, smarter decision-making.",
    "From listing creation to result finalization, coordinate seamlessly across buyers, sellers, and procurement teams. Drive transparency, compliance, and performance through one unified digital platform powered by AI and automation."
  ]}
  imgSrc="/assets/img/main-product/bid-12.webp"
  imgAlt="Commodity Bidding Dashboard"
  cards={[
    {
      iconClass: "bi bi-card-list text-novum-blue",
      title: "Dynamic Listing Management",
      text: "Easily upload commodity specifications, reserve prices, and eligibility criteria with full verification and approval controls.",
    },
    {
      iconClass: "bi bi-graph-up-arrow text-novum-blue",
      title: "Real-Time Bidding & Price Discovery",
      text: "Empower participants to place live bids, view instant updates, and experience transparent, data-driven pricing.",
    },
    {
      iconClass: "bi bi-lightbulb-fill text-novum-blue",
      title: "AI-Powered Market Insights",
      text: "Leverage real-time analytics to uncover price trends, bidding behaviors, and supplier performance metrics.",
    },
    {
      iconClass: "bi bi-lock-fill text-novum-blue",
      title: "Secure & Compliant Transactions",
      text: "Ensure integrity with encrypted sessions, digital audit trails, and role-based user access for full accountability.",
    },
    {
      iconClass: "bi bi-journal-check text-novum-blue",
      title: "Automated Result Finalization",
      text: "The system automatically closes auctions, declares winners, and generates reports for transparent documentation.",
    },
    {
      iconClass: "bi bi-laptop text-novum-blue",
      title: "Cross-Platform Accessibility",
      text: "Access your dashboards, reports, and auctions securely across desktop and mobile devices anytime, anywhere.",
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

export default Aerospace;