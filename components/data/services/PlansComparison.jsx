import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a 3-card comparison of Microsoft 365 plans.
 *
 * Props:
 * - plans: array of exactly 3 plan objects:
 *    - title: string
 *    - features: string[]
 *    - apps: { src: string, alt: string }[]
 *    - ctaText?: string
 *    - ctaHref?: string
 */
export default function PlansComparison({ plans }) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {plans.map((plan, idx) => (
            <div key={idx} className="col-md-4">
              <div className="border rounded p-4 bg-white text-center shadow-sm h-100 d-flex flex-column">
                {/* Title */}
                <h5 className="fw-bold main-clr mb-3">
                  {plan.title}
                </h5>

                {/* Feature list */}
                <ul className="list-unstyled text-start mb-4 fs-15">
                  {plan.features.map((feat, i) => (
                    <li
                      key={i}
                      className={i < plan.features.length - 1 ? 'mb-2' : ''}
                    >
                      <span className="me-2 main-clr">✔</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA + Apps grid */}
                <div className="mt-auto">
                  {plan.ctaText && plan.ctaHref && (
                    <a
                      href={plan.ctaHref}
                      className="btn btn-base-color btn-sm w-100 mb-4 btn-round-edge"
                    >
                      {plan.ctaText}
                    </a>
                  )}
                  <h6 className="fw-bold fs-16 mb-4 text-dark serviceincluded">
                    Apps and services included
                  </h6>
                  <div className="apps-wrapper">
                    <div className="row row-cols-3 g-3">
                      {plan.apps.map((app, j) => (
                        <div key={j} className="col text-center">
                          <img
                            src={app.src}
                            alt={app.alt}
                            className="app-icon"
                          />
                          <div className="fs-13 mt-1 text-outline-novum">
                            {app.alt}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

PlansComparison.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      title:    PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      apps:     PropTypes.arrayOf(
                  PropTypes.shape({
                    src: PropTypes.string.isRequired,
                    alt: PropTypes.string.isRequired
                  })
                ).isRequired,
      ctaText:  PropTypes.string,
      ctaHref:  PropTypes.string
    })
  ).isRequired
}