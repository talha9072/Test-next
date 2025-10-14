"use client";
import React, { useState, useEffect } from "react";

export default function ContactWidget() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* === Floating Contact Widget === */}
      <div
        className="contact-widget"
        onClick={() => setShowModal(true)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 9998,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #0D2B75, #1E56A0)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          animation: "blinkPulse 1.6s infinite",
        }}
        title="Contact Us"
      >
        <i
          className="bi bi-chat-dots-fill text-white fs-4"
          style={{ transform: "translateY(1px)" }}
        ></i>
      </div>

      {/* === Popup Modal (Same form as CTA) === */}
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
                  <label className="form-label fw-600" htmlFor="widget-name">
                    Full Name *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <i className="bi bi-person text-novum-blue"></i>
                    </span>
                    <input
                      id="widget-name"
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
                  <label className="form-label fw-600" htmlFor="widget-email">
                    Email *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <i className="bi bi-envelope text-novum-blue"></i>
                    </span>
                    <input
                      id="widget-email"
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
                  <label className="form-label fw-600" htmlFor="widget-phone">
                    Phone
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <i className="bi bi-telephone text-novum-blue"></i>
                    </span>
                    <input
                      id="widget-phone"
                      name="phone"
                      type="tel"
                      className="form-control"
                      placeholder="+971 5X XXX XXXX"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="col-12">
                  <label className="form-label fw-600" htmlFor="widget-message">
                    Message *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <i className="bi bi-chat-left-text text-novum-blue"></i>
                    </span>
                    <textarea
                      id="widget-message"
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

      {/* === Blink Animation Style === */}
      <style jsx global>{`
        @keyframes blinkPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(13, 43, 117, 0.6);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(13, 43, 117, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(13, 43, 117, 0);
          }
        }
      `}</style>
    </>
  );
}
