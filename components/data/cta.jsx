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
            <h3
              className="mb-3 fw-500 ls-minus-1px"
              style={{ color: 'white' }}
            >
              {heading}
            </h3>
            <span
              style={{ color: 'white', fontSize: '1.1875rem', opacity: 0.5 }}
            >
              {subText}
            </span>
          </div>

          {/* Button Column */}
          <div className="col-xl-6 text-left text-xl-start pt-3">
            <a
              href={buttonHref}
              className="btn left-icon btn-box-shadow text-transform-none fw-600 ls-0px d-inline-block align-middle me-15px xs-m-10px"
              style={{
                padding: '14px 18px',
                borderRadius: '6px',
                position: 'relative',
                zIndex: 10,
                isolation: 'isolate',
                backgroundColor: 'white',
                borderColor: 'var(--base-color)',
                color: 'var(--base-color)',
              }}
            >
              <i className="feather icon-feather-mail me-2" />
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}