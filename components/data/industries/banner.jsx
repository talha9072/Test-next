"use client";
import { useEffect } from "react";

const HeroOnly = ({
  serviceName = "",
  title,
  subtitle,
  bgImage,
  heroImage = "",
  heroButtons = [],
  highlightText = "",
}) => {
  // Highlight text logic
  const renderTitle = () => {
    if (!highlightText) return <>{title}</>;
    const regex = new RegExp(`(${highlightText})`, "gi");
    const parts = title.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="highlight-text">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      {/* === HERO SECTION === */}
      <section className="hero-section d-flex align-items-center position-relative">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center h-100 mt-5 pt-5">
            {/* LEFT SIDE - TEXT + BUTTONS */}
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
              {serviceName && (
                <h1 className="service-name mb-2">{serviceName}</h1>
              )}
              <h2 className="serviceheading mb-3">{renderTitle()}</h2>
              <p className="text-white-50 mb-4">{subtitle}</p>

              {heroButtons.length > 0 && (
                <div className="d-flex flex-wrap gap-3 mt-3">
                  {heroButtons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      target={btn.target || "_self"}
                      rel="noopener noreferrer"
                      className="banner-btn"
                    >
                      <span>{btn.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-left align-items-center">
              <div className="hero-image-wrapper w-100">
                {heroImage && (
                  <img
                    src={heroImage}
                    alt="Hero Illustration"
                    className="hero-img"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === STYLES === */}
      <style jsx>{`
        .hero-section {
          height: 70vh !important;
          background: url(${bgImage}) center/cover no-repeat;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        @media (max-width: 990px) {
          .hero-section {
            height: 90vh !important;
          }
        }

        .serviceheading {
          color: #0d2b75 !important;
          font-size: 3.2rem !important;
          font-weight: 500 !important;
          letter-spacing: -1.55px !important;
          line-height: 60px !important;
        }

        @media (max-width: 980px) and (min-width: 571px) {
          .serviceheading {
            font-size: 2.4rem !important;
            line-height: 50px !important;
          }
        }

        @media (max-width: 570px) {
          .serviceheading {
            font-size: 2rem !important;
            line-height: 38px !important;
          }
        }

        .service-name {
          color: #616262 !important;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.96px;
          text-transform: uppercase;
        }

        p {
          color: #0d2b75 !important;
          font-size: 1rem;
          font-weight: 400;
          letter-spacing: -0.48px;
          line-height: 24px;
        }

        .hero-image-wrapper {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 3px;
          padding: 0px;
          width: 85% !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 570px) {
          .hero-image-wrapper {
            width: 100% !important;
          }
        }

        .hero-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 3px;
          transform: scale(0.9);
        }

        .banner-btn {
          background: #0d2b75;
          color: white;
          font-weight: 500;
          padding: 12px 28px;
          border-radius: 3px;
          transition: all 0.3s ease;
          border: 1px solid #0d2b75;
          text-decoration: none;
        }

        .banner-btn:hover {
          background: transparent;
          color: #0d2b75;
        }
      `}</style>
    </>
  );
};

export default HeroOnly;
