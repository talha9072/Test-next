import React from 'react';
import PropTypes from 'prop-types';

/**
 * EnterprisePlans
 *
 * Props:
 * - badgeTitle: string
 * - cards: array of {
 *     iconSrc: string,
 *     iconAlt: string,
 *     titleHtml: string,       // HTML string for title and inline spans
 *     description?: string,    // optional descriptive text
 *     ctaText?: string,        // optional CTA button text
 *     ctaHref?: string         // optional CTA button href
 *   }
 */
export default function EnterprisePlans({ badgeTitle, cards }) {
  return (
    <section className="py-5">
      <div className="container">

        {/* Section Badge Heading */}
        <div className="mb-3">
          <h2 className="m365-badge">{badgeTitle}</h2>
        </div>

        {/* Enterprise Cards */}
        <div className="d-flex flex-column gap-3">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-enterprise-card text-white rounded p-3 p-md-4 d-flex align-items-start"
            >
              <div className="icon-col me-3">
                <div className="icon-circle">
                  <img
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    width="40"
                    height="40"
                  />
                </div>
              </div>
              <div className="text-col d-flex flex-column fs-15">
                {/* Title HTML with possible inline spans */}
                <div
                  className={card.ctaText ? 'mb-2' : ''}
                  dangerouslySetInnerHTML={{ __html: card.titleHtml }}
                />
                {/* Optional description */}
                {card.description && (
                  <p className="mb-0">{card.description}</p>
                )}
                {/* Optional CTA button */}
                {card.ctaText && card.ctaHref && (
                  <a
                    href={card.ctaHref}
                    className="btn btn-light btn-sm btn-round-edge text-novum fw-semibold mt-2"
                  >
                    {card.ctaText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

EnterprisePlans.propTypes = {
  badgeTitle: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      iconSrc: PropTypes.string.isRequired,
      iconAlt: PropTypes.string.isRequired,
      titleHtml: PropTypes.string.isRequired,
      description: PropTypes.string,
      ctaText: PropTypes.string,
      ctaHref: PropTypes.string,
    })
  ).isRequired,
};