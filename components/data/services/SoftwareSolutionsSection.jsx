"use client";
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

export default function AboutSection({
  subtitle,
  title,
  paragraphs,
  imageSrc,
  altText,
  sectionClass = "py-5",
  imageWidth = 800,
  imageHeight = 500,
  priority = false,
}) {
  return (
    <section className={sectionClass} id="about">
      <div className="container">
        <div className="row align-items-center flex-wrap-reverse gy-4">
          {/* Left Text Section */}
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="about__four-content">
              {subtitle && <span className="subtitle-one">{subtitle}</span>}
              <h2 className="mb-4">{title}</h2>
              {paragraphs.map((para, i) => (
                <p key={i} className={i < paragraphs.length - 1 ? "mb-2" : "mb-0"}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
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
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  sectionClass: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  priority: PropTypes.bool,
};

AboutSection.defaultProps = {
  subtitle: "",
  altText: "",
  sectionClass: "py-5",
  imageWidth: 800,
  imageHeight: 500,
  priority: false,
};
