"use client";

import { useState } from "react";

export default function Tab1({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container py-5">
      {/* Tabs */}
      <ul className="nav nav-pills justify-content-center mb-4">
        {tabs.map((tab, idx) => (
          <li className="nav-item" key={idx}>
            <button
              className={`nav-link px-4 ${activeIndex === idx ? "active" : "text-secondary"}`}
              onClick={() => setActiveIndex(idx)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Content: image left, text right */}
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={tabs[activeIndex].image}
            alt={tabs[activeIndex].label}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 text-start">
          {tabs[activeIndex].content}
        </div>
      </div>
    </div>
  );
}