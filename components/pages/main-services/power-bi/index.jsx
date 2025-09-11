"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import MainServices from "@/components/data/services/main-services";
import ImplementSection from "@/components/data/services/implement";
import Whyus from "@/components/data/services/whyus";
import OtherServices from "@/components/data/services/otherservices";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";





const PowerBI = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
        title="Power BI Consulting Services"
        subtitle="Turn data into decisions with Power BI experts."
        bgImage="/assets/img/power-bi/power-bi-hero.png"
        links={[
          { label: "Overview", href: "#about", active: true },
          { label: "Services", href: "#services" },
          { label: "implementation", href: "#implement" },
          { label: "Why Choose?", href: "#whyus" },
          { label: "Other Services", href: "#otherservices" },
          
        ]}
      />


      <SoftwareSolutionsSection
            title={`Why Business Intelligence Is Critical for Modern Organizations`}
            paragraphs={[
            "In today’s data-rich business environment, companies often struggle to convert fragmented or siloed data into meaningful insights. Without a centralized BI solution, decision-makers face slow reporting cycles, limited visibility, and disconnected systems hindering growth, efficiency, and innovation. Every department, from finance to operations, depends on timely, accurate data to stay competitive.",
            
            ]}
            imageSrc="/assets/img/power-bi/power-bi1.png"
            altText="Power BI Consulting"
            sectionClass="position-relative overflow-hidden py-7"
      />
        
      <MainServices
          id="services"
                  subtitle="Power BI Consulting Services"
                  title="Power BI Consulting Services to Turn Data Into Decisions"
                  description="Novum delivers expert Power BI consulting services that help transform raw data into business intelligence. Our team designs scalable dashboards, builds dynamic data models, and integrates Power BI with platforms like Microsoft Dynamics 365, SQL Server, Azure, and more. Whether you’re launching a new BI initiative or optimizing an existing one, we work closely with your internal teams to ensure your data strategy aligns with your business goals."
                  image={{
                    src: "/assets/img/power-bi/power-bi2.png",
                    alt: "Power BI Dashboard",
                  }}
                  services={[
                    { title: "Model Optimization", desc: "Optimizing and troubleshooting Power BI models." },
                    { title: "Advanced Dashboards", desc: "Enhancing dashboards using advanced DAX and visuals." },
                    { title: "Rapid Reports", desc: "Fast development and deployment of custom reports." },
                    { title: "Team Support", desc: "One-on-one support for internal BI teams." },
                    { title: "Remote Consulting", desc: "Immediate on-site or remote consulting available." },
                    { title: "Scalable BI Strategy", desc: "Designing scalable dashboards and data models for growth." },
           ]}
      />


      <ImplementSection
        id="implement"
          subtitle="Benefits"
          title="What You Gain from a Strong Power BI Implementation"
          description="Power BI enables faster, smarter decisions through real-time, interactive dashboards and predictive analytics that deliver clarity across your entire organization."
          items={[
            {
              img: "/assets/img/main-product/dashboard.png",
              title: "Live Dashboards",
              desc: "Monitor KPIs and performance in real time with interactive dashboards.",
            },
            {
              img: "/assets/img/sustainability/card-1.webp",
              title: "Forecasting Tools",
              desc: "Predict sales, inventory, and demand trends using advanced analytics.",
            },
            {
              img: "/assets/img/ai/ai-2.png",
              title: "IoT Integration",
              desc: "Analyze data from sensors and smart devices to improve operations.",
            },
            {
              img: "/assets/img/power-bi/benefit-cross.jpg",
              title: "Cross-Department Insights",
              desc: "Unify reporting across finance, sales, and supply chain for better collaboration.",
            },
            {
              img: "/assets/img/power-bi/benefit-connectors.jpg",
              title: "200+ Data Connectors",
              desc: "Integrate cloud services, databases, Excel files, and more into a single platform.",
            },
         ]}
      />
   
      <Whyus
        id="whyus"
        subtitle="Why Choose Us"
        title="Why Choose Novum as Your Power BI Partner"
        description="With over 24 clients supported remotely, Novum combines technical expertise with a personalized consulting model."
        counters={[
          { value: 24, suffix: "+", label: "Clients Supported" },
          { value: 100, suffix: "+", label: "Certified Experts" },
          { value: 10, suffix: "+", label: "Years of Experience" },
          { value: 5, suffix: "★", label: "Client Satisfaction" },
        ]}
        features={[
          {
            icon: "fa-solid fa-user-tie",
            title: "Dedicated Consultants",
            desc: "Focused solely on your company’s BI success.",
          },
          {
            icon: "fa-solid fa-layer-group",
            title: "Enhancing BI Teams",
            desc: "Proven ability to enhance internal BI capabilities.",
          },
          {
            icon: "fa-solid fa-expand",
            title: "Scalable Support",
            desc: "From quick fixes to full BI architecture.",
          },
          {
            icon: "fa-solid fa-chart-line",
            title: "Business-First Approach",
            desc: "Delivering cost savings, efficiency, and insights.",
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
        },
        {
          title: "Power BI Consulting",
          imgSrc: "/assets/img/service-cards/powerbi.svg",
          description:
            "We transform and model data into insights that drive data-driven decisions.",
          link: "/services/power-bi",
        },
        {
          title: "Digital Services",
          imgSrc: "/assets/img/service-cards/digitalmarketing.png",
          description: "We bring transformative digital outcomes to organizations.",
          link: "#",
        },
        {
          title: "Data Warehouse",
          imgSrc: "/assets/img/service-cards/datawarehouse.svg",
          description:
            "We consolidate intelligence data from multiple sources to unlock deeper insights.",
          link: "/services/data-warehouse",
        },
        {
          title: "Artificial Intelligence & IoT",
          imgSrc: "/assets/img/service-cards/ai.svg",
          description:
            "We build AI solutions with Microsoft Cognitive Services and integrate IoT hardware.",
          link: "/services/artificial-intelligence-iot",
        },
        {
          title: "Microsoft Azure",
          imgSrc: "/assets/img/service-cards/azure.svg",
          description: "Swiftly shift your business resources to cloud infrastructure.",
          link: "/services/azure",
        },
        {
          title: "Microsoft 365",
          imgSrc: "/assets/img/service-cards/microsoft365.svg",
          description: "A suite of apps to help you stay connected and get things done.",
          link: "/services/microsoft-365-deployment",
        },
        {
          title: "Dynamics 365",
          imgSrc: "/assets/img/service-cards/dynamic365.svg",
          description:
            "Boost efficiency and customer experiences with an agile business platform.",
          link: "/services/microsoft-dynamics-365",
        },
        {
          title: "Sustainability",
          imgSrc: "/assets/img/service-cards/sustainability.svg",
          description:
            "Drive ESG goals with Microsoft's expanding sustainability solutions.",
          link: "/services/microsoft-sustainability",
        },
        {
          title: "Copilot",
          imgSrc: "/assets/img/service-cards/copilot.png",
          description:
            "An AI assistant that automates tasks and provides real-time insights.",
          link: "#",
        },
      ]}
    />



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

export default PowerBI;