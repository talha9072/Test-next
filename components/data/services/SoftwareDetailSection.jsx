import React from 'react';
import PropTypes from 'prop-types';

export default function SoftwareDetailSection({
  imageSrc,
  imageAlt,
  heading,
  listItems,
}) {
  return (
    <section className="big-section py-5" id="services">
      <div className="container">
        <div className="row align-items-center pt-0 pt-lg-5">
          
          {/* Image Only */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-100 rounded shadow-sm"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="col-lg-6">
            <h2 className="fw-700 text-dark-gray mb-4">
              {heading}
            </h2>
            <ul className="p-0 m-0 list-style-03 fw-500">
              {listItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

SoftwareDetailSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  heading: PropTypes.node.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

SoftwareDetailSection.defaultProps = {
  imageAlt: '',
};
