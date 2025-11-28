"use client";
import React from "react";

export default function ConceptTwoCol({
  sectionId = "concept-two-col",
  title = "",
  intro = [],
  rightTitle = "Key Alignment Benefits",
  rightPoints = [],
  backgroundStyle = "linear-gradient(to bottom right, #f7f9ff, #e8eeff)", // ⭐ BG COLOR / GRADIENT
}) {
  return (
    <section
      id={sectionId}
      className="py-7"
      style={{ background: backgroundStyle }}
    >
      <style>{`
        

        .concept-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0b1a3d;
        }

        .concept-intro {
          font-size: 1.06rem;
          color: #444;
          line-height: 1.65;
          margin-bottom: 14px;
        }

        /* RIGHT COLUMN LIST */
        .right-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 18px;
          color: #0b1a3d;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
        }

        .check-item p {
          margin: 0;
          font-size: 1.05rem;
          color: #333;
          line-height: 1.55;
        }

        /* MOBILE SPACING FIX */
        @media (max-width: 768px) {
          .concept-wrapper {
            padding-left: 18px;
            margin-bottom: 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="row g-5 align-items-start">

          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            <div className="concept-wrapper">
              <h2 className="concept-title mb-4">{title}</h2>

              {intro.map((p, idx) => (
                <p key={idx} className="concept-intro">{p}</p>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6">
            <h4 className="right-title">{rightTitle}</h4>

            {rightPoints.map((text, idx) => (
              <div className="check-item" key={idx}>
                <i className="bi bi-check2-circle text-novum-blue fs-5 me-2"></i>
                <p>{text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
