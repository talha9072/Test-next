"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BreadCrumb from "../common/breadcrumb";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";




const Health = () => {
  return (
    <div>
        <HeaderFour />
        <BreadCrumb title="Industries" innerTitle="Contact Us" />
        <section className="services about__four py-5">
  <div className="container">
    {/* Header */}
    <div className="row gy-4 pb-4">
      <div className="col-12">
        <h2 className="fw-700 text-dark-gray ls-minus-1px mb-3">
          Industries We Serve &amp; Business Functions
        </h2>
        <p className="mb-0">
          Novum delivers data, AI, and cloud solutions for Healthcare &amp; Pharma, Retail &amp; Distribution, Manufacturing &amp; Agriculture, Government &amp; Public Sector, Oil &amp; Gas / Energy, and Transportation &amp; Aviation—modernizing operations with Microsoft Azure, Power BI, and Dynamics 365 to drive measurable outcomes.
        </p>
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
                        heading="Ready to Transform Your Pharmaceutical Operations?"
                        subText="Let’s build a smarter, more agile digital foundation for your pharmaceutical business.
 Book a consultation with Novum’s pharma solutions experts."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Health;