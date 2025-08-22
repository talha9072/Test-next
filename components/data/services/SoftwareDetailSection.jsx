import React from 'react';
import PropTypes from 'prop-types';

export default function SoftwareDetailSection({
  imageSrc,
  imageAlt,
  numberMain,
  numberSub,
  label,
  heading,
  listItems,
  ctaText,
  ctaHref,
  phoneText,
  phoneHref,
}) {
  return (
    <section className="big-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Image & Overlay Badge */}
          <div className="col-lg-6 position-relative md-mb-50px sm-mb-30px">
            <figure className="position-relative mb-0 overflow-hidden">
              <img src={imageSrc} className="w-100 rounded" alt={imageAlt} />
              <figcaption className="position-absolute text-center left-0 bottom-0 bg-white">
                <span className="text-dark-gray ls-minus-2px position-relative mb-5px d-block alt-font figheading">
                  {numberMain}
                  {numberSub && <sup className="fs-40 lh-40 text-dark-gray position-relative top-minus-40px">{numberSub}</sup>}
                </span>
                <span className="d-block mx-auto fs-14 fw-600 lh-20 w-200px text-center text-dark-gray text-uppercase figtext">
                  {label}
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Text Content */}
          <div className="col-xl-5 col-lg-6 offset-xl-1 lg-ps-40px md-ps-15px">
            <h2 className="text-dark-gray fw-600 highlight-separator-small">
              {heading}
            </h2>
            <ul className="p-0 m-0 list-style-03 fw-500">
              {listItems.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <div className="d-inline-block w-100 mt-30px">
              <a href={ctaHref} className="btn service-btn">
                {ctaText}<i className="fa-regular fa-envelope"></i>
              </a>
              <a href={phoneHref} className="d-block d-sm-inline-block align-middle text-dark-gray text-dark-gray-hover fs-18 fw-600">
                <i className="feather icon-feather-phone-call icon-small me-10px"></i>{phoneText}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

SoftwareDetailSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  numberMain: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  numberSub: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  phoneText: PropTypes.string.isRequired,
  phoneHref: PropTypes.string.isRequired,
};

SoftwareDetailSection.defaultProps = {
  imageAlt: '',
  numberSub: null,
};
