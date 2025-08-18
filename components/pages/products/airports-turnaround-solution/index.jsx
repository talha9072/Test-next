"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import KeyFeaturesSection from "@/components/data/products/KeyFeaturesSection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const Aerospace = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/industries/aerospace/aero-hero.jpg"
            icon="/assets/img/main-product/airplane.png"
            title="Airports Turnaround Solution"
            borderColorStart="#D7E8FF"
            borderColorEnd="#2374FF"
        />
        
        
        <SoftwareSolutionsSection
            title={`Revolutionize Airport Operations with Real-Time Turnaround Management`}
            paragraphs={[
            "Novum’s Airports Turnaround Solution is a smart, AI-driven platform that streamlines every phase of aircraft turnaround — from touchdown to takeoff. Designed for airport authorities, airlines, and ground handlers, this solution enables real-time tracking, centralized dashboards, and actionable insights to improve on-time performance (OTP) and reduce operational costs.",
            ]}
            imageSrc="/assets/img/industries/aerospace/aero-2.jpg"
            altText="Airport Turnaround Solutions"
        />
        

<section className="position-relative overflow-hidden py-5">
  <div className="container">
    <div className="row align-items-center g-5">

      {/* Left Text */}
      <div className="col-lg-7 position-relative">
        <h2 className="fw-700 text-dark-gray mb-4 lh-sm">
          Revolutionize Airport Operations <br />
          with Real-Time Turnaround Management
        </h2>

        <p className="mb-4">
          Novum’s Airports Turnaround Solution is a smart, AI-driven platform that
          streamlines every phase of aircraft turnaround — from touchdown to takeoff.
        </p>

        {/* Icon + Text List */}
        <div className="d-flex mb-4">
          <div className="me-3">
            <div
              className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: 40, height: 40 }}
            >
              <i className="bi bi-speedometer2"></i>
            </div>
          </div>
          <div>
            <h6 className="fw-semibold mb-1">Real-Time Tracking</h6>
            <p className="mb-0">
              Monitor turnaround progress live with centralized dashboards.
            </p>
          </div>
        </div>

        <div className="d-flex mb-4">
          <div className="me-3">
            <div
              className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: 40, height: 40 }}
            >
              <i className="bi bi-cpu"></i>
            </div>
          </div>
          <div>
            <h6 className="fw-semibold mb-1">AI-Powered Insights</h6>
            <p className="mb-0">
              Predict delays, optimize gate usage, and enhance on-time performance (OTP).
            </p>
          </div>
        </div>

        <div className="d-flex mb-4">
          <div className="me-3">
            <div
              className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: 40, height: 40 }}
            >
              <i className="bi bi-graph-up-arrow"></i>
            </div>
          </div>
          <div>
            <h6 className="fw-semibold mb-1">Reduced Costs</h6>
            <p className="mb-0">
              Minimize penalties, reduce gate idle time, and lower operational expenses.
            </p>
          </div>
        </div>

        <div className="d-flex">
          <div className="me-3">
            <div
              className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: 40, height: 40 }}
            >
              <i className="bi bi-people"></i>
            </div>
          </div>
          <div>
            <h6 className="fw-semibold mb-1">Collaboration Boost</h6>
            <p className="mb-0">
              Keep airlines, handlers, and airport authorities in sync in real time.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-5 text-center">
        <img
          src="/assets/img/main-product/aero-1.png"
          alt="Airport Solutions"
          className="img-fluid rounded shadow-lg"
        />
      </div>

    </div>
  </div>
</section>

    <section className="py-5">
  <div className="container">
    <div className="row justify-content-center mb-4">
      <div className="col-lg-6 col-md-8 text-center">
        <h2 className="fw-700 text-dark-gray mb-4">Designed for Every Stakeholder in Airport Turnaround</h2>
        <p className="mb-0">See how our platform helps airports, airlines, and ground operations teams improve on-time performance, reduce ground time, and standardize data-driven decision making.</p>
      </div>
    </div>
    <div className="row">
      <div className="col tab-style-03">
        <ul className="nav nav-tabs justify-content-center text-center fw-500 border-color-light-medium-gray mb-5" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#tab_third1" role="tab">Airports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab_third2" role="tab">Airlines</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab_third3" role="tab">Ground Handling &amp; IT/Ops</a>
          </li>
        </ul>

        <div className="tab-content">
          {/* Airports */}
          <div className="tab-pane fade show active" id="tab_third1" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img
                    src="/assets/img/main-product/aero-2.png"
                    alt="Airports"
                    className="w-95 rounded mb-3"
                  />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Why Airports Choose Our Platform
                </h3>
                <p className="mb-4 w-95 sm-w-100">
                  Boost apron efficiency, improve vendor accountability, and optimize gate scheduling with real-time turnaround visibility. Centralized dashboards unify data from stand guidance, fuel, catering, and cleaning so operations teams can proactively resolve delays and improve airport performance KPIs.
                </p>
                <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                  <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                </a>
              </div>
            </div>
          </div>

          {/* Airlines */}
          <div className="tab-pane fade" id="tab_third2" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img
                    src="/assets/img/main-product/aero-3.png"
                    alt="Airlines"
                    className="w-95 rounded mb-3"
                  />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Built for Airline On-Time Performance
                </h3>
                <p className="mb-4 w-95 sm-w-100">
                  Ensure timely departures and smooth fleet turns with milestone tracking, automated alerts, and AI-assisted delay detection. Standardized workflows reduce turnaround variance, cut block-off delays, and increase aircraft and crew utilization across the network.
                </p>
                <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                  <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                </a>
              </div>
            </div>
          </div>

          {/* Ground Handling & IT/Ops */}
          <div className="tab-pane fade" id="tab_third3" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img
                    src="/assets/img/main-product/aero-4.png"
                    alt="Ground Handling & IT/Ops"
                    className="w-95 rounded mb-3"
                  />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Ground Handling &amp; IT/Ops: Control and Clarity
                </h3>
                <p className="mb-4 w-95 sm-w-100">
                  Deliver stronger SLAs with task-level accountability, automated time stamps, and incident capture. IT &amp; Ops teams gain secure, role-based access, API integrations, and analytics to monitor KPIs, standardize SOPs, and automate reports and invoicing—reducing errors and admin effort.
                </p>
                <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                  <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /tab-content */}
      </div>
    </div>
  </div>
</section>

{/* Cards */}
    <section className="py-5 about__four" id="ms-guidance-cards">
  <div className="container">
    {/* Heading + intro */}
    <div className="mb-4 mb-md-5 text-center">
      <h2 className="fw-700 text-dark-gray mb-4">
        A Smarter Turnaround System Built for Modern Airports
      </h2>
      <p className="mb-0">
        Real-time visibility, automation, and AI working together to optimize ground operations.
      </p>
      <div
        className="mx-auto mt-3"
        style={{ width: "80px", height: "3px", backgroundColor: "#0D2B75" }}
      />
    </div>

    {/* 4 cards */}
    <div className="row g-4">
      {/* Sensors + Manual Updates */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/main-product/sensors.png"
              alt="Sensors + Manual Updates"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Sensors + Manual Updates</h3>
            <p className="mb-4">
              Feed real-time task and equipment data into the central system.
            </p>
            <div className="mt-auto">
              <a href="#" className="btn-two">
                Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* AI Models */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/main-product/ml.png"
              alt="AI Models"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">AI Models</h3>
            <p className="mb-4">
              Analyze timelines, detect anomalies, and forecast task durations.
            </p>
            <div className="mt-auto">
              <a href="#" className="btn-two">
                Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Live Dashboard */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/main-product/dashboard.png"
              alt="Live Dashboard"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Live Dashboard</h3>
            <p className="mb-4">
              Track progress, monitor status, and manage operations in real time.
            </p>
            <div className="mt-auto">
              <a href="#" className="btn-two">
                Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Reports & Invoices */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/main-product/reports.png"
              alt="Reports & Invoices"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Reports & Invoices</h3>
            <p className="mb-4">
              Automatically generate reports, billing, and performance summaries.
            </p>
            <div className="mt-auto">
              <a href="#" className="btn-two">
                Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

    <section className="py-5 bg-white position-relative">
      <div className="container text-center">
        {/* Section Heading */}
        <h2 className="fw-700 text-dark-gray mb-4">
          Trusted by Airports & Airlines Worldwide
        </h2>

        {/* Decorative Quote Icon */}
        <div className="mb-4">
          <i
            className="bi bi-chat-quote-fill text-novum-blue"
            style={{ fontSize: "2.5rem" }}
          ></i>
        </div>

        {/* Testimonial */}
        <blockquote className="fs-5 mx-auto" style={{ maxWidth: "800px" }}>
          “Since implementing Novum’s turnaround solution, we’ve improved OTP by
          <strong> 28%</strong> and reduced gate idle time by
          <strong> 15 minutes per aircraft</strong>.”
        </blockquote>

        {/* Attribution */}
        <p className="text-dark fw-semibold mt-4 mb-0">
          — Airport Operations Director, Europe
        </p>
      </div>
    </section>
        
      
<WhySection
  heading="Key Features of Our AI-Powered Turnaround Solution"
  subheadingLines={[
    "Monitor, manage, and optimize every step of your ground operations with real-time intelligence and automation.",
    "From flight preparation to departure, ensure timely coordination and maximum efficiency across all teams.",
  ]}
  imgSrc="/assets/img/industries/aerospace/aero-hero.jpg"
  imgAlt="Airport Turnaround Dashboard"
  cards={[
    {
      iconClass: "bi bi-speedometer2 text-novum-blue",
      title: "Real-Time Aircraft Status Monitoring",
      text: "Live updates for all turnaround tasks: deboarding, refueling, catering, cleaning, and boarding.",
    },
    {
      iconClass: "bi bi-columns-gap text-novum-blue",
      title: "Centralized Control Dashboard",
      text: "A unified interface for airports, airlines, and ground teams to access critical data and task progress.",
    },
    {
      iconClass: "bi bi-bell-fill text-novum-blue",
      title: "Automated Alerts & Delay Detection",
      text: "AI flags deviations in turnaround milestones, triggering instant alerts for action.",
    },
    {
      iconClass: "bi bi-graph-up-arrow text-novum-blue",
      title: "Ground Handler Performance Analytics",
      text: "Track service providers and vendors by task duration, SLA adherence, and incident trends.",
    },
    {
      iconClass: "bi bi-file-earmark-bar-graph text-novum-blue",
      title: "Smart Invoicing & Billing",
      text: "Seamless, automatic invoice generation based on logged time and performance metrics.",
    },
    {
      iconClass: "bi bi-phone text-novum-blue",
      title: "Mobile & Web Access",
      text: "Fully responsive UI with access on any device, anywhere.",
    },
  ]}
/>
       

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Digitally Transform Your Airport Turnaround Process?"
                        subText="Let Novum help you modernize your ground operations with AI-powered, real-time visibility and efficiency."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Aerospace;