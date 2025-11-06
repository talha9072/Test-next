"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroOnly from "@/components/data/industries/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const Food = () => {
  return (
    <div>
        <HeaderFour />
        <HeroOnly
  serviceName="Food Retail & Distribution"
  title="Smarter Operations, Fresher Results"
  highlightText="Food Retail & Distribution"
  subtitle="Empowering retailers and distributors with real-time insights, automation, and AI-driven efficiency."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/industries/food/food-hero.webp"
  heroButtons={[
    { label: "Explore Solutions", href: "#solutions" },
    { label: "Contact Experts", href: "/contact" },
  ]}
/>

        
       <SoftwareSolutionsSection
  title="Connecting Supply Chains for Real-Time Insight and Control"
  paragraphs={[
    "Modern food retail and distribution demand precision, speed, and transparency. Novum’s cloud-based platforms connect data from procurement, logistics, warehousing, and sales to deliver real-time visibility and smarter decisions. The result — reduced waste, improved forecasting, and seamless coordination from supplier to shelf.",
  ]}
  imageSrc="/assets/img/industries/food/food-1.webp"
  altText="Food Retail and Distribution Digital Solutions"
/>
        
        <IssuesSection
  title="Food Retail & Distribution"
  subtitle="Key Challenges"
  imageSrc="/assets/img/industries/food/food-4.png"
  imageAlt="Food Retail and Distribution Challenges"
  leftCards={[
    {
      icon: "bi bi-diagram-3",
      title: "Disconnected Supply Systems",
      text: "Fragmented data across procurement, inventory, and logistics slows coordination and accuracy.",
    },
    {
      icon: "bi bi-box-seam",
      title: "Inventory and Stock Imbalances",
      text: "Inconsistent tracking causes product shortages, overstock, and increased waste.",
    },
  ]}
  rightCards={[
    {
      icon: "bi bi-eye",
      title: "Limited Real-Time Visibility",
      text: "Lack of live data on stock, demand, and delivery reduces responsiveness.",
    },
    {
      icon: "bi bi-shield-exclamation",
      title: "Compliance and Quality Risks",
      text: "Difficulty maintaining food safety standards and traceability across multiple channels.",
    },
  ]}
/>



        <SoftwareDetailSection
  imageSrc="/assets/img/industries/food/food-4.webp"
  imageAlt="Measurable Impact Delivered"
  heading={<>Measurable Impact Delivered</>}
  listItems={[
    'End-to-end visibility across procurement, inventory, and distribution channels',
    'Reduced stock loss through real-time monitoring and demand forecasting',
    'Faster reporting and smarter replenishment with connected data systems',
    'Improved food safety, traceability, and regulatory compliance across networks',
  ]}
/>

       <WhySection
  heading="Why Food Retailers Choose Novum"
  subheadingLines={[
    "Novum helps food retailers and distributors connect operations, data, and people through AI and cloud innovation.",
    "As a Microsoft Solutions Partner, we deliver scalable platforms that enhance visibility, efficiency, and decision-making across the supply chain.",
  ]}
  imgSrc="/assets/img/industries/food/food-5.webp"
  imgAlt="Food Retail and Distribution Digital Transformation"
  cards={[
    {
      iconClass: 'fa-solid fa-boxes-stacked text-novum-blue',
      title: 'Inventory Management Platforms',
      text: 'Monitor stock, automate replenishment, and reduce waste across warehouses and retail stores.',
    },
    {
      iconClass: 'fa-solid fa-cloud text-novum-blue',
      title: 'Azure Cloud Infrastructure',
      text: 'Centralize and secure retail and logistics data through scalable Microsoft Azure environments.',
    },
    {
      iconClass: 'fa-solid fa-chart-column text-novum-blue',
      title: 'Power BI Dashboards',
      text: 'Track performance, sales, and fulfillment KPIs with real-time interactive dashboards.',
    },
    {
      iconClass: 'fa-solid fa-brain text-novum-blue',
      title: 'AI and Predictive Analytics',
      text: 'Leverage machine learning to forecast demand, optimize stock, and plan promotions effectively.',
    },
    {
      iconClass: 'fa-solid fa-database text-novum-blue',
      title: 'Data Warehouse Integration',
      text: 'Unify POS, ERP, and logistics data for faster, more accurate business insights.',
    },
    {
      iconClass: 'fa-solid fa-people-group text-novum-blue',
      title: 'Microsoft 365 Collaboration',
      text: 'Enhance coordination between retail teams, suppliers, and management through secure digital tools.',
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

export default Food;