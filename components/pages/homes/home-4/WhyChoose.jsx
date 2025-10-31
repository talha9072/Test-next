"use client";
import React, { useEffect, useState } from "react";

const counters = [
  { number: 40, suffix: "+", label: "Multi-Industry Implementations", icon: "bi-building-check" },
  { number: 8, suffix: "+", label: "Years of history of enhancing and redefining. Analytics/BI, ERP and ISV", icon: "bi-award-fill" },
  { number: 100, suffix: "%", label: "Certified Human Capital in multiple competencies", icon: "bi-emoji-smile-fill" },
  { number: 35, suffix: "+", label: "Technical Human Capital", icon: "bi-mortarboard-fill" },
];

// Counter animation component
function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 3000;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
}

export default function ModernCounterSection() {
  return (
    <section className="modern-counter position-relative py-5 text-white">
      {/* Decorative Shape */}
      <div className="shape-bg"></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4 text-white">
              Trusted expertise shaped by <br /> years of innovation and global talent
            </h2>
            <p className="">
              Novum is a trusted partner in data analytics and BI, ERP (Dynamics 365), and Microsoft Cloud solutions with proven expertise in implementing, optimizing, and supporting your digital transformation.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-lg-7">
            <div className="row g-4">
              {counters.map((c, i) => (
                <div key={i} className="col-6">
                  <div className="counter-box p-4 rounded-4 h-100 text-center">
                    <i className={`bi ${c.icon} fs-1 mb-2`}></i>
                    <h3 className="fw-bold display-6 text-white">
                      <Counter target={c.number} />
                      {c.suffix}
                    </h3>
                    <p className="mb-0">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        /* Main Section BG */
        .modern-counter {
          background-color: #0d2b75;
          overflow: hidden;
        }

        /* Shape BG with your gradient */
        .modern-counter .shape-bg {
          position: absolute;
          top: 0;
          right: -50px;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(13, 43, 117, 0.93) 0%,
            rgba(6, 20, 89, 1) 70%,
            rgba(29, 33, 73, 1) 100%
          );
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
          z-index: 0;
        }

        .modern-counter h2,
        .modern-counter p {
          position: relative;
          z-index: 2;
        }

        /* Glassmorphism Counter Cards */
        .counter-box {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .counter-box:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.15);
        }

        .counter-box i {
          color: #ffffffff; /* golden icons */
        }

        @media (max-width: 768px) {
          .modern-counter .shape-bg {
            width: 100%;
            right: 0;
            clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);
          }
        }
      `}</style>
    </section>
  );
}
