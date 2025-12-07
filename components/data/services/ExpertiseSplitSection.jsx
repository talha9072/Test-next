"use client";
import { useState } from "react";

export default function ExpertiseSplitSection({
  sectionId = "expertise-split",
  title = "Expertise & Industry Recognition",
  subtitle = "",
  tabs = [],
}) {
  const [active, setActive] = useState(0);

  return (
    <section id={sectionId} className="py-7 bg-lightblue">
      <style>{`
        /* =============================
           GLOBAL
        ============================= */
        .bg-lightblue{
        background-color: #e5f1ff;
        }
        .ex-wrapper {
          display: flex;
          gap: 50px;
        }

        /* =============================
           LEFT TABS
        ============================= */
        .ex-tabs {
          flex: 0 0 260px;
         
          padding-left: 20px;
        }

        .ex-tab {
          padding: 14px 0;
          font-size: 1.06rem;
          color: #555;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .ex-tab:hover {
          color: #0d2b75;
        }

        .ex-tab.active {
          font-weight: 600;
          color: #0d2b75;
          border-left: 3px solid #0d2b75;
          padding-left: 12px;
        }

        /* =============================
           RIGHT DARK PANEL
        ============================= */
        .ex-panel {
          flex: 1;
          background: #0D2B75;
          padding: 50px;
          border-radius: 8px;
          color: #fff;
          box-shadow: 0 12px 40px rgba(0,0,0,0.32);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .ex-panel h3 {
          margin-bottom: 16px;
        }

        .ex-panel p {
          opacity: 0.9;
          margin-bottom: 24px;
          line-height: 1.7;
        }

        /* =============================
           POINT WITH WHITE ICON
        ============================= */
        .ex-point {
          display: flex;
          gap: 14px;
          margin-bottom: 16px;
          font-size: 1.05rem;
          line-height: 1.65;
        }

        .ex-point i {
          color: #ffffff !important;
          font-size: 1.15rem;
        }

        /* =============================
           BUTTON
        ============================= */
        .ex-btn {
          background: #fff;
          color: #0d2b75;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 3px;
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .ex-btn:hover {
          background: #0d2b75;
          color: #fff;
          border: 1px solid #fff;
          transform: translateY(-2px);
        }

        /* =============================
           RESPONSIVE
        ============================= */
        @media(max-width: 992px) {
          .ex-wrapper {
            flex-direction: column;
          }

          .ex-tabs {
            flex: unset;
            border-left: none;
            padding-top: 20px;
            padding-left: 0;
          }

          .ex-tab.active {
            border-left: none;
            padding-left: 0;
            background: #fff;
            padding: 12px 16px;
          }

          .ex-panel {
            padding: 36px;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="fw-bold mb-2" style={{ color: "#0b1a3d" }}>{title}</h2>
        {subtitle && <p className="text-muted mb-5">{subtitle}</p>}

        <div className="ex-wrapper">

          {/* LEFT TABS */}
          <div className="ex-tabs">
            {tabs.map((t, i) => (
              <div
                key={i}
                className={`ex-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {t.label}
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="ex-panel">
            <h3 className="text-white">{tabs[active]?.title}</h3>
            <p>{tabs[active]?.desc}</p>

            {tabs[active]?.points?.map((p, idx) => (
              <div className="ex-point" key={idx}>
                <i className="bi bi-check2-circle"></i>
                <span>{p}</span>
              </div>
            ))}

            {tabs[active]?.cta && (
              <a
                href={tabs[active]?.link || "#"}
                className="ex-btn"
                target={tabs[active]?.link ? "_blank" : "_self"}
              >
                {tabs[active].cta}
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
