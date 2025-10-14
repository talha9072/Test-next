"use client";
import Banner from "./banner";
import HeaderFour from "@/components/layout/headers/header/header-four";
import CTA from "@/components/data/cta";
import Footer from "@/components/layout/footers/footer";

const Aboutus = () => {
  return (
    <div>
      <HeaderFour />
      <Banner />
       
{/* === About Section === */}
<section className="py-5">
  <div className="container">
    <div className="row align-items-center gy-4">
      {/* Content (right on desktop, above on mobile) */}
      <div className="col-lg-7 order-1 order-lg-2">
        <span className="badge rounded-pill bg-light border px-3 py-2 fw-semibold text-novum-blue mb-2 d-inline-block">
          Who We Are
        </span>
        
        <h2 className="fw-bold mb-4">Built on Innovation &amp; Expertise</h2>
        <p className="mb-2">
          Founded in 2017, Novum specializes in Data Analytics, Software Development, and ERP Implementation, delivering impactful solutions across both local and international markets.
        </p>
        <p className="mb-0">
           Our mission is to elevate decision-making, reporting, and business processes by fostering a data-driven culture across corporate, business, and functional layers. As a trusted Microsoft partner, we align with globally recognized Microsoft Cloud standards to ensure smooth digital transformations for our clients.
        </p>
        <p className="mb-0">
           Backed by extensive domain expertise and industry experience in fields such as technology, aerospace, petroleum, business consulting, non-profit, risk & finance, and education, our team brings a dedicated, customer-focused approach and proven methodologies to every project. At Novum, we are driven by best practices, innovation, and a commitment to empowering clients with impactful, forward-looking solutions that drive real change in their industries.
        </p>
      </div>


      {/* Image (left on desktop, below on mobile) */}
      <div className="col-lg-5 order-2 order-lg-2">
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

    </div>
  </div>
</section>


{/* === Our Mission === */}
<section className="py-5">
  <div className="container">
    <div className="row g-4 align-items-stretch">
      {/* LEFT: Mission Content */}
      <div className="col-lg-7">
        <span className="badge rounded-pill bg-light border px-3 py-2 fw-semibold text-novum-blue mb-2">
          Data-Driven
        </span>
        <h2 className="fw-bold mb-4">Our Mission</h2>
        <p className="mb-4">
          At Novum, our mission is to empower enterprises to operate smarter, faster, and more efficiently
          by embedding analytics, automation, and cloud innovation at the core of their business operations
          helping them evolve into truly data-driven organizations. We believe in transforming complexity into
          clarity through data intelligence, driving measurable impact and long-term success.
        </p>

        <div className="row g-3">
          <div className="col-sm-4">
            <div className="bg-light border rounded-4 h-100 p-3">
              <div className="fw-bold mb-1">Analytics-First</div>
              <div className="text-muted small">Turning data into decisions.</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bg-light border rounded-4 h-100 p-3">
              <div className="fw-bold mb-1">Automation</div>
              <div className="text-muted small">Simplifying operations.</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="bg-light border rounded-4 h-100 p-3">
              <div className="fw-bold mb-1">Cloud-Native</div>
              <div className="text-muted small">Secure, scalable, future-ready.</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Partner / Credibility Card */}
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

            {/* Quick bullets */}
            <ul className="list-unstyled mb-3">
              <li className="d-flex align-items-start gap-2 mb-2">
                <span className="badge bg-white border text-dark rounded-pill">1</span>
                <div className="small">
                  Enterprise-grade architecture aligned with security and scalability.
                </div>
              </li>
              <li className="d-flex align-items-start gap-2 mb-2">
                <span className="badge bg-white border text-dark rounded-pill">2</span>
                <div className="small">
                  KPI-driven project delivery across data, cloud, and business applications.
                </div>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="badge bg-white border text-dark rounded-pill">3</span>
                <div className="small">
                  Continuous optimization through governance, FinOps, and innovation.
                </div>
              </li>
            </ul>

            {/* KPIs */}
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

{/* === What Drives Us (Refined Copy) === */}
<section className="py-5">
  <div className="container">

    {/* Section Header */}
    <div className="row justify-content-center">
      <div className="col-lg-12 text-left">
        <span className="badge rounded-pill bg-light border px-3 py-2 fw-semibold text-novum-blue mb-2 d-inline-block">
          What Drives Us
        </span>
        <h2 className="fw-bold mb-4">What Drives Us</h2>
        <p className="mb-4">
          At Novum, our driving force is the pursuit of purposeful innovation where technology,
          data, and strategy converge to create lasting business value. We don’t just implement
          solutions; we enable transformation that empowers organizations to lead with confidence
          in the digital era.
        </p>
      </div>
    </div>

    {/* 3 Equal Cards */}
    <div className="row row-cols-1 row-cols-md-3 g-3">
      
      {/* Card 1 */}
      <div className="col d-flex">
        <div className="card h-100 border rounded-4 shadow-sm w-100">
          <div className="card-body d-flex flex-column">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
              style={{ width: 56, height: 56 }}
            >
              <i className="fas fa-user-check fs-5 text-novum-blue" aria-hidden="true"></i>
            </div>
            <h3 className="h5 fw-bold mb-2">Customer-Centric Innovation</h3>
            <p className="text-muted mb-0 small">
              Every engagement begins with understanding our clients’ ambitions. We co-create
              tailored digital solutions that align with business goals and deliver tangible,
              measurable impact.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col d-flex">
        <div className="card h-100 border rounded-4 shadow-sm w-100">
          <div className="card-body d-flex flex-column">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
              style={{ width: 56, height: 56 }}
            >
              <i className="fas fa-chart-line fs-5 text-novum-blue" aria-hidden="true"></i>
            </div>
            <h3 className="h5 fw-bold mb-2">Data-Driven Excellence</h3>
            <p className="text-muted mb-0 small">
              We believe in the power of data to transform. Through intelligent architecture
              and analytics, we enable leaders to make faster, smarter, and insight-led decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col d-flex">
        <div className="card h-100 border rounded-4 shadow-sm w-100">
          <div className="card-body d-flex flex-column">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
              style={{ width: 56, height: 56 }}
            >
              <i className="fas fa-award fs-5 text-novum-blue" aria-hidden="true"></i>
            </div>
            <h3 className="h5 fw-bold mb-2">Relentless Pursuit of Quality</h3>
            <p className="text-muted mb-0 small">
              We uphold the highest standards across every project combining precision,
              transparency, and collaboration to consistently deliver excellence and trust.
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
            src="/assets/img/about/flag-1.png"  /* replace with your map/img */
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
        <h2 className="fw-bold mb-4">Global Impact, Local Expertise</h2>
        <p className="mb-4">
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