"use client";
import Image from "next/image";

export default function InsightShowcaseSection({
  sectionId = "insight-showcase",

  eyebrow = "",
  title = "",
  description = "",
  bullets = [],
  buttonLabel = "",
  buttonLink = "#",
  imageSrc = "",
  imageAlt = "",

  sectionClass = "py-5",

  backgroundType = "none",
  backgroundColor = "#ffffff",
  backgroundGradient = "linear-gradient(to bottom right, #ffffff, #f4f4f4)",
  backgroundImage = "",
}) {
  const getBackgroundStyle = () => {
    if (backgroundType === "color") return { background: backgroundColor };
    if (backgroundType === "gradient") return { background: backgroundGradient };
    if (backgroundType === "image")
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    return {};
  };

  return (
    <section id={sectionId} className={sectionClass} style={getBackgroundStyle()}>
      <div className="container">
        <div className="row shadow-sm rounded-2 bg-white overflow-hidden insight-row">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-12 p-5 d-flex flex-column justify-content-center">
            {eyebrow && (
              <p className="text-uppercase small fw-semibold mb-2" style={{ color: "#0D2B75" }}>
                {eyebrow}
              </p>
            )}

            {title && <h2 className="fw-bold mb-3">{title}</h2>}

            {description && (
              <p className="text-muted mb-4" style={{ fontSize: "15px" }}>
                {description}
              </p>
            )}

            <ul className="list-unstyled mb-4">
              {bullets.map((item, idx) => (
                <li key={idx} className="d-flex align-items-start mb-2">
                  <i
                    className="bi bi-check2-circle me-2"
                    style={{ color: "#0D2B75", fontSize: "1.1rem" }}
                  />
                  <span style={{ fontSize: "15px" }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* BUTTON — INLINE ONLY */}
            {buttonLabel && (
              <a href={buttonLink} className="btn-two insight-btn">
                {buttonLabel}
              </a>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-12 p-0">
            <div className="insight-image-wrapper position-relative w-100">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ✅ STYLES */}
      <style jsx>{`
        /* IMAGE WRAPPER */
        .insight-image-wrapper {
          width: 100%;
          aspect-ratio: 16 / 10; /* MOBILE / TABLET NATURAL HEIGHT */
        }

        /* DESKTOP */
        @media (min-width: 992px) {
          .insight-row {
            min-height: 420px;
          }

          .insight-image-wrapper {
            height: 100%;
            aspect-ratio: auto;
          }
        }

        /* BUTTON FIX */
        .insight-btn {
          display: inline-flex !important;
          width: auto !important;
          max-width: fit-content;
          white-space: nowrap;
          align-self: flex-start;
        }
      `}</style>
    </section>
  );
}
