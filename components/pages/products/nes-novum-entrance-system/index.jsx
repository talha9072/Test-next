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



const Nes = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/main-product/nes-hero.png"
            icon="/assets/img/main-product/door.png"
            title="NES (Novum Entrance System)"
            borderColorStart="#123558"
            borderColorEnd="#2374FF"
        />
        
        
        <SoftwareSolutionsSection
            title={`Transform Your Access Control with AI-Powered NES`}
            paragraphs={[
            "Novum’s Entrance System (NES) is an advanced, AI-integrated solution that automates and secures physical access across facilities. From facial recognition-based entry to real-time activity logging, NES ensures only authorized personnel can enter, all while enhancing compliance, safety, and operational efficiency.",
            ]}
            imageSrc="/assets/img/main-product/nes-1.png"
            altText="Novum Entrance System"
        />
        

<section className="position-relative overflow-hidden py-5">
  <div className="container">
    <div className="row align-items-center g-5">

      {/* Left Text */}
      <div className="col-lg-7 position-relative">
        <h2 className="fw-700 text-dark-gray mb-4 lh-sm">
          Control Access Intelligently <br />
          with NES
        </h2>

        <p className="mb-4">
          Novum’s NES is an AI-powered, biometric-enabled access control system designed to safeguard high-security environments. Whether you're managing sensitive zones or high-traffic entrances, NES ensures real-time identity verification and seamless entry management.
        </p>

        {/* Icon + Text List */}
        <div className="d-flex mb-4">
            <div className="me-3">
                <div
                className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
                >
                <i className="bi bi-person-check-fill"></i>
                </div>
            </div>
            <div>
                <h6 className="fw-semibold mb-1">Real-Time Identity Verification</h6>
                <p className="mb-0">
                Verify access using fast, accurate facial recognition integrated with secure databases.
                </p>
            </div>
            </div>

            <div className="d-flex mb-4">
            <div className="me-3">
                <div
                className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
                >
                <i className="bi bi-journal-text"></i>
                </div>
            </div>
            <div>
                <h6 className="fw-semibold mb-1">Automated Access Logging</h6>
                <p className="mb-0">
                Maintain detailed logs of every entry and exit—complete with time, location, and user ID.
                </p>
            </div>
            </div>

            <div className="d-flex mb-4">
            <div className="me-3">
                <div
                className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
                >
                <i className="bi bi-shield-lock"></i>
                </div>
            </div>
            <div>
                <h6 className="fw-semibold mb-1">AI-Based Alerts</h6>
                <p className="mb-0">
                Detect anomalies like unauthorized entry attempts or device tampering and respond instantly.
                </p>
            </div>
            </div>

            <div className="d-flex">
            <div className="me-3">
                <div
                className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
                >
                <i className="bi bi-diagram-3"></i>
                </div>
            </div>
            <div>
                <h6 className="fw-semibold mb-1">Custom Access Rules</h6>
                <p className="mb-0">
                Configure zone-based access levels, time restrictions, and role-based clearance seamlessly.
                </p>
            </div>
            </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-5 text-center">
        <img
          src="/assets/img/main-product/nes-2.png"
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
        <h2 className="fw-700 text-dark-gray mb-4">A Smarter System for Every Environment</h2>
        <p className="mb-0">NES adapts to a variety of environments—whether you're securing corporate campuses, managing airport staff zones, or protecting high-security data centers. Its AI-powered face recognition and role-based access control make it the smart choice for modern organizations.</p>
      </div>
    </div>
    <div className="row">
      <div className="col tab-style-03">
        <ul className="nav nav-tabs justify-content-center text-center fw-500 border-color-light-medium-gray mb-5" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#tab_third1" role="tab">Corporates & Enterprises</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab_third2" role="tab">Airports & Transport Hubs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab_third3" role="tab">Critical Infrastructure &amp; Data Centers</a>
          </li>
        </ul>

        <div className="tab-content">
            {/* Corporates & Enterprises */}
            <div className="tab-pane fade show active" id="tab_third1" role="tabpanel">
                <div className="row align-items-center justify-content-center g-0">
                <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                    <figure className="mb-0">
                    <img
                        src="/assets/img/main-product/nes-3.png"
                        alt="Corporates & Enterprises"
                        className="w-95 rounded mb-3"
                    />
                    </figure>
                </div>
                <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                    <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                    Why Corporates & Enterprises Trust NES
                    </h3>
                    <p className="mb-4 w-95 sm-w-100">
                    Protect your workforce and assets with NES — a smart access control system built for dynamic corporate environments. From managing multi-floor clearance levels to integrating employee databases and attendance systems, NES ensures seamless, secure entry backed by real-time facial recognition and role-based access rules. Boost security compliance, reduce manual checks, and automate your daily entry logs effortlessly.
                    </p>
                    <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                    <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                    </a>
                </div>
                </div>
            </div>

            {/* Airports & Transport Hubs */}
            <div className="tab-pane fade" id="tab_third2" role="tabpanel">
                <div className="row align-items-center justify-content-center g-0">
                <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                    <figure className="mb-0">
                    <img
                        src="/assets/img/main-product/nes-5.png"
                        alt="Airports & Transport Hubs"
                        className="w-95 rounded mb-3"
                    />
                    </figure>
                </div>
                <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                    <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                    Designed for Aviation & Transport Infrastructure
                    </h3>
                    <p className="mb-4 w-95 sm-w-100">
                    Airports and transit authorities use NES to secure airside zones, crew-only areas, and operational facilities with precision. The system supports biometric ID checks for staff, airline crews, and contractors, ensuring only pre-approved individuals access sensitive terminals. With live access tracking and auto-syncing to airport personnel systems, NES enables faster movement without compromising security. Integrate with existing security infrastructure for full situational awareness.
                    </p>
                    <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                    <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                    </a>
                </div>
                </div>
            </div>

            {/* Critical Infrastructure & IT/Ops */}
            <div className="tab-pane fade" id="tab_third3" role="tabpanel">
                <div className="row align-items-center justify-content-center g-0">
                <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                    <figure className="mb-0">
                    <img
                        src="/assets/img/main-product/nes-6.png"
                        alt="Critical Infrastructure & IT/Ops"
                        className="w-95 rounded mb-3"
                    />
                    </figure>
                </div>
                <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                    <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                    Mission-Critical Control for Sensitive Zones
                    </h3>
                    <p className="mb-4 w-95 sm-w-100">
                    NES helps data centers, power plants, and government sites lock down physical access with tamper-proof validation and audit-ready logs. Admins can define granular access levels, set time-based restrictions, and receive AI-generated alerts for unauthorized attempts or abnormal entry behavior. Built-in reporting, API integrations, and multi-site scalability make it the ideal choice for IT/Ops teams managing high-risk environments with zero tolerance for breaches.
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
        How NES Ensures Smarter, Faster & Safer Access Control
      </h2>
      <p className="mb-0">
          NES automates access control using AI and facial recognition to validate identities, enforce security rules, and log every entry with precision. In just four seamless steps, it delivers powerful real-time monitoring and effortless integration with your internal systems.
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
              src="/assets/img/main-product/nes-4.png"
              alt="Sensors + Manual Updates"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Biometric/Facial Scan</h3>
            <p className="mb-4">
              Entry point scans face or ID and checks against the authorized database.
            </p>
            
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
            <h3 className="h4 fw-bold mb-2">AI Decision Engine</h3>
            <p className="mb-4">
              Validates identity, evaluates rules, and grants/denies access in milliseconds.
            </p>
            
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
            <h3 className="h4 fw-bold mb-2">Live Dashboard Monitoring</h3>
            <p className="mb-4">
              Supervisors can see real-time access status, logs, and alerts from a central panel.
            </p>
            
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
            <h3 className="h4 fw-bold mb-2">Reports & Integration</h3>
            <p className="mb-4">
              Generate entry/exit reports and integrate with HR or building management systems.
            </p>
            
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
          Trusted for Secure Access Worldwide
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
          “NES by Novum helped us reduce unauthorized access incidents by
          <strong> 43%</strong> in just 3 months. Seamless integration with HR and clear audit trails made compliance easier than ever.
          ”
        </blockquote>

        {/* Attribution */}
        <p className="text-dark fw-semibold mt-4 mb-0">
          — Security Manager, Global Tech Facility
        </p>
      </div>
    </section>
        
      
        <WhySection
        heading="Key Features of Our AI-Powered Entrance Control System"
        subheadingLines={[
            "Experience intelligent, secure, and fully automated access management with NES.",
            "From biometric validation to real-time monitoring, empower your facility with unmatched control and clarity.",
        ]}
        imgSrc="/assets/img/main-product/nes-7.png"
        imgAlt="NES Access Control Dashboard"
        cards={[
            {
            iconClass: "bi bi-person-bounding-box text-novum-blue",
            title: "Facial Recognition Access",
            text: "Fast, contactless identity verification at entry points using high-precision AI facial detection.",
            },
            {
            iconClass: "bi bi-lock text-novum-blue",
            title: "Custom Access Rules & Zones",
            text: "Define who can access what, when, and where—with flexible scheduling and zone-level restrictions.",
            },
            {
            iconClass: "bi bi-activity text-novum-blue",
            title: "Real-Time Activity Monitoring",
            text: "View access logs, live entry status, and flagged anomalies across all secure points in your facility.",
            },
            {
            iconClass: "bi bi-file-earmark-check text-novum-blue",
            title: "Automated Entry Logging",
            text: "Log every access attempt automatically with timestamps, user identity, and access outcome.",
            },
            {
            iconClass: "bi bi-diagram-3-fill text-novum-blue",
            title: "System Integration Ready",
            text: "Easily integrate with HR, ERP, building management systems, and third-party security platforms.",
            },
            {
            iconClass: "bi bi-shield-exclamation text-novum-blue",
            title: "AI-Powered Alerts",
            text: "Receive instant alerts for unauthorized access attempts, suspicious behavior, or tampering incidents.",
            },
        ]}
        />
       

        <CTA
  bgImage="/assets/img/cta-bg.webp"
  heading="Ready to Modernize Your Access Control with NES?"
  subText="Secure your facilities with real-time facial recognition, automated logging, and intelligent access management — all powered by Novum’s NES platform."
  buttonText="Get in Touch"
  buttonHref="/contact"
/>

      <Footer />
    </div>
  );
};

export default Nes;