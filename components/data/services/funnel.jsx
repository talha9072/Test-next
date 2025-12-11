"use client";
import React, { useEffect, useRef } from "react";

export default function AuditTwoColSection({
  sectionId = "audit-two-col",

  /* LEFT */
  leftHeading,
  leftText,
  leftCards = [],

  /* RIGHT */
  rightHeading,
  rightText,
  funnelLevels = [],

  /* NEW */
  backgroundStyle = "linear-gradient(to bottom right, #f3f6ff, #e3e9ff)",
  flipColumns = false
}) {
  const sectionRef = useRef(null);

  /* ANIMATION TRIGGER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current
            ?.querySelectorAll(".dynamic-layer")
            .forEach((el) => el.classList.add("animateDown"));
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id={sectionId}
        className="py-6"
        ref={sectionRef}
        style={{ background: backgroundStyle }}
      >
        <div className="container">

          <div className={`row g-5 align-items-start ${flipColumns ? "flex-row-reverse" : ""}`}>

            {/* RIGHT COLUMN — *NO BOX BACKGROUND* */}
            <div className="col-lg-6">
              <div className="right-content">
                <h2 className="mb-4">{rightHeading}</h2>
                <p className="mb-4">{rightText}</p>

                <div className="funnel-wrapper mt-5">
                  {funnelLevels.map((label, index) => {
                    const total = funnelLevels.length;
                    const baseHue = 225;
                    const baseSat = 80;

                    const isLast = index === total - 1;
                    const lightness = isLast ? 68 : 26 + index * (22 / total);
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

            {/* LEFT COLUMN — BOXED STYLE */}
            <div className="col-lg-6">
              <div className="left-box p-4 p-lg-5">
                <h2 className="mb-4">{leftHeading}</h2>
                <p className="mb-4">{leftText}</p>

                {leftCards.map((card, idx) => (
                  <div className="left-card p-4 mb-4" key={idx}>
                    <h3 className="mb-2">{card.title}</h3>
                    <p className="mb-0">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        /* ========== LEFT COLUMN BOX ========== */
        .left-box {
          background: rgba(255, 255, 255, 0.65);
          border-radius: 6px;
          backdrop-filter: blur(6px);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.45);
        }

        .left-card {
          background: #f8f9ff;
          border-radius: 6px;
          border: 1px solid #e2e6ff;
          transition: 0.25s ease;
        }
        .left-card:hover {
          background: #eef1ff;
        }

        /* ========== FUNNEL / RIGHT SIDE ========== */
        .right-content {
          padding: 5px;
        }

        .funnel-wrapper {
          position: relative;
          margin-top: 40px;
          padding-top: 30px;
        }

        .funnel-wrapper::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 1px;
          height: 100%;
          background: #cfd2e0;
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
          transform: translateY(-40px);
        }

        .dynamic-layer span {
          font-size: 18px;
          letter-spacing: 0.5px;
        }

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
