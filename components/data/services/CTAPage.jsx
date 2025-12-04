"use client";
import React from "react";

export default function CTAPage({
  title,
  description,
  buttonLabel,
  buttonLink = "#",
  bullets = [],
  backgroundType = "color",
  backgroundColor = "#0d2b75",
  backgroundImage = "",
  backgroundGradient = "",
  sectionClass = "py-7",
  textColor = "#ffffff",
}) {
  let wrapperStyle = {};
  let backgroundLayer = {};

  if (backgroundType === "color") {
    wrapperStyle = { background: backgroundColor };
  }

  if (backgroundType === "gradient") {
    wrapperStyle = { background: backgroundGradient };
  }

  if (backgroundType === "image") {
    wrapperStyle = { position: "relative", overflow: "hidden" };
    backgroundLayer = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: 1,
    };
  }

  return (
    <section
      className={sectionClass}
      style={{ ...wrapperStyle, color: textColor, position: "relative" }}
    >
      {/* Background Image */}
      {backgroundType === "image" && <div style={backgroundLayer}></div>}

      {/* Overlay */}
      {backgroundType === "image" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.55)",
            zIndex: 2,
          }}
        ></div>
      )}

      {/* Content */}
      <div
        className="container text-center"
        style={{ position: "relative", zIndex: 3 }}
      >
        {title && <h2 className="fw-bold mb-3 text-white">{title}</h2>}

        {description && (
          <p className="mx-auto mb-4" style={{ maxWidth: "700px" }}>
            {description}
          </p>
        )}

        {bullets.length > 0 && (
          <ul className="list-unstyled mt-2 d-inline-block text-start">
            {bullets.map((item, index) => (
              <li
                key={index}
                className="d-flex align-items-center mb-2"
                style={{ lineHeight: 1.6 }}
              >
                <i
                  className="bi bi-check2-circle text-novum-blue fs-5 me-2"
                  style={{ marginTop: "1px" }}
                ></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {buttonLabel && (
          <div className="mt-4">
            <a href={buttonLink} className="btn-two" target="blank">
              {buttonLabel}
            </a>
          </div>
        )}
      </div>

      {/* ===== Button Hover Styling ===== */}
      <style jsx>{`
        .btn-two:hover {
          background: #ffffff !important;
          border: 1px solid #ffffff !important;
        }
      `}</style>
    </section>
  );
}
