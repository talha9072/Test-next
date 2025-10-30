"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AirportStakeholdersSection({
  sectionId = "airport-stakeholders",
  heading,
  subheading,
  tabs = [],
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-5" id={sectionId}>
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 className="fw-700 text-dark-gray mb-4">{heading}</h2>
            <p className="mb-2">{subheading}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="row">
          <div className="col tab-style-03">
            {/* Nav Tabs */}
            <ul
              className="nav nav-tabs justify-content-center text-center fw-500 border-color-light-medium-gray mb-4"
              role="tablist"
            >
              {tabs.map((tab, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={`nav-link ${index === activeTab ? "active" : ""}`}
                    onClick={() => setActiveTab(index)}
                    type="button"
                    role="tab"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${
                    index === activeTab ? "show active" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="row align-items-stretch justify-content-center gy-4 gy-md-1">
                    {/* Image */}
                    <div className="col-lg-6 d-flex align-items-stretch">
                      <figure className="rounded mb-0 w-100">
                        <img
                          src={tab.imageSrc}
                          alt={tab.altText}
                          className="rounded w-100 h-100 object-fit-cover"
                        />
                      </figure>
                    </div>

                    {/* Text */}
                    <div className="col-lg-6 d-flex align-items-center py-4">
                      <div>
                        <h3 className="fw-700 text-dark-gray mb-4 fs-5 text-uppercase text-gradient-fast-blue-purple">
                          {tab.title}
                        </h3>
                        <p className="mb-4">{tab.description}</p>
                        <a className="btn-two" href={tab.buttonHref || "/contact"}>
                          {tab.buttonText || "Explore More"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* /tab-content */}
          </div>
        </div>
      </div>
    </section>
  );
}

AirportStakeholdersSection.propTypes = {
  sectionId: PropTypes.string,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      altText: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string,
      buttonHref: PropTypes.string,
    })
  ).isRequired,
};
