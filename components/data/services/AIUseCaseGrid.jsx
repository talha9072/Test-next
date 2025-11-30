"use client";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function AIUseCaseGrid({
  sectionId = "ai-usecase-grid",
  title = "",
  subtitle = "",
  items = [],
  columns = 3,
  sectionClass = "py-7",

  // Background props
  backgroundType = "none",
  backgroundColor = "#ffffff",
  backgroundGradient = "linear-gradient(to bottom right, #ffffff, #f4f4f4)",
  backgroundImage = "",
  primaryColor = "#0D2B75",
}) {
  // Background handler
  const getBackgroundStyle = () => {
    if (backgroundType === "color") return { background: backgroundColor };
    if (backgroundType === "gradient") return { background: backgroundGradient };
    if (backgroundType === "image")
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    return {};
  };

  // Responsive grid
  const columnClass = {
    3: "col-lg-4 col-md-6 col-12",
    4: "col-lg-3 col-md-6 col-12",
    5: "col-xxl-2 col-lg-3 col-md-6 col-12",
  }[columns];

  return (
    <section id={sectionId} className={sectionClass} style={getBackgroundStyle()}>
      <div className="container" style={{ "--primary": primaryColor }}>

        {/* Heading */}
        {title && (
          <h2 className="text-center mb-4">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-center text-muted mb-5">{subtitle}</p>
        )}

        {/* GRID */}
        <div className="row g-4">
          {items.map((card, idx) => (
            <div key={idx} className={columnClass}>

              {/* AUTO STAGGERED REVEAL */}
              <Reveal
                direction="fade"
                blur={true}
                delay={idx * 0.3}     // AUTO STAGGER
                duration={2}
              >
                <div
                  className="d-flex flex-column h-100 bg-white rounded-4 p-4 premium-card"
                  style={{
                    border: "1px solid #ececec",
                    transition: "0.35s ease",
                  }}
                >

                  {/* ICON BOX */}
                  <div
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "rgba(13, 43, 117, 0.08)",
                    }}
                  >
                    {card.iconType === "bootstrap" && (
                      <i
                        className={card.icon}
                        style={{ fontSize: "1.3rem", color: primaryColor }}
                      ></i>
                    )}

                    {card.iconType === "image" && (
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={30}
                        height={30}
                      />
                    )}
                  </div>

                  {/* TITLE */}
                  <h5 className="fw-bold mb-2" style={{ color: primaryColor }}>
                    {card.title}
                  </h5>

                  {/* DESCRIPTION */}
                  <p className="text-muted flex-grow-1" style={{ fontSize: "0.95rem" }}>
                    {card.desc}
                  </p>

                  {/* CTA */}
                  <a href={card.link} className="dtc-cta mt-3">
                    <div className="dtc-cta-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                    Explore
                  </a>

                </div>
              </Reveal>

            </div>
          ))}
        </div>
      </div>

      {/* CUSTOM STYLES */}
      <style jsx>{`
        /* CTA */
        .dtc-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 1rem;
          color: var(--primary);
          text-decoration: none;
        }

        .dtc-cta-arrow {
          width: 34px;
          aspect-ratio: 1/1;
          border-radius: 50%;
          background: rgba(13, 43, 117, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.25s ease;
        }

        .dtc-cta:hover .dtc-cta-arrow {
          background: var(--primary);
          color: #fff;
        }

        /* PREMIUM HOVER EFFECT */
        .premium-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
          border-color: rgba(13, 43, 117, 0.18);
        }
      `}</style>
    </section>
  );
}
