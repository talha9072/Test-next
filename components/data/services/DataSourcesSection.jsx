"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function DataSourcesSection({
  title = "Connect to Over 200+ Data Sources",
  description = "Power BI supports data ingestion from over 200+ sources...",
  icons = [], // [{src:"", name:""}]
  fullImage = "", // 🔥 NEW PROP -> large image to open in popup
  sectionClass = "py-7",
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={sectionClass} style={{ background: "#e5f1ff" }}>
      <div className="container">

        {/* TOP HEADING */}
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">{title}</h2>

          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            {description}
          </p>

          {/* VIEW ALL BUTTON */}
          {fullImage && (
            <button
              onClick={() => setShowModal(true)}
              className="view-all-btn mt-2"
            >
              View All Sources
            </button>
          )}
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

        {/* POPUP MODAL */}
        {showModal && (
          <div
            className="modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>

              {/* Fullsize Image */}
              <Image
                src={fullImage}
                alt="All Sources"
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </div>
          </div>
        )}

        {/* STYLES */}
        <style>{`
          /* View All Button */
          .view-all-btn {
            background: transparent;
            border: 1px solid #0d2b75;
            color: #0d2b75;
            padding: 6px 16px;
            border-radius: 3px;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          .view-all-btn:hover {
            background: #0d2b75;
            color: #fff;
          }

          /* Icon Grid */
          .icon-grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            gap: 25px;
            align-items: center;
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
          }
          .data-source-name:hover {
            color: #0d2b75;
            text-decoration-color: #0d2b75;
          }

          /* Popup Modal */
          .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.65);
            backdrop-filter: blur(4px);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .modal-content {
            position: relative;
            max-width: 1000px;
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
          }
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.4);
            color: #fff;
            border: none;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 22px;
            z-index: 10;
          }
          .close-btn:hover {
            background: rgba(0,0,0,0.6);
          }

          /* Responsiveness */
          @media (max-width: 1200px) {
            .icon-grid { grid-template-columns: repeat(6, 1fr); }
          }
          @media (max-width: 768px) {
            .icon-grid { grid-template-columns: repeat(4, 1fr); }
          }
          @media (max-width: 480px) {
            .icon-grid { grid-template-columns: repeat(3, 1fr); }
          }
        `}</style>

      </div>
    </section>
  );
}
