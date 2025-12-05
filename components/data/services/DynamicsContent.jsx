"use client";
import { useState } from "react";
import Image from "next/image";

export default function DynamicsContent({ activeTab, tabs = [] }) {
  const tab = tabs[activeTab];
  if (!tab) return null;

  const {
    title,
    description,
    bullets = [],
    images = [],
    bottomLabel,
    bottomLogo
  } = tab;

  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="dyn-content container mt-5">
      <div className="row align-items-start">

        {/* ======================
            LEFT COLUMN - CONTENT
        ======================= */}
        <div className="col-lg-5 col-12 mb-4">

          {title && <h3 className="dyn-title">{title}</h3>}
          {description && <p className="dyn-desc mt-2">{description}</p>}

          {/* Bullet Points */}
          {bullets.length > 0 && (
            <ul className="dyn-bullets mt-3">
              {bullets.map((item, i) => (
                <li key={i} className="dyn-bullet-item">
                  <i className="bi bi-check2-circle bullet-icon"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Bottom Info + Logo */}
          {bottomLabel && bottomLogo && (
            <div className="bottom-info mt-4">
              <img src={bottomLogo} alt="logo" className="bottom-logo" />
              <span className="bottom-text">{bottomLabel}</span>
            </div>
          )}
        </div>

        {/* ======================
            RIGHT COLUMN - CAROUSEL
        ======================= */}
        <div className="col-lg-7 col-12">

          {images.length > 1 ? (
            <>
              <div className="carousel-wrapper">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((src, i) => (
                    <div key={i} className="carousel-slide">
                      <Image
                        src={src}
                        width={900}
                        height={600}
                        alt={`slide-${i}`}
                        className="img-fluid rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="carousel-dots mt-3">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${current === i ? "active" : ""}`}
                    onClick={() => goToSlide(i)}
                  />
                ))}
              </div>
            </>
          ) : images.length === 1 ? (
            <Image
              src={images[0]}
              width={900}
              height={600}
              alt="dynamics visual"
              className="img-fluid rounded"
            />
          ) : null}

        </div>
      </div>

      {/* ======================
          INLINE CSS
      ======================= */}
      <style jsx>{`
        .dyn-title {
          font-size: 1.4rem;
          font-weight: 600;
        }
        .dyn-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: #414141;
        }

        /* ======================
            BULLETS
        ======================= */
        .dyn-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .dyn-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .bullet-icon {
          color: #0d2b75;
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* =====================
            BOTTOM INFO BLOCK
        ===================== */
        .bottom-info {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f5f8ff;
          padding: 10px 15px;
          border-radius: 12px;
          border: 1px solid #e0e7ff;
        }

        .bottom-logo {
          width: 30px;
          height: 30px;
        }

        .bottom-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: #0d2b75;
        }

        /* =====================
            CAROUSEL
        ===================== */
        .carousel-wrapper {
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s ease;
        }

        .carousel-slide {
          min-width: 100%;
        }

        /* Dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .dot {
          width: 30px;
          height: 4px;
          display: inline-block;
          border-radius: 2px;
          background: #d0d0d0;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .dot.active {
          background: #0d2b75;
        }
      `}</style>
    </div>
  );
}
