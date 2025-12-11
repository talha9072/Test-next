"use client";
import Image from "next/image";

export default function InsightShowcaseSection({
  sectionId = "insight-showcase",

  // CONTENT PROPS
  eyebrow = "",
  title = "",
  description = "",
  bullets = [],
  buttonLabel = "",
  buttonLink = "#",
  imageSrc = "",
  imageAlt = "",

  // SECTION LAYOUT
  sectionClass = "py-5",

  // BACKGROUND PROPS
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
        <div
          className="row align-items-stretch shadow-sm rounded-2 bg-white"
          style={{
            padding: 0,
            overflow: "hidden",
            minHeight: "400px",
          }}
        >
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
                  ></i>
                  <span style={{ fontSize: "15px" }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* BUTTON FIXED (NO FULL WIDTH) */}
            {buttonLabel && (
              <a
                href={buttonLink}
                className="btn-two"
                style={{
                  display: "inline-block",
                  width: "auto",
                  maxWidth: "fit-content",
                  whiteSpace: "nowrap",
                }}
              >
                {buttonLabel}
              </a>
            )}

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-12 p-0 d-flex">
            <div
              className="position-relative w-100"
              style={{
                height: "100%",
                minHeight: "100%",
                flexGrow: 1,
              }}
            >
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
