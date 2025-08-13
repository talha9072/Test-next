// components/data/industries/Issues.jsx
import React from "react";

export default function IssuesSection({ title, subtitle, imageSrc, imageAlt, leftCards, rightCards }) {
  return (
    <div className="services__one section-padding py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
            <span className="subtitle-one">{subtitle}</span>
            <h2>{title}</h2>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* Left Column */}
          <div className="col-xl-3">
            <div className="row">
              {leftCards.map((card, index) => (
                <div key={index} className="col-xl-12 col-md-6 d-flex">
                  <div className="single-service flex-fill d-flex flex-column justify-content-between">
                    <div className="services__one-single-service-icon">
                      <i className={card.icon}></i>
                    </div>
                    <div className="services__one-single-service-content">
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Image */}
          <div className="col-xl-6 col-lg-7 d-flex">
            <div className="services-image-wrapper flex-fill d-flex align-items-center justify-content-center">
              <img src={imageSrc} alt={imageAlt} className="img-fluid" />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-3">
            <div className="row">
              {rightCards.map((card, index) => (
                <div key={index} className="col-xl-12 col-md-6 d-flex">
                  <div className="single-service flex-fill d-flex flex-column justify-content-between">
                    <div className="services__one-single-service-icon">
                      <i className={card.icon}></i>
                    </div>
                    <div className="services__one-single-service-content">
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}