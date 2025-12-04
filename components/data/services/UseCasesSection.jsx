"use client";
import { useState } from "react";
import Image from "next/image";

export default function UseCasesTabsSection({
  sectionId = "use-cases-tabs",
  subtitle = "USE CASES",
  title = "Use Cases & Industry Applications",
  intro = "",
  primaryColor = "#0d2b75",
  backgroundStyle = "#ffffff",
  tabs = [],
}) {
  const [activeTab, setActiveTab] = useState(0);

  /* ✔ Check if any tab has a valid label */
  const hasLabels = tabs.some(
    (t) => t.label && t.label.trim() !== ""
  );

  return (
    <section
      id={sectionId}
      className="py-7 position-relative"
      style={{ background: backgroundStyle }}
    >
      <style>{`
        .pill-bar {
          position: relative;
          z-index: 3;
          display: flex;
          gap: 14px;
          overflow-x: auto;
          padding: 6px 2px 12px 2px;
          scrollbar-width: none;
        }
        .pill-bar::-webkit-scrollbar { display: none; }

        .pill-item {
          padding: 10px 26px;
          border-radius: 30px;
          background: #f1f1f1;
          font-weight: 500;
          color: #444;
          border: 1px solid #e3e3e3;
          white-space: nowrap;
          cursor: pointer;
          transition: all .25s ease;
        }

        .pill-item:hover {
          background: #e6e6e6;
          transform: translateY(-2px);
        }

        .pill-item.active {
          background: ${primaryColor};
          color: #fff;
          border-color: ${primaryColor};
        }

        .uc-card {
          position: relative;
          z-index: 3;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e5e5e5;
          overflow: hidden;
          transition: all .3s ease;
          height: 100%;
        }

        .uc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 18px 48px rgba(0,0,0,0.10);
        }

        .uc-img-container { padding: 8px; }
        .uc-body { padding: 20px; }

        .uc-image {
          border-radius: 16px;
          border: 1px solid #e6e6e6;
        }

        .uc-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #666;
          margin-bottom: 6px;
        }

        .uc-title {
          font-size: 1.22rem;
          font-weight: 700;
          color: #0b1a3d;
          margin-bottom: 10px;
        }

        .uc-desc {
          font-size: 0.97rem;
          color: #444;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .uc-cta {
          font-weight: 600;
          color: ${primaryColor};
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .cta-arrow {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(13,43,117,0.10);
          margin-right: 10px;
        }

        .uc-cta:hover .cta-arrow {
          background: ${primaryColor};
          color: #fff;
        }
      `}</style>

      <div className="container position-relative" style={{ zIndex: 4 }}>
        
        {/* HEADER */}
        {subtitle && (
          <p className="text-uppercase fw-semibold small text-muted mb-1">
            {subtitle}
          </p>
        )}

        <h2 className="fw-bold mb-3" style={{ color: "#0b1a3d" }}>
          {title}
        </h2>

        {intro && <p className="mb-4">{intro}</p>}

        {/* ✔ Only show pills bar if at least 1 label exists */}
        {hasLabels && (
          <div className="pill-bar mb-5">
            {tabs.map((t, i) =>
              t.label && t.label.trim() !== "" ? (
                <button
                  key={i}
                  className={`pill-item ${activeTab === i ? "active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {t.label}
                </button>
              ) : null
            )}
          </div>
        )}

        {/* ✔ Cards ALWAYS use original tabs (not filtered) */}
        <div className="row g-4">
          {tabs[activeTab]?.items?.map((card, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="uc-card">

                {card.image && (
                  <div className="uc-img-container">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={600}
                      height={350}
                      className="uc-image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                )}

                <div className="uc-body">

                  {/* Label only if exists */}
                  {card.label && (
                    <div className="uc-label">{card.label}</div>
                  )}

                  <div className="uc-title">{card.title}</div>
                  <p className="uc-desc">{card.desc}</p>

                  <a
                    className="uc-cta"
                    href={card.link || "#"}
                    target={card.link ? "_blank" : "_self"}
                  >
                    <div className="cta-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                    {card.cta || "Learn More"}
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
