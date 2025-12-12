"use client";
import { useState } from "react";
import Image from "next/image";

export default function BigCardTabsSection({
  sectionId = "big-tabs-section",
  subtitle = "",
  title = "",
  primaryColor = "#0d2b75",
  backgroundGradient = "linear-gradient(to bottom right, #ffffff, #f4f6ff)",
  tabs = [] // [{label,leftImage,leftTitle,leftDesc,cards:[...] }]
}) {
  const [active, setActive] = useState(0);

  return (
    <section
      id={sectionId}
      className="py-7"
      style={{ background: backgroundGradient }}
    >
      <style>{`
        /* ------------------------------------------------
           TABS
        ------------------------------------------------ */
        .bc-tabs {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          padding-bottom: 14px;
          margin-bottom: 32px;
          white-space: nowrap;
        }
        .bc-tabs::-webkit-scrollbar { display: none; }

        .bc-tab {
          padding: 10px 26px;
          border-radius: 30px;
          background: #eef2ff;
          border: 1px solid #d9e2ff;
          color: #444;
          cursor: pointer;
          transition: .25s;
          font-weight: 500;
        }
        .bc-tab.active {
          background: ${primaryColor};
          border-color: ${primaryColor};
          color: #fff;
        }

        /* ------------------------------------------------
           LEFT CARD: IMAGE + OVERLAY TEXT AT BOTTOM
        ------------------------------------------------ */
        .bc-left-card {
          position: relative;
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #e1e6f0;
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
        }

        .bc-left-img {
            position: absolute !important;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
            }

            .bc-gradient {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 200px;
            background: linear-gradient(
                rgba(0, 0, 0, 0),
                rgba(43, 43, 43, 1)
            );
            z-index: 2;
            pointer-events: none;
            }

            .bc-left-overlay-text {
            position: absolute;
            bottom: 18px;
            left: 22px;
            right: 22px;
            z-index: 3;
            }

        .bc-left-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
          text-shadow: 0 2px 6px rgba(0,0,0,0.4);
        }

        .bc-left-desc {
          font-size: .95rem;
          color: #f0f3ff;
          line-height: 1.5;
          text-shadow: 0 2px 6px rgba(0,0,0,0.35);
        }

        /* ------------------------------------------------
           RIGHT GRID (3 PER ROW)
        ------------------------------------------------ */
        .bc-grid-card {
          border-radius: 6px;
          background: #fff;
          border: 1px solid #e3e6ef;
          padding: 28px;
          height: 100%;
          transition: .25s ease;
        }

        .bc-grid-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.07);
        }

        .bc-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: #eef2ff;
          color: ${primaryColor};
          font-size: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 14px;
        }

        .bc-grid-title {
          font-size: 1.12rem;
          font-weight: 700;
          color: #0b1a3d;
          margin-bottom: 8px;
        }

        .bc-grid-desc {
          color: #555;
          font-size: .92rem;
          line-height: 1.55;
        }

      `}</style>

      <div className="container">

        {subtitle && (
          <p className="text-uppercase fw-semibold small text-muted mb-1">
            {subtitle}
          </p>
        )}

        {title && (
          <h2 className="fw-bold mb-4" style={{ color: "#0b1a3d" }}>
            {title}
          </h2>
        )}

        {/* TABS */}
        <div className="bc-tabs">
          {tabs.map((t, i) => (
            <div
              key={i}
              className={`bc-tab ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </div>
          ))}
        </div>

        {/* LEFT + RIGHT GRID */}
        <div className="row g-4 align-items-stretch">

          {/* LEFT CARD */}
          <div className="col-lg-5 d-flex">
            <div className="bc-left-card">

              <Image
                src={tabs[active].leftImage}
                alt="tab image"
                fill
                className="bc-left-img"
              />

              <div className="bc-gradient"></div>

              <div className="bc-left-overlay-text">
                <div className="bc-left-title">{tabs[active].leftTitle}</div>
                <div className="bc-left-desc">{tabs[active].leftDesc}</div>
              </div>

            </div>
          </div>

          {/* RIGHT 3-CARD GRID */}
          <div className="col-lg-7">
            <div className="row g-4">
              {tabs[active].cards.map((card, idx) => (
                <div className="col-lg-4 col-md-6 d-flex" key={idx}>
                  <div className="bc-grid-card w-100">
                    <div className="bc-icon"><i className={card.icon}></i></div>
                    <div className="bc-grid-title">{card.title}</div>
                    <div className="bc-grid-desc">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
