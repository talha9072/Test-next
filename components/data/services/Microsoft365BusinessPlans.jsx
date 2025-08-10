import React from 'react';
import PropTypes from 'prop-types';

/**
 * Microsoft365BusinessPlans
 * Props:
 *  - badgeTitle: string
 *  - plans: array of { title: string, gradient: string, minHeight?: string }
 */
export default function Microsoft365BusinessPlans({ badgeTitle, plans }) {
  return (
    <section className="py-5">
      <div className="container">

        {/* Section Badge Heading */}
        <div className="mb-4">
          <h2 className="m365-badge">{badgeTitle}</h2>
        </div>

        {/* Plan Cards */}
        <div className="row g-4 row-cols-2 row-cols-md-4">
          {plans.map((plan, idx) => (
            <div className="col" key={idx}>
              <div
                className="m365-box text-white rounded p-3 p-md-3 h-100"
                style={{
                  background: plan.gradient,
                  minHeight: plan.minHeight || '160px',
                }}
              >
                <div className="fw-bold fs-18" dangerouslySetInnerHTML={{ __html: plan.title }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Microsoft365BusinessPlans.propTypes = {
  badgeTitle: PropTypes.string.isRequired,
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      gradient: PropTypes.string.isRequired,
      minHeight: PropTypes.string,
    })
  ).isRequired,
};
