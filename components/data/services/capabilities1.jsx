"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function CoreCapabilitiesSection({
  sectionId = "core-capabilities",
  title = "Core Capabilities",
  tabs = [],
  sectionClass = "py-7 position-relative",
  primaryColor = "#0d2b75"
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id={sectionId} className={sectionClass}>
      <style>{`
        .novum-primary { color: ${primaryColor}; }
        .novum-bg-primary { background-color: ${primaryColor}; }
        .tab-active {
          background: ${primaryColor} !important;
          color: #fff !important;
          border-color: ${primaryColor} !important;
        }
        .tab-btn {
          transition: all 0.25s ease;
          border-left: 4px solid transparent;
        }
        .tab-btn:hover {
          background: rgba(13, 43, 117, 0.08);
        }
        .tab-active-border {
          border-left: 4px solid ${primaryColor} !important;
        }
      `}</style>

      <div className="container">
        <h2 className="text-center fw-bold mb-5">{title}</h2>

        <div className="row align-items-start">
          
          {/* LEFT TABS */}
          <div className="col-lg-4 col-md-5 mb-4">
            <div className="list-group shadow-sm rounded overflow-hidden">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`list-group-item list-group-item-action py-3 tab-btn 
                    ${activeTab === index ? "tab-active tab-active-border fw-bold" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="col-lg-8 col-md-7">

            {/* PER-TAB IMAGE */}
            {tabs[activeTab]?.image && (
              <div className="mb-4 text-center">
                <Image
                  src={tabs[activeTab].image}
                  width={900}
                  height={600}
                  alt={tabs[activeTab].label}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            )}

            {/* FEATURE CARDS */}
            <div className="row g-4">
              {tabs[activeTab]?.features?.map((feature, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="p-4 border rounded h-100 shadow-sm bg-white">
                    <h5 className="fw-semibold mb-3 novum-primary d-flex align-items-center">
                      <i className={`${feature.icon} me-2 fs-4`}></i>
                      {feature.title}
                    </h5>

                    <ul className="list-unstyled">
                      {feature.points.map((pt, i) => (
                        <li key={i} className="d-flex align-items-start mb-2">
                          <i
                            className="bi bi-check2-circle text-novum-blue fs-5 me-2"
                            style={{ color: primaryColor }}
                          ></i>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
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
