import React from 'react';
import PropTypes from 'prop-types';

export default function SoftwareSolutionsSection({
  title,
  paragraphs,
  imageSrc,
  altText = '',
  sectionClass = 'position-relative overflow-hidden py-5'
}) {
  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Text */}
          <div className={`col-lg-7 position-relative`}>  
            <h2 className="fw-700 text-dark-gray mb-4">
              {title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
            {paragraphs.map((text, i) => (
              <p key={i} className={i < paragraphs.length - 1 ? 'mb-4' : 'mb-0'}>
                {text}
              </p>
            ))}
          </div>

          {/* Right Image */}
          <div className="col-lg-5 text-center">
            <img src={imageSrc} alt={altText} className="img-fluid rounded shadow" width="100%" height="auto" />
          </div>

        </div>
      </div>
    </section>
  );
}

SoftwareSolutionsSection.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  bgLogoClass: PropTypes.string,
  sectionClass: PropTypes.string
};

SoftwareSolutionsSection.defaultProps = {
  altText: '',
  bgLogoClass: 'novum-bg-logo',
  sectionClass: 'position-relative overflow-hidden py-5'
};
