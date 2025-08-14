"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BreadCrumb from "../common/breadcrumb";
import CTA from "@/components/data/cta";
import Footer from "@/components/layout/footers/footer";

const Aboutus = () => {
  return (
    <div>
      <HeaderFour />
      <BreadCrumb title="About Novum" innerTitle="Contact Us" />
       

{/* === Our Mission === */}
<section className="py-5">
  <div className="container">
    <div className="row g-4 align-items-stretch">
      {/* LEFT: keep your existing mission copy/pillars here */}
      <div className="col-lg-7">
        <span className="badge rounded-pill bg-light border px-3 py-2 fw-semibold text-novum-blue mb-2">
          Our Mission
        </span>
        <h2 className="fw-bold mb-3">Empowering Data-Driven, Intelligent Enterprises</h2>
        <p className="mb-4">
          At Novum, our mission is to empower businesses through data-driven decision-making,
          streamlined digital operations, and intelligent enterprise solutions. We strive to elevate
          organizational performance by embedding analytics into the heart of every process, enabling
          faster, smarter, and more agile decision-making.
        </p>

        <div className="row g-3">
          <div className="col-sm-4">
            <div className="bg-light border rounded-4 h-100 p-3">
              <div className="fw-bold mb-1">Analytics-First</div>
              <div className="text-muted small">Insights at every step.</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bg-light border rounded-4 h-100 p-3">
              <div className="fw-bold mb-1">Automation</div>
              <div className="text-muted small">Lean, efficient ops.</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bg-light border rounded-4 h-100 p-3">
              <div className="fw-bold mb-1">Cloud-Native</div>
              <div className="text-muted small">Secure & scalable.</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: partner / credibility card — compact & filled */}
      <div className="col-lg-5">
        <div className="card h-100 border rounded-4 shadow-sm">
          <div className="card-body h-100 d-flex flex-column p-3 p-lg-4">

            {/* Header */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src="/assets/img/home/microsoft-banner.svg"
                alt="Microsoft Solutions Partner"
                className="img-fluid"
                width="150"
              />
              <div>
                <div className="fw-semibold text-uppercase small text-muted">Certified</div>
                <div className="h5 small mb-0">Microsoft Solutions Partner</div>
              </div>
            </div>

            {/* Capability chips */}
            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge rounded-pill bg-light border text-dark">Data &amp; AI</span>
              <span className="badge rounded-pill bg-light border text-dark">Azure Cloud</span>
              <span className="badge rounded-pill bg-light border text-dark">Business Apps</span>
            </div>

            {/* Quick bullets (fills middle area neatly) */}
            <ul className="list-unstyled mb-3">
              <li className="d-flex align-items-start gap-2 mb-2">
                <span className="badge bg-white border text-dark rounded-pill">1</span>
                <div className="small">
                  Solution design aligned to enterprise architecture and security baselines.
                </div>
              </li>
              <li className="d-flex align-items-start gap-2 mb-2">
                <span className="badge bg-white border text-dark rounded-pill">2</span>
                <div className="small">
                  Managed delivery with measurable KPIs across data, apps, and cloud.
                </div>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="badge bg-white border text-dark rounded-pill">3</span>
                <div className="small">
                  Governance &amp; FinOps practices to keep platforms cost-efficient.
                </div>
              </li>
            </ul>

            {/* KPIs (no huge gaps; sits at bottom naturally) */}
            <div className="row g-3 mt-auto">
              <div className="col-4">
                <div className="border rounded-4 text-center py-3">
                  <div className="h4 fw-bold mb-0">8+</div>
                  <div className="small text-muted">Years</div>
                </div>
              </div>
              <div className="col-4">
                <div className="border rounded-4 text-center py-3">
                  <div className="h4 fw-bold mb-0">20+</div>
                  <div className="small text-muted">Experts</div>
                </div>
              </div>
              <div className="col-4">
                <div className="border rounded-4 text-center py-3">
                  <div className="h4 fw-bold mb-0">100+</div>
                  <div className="small text-muted">Projects</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* === About Section === */}
<section className="py-5">
  <div className="container">
    <div className="row align-items-center gy-4">
      {/* Image (left on desktop, below on mobile) */}
      <div className="col-lg-5 order-2 order-lg-1">
        <div className="position-relative">
          {/* Floating Experience badge (Bootstrap utilities only) */}
          <div className="position-absolute top-0 start-0 ms-3 mt-3">
            <div className="bg-white bg-opacity-75 border rounded-4 shadow d-flex align-items-center gap-3 px-3 py-2">
              <div className="d-flex align-items-baseline">
                <span className="display-5 text-novum-blue fw-bold mb-0">8</span>
                <sup className="fw-bold text-novum-blue ms-1">+</sup>
              </div>
              <div className="small text-muted lh-sm">
                <div className="fw-semibold">Years</div>
                <div>Experience</div>
              </div>
            </div>
          </div>

          <img
            src="/assets/img/about/about-main-1.png"
            alt="About Novum"
            className="img-fluid rounded shadow-sm"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Content (right on desktop, above on mobile) */}
      <div className="col-lg-7 order-1 order-lg-2">
        <span className="badge rounded-pill bg-light border px-3 py-2 fw-semibold text-novum-blue mb-2 d-inline-block">
          Who We Are
        </span>
        
        <h2 className="fw-bold mb-3">Built on Innovation &amp; Expertise</h2>
        <p className="mb-3">
          Founded in 2017, Novum is a data analytics and software development company delivering
          advanced digital solutions across local and international markets. We specialize in data
          warehousing, ERP implementation, custom software development, AI-driven analytics, and
          cloud technologies tailored to the evolving needs of modern enterprises.
        </p>
        <p className="mb-0">
          With a foundation in innovation and deep technical expertise, our engineers and consultants
          work closely with each client to solve complex challenges and align every solution with
          operational priorities and long-term vision.
        </p>
      </div>
    </div>
  </div>
</section>

{/* === What Drives Us (Bootstrap-only, aligned 3-up cards; no custom CSS) === */}
<section className="py-5">
  <div className="container">

    {/* Section header */}
    <div className="row justify-content-center">
      <div className="col-lg-12 text-left">
        <span className="badge rounded-pill bg-light border px-3 py-2 fw-semibold text-novum-blue mb-2 d-inline-block">
          What Drives Us
        </span>
        <h2 className="h1 fw-bold mb-2">What Drives Us</h2>
        <p className="text-muted mb-4">
          At the core of Novum is a commitment to delivering business value through purposeful technology.
        </p>
      </div>
    </div>

    {/* 3 equal, perfectly aligned cards */}
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {/* Card 1 */}
      <div className="col d-flex">
        <div className="card h-100 border rounded-4 shadow-sm w-100">
          <div className="card-body d-flex flex-column">
            <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3" style={{ width: 56, height: 56 }}>
              <i className="fas fa-user-check fs-5 text-novum-blue" aria-hidden="true"></i>
            </div>
            <h3 className="h5 fw-bold mb-2">Customer-Centric Approach</h3>
            <p className="text-muted mb-0 small">
              We place our clients at the center of every engagement, ensuring solutions are technically sound and aligned with strategic objectives.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col d-flex">
        <div className="card h-100 border rounded-4 shadow-sm w-100">
          <div className="card-body d-flex flex-column">
            <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3" style={{ width: 56, height: 56 }}>
              <i className="fas fa-chart-line fs-5 text-novum-blue" aria-hidden="true"></i>
            </div>
            <h3 className="h5 fw-bold mb-2">Data-Driven Transformation</h3>
            <p className="text-muted mb-0 small">
              We design the right data architecture to unlock actionable insights that guide real-time, informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col d-flex">
        <div className="card h-100 border rounded-4 shadow-sm w-100">
          <div className="card-body d-flex flex-column">
            <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3" style={{ width: 56, height: 56 }}>
              <i className="fas fa-award fs-5 text-novum-blue" aria-hidden="true"></i>
            </div>
            <h3 className="h5 fw-bold mb-2">Commitment to Excellence</h3>
            <p className="text-muted mb-0 small">
              From planning to execution, we use proven methodologies and a transparent, collaborative approach to ensure measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* === Global Impact, Local Expertise — premium Bootstrap-only layout (no custom CSS) === */}
<section className="py-5 bg-white">
  <div className="container">
    {/* Row 1: Visual + Copy */}
    <div className="row g-4 align-items-center">
      {/* Visual: Map card with overlay chips */}
      <div className="col-lg-6">
        <div className="card border-0 shadow-sm rounded-4 text-white">
          <img
            src="/assets/img/about/flags.png"  /* replace with your map/img */
            alt="Global presence"
            className="card-img rounded-4"
            loading="lazy"
            decoding="async"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-light text-novum-blue rounded-pill">Dubai • UAE</span>
              <span className="badge bg-light text-novum-blue rounded-pill">Baku • AZ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copy: Heading, paragraph, compact KPIs */}
      <div className="col-lg-6">
        <span className="badge rounded-pill bg-light border px-3 py-2 fw-semibold text-novum-blue mb-2 d-inline-block">
          Global Impact, Local Expertise
        </span>
        <h2 className="h1 fw-bold mb-3">Global Impact, Local Expertise</h2>
        <p className="fs-5 mb-4">
          With offices in <strong>Dubai</strong> and <strong>Baku</strong>, Novum blends global perspective
          with deep local market understanding. Our international presence lets us serve diverse clients
          while tailoring solutions to regional dynamics.
        </p>

        {/* KPI row */}
        <div className="row g-3">
          <div className="col-6 col-md-4">
            <div className="border rounded-4 text-center py-3 h-100">
              <div className="d-flex justify-content-center mb-2">
                <span className="badge bg-light border rounded-circle p-3">
                  <i className="fas fa-globe text-novum-blue" aria-hidden="true"></i>
                </span>
              </div>
              <div className="fw-bold">GCC &amp; CIS</div>
              <div className="small text-muted">Coverage</div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="border rounded-4 text-center py-3 h-100">
              <div className="d-flex justify-content-center mb-2">
                <span className="badge bg-light border rounded-circle p-3">
                  <i className="fas fa-language text-novum-blue" aria-hidden="true"></i>
                </span>
              </div>
              <div className="fw-bold">Multi-lingual</div>
              <div className="small text-muted">AR • EN • AZ • RU</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="border rounded-4 text-center py-3 h-100">
              <div className="d-flex justify-content-center mb-2">
                <span className="badge bg-light border rounded-circle p-3">
                  <i className="fas fa-clock text-novum-blue" aria-hidden="true"></i>
                </span>
              </div>
              <div className="fw-bold">2 Timezones</div>
              <div className="small text-muted">Gulf &amp; Caucasus</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Row 2: Location detail cards */}
    <div className="row g-3 mt-4">
      {/* Dubai */}
      <div className="col-md-6 d-flex">
        <div className="card border rounded-4 shadow-sm w-100">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-light border text-dark rounded-pill">UAE</span>
                <span className="fw-semibold">Dubai</span>
              </div>
              <i className="fas fa-city text-novum-blue" aria-hidden="true"></i>
            </div>
            <ul className="list-unstyled small text-muted mb-0">
              <li className="d-flex align-items-start gap-2 mb-1">
                <i className="fas fa-building text-novum-blue mt-1" aria-hidden="true"></i>
                <span>Enterprise &amp; public sector delivery hub</span>
              </li>
              <li className="d-flex align-items-start gap-2 mb-1">
                <i className="fas fa-shield-alt text-novum-blue mt-1" aria-hidden="true"></i>
                <span>GCC compliance &amp; security standards</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <i className="fas fa-people-carry text-novum-blue mt-1" aria-hidden="true"></i>
                <span>Arabic &amp; English delivery teams</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Baku */}
      <div className="col-md-6 d-flex">
        <div className="card border rounded-4 shadow-sm w-100">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-light border text-dark rounded-pill">AZ</span>
                <span className="fw-semibold">Baku</span>
              </div>
              <i className="fas fa-landmark text-novum-blue" aria-hidden="true"></i>
            </div>
            <ul className="list-unstyled small text-muted mb-0">
              <li className="d-flex align-items-start gap-2 mb-1">
                <i className="fas fa-industry text-novum-blue mt-1" aria-hidden="true"></i>
                <span>Energy, manufacturing &amp; aviation focus</span>
              </li>
              <li className="d-flex align-items-start gap-2 mb-1">
                <i className="fas fa-cogs text-novum-blue mt-1" aria-hidden="true"></i>
                <span>Nearshore engineering capability</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <i className="fas fa-language text-novum-blue mt-1" aria-hidden="true"></i>
                <span>Azerbaijani, Russian &amp; English</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>     



      <CTA
  bgImage="/assets/img/cta-bg.png"
  heading="Ready to Work with Novum?"
  subText="Meet our team, share your goals, and get a clear, actionable plan for your next step in data, cloud, or apps."
  buttonText="Talk to an Expert"
  buttonHref="/contact"
/>

      <Footer />
    </div>
  );
};

export default Aboutus;