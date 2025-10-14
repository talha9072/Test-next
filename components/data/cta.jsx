// components/data/cta.jsx
"use client";
import React, { useState, useEffect } from "react";

export default function CTA({
  bgImage = "/images/cta-bg.webp",
  heading = "Need a solution? Request a call!",
  subText = "For pricing information about services simply complete the form below and one of our sales professionals will contact you within one business day.",
  buttonText = "Get in Touch",
  buttonHref = "#",
}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const triggers = document.querySelectorAll(".contact-now");
    triggers.forEach((btn) =>
      btn.addEventListener("click", () => setShowModal(true))
    );
    return () => {
      triggers.forEach((btn) =>
        btn.removeEventListener("click", () => setShowModal(true))
      );
    };
  }, []);

  return (
    <>
      {/* === CTA Section === */}
      <section
        data-parallax-background-ratio="0.5"
        className="section-padding position-relative"
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(13, 43, 117, 0.6)",
            zIndex: 1,
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row d-flex flex-column align-items-start justify-content-center">
            {/* Text Column */}
            <div className="col-xl-6 text-left text-xl-start">
              <h2 className="mb-4 text-white">{heading}</h2>
              <p className="text-white" style={{ opacity: 0.8 }}>
                {subText}
              </p>
            </div>

            {/* Button Column */}
            <div className="col-xl-6 text-left text-xl-start mt-4">
              <button
                onClick={() => setShowModal(true)}
                className="btn-white contact-now"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === Popup Modal === */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div
            className="bg-white rounded-4 shadow-lg p-4 p-md-5 position-relative"
            style={{
              width: "90%",
              maxWidth: "600px",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="btn-close position-absolute top-0 end-0 m-3"
            ></button>

            <h3 className="fw-bold mb-3 text-novum-blue">Get in Touch</h3>
            <p className="text-muted small mb-4">
              Fill out the form below and our team will reach out to you shortly.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row g-3">
                {/* Name */}
                <div className="col-12 col-md-6">
                  <label className="form-label fw-600" htmlFor="popup-name">
                    Full Name *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <i className="bi bi-person text-novum-blue"></i>
                    </span>
                    <input
                      id="popup-name"
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
                  <label className="form-label fw-600" htmlFor="popup-email">
                    Email *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <i className="bi bi-envelope text-novum-blue"></i>
                    </span>
                    <input
                      id="popup-email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="col-12">
                  <label className="form-label fw-600" htmlFor="popup-phone">
                    Phone
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <i className="bi bi-telephone text-novum-blue"></i>
                    </span>
                    <input
                      id="popup-phone"
                      name="phone"
                      type="tel"
                      className="form-control"
                      placeholder="+971 5X XXX XXXX"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="col-12">
                  <label className="form-label fw-600" htmlFor="popup-message">
                    Message *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <i className="bi bi-chat-left-text text-novum-blue"></i>
                    </span>
                    <textarea
                      id="popup-message"
                      name="message"
                      className="form-control"
                      rows={4}
                      placeholder="How can we help?"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit */}
                <div className="col-12 d-flex justify-content-start mt-4">
                  <button
                    type="submit"
                    className="btn btn-two"
                    style={{
                      maxWidth: "150px",
                      width: "100%",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
