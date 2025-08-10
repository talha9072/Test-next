// components/QuickLinks.jsx
import React from 'react';

export default function QuickLinks() {
  const links = [
    'Case Study',
    'Microsoft Licenses',
    'What is Power BI?',
    'The Digital Apron',
    'Data Analytics Partner',
    'Novum Digital Academy',
    'Data Audit',
    'Power BI Reports',
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Left: Image with overlay */}
          <div className="col-lg-7 d-flex">
            <a href="#" className="text-decoration-none d-flex w-100">
              <div
                className="position-relative overflow-hidden rounded-4 shadow-lg w-100 d-flex flex-column justify-content-center"
                style={{ minHeight: '100%', aspectRatio: '16/9' }}
              >
                <img
                  src="https://novum-ae.netlify.app//.netlify/images?url=/images/provided-services/cta1.jpg"
                  alt="Novum for Business"
                  className="w-100 h-100 object-fit-cover rounded-4"
                />

                {/* Dark overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                  style={{ background: 'rgba(0, 0, 0, 0.65)' }}
                />

                {/* Overlay Text */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-4 rounded-4">
                  <span className="text-white small mb-1">Solution</span>
                  <h2 className="text-white fw-bold mb-2">Novum for Business</h2>
                  <p className="text-white mb-0">
                    Learn how Novum primes your business for effective digital transformation.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Right: CTA Card */}
          <div className="col-lg-5 d-flex">
            <div className="bg-grey p-4 rounded-4 shadow-sm border-start border-4 border-color-base-color w-100 d-flex flex-column justify-content-center">
              <h3 className="fw-bold mb-3 text-dark">Explore Business Solutions</h3>
              <ul className="list-unstyled mb-0">
                {links.map((text, i) => (
                  <li key={i} className="mb-3">
                    <a href="#" className="text-dark text-decoration-none fw-medium">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
