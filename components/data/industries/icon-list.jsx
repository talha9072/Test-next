"use client";
import React from "react";
import PropTypes from "prop-types";

export default function IndustrySection({
  id = "",
  title,
  imageSrc,
  altText = "",
  sectionClass = "py-5",
  imageHeight = 400,
  features = [],
  reverse = false, // if true → image on left, text on right
}) {
  return (
    <section className={`position-relative overflow-hidden ${sectionClass}`} id={id}>
      <div className="container">
        <div
          className={`row align-items-center gy-4 ${
            reverse ? "" : "flex-wrap-reverse"
          }`}
        >
          {/* Right Image */}
          <div className="col-xl-6 col-lg-6 col-12 text-center">
            <div className="about__four-image">
              <img
                src={imageSrc}
                alt={altText}
                className="img-fluid rounded shadow-lg object-cover"
                style={{ maxHeight: imageHeight, width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Left Text */}
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="about__four-content">
              <h2 className="fw-700 text-dark-gray mb-4 lh-sm">{title}</h2>

              {features.map((item, index) => (
                <div
                  key={index}
                  className={`d-flex ${index < features.length - 1 ? "mb-4" : "mb-0"}`}
                >
                  <div className="me-3">
                    <div
                      className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 40, height: 40 }}
                    >
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1">{item.title}</h6>
                    <p className="mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

IndustrySection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  sectionClass: PropTypes.string,
  imageHeight: PropTypes.number,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  reverse: PropTypes.bool,
};

IndustrySection.defaultProps = {
  altText: "",
  sectionClass: "py-5",
  imageHeight: 400,
  features: [],
  reverse: false,
};
