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
        <div className="row align-items-center pt-0 pt-lg-5">

          {/* Image & Overlay Badge */}
          <div className="col-lg-6">
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
          <div className="col-lg-6">
            <h2 className="fw-700 text-dark-gray mb-4">
              {heading}
            </h2>
            <ul className="p-0 m-0 list-style-03 fw-500">
              {listItems.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <div className="d-inline-block w-100 mt-3">
              <a href={ctaHref} className="btn service-btn">
                {ctaText}<i className="fa-regular fa-envelope"></i>
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
