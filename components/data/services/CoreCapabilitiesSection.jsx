// components/CoreCapabilitiesSection.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function CoreCapabilitiesSection({ heading, tabs }) {
  return (
    <section className="bg-solitude-blue position-relative py-5">
      <div className="container">
        <div className="row">
          <div className="col tab-style-01">
            <h2 className="text-center text-dark-gray fw-700 mb-4">{heading}</h2>
            <ul className="nav nav-tabs justify-content-center border-0 text-center fs-18 alt-font fw-600 mb-4">
              {tabs.map((tab, idx) => (
                <li className="nav-item" key={tab.id}>
                  <a
                    className={`nav-link${idx === 0 ? ' active' : ''}`}
                    data-bs-toggle="tab"
                    href={`#${tab.id}`}
                  >
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="tab-content">
              {tabs.map((tab, idx) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade${idx === 0 ? ' show active' : ''}`}
                  id={tab.id}
                >
                  <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0 animation-float">
                      <img
                        src={tab.content.imageSrc}
                        alt={tab.content.imageAlt}
                        className="img-fluid rounded shadow"
                      loading='lazy'/>
                    </div>
                    <div className="col-md-6">
                      <h3 className="fw-bold text-dark-gray mb-3">
                        {tab.content.title}
                      </h3>
                      {tab.content.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className={
                            i < tab.content.paragraphs.length - 1 ? '' : 'mb-0'
                          }
                        >
                          {p}
                        </p>
                      ))}
                    </div>
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

CoreCapabilitiesSection.propTypes = {
  heading: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.shape({
        imageSrc: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        paragraphs: PropTypes.arrayOf(PropTypes.node).isRequired,
      }).isRequired,
    })
  ).isRequired,
};