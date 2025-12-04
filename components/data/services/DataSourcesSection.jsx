"use client";
import React from "react";
import Image from "next/image";

export default function DataSourcesSection({
  title = "Connect to Over 200+ Data Sources",
  description = "Power BI supports data ingestion from over 200+ sources, including SQL, Access, Excel, Google Analytics, cloud services, databases, device-generated data, spreadsheets, and even unstructured data from external systems. This flexibility allows organisations to centralise all their data into a single, unified reporting layer.",
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

        {/* BIG CARD WRAPPER */}
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
          <div
            className="icon-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(10, 1fr)", // ★ 10 per row
              gap: "25px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {icons.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.src}
                  alt={item.name}
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />

                <p className="data-source-name">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STYLES */}
        <style>{`
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
            color: #0d2b75; /* Main brand color */
            text-decoration-color: #0d2b75;
          }

          /* RESPONSIVE FIXES */
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
