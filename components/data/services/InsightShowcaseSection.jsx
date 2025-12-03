"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";

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
  sectionClass = "py-7",

  // BACKGROUND PROPS
  backgroundType = "none", // none | color | gradient | image
  backgroundColor = "#ffffff",
  backgroundGradient = "linear-gradient(to bottom right, #ffffff, #f4f4f4)",
  backgroundImage = "",
}) {
  // Background Style Function
  const getBackgroundStyle = () => {
    if (backgroundType === "color") {
      return { background: backgroundColor };
    }

    if (backgroundType === "gradient") {
      return { background: backgroundGradient };
    }

    if (backgroundType === "image") {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    }

    return {}; // none
  };

  return (
    <section
      id={sectionId}
      className={sectionClass}
      style={getBackgroundStyle()}
    >
      <div className="container">

        <div
          className="row align-items-center shadow-sm rounded-4 bg-white"
          style={{ padding: 0, overflow: "hidden" }}
        >

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-12 p-5">
            <Reveal direction="left">

              {eyebrow && (
                <p className="text-uppercase small fw-semibold mb-2" style={{ color: "#0D2B75" }}>
                  {eyebrow}
                </p>
              )}

              {title && <h2 className="fw-bold mb-4">{title}</h2>}

              {description && (
                <p className="text-muted mb-4">{description}</p>
              )}

              {/* Bullet Points */}
              <ul className="list-unstyled mb-4">
                {bullets.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start mb-2">
                    <i
                      className="bi bi-check-circle-fill me-2"
                      style={{ color: "#0D2B75", fontSize: "1.1rem" }}
                    ></i>
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              {buttonLabel && (
                <a
                  href={buttonLink}
                  className="btn-two"
                  
                >
                  {buttonLabel}
                </a>
              )}

            </Reveal>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-12">
            <Reveal direction="right">
              <div style={{ padding: "10px", height: "100%" }}>
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1000}
                    height={1000}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
