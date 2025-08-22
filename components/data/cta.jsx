// components/data/cta.jsx
import React from 'react';

export default function CTA({
  bgImage = '/images/cta-bg.webp',
  heading = 'Need a solution? Request a call!',
  subText = 'For pricing information about services simply complete the form below and one of our sales professionals will contact you within one business day.',
  buttonText = 'Get in Touch',
  buttonHref = '#',
}) {
  return (
    <section
      data-parallax-background-ratio="0.5"
      className="section-padding"
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'rgba(13, 43, 117, 0.6)',
          zIndex: 1,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row d-flex flex-column align-items-start justify-content-center">
          {/* Text Column */}
          <div className="col-xl-6 text-left text-xl-start">
            <h2
              className="mb-4"
              style={{ color: 'white' }}
            >
              {heading}
            </h2>
            <p
              style={{ color: 'white',opacity: 0.8 }}
            >
              {subText}
            </p>
          </div>

          {/* Button Column */}
          <div className="col-xl-6 text-left text-xl-start mt-4">
            <a
              href={buttonHref}
              className="btn left-icon btn-box-shadow text-transform-none fw-600 ls-0px d-inline-block align-middle me-15px xs-m-10px"
              style={{
                padding: '7px 14px',
                borderRadius: '3px',
                position: 'relative',
                zIndex: 10,
                isolation: 'isolate',
                backgroundColor: 'white',
                borderColor: 'var(--base-color)',
                color: 'var(--base-color)',
              }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}