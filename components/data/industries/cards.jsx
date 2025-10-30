"use client";
import React from "react";
import PropTypes from "prop-types";

export default function SmartTurnaroundCards({
  sectionId = "ms-guidance-cards",
  heading,
  subheading,
  accentColor = "#0D2B75",
  cards = [],
}) {
  return (
    <section className="py-5 about__four" id={sectionId}>
      <div className="container">
        {/* Heading + Intro */}
        <div className="mb-4 mb-md-5 text-center">
          <h2 className="fw-700 text-dark-gray mb-4">{heading}</h2>
          <p className="mb-0">{subheading}</p>
          <div
            className="mx-auto mt-3"
            style={{ width: "80px", height: "3px", backgroundColor: accentColor }}
          />
        </div>

        {/* Cards */}
        <div className="row g-4">
          {cards.map((card, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <article className="ms-card bg-white border rounded-1 shadow-sm h-100 d-flex flex-column">
                <div className="ratio ratio-16x9 overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                  <h3 className="h4 fw-bold mb-2">{card.title}</h3>
                  <p className="mb-4">{card.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

SmartTurnaroundCards.propTypes = {
  sectionId: PropTypes.string,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  accentColor: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
