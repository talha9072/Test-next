import React from "react";

export default function IssuesSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  leftCards,
  rightCards,
}) {
  return (
    <div className="services__one section-padding py-5">
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
            <span className="subtitle-one">{subtitle}</span>
            <h2>{title}</h2>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          {/* Left Column */}
          <div className="col-xl-3 d-flex flex-column">
            <div className="row gy-4 flex-grow-1">
              {leftCards.map((card, index) => (
                <div key={index} className="col-xl-12 col-md-6 d-flex">
                  <div
                    className="single-service flex-fill d-flex flex-column justify-content-between text-center p-4"
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                      minHeight: "230px",
                    }}
                  >
                    <div className="services__one-single-service-icon mb-3">
                      <i
                        className={card.icon}
                        style={{ fontSize: "2.5rem", color: "#0D2B75" }}
                      ></i>
                    </div>
                    <div className="services__one-single-service-content flex-grow-1 d-flex flex-column justify-content-between">
                      <h4 className="fw-semibold mb-2">{card.title}</h4>
                      <p className="mb-0">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Image (Circular) */}
          <div className="col-xl-6 col-lg-7 d-flex justify-content-center align-items-center my-4 my-xl-0">
            <div className="services-image-wrapper d-flex align-items-center justify-content-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="img-fluid rounded-circle"
                style={{
                  width: "100%",
                 
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-3 d-flex flex-column">
            <div className="row gy-4 flex-grow-1">
              {rightCards.map((card, index) => (
                <div key={index} className="col-xl-12 col-md-6 d-flex">
                  <div
                    className="single-service flex-fill d-flex flex-column justify-content-between text-center p-4"
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                      minHeight: "230px",
                    }}
                  >
                    <div className="services__one-single-service-icon mb-3">
                      <i
                        className={card.icon}
                        style={{ fontSize: "2.5rem", color: "#0D2B75" }}
                      ></i>
                    </div>
                    <div className="services__one-single-service-content flex-grow-1 d-flex flex-column justify-content-between">
                      <h4 className="fw-semibold mb-2">{card.title}</h4>
                      <p className="mb-0">{card.text}</p>
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
