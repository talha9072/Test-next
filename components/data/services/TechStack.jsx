// components/common/TechStackTabs.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function TechStackTabs({ title, highlight, description, tabs }) {
  return (
    <section className="py-5 tech-stack-tabs">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold text-dark-gray">
          {title} <span style={{ color: '#0D2B75' }}>{highlight}</span>
        </h2>
        <p className="mb-2">{description}</p>

        {/* Tab Navigation */}
        <div className="tab-nav-wrapper border-bottom mb-5 position-relative">
          <ul
            className="nav nav-tabs justify-content-center border-0 tech-tab-nav"
            id="techStackTab"
            role="tablist"
          >
            {tabs.map((tab, idx) => (
              <li className="nav-item" role="presentation" key={tab.id}>
                <button
                  className={`nav-link${idx === 0 ? ' active' : ''}`}
                  id={`${tab.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="tab-content mt-4" id="techStackTabContent">
          {tabs.map((tab, idx) => (
            <div
              className={`tab-pane fade${idx === 0 ? ' show active' : ''}`}
              id={tab.id}
              role="tabpanel"
              key={tab.id}
            >
              <div className="row g-4 mt-5 justify-content-center">
                {tab.items.map((item, j) => (
                  <div className="col-6 col-sm-4 col-md-3 text-center" key={j}>
                    <img
                      src={item.src}
                      width={64}
                      height={64}
                      alt={item.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

TechStackTabs.propTypes = {
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  description: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
      ).isRequired,
    })
  ).isRequired,
};

TechStackTabs.defaultProps = {
  highlight: '',
  description: '',
};