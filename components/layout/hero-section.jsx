"use client";
import React from "react";
import PropTypes from "prop-types";

export default function HeroContactSection({
  title = "Contact Us",
  line1 = "We’re here to help you grow and transform your business through smart strategy and innovation.",
  line2 = "Reach out to our team for any inquiries, collaborations, or project discussions.",
  bgColor = "var(--primary-color-1)",
}) {
  return (
    <section className="hero-contact text-center d-flex align-items-center justify-content-center">
      <div className="container pt-5 mt-5">
        <h1 className="fw-bold text-white mb-3">{title}</h1>
        <p className="text-white mb-1">{line1}</p>
        <p className="text-white mb-0">{line2}</p>
      </div>

      {/* Inline styles */}
      <style jsx>{`
        .hero-contact {
          background: ${bgColor};
          height: 50vh;
          min-height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-contact h1 {
          font-size: 52px;
          line-height: 1.2;
        }
        .hero-contact p {
          font-size: 18px;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .hero-contact h1 {
            font-size: 36px;
          }
          .hero-contact p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}

HeroContactSection.propTypes = {
  title: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  bgColor: PropTypes.string,
};
