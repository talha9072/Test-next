import React from 'react';
import PropTypes from 'prop-types';

export default function WhySection({ 
  heading, 
  subheadingLines, 
  imgSrc, 
  imgAlt, 
  cards 
}) {
  return (
    <section className="py-5 position-relative">
      <div className="container">

        {/* Top Section */}
        <div className="row align-items-center mb-3">
          <div className="col-lg-7 mb-lg-0">
            <h2 className="fw-bold text-dark-gray mb-3">{heading}</h2>
            {subheadingLines.map((line, idx) => (
              <p
                key={idx}
                className={
                  idx === subheadingLines.length - 1 
                    ? 'fs-16 text-muted mb-0' 
                    : 'text-muted mb-3'
                }
              >
                <span dangerouslySetInnerHTML={{ __html: line }} />
              </p>
            ))}
          </div>
          <div className="col-lg-5 ptb-sm-10 text-center">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: '420px' }}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {cards.map((card, i) => (
            <div className="col" key={i}>
              <div className="glass-card h-100">
                <div className="icon-circle card-icon mb-6">
                  <i className={card.iconClass} />
                </div>
                <h3 className="fw-600 fs-20 mb-2 cardtitle text-dark">{card.title}</h3>
                {/* Render plain text or HTML list */}
                <div
                  className="text-muted mb-0"
                  dangerouslySetInnerHTML={{ __html: card.text }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

WhySection.propTypes = {
  heading: PropTypes.string.isRequired,
  subheadingLines: PropTypes.arrayOf(PropTypes.string).isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      iconClass: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired, // accepts HTML string
    })
  ).isRequired,
};