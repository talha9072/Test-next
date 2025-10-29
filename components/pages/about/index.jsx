"use client";
import Banner from "./banner";
import HeaderFour from "@/components/layout/headers/header/header-four";
import CTA from "@/components/data/cta";
import Footer from "@/components/layout/footers/footer";
import Widget from "@/components/widget/widget";

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

As the demand for business process automation, complex data management, and ERP solutions grows, we are committed to providing tailored solutions that meet specific market needs enabling agile decision-making through advanced analytics and supporting diverse business functions with robust ERP systems.

Our mission is to elevate decision-making, reporting, and business processes by fostering a data-driven culture across corporate, business, and functional layers. As a trusted Microsoft partner, we align with globally recognized Microsoft Cloud standards to ensure smooth digital transformations for our clients.

Backed by extensive domain expertise and industry experience in fields such as technology, aerospace, petroleum, business consulting, non-profit, risk & finance, and education, our team brings a dedicated, customer-focused approach and proven methodologies to every project. At Novum, we are driven by best practices, innovation, and a commitment to empowering clients with impactful, forward-looking solutions that drive real change in their industries.
        </p>
        
      </div>


      {/* RIGHT: Partner / Credibility Card */}
      <div className="col-lg-5 order-2 order-lg-2">
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


<section className="py-5">
  <div className="container">
    <div className="row g-4 align-items-stretch">
      {/* === Vision Box === */}
      <div className="col-12 col-lg-6">
        <div
          className="h-100 text-white d-flex flex-column justify-content-start"
          style={{
            padding: "3rem 2.5rem 3rem",
            background: "#3b4a9e",
            borderRadius: "5px",
          }}
        >
          <h6
            className="text-uppercase fw-semibold mb-3"
            style={{
              fontSize: "12px",
              letterSpacing: "0.5px",
              color: "white",
            }}
          >
            Company Vision
          </h6>
          <p
            className="fw-semibold mb-0 responsive-text"
            style={{ lineHeight: "1.5" }}
          >
            "Create organization environment with data-driven decision power and
            transformative solutions."
          </p>
        </div>
      </div>

      {/* === Mission Box === */}
      <div className="col-12 col-lg-6">
        <div
          className="h-100 text-white d-flex flex-column justify-content-start"
          style={{
            padding: "3rem 2.5rem 3rem",
            background: "#3b4a9e",
            borderRadius: "5px",
          }}
        >
          <h6
            className="text-uppercase fw-semibold mb-3"
            style={{
              fontSize: "12px",
              letterSpacing: "0.5px",
              color: "white",
            }}
          >
            Mission Statement
          </h6>
          <p
            className="fw-semibold mb-0 responsive-text"
            style={{ lineHeight: "1.5" }}
          >
            “To help the companies increase their efficiency and step into the
            future, through implementing digital services and data analytics at
            the core.”
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* === Inline Responsive Style === */}
  <style jsx>{`
    .responsive-text {
      font-size: 1.6rem;
    }

    @media (max-width: 992px) {
      .responsive-text {
        font-size: 2rem;
      }
    }

    @media (max-width: 768px) {
      .responsive-text {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 576px) {
      .responsive-text {
        font-size: 1.25rem;
      }
    }
  `}</style>
</section>



{/* === What Drives Us (Refined Copy) === */}
<section className="py-5">
  <div className="container">

    {/* Section Header */}
    <div className="row justify-content-center">
      <div className="col-lg-12 text-left">
        <span className="badge rounded-pill bg-light border px-3 py-2 fw-semibold text-novum-blue mb-2 d-inline-block">
          Driven by Purpose
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


  


 <section className="services about__four py-5">
  <div className="container">
    {/* Header */}
    <div className="row gy-4 pb-4">
      <div className="col-12">
        <h2 className="fw-700 text-dark-gray ls-minus-1px mb-3">
          Industries We Serve &amp; Business Functions
        </h2>
        
      </div>
    </div>

    {/* Grid */}
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
      {/* Healthcare & Pharma */}
      <div className="col">
        <div className="card h-100 p-2">
          <div className="card-body text-start d-flex flex-column">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-light border rounded-circle mb-3"
              style={{ width: 64, height: 64 }}
            >
              <i className="bi bi-heart-pulse text-novum-blue fs-3" aria-hidden="true"></i>
            </div>
            <h3 className="card-title mt-1 mb-2">Healthcare &amp; Pharma</h3>
            <p className="card-text small text-muted">
              EMR integration, HL7/FHIR pipelines, and regulatory reporting.
            </p>
            <div className="mt-auto pt-2">
              <a href="/industries/pharmaceutical-industry" className="btn btn-two btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Retail & Distribution */}
      <div className="col">
        <div className="card h-100 p-2">
          <div className="card-body text-start d-flex flex-column">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-light border rounded-circle mb-3"
              style={{ width: 64, height: 64 }}
            >
              <i className="bi bi-cart text-novum-blue fs-3" aria-hidden="true"></i>
            </div>
            <h3 className="card-title mt-1 mb-2">Retail &amp; Distribution</h3>
            <p className="card-text small text-muted">
              Demand forecasting, inventory visibility, omnichannel analytics.
            </p>
            <div className="mt-auto pt-2">
              <a href="/industries/food-retail-distribution" className="btn btn-two btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing & Agriculture */}
      <div className="col">
        <div className="card h-100 p-2">
          <div className="card-body text-start d-flex flex-column">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-light border rounded-circle mb-3"
              style={{ width: 64, height: 64 }}
            >
              <i className="bi bi-gear-wide-connected text-novum-blue fs-3" aria-hidden="true"></i>
            </div>
            <h3 className="card-title mt-1 mb-2">Manufacturing &amp; Agriculture</h3>
            <p className="card-text small text-muted">
              IoT telemetry, quality control, and supply planning.
            </p>
            <div className="mt-auto pt-2">
              <a href="/industries/agriculture" className="btn btn-two btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Government & Public Sector */}
      <div className="col">
        <div className="card h-100 p-2">
          <div className="card-body text-start d-flex flex-column">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-light border rounded-circle mb-3"
              style={{ width: 64, height: 64 }}
            >
              <i className="bi bi-building text-novum-blue fs-3" aria-hidden="true"></i>
            </div>
            <h3 className="card-title mt-1 mb-2">Government &amp; Public Sector</h3>
            <p className="card-text small text-muted">
              Citizen services, data governance, and secure cloud.
            </p>
            <div className="mt-auto pt-2">
              <a href="/industries/government" className="btn btn-two btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Oil & Gas / Energy */}
      <div className="col">
        <div className="card h-100 p-2">
          <div className="card-body text-start d-flex flex-column">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-light border rounded-circle mb-3"
              style={{ width: 64, height: 64 }}
            >
              <i className="bi bi-droplet-fill text-novum-blue fs-3" aria-hidden="true"></i>
            </div>
            <h3 className="card-title mt-1 mb-2">Oil &amp; Gas / Energy</h3>
            <p className="card-text small text-muted">
              Asset monitoring, production dashboards, safety analytics.
            </p>
            <div className="mt-auto pt-2">
              <a href="/industries/natural-resources" className="btn btn-two btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Transportation & Aviation */}
      <div className="col">
        <div className="card h-100 p-2">
          <div className="card-body text-start d-flex flex-column">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-light border rounded-circle mb-3"
              style={{ width: 64, height: 64 }}
            >
              <i className="bi bi-airplane text-novum-blue fs-3" aria-hidden="true"></i>
            </div>
            <h3 className="card-title mt-1 mb-2">Transportation &amp; Aviation</h3>
            <p className="card-text small text-muted">
              Fleet operations, MRO analytics, on-time performance.
            </p>
            <div className="mt-auto pt-2">
              <a href="/industries/aerospace-transportation" className="btn btn-two btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      <CTA
  bgImage="/assets/img/cta-bg.png"
  heading="Need a solution? Request a call!"
  subText="For pricing information about services simply complete the form below and one of our sales professionals will contact you within one business day."
  buttonText="Get in Touch"
  buttonHref="/contact"
/>

<Widget />

      <Footer />
    </div>
  );
};

export default Aboutus;