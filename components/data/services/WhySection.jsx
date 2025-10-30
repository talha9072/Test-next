"use client";
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

export default function WhySection({
  heading,
  subheadingLines,
  imgSrc,
  imgAlt,
  cards,
}) {
  return (
    <section className="py-5 offwhite" id="why">
      <div className="container">
        {/* Top Section */}
        <div className="row align-items-center flex-wrap-reverse gy-4 mb-5">
          {/* Left Text Section */}
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="about__four-content">
              <h2 className="mb-4">{heading}</h2>
              {subheadingLines.map((line, i) => (
                <p
                  key={i}
                  className={i < subheadingLines.length - 1 ? "mb-2" : "mb-0"}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="about__four-image">
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={800}
                height={400}
                quality={100}
                priority={false}
                className="image-1 img-fluid rounded object-cover"
                style={{ objectFit: "cover", maxHeight: "400px" }}
                unoptimized={false}
              />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {cards.map((card, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className="glass-card h-100 p-4 rounded-4 shadow-sm bg-white">
                <div className="icon-circle card-icon mb-4">
                  <i className={card.iconClass}></i>
                </div>
                <h3 className="fw-600 fs-20 mb-3 text-dark">{card.title}</h3>
                <div
                  className="text-muted mb-0"
                  dangerouslySetInnerHTML={{ __html: card.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

WhySection.propTypes = {
  heading: PropTypes.string.isRequired,
  subheadingLines: PropTypes.arrayOf(PropTypes.string).isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      iconClass: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired, // accepts HTML
    })
  ).isRequired,
};
