"use client";
import React, { useEffect, useRef } from "react";

export default function AuditTwoColSection({
  leftHeading,
  leftText,
  leftCards = [],

  rightHeading,
  rightText,
  funnelLevels = [],
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current
            ?.querySelectorAll(".dynamic-layer")
            .forEach((el) => el.classList.add("animateDown"));
        }
      },
      { threshold: 0.25 } // triggers when 25% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="py-5" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-start g-5">

            {/* LEFT COLUMN */}
            <div className="col-lg-6">
              <h2 className="mb-4">{leftHeading}</h2>
              <p className="mb-4">{leftText}</p>

              {leftCards.map((card, idx) => (
                <div className="left-card p-4 mb-4" key={idx}>
                  <h3 className="mb-2">{card.title}</h3>
                  <p className="mb-0">{card.text}</p>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">
              <h2 className="mb-4">{rightHeading}</h2>
              <p className="mb-4">{rightText}</p>

              <div className="funnel-wrapper mt-4">
                {funnelLevels.map((label, index) => {
                  const total = funnelLevels.length;

                  // Base color (#0d2b75)
                  const baseHue = 225;
                  const baseSat = 80;

                  // Bottom-most faded
                  const isLast = index === total - 1;

                  const lightness = isLast
                    ? 68 // FADED bottom layer
                    : 26 + index * (22 / total);

                  const widthPercent = 100 - index * (60 / total);

                  return (
                    <div
                      key={index}
                      className="dynamic-layer mx-auto mb-4"
                      style={{
                        width: `${widthPercent}%`,
                        background: `hsl(${baseHue}, ${baseSat}%, ${lightness}%)`,
                        opacity: isLast ? 0.55 : 1,
                        animationDelay: `${index * 0.25}s`,
                      }}
                    >
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        /* LEFT CARDS */
        .left-card {
          background: #f8f9ff;
          border-radius: 14px;
          border: 1px solid #e2e6ff;
          transition: 0.25s ease;
        }
        .left-card:hover {
          background: #eef1ff;
        }

        /* FUNNEL */
        .funnel-wrapper {
          position: relative;
        }
        .funnel-wrapper::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 1px;
          height: 100%;
          background: #d0d0d0;
          transform: translateX(-50%);
        }

        .dynamic-layer {
          color: white;
          text-align: center;
          font-weight: 600;
          padding: 28px 0;
          border-radius: 14px;
          clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0 100%);
          opacity: 0;
          transform: translateY(-40px); /* TOP → BOTTOM */
        }

        .dynamic-layer span {
          font-size: 18px;
          letter-spacing: 0.5px;
        }

        /* SCROLL-TRIGGER ANIMATION */
        .animateDown {
          animation: fallDown 0.85s ease-out forwards;
        }

        @keyframes fallDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
