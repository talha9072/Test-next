import React from 'react';

const features = [
  {
    icon: 'bi-cloud-check-fill',
    title: 'Microsoft Cloud Partner',
    text: 'Leverage our certified Microsoft partnership for cutting-edge solutions.',
  },
  {
    icon: 'bi-briefcase-fill',
    title: 'Cross-industry Expertise',
    text: 'Experience across finance, healthcare, retail, and more industries.',
  },
  {
    icon: 'bi-shield-lock-fill',
    title: 'Agile & Secure Development',
    text: 'Solutions built to scale with agility and robust security.',
  },
  {
    icon: 'bi-chat-dots-fill',
    title: 'Transparent Communication',
    text: 'We work closely with you with full visibility and accountability.',
  },
  {
    icon: 'bi-bar-chart-line-fill',
    title: 'Proven Results',
    text: 'Trusted by global and regional enterprises to deliver performance.',
  },
  {
    icon: 'bi-person-check-fill',
    title: 'Long-term Support',
    text: 'Ongoing partnership and support post-deployment and beyond.',
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose bg-white py-5">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-xl-7 col-lg-8 text-center">
            <h2 className="mb-5">Why Choose Novum?</h2>
          </div>
        </div>

        {/* Center the whole grid, keep items left-aligned */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center features-grid">
          {features.map((f, i) => (
            <div key={i} className="col col-md-6 col-lg-4 icon-with-text-style-01 mb-50px sm-mb-40px">
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin d-flex align-items-start text-start">
                <div className="feature-box-icon me-3">
                  <i className={`bi ${f.icon}`} />
                </div>
                <div className="feature-box-content">
                  <span className="feature-title">{f.title}</span>
                  <p className="feature-text">{f.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}