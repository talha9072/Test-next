"use client";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

export default function WhyUs({
  id,
  subtitle,
  title,
  description,
  counters = [],
  features = [],
}) {
  const [animatedCounters, setAnimatedCounters] = useState(
    counters.map(() => 0)
  );
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animate counters on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000; // animation duration
            const steps = 60;
            counters.forEach((counter, idx) => {
              let current = 0;
              const increment = Math.ceil(counter.value / steps);
              const interval = setInterval(() => {
                current += increment;
                if (current >= counter.value) {
                  current = counter.value;
                  clearInterval(interval);
                }
                setAnimatedCounters((prev) => {
                  const updated = [...prev];
                  updated[idx] = current;
                  return updated;
                });
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, counters]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="why-us-section py-5 position-relative text-dark"
    >
      

      <div className="container position-relative">
        {/* Heading */}
        <div className="text-center mb-5">
          {subtitle && (
            <span className="subtitle-one text-uppercase text-novum-blue fw-semibold mb-2 d-inline-block">
              {subtitle}
            </span>
          )}
          {title && <h2 className="fw-bold mb-3">{title}</h2>}
          {description && (
            <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
              {description}
            </p>
          )}
        </div>

        {/* Counters */}
        {counters.length > 0 && (
          <div className="row text-center mb-5 gy-4">
            {counters.map((counter, idx) => (
              <div className="col-6 col-md-3" key={idx}>
                <div className="counter-card p-4 rounded shadow-sm h-100">
                  <h3 className="counter-value mb-1">
                    {animatedCounters[idx]}
                    {counter.suffix}
                  </h3>
                  <p className="text-muted small mb-0">{counter.label}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Grid */}
        {features.length > 0 && (
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="feature-card h-100 rounded shadow-sm p-4 text-center">
                  {feature.icon && (
                    <div className="icon mb-3 fs-3 text-novum-blue">
                      <i className={feature.icon}></i>
                    </div>
                  )}
                  <h5 className="fw-semibold text-dark mb-2">
                    {feature.title}
                  </h5>
                  <p className="text-muted small mb-0">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      
    </section>
  );
}

WhyUs.propTypes = {
  id: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      suffix: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ),
};

WhyUs.defaultProps = {
  id: "",
  counters: [],
  features: [],
};
