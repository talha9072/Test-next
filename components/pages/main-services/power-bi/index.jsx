"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
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
        
                <section className="py-5 bg-light" id="services">
          <div className="container">
            {/* Top Row */}
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-6">
                <span className="subtitle-one text-uppercase text-novum-blue fw-semibold mb-2 d-inline-block">
                  Power BI Consulting Services
                </span>
                <h2 className="fw-bold mb-4 text-dark">
                  Power BI Consulting Services to Turn Data Into Decisions
                </h2>
                <p className="mb-3 text-muted">
                  Novum delivers expert Power BI consulting services that help transform raw
                  data into business intelligence. Our team designs scalable dashboards,
                  builds dynamic data models, and integrates Power BI with platforms like
                  Microsoft Dynamics 365, SQL Server, Azure, and more. Whether you’re launching
                  a new BI initiative or optimizing an existing one, we work closely with your
                  internal teams to ensure your data strategy aligns with your business goals.
                </p>
              </div>

              {/* Right Image */}
              <div className="col-lg-6">
                <img
                  src="/assets/img/power-bi/power-bi2.png"
                  alt="Power BI Dashboard"
                  className="img-fluid rounded"
                  
                />
              </div>
            </div>

            {/* Bottom Row - Services */}
            <div className="row mt-4 gy-4">
              <div className="col-md-4 col-sm-6">
                <div className="info-card h-100 p-4 rounded">
                  <h5 className="fw-semibold mb-2 text-novum-blue">
                    Model Optimization
                  </h5>
                  <p className="text-muted small mb-0">
                    Optimizing and troubleshooting Power BI models.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="info-card h-100 p-4 rounded">
                  <h5 className="fw-semibold mb-2 text-novum-blue">
                    Advanced Dashboards
                  </h5>
                  <p className="text-muted small mb-0">
                    Enhancing dashboards using advanced DAX and visuals.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="info-card h-100 p-4 rounded">
                  <h5 className="fw-semibold mb-2 text-novum-blue">
                    Rapid Reports
                  </h5>
                  <p className="text-muted small mb-0">
                    Fast development and deployment of custom reports.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="info-card h-100 p-4 rounded">
                  <h5 className="fw-semibold mb-2 text-novum-blue">
                    Team Support
                  </h5>
                  <p className="text-muted small mb-0">
                    One-on-one support for internal BI teams.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="info-card h-100 p-4 rounded">
                  <h5 className="fw-semibold mb-2 text-novum-blue">
                    Remote Consulting
                  </h5>
                  <p className="text-muted small mb-0">
                    Immediate on-site or remote consulting available.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="info-card h-100 p-4 rounded">
                  <h5 className="fw-semibold mb-2 text-novum-blue">
                    Scalable BI Strategy
                  </h5>
                  <p className="text-muted small mb-0">
                    Designing scalable dashboards and data models for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .subtitle-one {
              letter-spacing: 1px;
              font-size: 14px;
            }
            h2 {
              color: #0d2b75;
              line-height: 1.3;
            }
            .info-card {
              border: 1px solid #e5e7eb;
              transition: all 0.3s ease;
              background: #fff;
            }
            .info-card:hover {
              border-color: #0d2b75;
              background: #f9fbff;
            }
            .text-novum-blue {
              color: #0d2b75 !important;
            }
          `}</style>
        </section>


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
      id="otherservices"
      subtitle="Our Expertise"
      title="Other Services We Provide"
      description="Beyond Power BI, Novum offers a range of services designed to accelerate your digital transformation."
      services={[
        {
          icon: "fa-solid fa-lightbulb",
          title: "Digital Strategy",
          desc: "Crafting digital roadmaps that align technology with business growth.",
          href: "/services/digital-strategy",
        },
        {
          icon: "fa-solid fa-leaf",
          title: "Sustainability Manager",
          desc: "Helping organizations adopt sustainable, eco-friendly practices.",
          href: "/services/sustainability",
        },
        {
          icon: "fa-solid fa-clipboard-check",
          title: "Data Audit",
          desc: "Comprehensive audits to ensure your data is accurate and compliant.",
          href: "/services/data-audit",
        },
        {
          icon: "fa-solid fa-chalkboard-teacher",
          title: "Corporate Trainings",
          desc: "Upskill teams with practical training in BI, AI, and cloud solutions.",
          href: "/services/corporate-trainings",
        },
        {
          icon: "fa-solid fa-people-arrows",
          title: "Change Management & Adoption",
          desc: "Guiding smooth transitions for digital transformation initiatives.",
          href: "/services/change-management",
        },
        {
          icon: "fa-solid fa-chart-pie",
          title: "Power BI / Reporting Consulting",
          desc: "Advanced BI reporting and dashboards for smarter decisions.",
          href: "/services/power-bi",
        },
        {
          icon: "fa-solid fa-database",
          title: "Data Warehouse",
          desc: "Centralized data platforms to enable secure and scalable analytics.",
          href: "/services/data-warehouse",
        },
        {
          icon: "fa-solid fa-robot",
          title: "Artificial Intelligence and IoT",
          desc: "AI-driven automation combined with IoT for smarter operations.",
          href: "/services/ai-iot",
        },
        {
          icon: "fa-solid fa-cloud",
          title: "Azure Data Foundry",
          desc: "Leverage Azure for modern, scalable data engineering pipelines.",
          href: "/services/azure-data-foundry",
        },
        {
          icon: "fa-solid fa-cubes",
          title: "Microsoft Dynamics 365",
          desc: "ERP and CRM solutions customized to your business processes.",
          href: "/services/dynamics-365",
        },
        {
          icon: "fa-solid fa-windows",
          title: "Microsoft 365 Deployment",
          desc: "Deployment and optimization of Microsoft 365 for your teams.",
          href: "/services/microsoft-365",
        },
        {
          icon: "fa-solid fa-key",
          title: "Microsoft Licensing",
          desc: "Efficient licensing strategies for Microsoft tools and platforms.",
          href: "/services/microsoft-licensing",
        },
        {
          icon: "fa-solid fa-code",
          title: "Software Development",
          desc: "Custom applications and platforms designed to meet unique needs.",
          href: "/services/software-development",
        },
        {
          icon: "fa-solid fa-users-cog",
          title: "Strategic Resourcing",
          desc: "Flexible resource management to support ongoing digital projects.",
          href: "/services/strategic-resourcing",
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