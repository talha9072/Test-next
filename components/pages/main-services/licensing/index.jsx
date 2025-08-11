"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";




const Licensing = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/licensing/license-hero.webp"
            icon="/assets/img/service-cards/product.png"
            title="Request a Product License"
            borderColorStart="#0d2b75"
            borderColorEnd="#193781"
        />
        <SoftwareSolutionsSection
            title={`Start Your License Request`}
            paragraphs={[
            "To gain access to one of Novum’s AI-powered products or platforms, please complete the form below. Our team will review your request and follow up with access instructions, pricing details, and any required agreements.",
            ]}
            imageSrc="/assets/img/licensing/microsoft-1.webp"
            altText="Power BI Consulting"
        />
        

        
<section id="license-info-form" className="py-5" style={{background: "linear-gradient(180deg,#F5FAFF 0%,#ECF6FF 100%)"}}>
  <div className="container">
    <div className="row justify-content-center mb-4">
      <div className="col-xl-8 col-lg-9 text-center">
        <h2 className="fw-700 mb-2" style={{letterSpacing: "-0.3px"}}>License Information Form</h2>
        <p className="text-muted mb-0">Please provide the following details:</p>
      </div>
    </div>

    <div className="row g-4 align-items-stretch">
      {/* Left info panel */}
      <div className="col-12 col-lg-5">
        <div className="h-100 p-4 p-md-5 rounded-4 shadow-sm text-white"
             style={{background: "linear-gradient(135deg,#0F6CBD 0%,#0078D4 60%,#115EA3 100%)"}}>
          <div className="d-flex align-items-center mb-3">
            <div className="d-inline-flex align-items-center justify-content-center rounded-3 me-3"
                 style={{width: 44, height: 44, background: "rgba(255,255,255,0.15)"}}>
              <i className="fa-solid fa-id-badge fs-5"></i>
            </div>
            <h3 className="h5 fw-700 mb-0">Request licensing details</h3>
          </div>

          <ul className="list-unstyled small mb-4">
            <li className="mb-2"><i className="fa-solid fa-check me-2"></i> Fast response from NOVUM team</li>
            <li className="mb-2"><i className="fa-solid fa-check me-2"></i> Guidance on SKUs & entitlements</li>
            <li><i className="fa-solid fa-check me-2"></i> Tailored pricing for your use case</li>
          </ul>

          <div className="border-top border-light pt-3 small" style={{opacity: .95}}>
            <div className="mb-1"><i className="fa-solid fa-shield-halved me-2"></i>Enterprise-grade security</div>
            <div><i className="fa-solid fa-lock me-2"></i>Your info is kept confidential</div>
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="col-12 col-lg-7">
        <div className="h-100 bg-white rounded-4 shadow-sm p-4 p-md-5">
          <form action="#" method="post" noValidate>
            <div className="row g-3">
              {/* Full Name */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-600" htmlFor="fullName">Full Name *</label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent"><i className="fa-solid fa-user text-novum-blue"></i></span>
                  <input id="fullName" name="fullName" type="text" className="form-control" placeholder="Daniel Morris" required />
                </div>
              </div>

              {/* Company Name */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-600" htmlFor="companyName">Company Name *</label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent"><i className="fa-solid fa-building text-novum-blue"></i></span>
                  <input id="companyName" name="companyName" type="text" className="form-control" placeholder="Novum Ltd." required />
                </div>
              </div>

              {/* Business Email */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-600" htmlFor="businessEmail">Business Email *</label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent"><i className="fa-solid fa-envelope text-novum-blue"></i></span>
                  <input id="businessEmail" name="businessEmail" type="email" className="form-control" placeholder="name@company.com" required />
                </div>
              </div>

              {/* Phone Number */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-600" htmlFor="phone">Phone Number</label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent"><i className="fa-solid fa-phone text-novum-blue"></i></span>
                  <input id="phone" name="phone" type="tel" inputMode="tel" className="form-control" placeholder="+971 5X XXX XXXX" />
                </div>
              </div>

              {/* Product of Interest */}
              <div className="col-12">
                <label className="form-label fw-600" htmlFor="product">Product of Interest *</label>
                <select id="product" name="product" className="form-select" required>
                  <option value="">Select a product…</option>
                  <option>Microsoft 365</option>
                  <option>Dynamics 365 Sales</option>
                  <option>Dynamics 365 Customer Service</option>
                  <option>Dynamics 365 Field Service</option>
                  <option>Dynamics 365 Supply Chain Management</option>
                  <option>Dynamics 365 Finance</option>
                  <option>Power BI</option>
                  <option>Power Apps / Power Automate</option>
                  <option>Azure (Compute/AI/Security)</option>
                </select>
              </div>

              {/* Intended Use Case */}
              <div className="col-12">
                <label className="form-label fw-600" htmlFor="usecase">Intended Use Case *</label>
                <textarea id="usecase" name="usecase" className="form-control" rows={3} placeholder="Briefly describe how you plan to use the product…" required></textarea>
              </div>

              {/* Country */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-600" htmlFor="country">Country *</label>
                <select id="country" name="country" className="form-select" required>
                  <option value="">Select country…</option>
                  <option>United Arab Emirates</option>
                  <option>Saudi Arabia</option>
                  <option>Qatar</option>
                  <option>Pakistan</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
              </div>

              {/* Additional Comments */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-600" htmlFor="comments">Additional Comments (optional)</label>
                <input id="comments" name="comments" type="text" className="form-control" placeholder="Anything else we should know?" />
              </div>

              {/* Submit */}
              <div className="col-12 d-grid d-sm-flex align-items-center gap-2 mt-2">
                <button type="submit" className="btn btn-two"
                        >
                  Submit Request
                </button>
                <span className="text-muted small ms-sm-2">We’ll get back within 1–2 business days.</span>
              </div>
            </div>
          </form>
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

      <Footer />
    </div>
  );
};

export default Licensing;