import React from 'react';
import PropTypes from 'prop-types';

/**
 * Microsoft365Section
 * Props:
 *  - badgeTitle: string
 *  - badgeText: string
 *  - plans: array of { title: string, backgroundImage: string }
 *  - diffText: string
 *  - subtitle: string
 *  - migrations: array of { number: string, title: string, text: string }
 */
export default function Microsoft365Section({
  badgeTitle,
  badgeText,
  plans,
  diffText,
  subtitle,
  migrations,
}) {
  return (
    <section className="py-5 position-relative bg-solitude-blue">
      <div className="container">

        {/* Badge + Heading */}
        <div className="mb-4">
          <h2 className="m365-badge">{badgeTitle}</h2>
          <p className="mt-3 mb-0">{badgeText}</p>
        </div>

        {/* Plan Boxes */}
        <div className="row g-4 mb-5">
          {plans.map((plan, idx) => (
            <div className="col-md-6" key={idx}>
              <div
                className="m365-plan-box text-white rounded shadow-sm p-4 p-md-4"
                style={{
                  minHeight: '180px',
                  background: `linear-gradient(135deg, rgba(59, 74, 158, 0.6), rgba(13, 43, 117, 0.9)), url('${plan.backgroundImage}') center/cover no-repeat`,
                }}
              >
                <h3 className="fw-bold fs-24 mb-0 text-white">{plan.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Difference Explanation */}
        <div className="text-center mb-5 px-md-5">
          <p className="mb-0">{diffText}</p>
        </div>

        {/* Subheading */}
        <div className="text-center mb-4">
          <h5 className="fw-bold text-novum-blue mb-0">{subtitle}</h5>
        </div>

        {/* Migration Cards */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {migrations.map((m, i) => (
            <div className="col" key={i}>
              <div className="bg-white p-4 rounded shadow-sm h-100 border">
                <h3 className="m365-num">{m.number}</h3>
                <p className="fw-600 mb-1">{m.title}</p>
                <p className="mb-0 text-muted">{m.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

Microsoft365Section.propTypes = {
  badgeTitle: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired,
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
    })
  ).isRequired,
  diffText: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  migrations: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
