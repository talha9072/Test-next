"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BreadCrumb from "../common/breadcrumb";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactUs = () => {
  return (
    <>
      <HeaderFour />
      <BreadCrumb title="Contact Us" innerTitle="Contact Us" />

      {/* === Contact Novum (minimal form + Dubai/Baku info) === */}
<section
  id="contact-novum"
  className="py-5"
  style={{ background: "linear-gradient(180deg,#F5FAFF 0%,#ECF6FF 100%)" }}
>
  <div className="container">
    

    <div className="row g-4 align-items-stretch">
      
      {/* Right: Minimal Contact Form */}
      <div className="col-12 col-lg-7">
        <div className="h-100 bg-white rounded-4 shadow-sm p-4 p-md-5">
          <form action="#" method="post" noValidate>
            <div className="row g-3">
              {/* Name */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-600" htmlFor="name">
                  Full Name *
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent">
                    <i className="bi bi-person text-novum-blue"></i>
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-600" htmlFor="email">
                  Email *
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent">
                    <i className="bi bi-envelope text-novum-blue"></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>

              {/* Phone (optional) */}
              <div className="col-12">
                <label className="form-label fw-600" htmlFor="phone">
                  Phone (optional)
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent">
                    <i className="bi bi-telephone text-novum-blue"></i>
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    className="form-control"
                    placeholder="+971 5X XXX XXXX"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="col-12">
                <label className="form-label fw-600" htmlFor="message">
                  Message *
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent">
                    <i className="bi bi-chat-left-text text-novum-blue"></i>
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={4}
                    placeholder="How can we help?"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit */}
              <div className="col-12 d-grid d-sm-flex align-items-center gap-2 mt-4">
                <button type="submit" className="btn btn-two">
                  Send Message
                </button>
                <span className="text-muted small ms-sm-2">
                  Typically replies within 1–2 business days.
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* /Right form */}
      {/* Left: Office info (Dubai & Baku) */}
      <div className="col-12 col-lg-5">
        <div
          className="h-100 p-4 p-md-5 rounded-4 shadow-sm text-white"
          style={{
            background: "linear-gradient(135deg,#0F6CBD 0%,#0078D4 60%,#115EA3 100%)",
          }}
        >
          <div className="d-flex align-items-center mb-3">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-3 me-3"
              style={{ width: 44, height: 44, background: "rgba(255,255,255,0.15)" }}
            >
              <i className="bi bi-chat-dots-fill fs-5"></i>
            </div>
            <h3 className="h5 fw-700 mb-0">Get in touch</h3>
          </div>

          {/* Dubai */}
          <div className="bg-white bg-opacity-10 rounded-3 p-3 mb-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-light text-dark rounded-pill">Dubai</span>
              <span className="small">United Arab Emirates</span>
            </div>
            <div className="d-flex align-items-start gap-2 mb-1">
              <i className="bi bi-envelope-fill text-novum-blue"></i>
              <span className="small">info@novum.tech</span>
            </div>
            <div className="d-flex align-items-start gap-2 mb-1">
              <i className="bi bi-telephone-fill text-novum-blue"></i>
              <span className="small">+971 56 192 06 16</span>
            </div>
            <div className="d-flex align-items-start gap-2">
              <i className="bi bi-geo-alt-fill text-novum-blue"></i>
              <span className="small">
                Office #1601, 48 Burj Gate, Downtown, Dubai, UAE
              </span>
            </div>
          </div>

          {/* Baku */}
          <div className="bg-white bg-opacity-10 rounded-3 p-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-light text-dark rounded-pill">Baku</span>
              <span className="small">Azerbaijan</span>
            </div>
            <div className="d-flex align-items-start gap-2 mb-1">
              <i className="bi bi-envelope-fill text-novum-blue"></i>
              <span className="small">info@novum.tech</span>
            </div>
            <div className="d-flex align-items-start gap-2 mb-1">
              <i className="bi bi-telephone-fill text-novum-blue"></i>
              <span className="small">+994 12 533 03 84 • +994 77 280 10 12</span>
            </div>
            <div className="d-flex align-items-start gap-2">
              <i className="bi bi-geo-alt-fill text-novum-blue"></i>
              <span className="small">Bayıl Plaza, Neftchi Qurban str.29</span>
            </div>
          </div>

          {/* Trust strip */}
          <div className="border-top border-light pt-3 small mt-3" style={{ opacity: 0.95 }}>
            <div className="mb-1">
              <i className="bi bi-shield-lock-fill me-2"></i>Enterprise-grade security
            </div>
            <div>
              <i className="bi bi-lock-fill me-2"></i>Your info is kept confidential
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactUs;
