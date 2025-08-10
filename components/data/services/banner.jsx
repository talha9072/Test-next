import React from 'react';
import PropTypes from 'prop-types';

export default function BannerSection({
  bgImage,
  title,
  icon,
  borderColorStart,
  borderColorEnd,
}) {
  const sectionStyle = {
    height: '60vh',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const borderStyle = {
    height: '6px',
    backgroundImage: `linear-gradient(90deg, ${borderColorStart}, ${borderColorEnd})`,
    zIndex: 3,
  };

  return (
    <section
      className="top-space-margin page-title-big-typography cover-background d-flex align-items-center position-relative"
      style={sectionStyle}
    >
      {/* Gradient Bottom Border */}
      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={borderStyle}
      />

      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-start align-items-center h-100">
          <div className="col-lg-8 col-sm-10">
            <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start mb-3 gap-lg-4">
              {icon && (
                <img
                  src={icon}
                  className="service-hero-icon me-sm-3 mb-2 mb-sm-0"
                  alt="Icon"
                />
              )}
              <h1 className="text-white text-shadow-medium fw-bold mb-0">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

BannerSection.propTypes = {
  bgImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  borderColorStart: PropTypes.string,
  borderColorEnd: PropTypes.string,
};

BannerSection.defaultProps = {
  icon: null,
  borderColorStart: '#F7E078',
  borderColorEnd: '#DA9B0E',
};
