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
        <div className="row align-items-center mb-5 pt-0 pt-lg-5">
          <div className="col-lg-6">
            <h2 className="fw-bold text-dark-gray mb-4">{heading}</h2>
            {subheadingLines.map((line, idx) => (
              <p
                key={idx}
                className={
                  idx === subheadingLines.length - 1 
                    ? 'mb-0' 
                    : 'mb-2'
                }
              >
                <span dangerouslySetInnerHTML={{ __html: line }} />
              </p>
            ))}
          </div>
          <div className="col-lg-6">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="img-fluid rounded shadow-sm"
             
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4 cardsrow">
          {cards.map((card, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
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