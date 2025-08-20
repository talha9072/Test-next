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



const Face = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/main-product/face-hero.png"
            icon="/assets/img/main-product/face-recognition.png"
            title="Face Recognition & Detection"
            borderColorStart="#123558"
            borderColorEnd="#2374FF"
        />
        
        
        <SoftwareSolutionsSection
  title={`Empower Smart Surveillance with AI Face Recognition`}
  paragraphs={[
    "Novum’s Face Recognition & Detection solution delivers real-time identity verification, automated surveillance, and intelligent video analytics. Ideal for high-security environments, it helps detect known threats, monitor activity, and streamline identity-based workflows — all with unmatched speed and accuracy.",
  ]}
  imageSrc="/assets/img/main-product/face-1.png"
  altText="Face Recognition AI System"
/>
        

<section className="position-relative overflow-hidden py-5">
  <div className="container">
    <div className="row align-items-center g-5">

      {/* Left Text */}
      <div className="col-lg-7 position-relative">
        <h2 className="fw-700 text-dark-gray mb-4 lh-sm">
          Smarter Surveillance Begins <br />
          with Facial Recognition
        </h2>

        <p className="mb-4">
          Novum’s Face Recognition solution enables instant identity detection using high-precision AI and computer vision. Ideal for high-security zones, workplaces, or public spaces, it transforms camera feeds into actionable intelligence.
        </p>

        {/* Icon + Text List */}
        <div className="d-flex mb-4">
          <div className="me-3">
            <div className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
              <i className="bi bi-eye"></i>
            </div>
          </div>
          <div>
            <h6 className="fw-semibold mb-1">Live Face Detection</h6>
            <p className="mb-0">
              Recognize faces in real-time across multiple video feeds with unmatched speed and accuracy.
            </p>
          </div>
        </div>

        <div className="d-flex mb-4">
          <div className="me-3">
            <div className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
              <i className="bi bi-people"></i>
            </div>
          </div>
          <div>
            <h6 className="fw-semibold mb-1">Blacklist & Whitelist Management</h6>
            <p className="mb-0">
              Automatically flag recognized individuals based on pre-defined access or alert lists.
            </p>
          </div>
        </div>

        <div className="d-flex mb-4">
          <div className="me-3">
            <div className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
              <i className="bi bi-bell-fill"></i>
            </div>
          </div>
          <div>
            <h6 className="fw-semibold mb-1">Anomaly Detection Alerts</h6>
            <p className="mb-0">
              Trigger real-time alerts for unfamiliar faces or restricted area breaches.
            </p>
          </div>
        </div>

        <div className="d-flex">
          <div className="me-3">
            <div className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
              <i className="bi bi-camera-video"></i>
            </div>
          </div>
          <div>
            <h6 className="fw-semibold mb-1">Seamless Camera Integration</h6>
            <p className="mb-0">
              Easily connect with existing CCTV infrastructure and cloud storage systems.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-5 text-center">
        <img
          src="/assets/img/main-product/face-2.png"
          alt="Facial Recognition Surveillance Interface"
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
        <h2 className="fw-700 text-dark-gray mb-4">AI Face Recognition Where It Matters Most</h2>
        <p className="mb-0">
          From public surveillance to private access control, Novum’s Face Recognition solution adapts to diverse use cases—boosting security, responsiveness, and situational awareness at every level.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col tab-style-03">
        <ul className="nav nav-tabs justify-content-center text-center fw-500 border-color-light-medium-gray mb-5" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#tab_surveillance" role="tab">Urban Surveillance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab_building" role="tab">Building Entry</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab_events" role="tab">Event Security</a>
          </li>
        </ul>

        <div className="tab-content">
          {/* Urban Surveillance */}
          <div className="tab-pane fade show active" id="tab_surveillance" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11">
                <img src="/assets/img/main-product/face-3.png" alt="Urban Face Surveillance" className="w-95 rounded mb-3" />
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 text-uppercase ls-1px">
                  Smarter Cities, Safer Streets
                </h3>
                <p className="mb-4 w-95 sm-w-100">
                  Identify persons of interest, monitor high-traffic zones, and spot anomalies in real-time using AI-powered face detection embedded into public CCTV systems. Enables crime prevention, search automation, and threat intelligence.
                </p>
                <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                  <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                </a>
              </div>
            </div>
          </div>

          {/* Building Entry */}
          <div className="tab-pane fade" id="tab_building" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11">
                <img src="/assets/img/main-product/face-4.png" alt="Face-Based Entry Control" className="w-95 rounded mb-3" />
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 text-uppercase ls-1px">
                  Secure Entry Without Touch
                </h3>
                <p className="mb-4 w-95 sm-w-100">
                  Replace outdated keycards and fingerprint scanners with fast, hygienic, facial recognition. From offices to labs, the system supports live access logging, time tracking, and third-party integrations like HR and ERP.
                </p>
                <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                  <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                </a>
              </div>
            </div>
          </div>

          {/* Event Security */}
          <div className="tab-pane fade" id="tab_events" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11">
                <img src="/assets/img/main-product/face-5.png" alt="Face Detection at Events" className="w-95 rounded mb-3" />
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 text-uppercase ls-1px">
                  Venue-Wide Face Intelligence
                </h3>
                <p className="mb-4 w-95 sm-w-100">
                  Scan event attendees, validate ticket holders, and detect banned individuals or unusual movement patterns across large venues. Get proactive alerts and audit-ready reports for law enforcement or event compliance.
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
        How Our Face Detection System Works — Step by Step
      </h2>
      <p className="mb-0">
        Our AI-powered Face Recognition solution combines deep learning and computer vision to recognize identities with precision and speed. Here’s how each phase of the process ensures security, efficiency, and trust at every checkpoint.
      </p>
      <div
        className="mx-auto mt-3"
        style={{ width: "80px", height: "3px", backgroundColor: "#0D2B75" }}
      />
    </div>

    {/* 4 cards */}
    <div className="row g-4">
      {/* Step 1: Smart Detection */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/main-product/face-ai.png"
              alt="AI-Powered Face Detection"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">AI-Powered Face Detection</h3>
            <p className="mb-4">
              The system auto-detects human faces in live video or static images with high accuracy—even in low light or busy backgrounds.
            </p>
            
          </div>
        </article>
      </div>

      {/* Step 2: Identity Mapping */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/main-product/face-engine.png"
              alt="Identity Recognition Engine"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Identity Recognition Engine</h3>
            <p className="mb-4">
              Advanced neural networks map facial features against your secure database to instantly identify or verify a person.
            </p>
            
          </div>
        </article>
      </div>

      {/* Step 3: Behavioral Context */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/main-product/face-flag.png"
              alt="Face Analysis and Behavior Detection"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Context-Aware Behavior Flags</h3>
            <p className="mb-4">
              Detects abnormal movement, loitering, or tailgating attempts using behavioral analytics for extra security.
            </p>
            
          </div>
        </article>
      </div>

      {/* Step 4: Logging & Reporting */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img
              src="/assets/img/main-product/face-logs.png"
              alt="Face recognition logs and analytics"
              className="w-100 h-100 p-2 rounded-5"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Logs & Analytics Dashboard</h3>
            <p className="mb-4">
              Every match, mismatch, or attempt is logged with timestamped metadata for audit, compliance, and trend analysis.
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
      Trusted Facial Recognition for Global Security
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
      “Since adopting Novum’s face recognition solution, we’ve seen a <strong>47% drop</strong> in unauthorized entry attempts. The system’s speed and accuracy, even in crowded or low-light conditions, has transformed how we manage identity verification.”
    </blockquote>

    {/* Attribution */}
    <p className="text-dark fw-semibold mt-4 mb-0">
      — Head of Security, International Research Campus
    </p>
  </div>
</section>
        
      
        <WhySection
  heading="What Makes Our Face Recognition Solution Stand Out"
  subheadingLines={[
    "Harness the power of computer vision and AI to detect, identify, and monitor individuals with unmatched accuracy.",
    "Ideal for public safety, corporate security, and surveillance, our face detection tech adapts to your environment—flawlessly.",
  ]}
  imgSrc="/assets/img/main-product/face-6.png"
  imgAlt="Face Recognition Interface Demo"
  cards={[
    {
      iconClass: "bi bi-eye text-novum-blue",
      title: "High-Precision Facial Detection",
      text: "Capture and recognize faces in real time—even in low-light, crowded, or fast-moving environments.",
    },
    {
      iconClass: "bi bi-cpu text-novum-blue",
      title: "AI Matching & Identification",
      text: "Match faces against databases or watchlists instantly with deep learning–based facial vector comparison.",
    },
    {
      iconClass: "bi bi-camera-video text-novum-blue",
      title: "Live Surveillance Integration",
      text: "Integrate with existing CCTV feeds for real-time monitoring, tagging, and alerts on recognized individuals.",
    },
    {
      iconClass: "bi bi-folder-check text-novum-blue",
      title: "Event Logging & Forensics",
      text: "Generate access records with visual proofs, time stamps, and searchable event trails for audits or investigations.",
    },
    {
      iconClass: "bi bi-hdd-network text-novum-blue",
      title: "Flexible Database Connectivity",
      text: "Connect to local or cloud-based identity databases, government registries, or internal employee systems.",
    },
    {
      iconClass: "bi bi-bell text-novum-blue",
      title: "Threat Detection & Alerts",
      text: "Instantly detect blacklisted faces, duplicates, or spoof attempts—with customizable alert protocols.",
    },
  ]}
/>
       

        <CTA
  bgImage="/assets/img/cta-bg.webp"
  heading="Unlock the Future of Surveillance with Face Recognition"
  subText="Deploy Novum’s facial recognition technology to enhance security, automate identity checks, and respond to threats in real time — from one powerful platform."
  buttonText="Request a Demo"
  buttonHref="/contact"
/>

      <Footer />
    </div>
  );
};

export default Face;