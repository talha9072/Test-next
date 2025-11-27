"use client";
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

export default function AboutSection({
  sectionId = "about",      // ⭐ NEW PROP
  subtitle,
  title,
  paragraphs,
  bulletPoints,
  imageSrc,
  altText,
  sectionClass = "py-5",
  imageWidth = 800,
  imageHeight = 500,
  priority = false,
}) {
  return (
    <section className={sectionClass} id={sectionId}>   {/* ⭐ UPDATED */}
      <div className="container">
        <div className="row align-items-center flex-wrap-reverse gy-4">

          {/* LEFT TEXT SECTION */}
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="about__four-content">

              {subtitle && <span className="subtitle-one">{subtitle}</span>}
              <h2 className="mb-4">{title}</h2>

              {/* MAIN PARAGRAPHS */}
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={i < paragraphs.length - 1 ? "mb-3" : "mb-3"}
                  style={{ lineHeight: "1.6" }}
                >
                  {para}
                </p>
              ))}

              {/* BULLET POINTS */}
              {bulletPoints && bulletPoints.length > 0 && (
                <ul className="list-unstyled mt-2">
                  {bulletPoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-center mb-2"
                      style={{ lineHeight: "1.6" }}
                    >
                      <i
                        className="bi bi-check2-circle text-novum-blue fs-5 me-2"
                        style={{ marginTop: "1px" }}
                      ></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="about__four-image">
              <Image
                src={imageSrc}
                alt={altText}
                width={imageWidth}
                height={imageHeight}
                quality={100}
                priority={priority}
                className="image-1 img-fluid rounded object-cover"
                unoptimized={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

AboutSection.propTypes = {
  sectionId: PropTypes.string,     // ⭐ NEW PROP TYPE
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.string),
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  sectionClass: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  priority: PropTypes.bool,
};

AboutSection.defaultProps = {
  sectionId: "",              // ⭐ DEFAULT VALUE
  subtitle: "",
  altText: "",
  sectionClass: "py-5",
  imageWidth: 800,
  imageHeight: 500,
  priority: false,
  bulletPoints: [],
};
