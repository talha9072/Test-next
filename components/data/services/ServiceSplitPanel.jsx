"use client";
import { useState } from "react";

export default function ServiceSplitPanel({
  sectionId = "service-panel",
  title = "What can we help you with?",
  items = [],
  primaryColor = "#0d2b75",
  sectionClass = "py-5",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <section id={sectionId} className={sectionClass}>
      <div className="container">
        
        {/* ⭐ FIX: Equal height columns */}
        <div className="row gy-5 align-items-stretch">

          {/* LEFT SIDE */}
          <div className="col-lg-5 d-flex">
            <div className="left-box w-100 d-flex flex-column">

              <h2 className="fw-bold mb-4">
                {title}
              </h2>

              <div className="service-list flex-grow-1">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`service-list-item ${
                      activeIndex === i ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <span>{item.label}</span>

                    <div className="arrow-btn">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 col-lg-6 offset-lg-1 d-flex">
            <div className="panel-box p-5 rounded-2 d-flex flex-column flex-grow-1">

              <h3 className="fw-bold mb-3">
                {active.label}
              </h3>

              {active.paragraphs?.map((p, idx) => (
                <p key={idx} className="text-muted mb-3">{p}</p>
              ))}

              {active.listItems && (
                <ul className="custom-list mt-3">
                  {active.listItems.map((li, idx) => (
                    <li key={idx}>
                      <i
                        className="bi bi-check2-circle me-2"
                        style={{ color: primaryColor }}
                      ></i>
                      {li}
                    </li>
                  ))}
                </ul>
              )}

              {active.buttonText && (
                <a
                  href={active.buttonLink || "#"}
                  className="btn btn-primary mt-auto"
                  style={{
                    background: primaryColor,
                    borderColor: primaryColor,
                  }}
                >
                  {active.buttonText}
                </a>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* ====================== STYLES ====================== */}
      <style jsx>{`
  .left-box {
    background: #ffffff;
  }

  .service-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .service-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 1.15rem;
    cursor: pointer;
    transition: 0.25s ease;
  }

  .service-list-item span {
    flex-grow: 1;
  }

  .arrow-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #e8eaf6;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;
    flex-shrink: 0;
  }

  .arrow-btn i {
    font-size: 1.1rem;
    color: ${primaryColor};
    transition: 0.3s ease;
  }

  .service-list-item:hover .arrow-btn,
  .service-list-item.active .arrow-btn {
    background: ${primaryColor};
  }

  .service-list-item:hover .arrow-btn i,
  .service-list-item.active .arrow-btn i {
    color: #fff;
  }

  .service-list-item.active {
    font-weight: 600;
    color: ${primaryColor};
    border-bottom: 2px solid ${primaryColor};
  }

  .panel-box {
    background: #e5f1ff;
    min-height: 100%;
  }

  /* === UL Fix: remove dots + remove padding/margin === */
  .custom-list {
    list-style: none;
    padding: 0 !important;
    margin: 0 !important;
  }

  .custom-list li {
    margin-bottom: 8px;
    display: flex;
    align-items: flex-start;
  }
      `}</style>

    </section>
  );
}
