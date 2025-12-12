"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AIUseCaseGrid({
  sectionId = "ai-usecase-grid",
  title = "",
  subtitle = "",
  items = [],
  columns = 3,
  sectionClass = "py-5",

  backgroundType = "none",
  backgroundColor = "#ffffff",
  backgroundGradient = "linear-gradient(to bottom right, #ffffff, #f4f4f4)",
  backgroundImage = "",
  primaryColor = "#0D2B75",

  /* GLOBAL CTA CONTROL */
  noButton = false,
}) {
  const cardRefs = useRef([]);

  /* FORCE EQUAL HEIGHTS */
  const syncHeights = () => {
    let max = 0;

    cardRefs.current.forEach((el) => el && (el.style.height = "auto"));
    cardRefs.current.forEach((el) => el && (max = Math.max(max, el.offsetHeight)));
    cardRefs.current.forEach((el) => el && (el.style.height = max + "px"));
  };

  useEffect(() => {
    syncHeights();

    const t1 = setTimeout(syncHeights, 150);
    const t2 = setTimeout(syncHeights, 350);

    window.addEventListener("resize", syncHeights);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", syncHeights);
    };
  }, [items]);

  const getBackgroundStyle = () => {
    if (backgroundType === "color") return { background: backgroundColor };
    if (backgroundType === "gradient") return { background: backgroundGradient };
    if (backgroundType === "image") {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }
    return {};
  };

  const columnClass = {
    3: "col-lg-4 col-md-6 col-12",
    4: "col-lg-3 col-md-6 col-12",
    5: "col-xxl-2 col-lg-3 col-md-6 col-12",
  }[columns];

  return (
    <section id={sectionId} className={sectionClass} style={getBackgroundStyle()}>
      <div className="container" style={{ "--primary": primaryColor }}>
        {title && <h2 className="text-center mb-4">{title}</h2>}
        {subtitle && <p className="text-center text-muted mb-5">{subtitle}</p>}

        <div className="row g-4">
          {items.map((card, idx) => {
            /* =========================
               CTA LOGIC (FIXED)
            ========================== */

            const resolvedLink =
              card.button?.link ||
              card.link ||
              "";

            const buttonEnabled =
              !noButton &&
              resolvedLink &&
              card.button !== false &&
              card.button?.enabled !== false;

            const buttonLabel =
              card.button?.label || "Explore";

            const buttonTarget =
              card.button?.target ||
              (resolvedLink?.startsWith("http") ? "_blank" : "_self");

            return (
              <div key={idx} className={columnClass}>
                <div
                  className="premium-card equal-card p-4 rounded-2 bg-white d-flex flex-column"
                  ref={(el) => (cardRefs.current[idx] = el)}
                >
                  {/* TOP CONTENT */}
                  <div className="flex-grow-1">
                    {/* ICON */}
                    <div
                      className="icon-wrapper mb-3"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "14px",
                        background: "rgba(13,43,117,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {card.iconType === "bootstrap" && (
                        <i
                          className={card.icon}
                          style={{ fontSize: "1.3rem", color: primaryColor }}
                        />
                      )}

                      {card.iconType === "image" && (
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={32}
                          height={32}
                        />
                      )}
                    </div>

                    <h5 className="fw-bold mb-2" style={{ color: primaryColor }}>
                      {card.title}
                    </h5>

                    <p className="text-muted">{card.desc}</p>
                  </div>

                  {/* CTA */}
                  {buttonEnabled && (
                    <div className="mt-3">
                      <a
                        href={resolvedLink}
                        target={buttonTarget}
                        rel={buttonTarget === "_blank" ? "noopener noreferrer" : undefined}
                        className="dtc-cta d-inline-flex align-items-center gap-2 fw-semibold"
                      >
                        <div className="dtc-cta-arrow">
                          <i className="bi bi-arrow-right"></i>
                        </div>
                        {buttonLabel}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .premium-card {
          border: 1px solid #ececec;
          transition: 0.35s ease;
        }

        .premium-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
          border-color: rgba(13, 43, 117, 0.18);
        }

        .dtc-cta-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(13, 43, 117, 0.12);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;
        }

        .dtc-cta:hover .dtc-cta-arrow {
          background: var(--primary);
          color: #fff;
        }
      `}</style>
    </section>
  );
}
