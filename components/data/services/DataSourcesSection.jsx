"use client";
import React from "react";
import Image from "next/image";

export default function DataSourcesSection({
  title = "Connect to Over 200+ Data Sources",
  description = "Power BI supports data ingestion from over 200+ sources...",
  icons = [], // [{src:"", name:""}]
  sectionClass = "py-7",
}) {
  return (
    <section className={sectionClass} style={{ background: "#e5f1ff" }}>
      <div className="container">

        {/* TOP HEADING */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">{title}</h2>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            {description}
          </p>
        </div>

        {/* MAIN WRAPPER CARD */}
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "35px",
            border: "1px solid #e5e5e5",
            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
          }}
        >
          {/* ICON GRID */}
          <div className="icon-grid">
            {icons.map((item, index) => (
              <div key={index} className="icon-card">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
                <p className="data-source-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STYLES */}
        <style>{`
          .icon-grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr); /* Default desktop */
            gap: 25px;
            align-items: center;
            text-align: center;
          }

          .icon-card {
            text-align: center;
          }

          .data-source-name {
            margin-top: 8px;
            font-size: 0.75rem;
            font-weight: 500;
            color: #333;
            text-decoration: underline;
            text-underline-offset: 3px;
            transition: all 0.25s ease;
            cursor: pointer;
          }

          .data-source-name:hover {
            color: #0d2b75;
            text-decoration-color: #0d2b75;
          }

          /* RESPONSIVE BREAKPOINTS */
          @media (max-width: 1200px) {
            .icon-grid {
              grid-template-columns: repeat(6, 1fr);
            }
          }

          @media (max-width: 768px) {
            .icon-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          @media (max-width: 480px) {
            .icon-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>

      </div>
    </section>
  );
}
