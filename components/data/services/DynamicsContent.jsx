"use client";
import { useState, useEffect, useRef } from "react";
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

  const nextSlide = () => {
    if (current < images.length - 1) setCurrent((c) => c + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  // Swipe handling
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleEnd = (x) => {
    if (!isDragging.current) return;
    const diff = x - startX.current;

    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();

    isDragging.current = false;
  };

  // Reset slide on tab change
  useEffect(() => {
    setCurrent(0);
  }, [activeTab]);

  return (
    <div className="dyn-content container mt-5">
      <div className="row align-items-start">

        {/* LEFT CONTENT */}
        <div className="col-lg-5 col-12 mb-4">
          {title && <h3 className="dyn-title mb-4">{title}</h3>}
          {description && <p className="dyn-desc">{description}</p>}

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

          {bottomLabel && bottomLogo && (
            <div className="bottom-info mt-3">
              <img src={bottomLogo} alt="logo" className="bottom-logo" />
              <span className="bottom-text">{bottomLabel}</span>
            </div>
          )}
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="col-lg-7 col-12">
          {images.length > 1 ? (
            <>
              <div
                className="carousel-wrapper"
                onMouseDown={(e) => handleStart(e.clientX)}
                onMouseUp={(e) => handleEnd(e.clientX)}
                onMouseLeave={(e) => handleEnd(e.clientX)}
                onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
              >
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

              {/* ARROWS + DOTS WRAPPED */}
              <div className="nav-wrapper mt-3">

                {/* LEFT ARROW */}
                <button
                  className="dtc-arrow-btn"
                  onClick={prevSlide}
                  disabled={current === 0}
                >
                  <i className="bi bi-arrow-left"></i>
                </button>

                {/* DOTS */}
                <div className="carousel-dots">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${current === i ? "active" : ""}`}
                      onClick={() => setCurrent(i)}
                    />
                  ))}
                </div>

                {/* RIGHT ARROW */}
                <button
                  className="dtc-arrow-btn"
                  onClick={nextSlide}
                  disabled={current === images.length - 1}
                >
                  <i className="bi bi-arrow-right"></i>
                </button>

              </div>
            </>
          ) : (
            images.length === 1 && (
              <Image
                src={images[0]}
                width={900}
                height={600}
                alt="visual"
                className="img-fluid rounded"
              />
            )
          )}
        </div>
      </div>

      <style jsx>{`
        .dyn-title {
          font-size: 1.2rem;
          font-weight: 600;
        }
        .dyn-desc {
          color: #737373;
        }

        .dyn-bullets {
          list-style: none;
          padding: 0;
        }
        .dyn-bullet-item {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }
        .bullet-icon {
          color: #0d2b75;
          font-size: 1.1rem;
          margin-top: 2px;
        }

        /* Bottom Info */
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
          color: #0d2b75;
          font-weight: 600;
        }

        /* Carousel */
        .carousel-wrapper {
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
        }
        .carousel-track {
          display: flex;
          transition: transform 0.45s ease;
        }
        .carousel-slide {
          min-width: 100%;
        }

        /* NEW: ARROWS + DOTS WRAPPED */
        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .dtc-arrow-btn {
            width: 40px;
            height: 40px;
            aspect-ratio: 1 / 1; /* 🔥 Forces perfect circle even if parent flex stretches */
            border-radius: 50%;
            background:transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 0.25s ease;
            padding: 0; /* 🔥 Prevents stretching inside */
            }

            .dtc-arrow-btn i {
            color: #0d2b75; /* 🔥 ICON primary blue */
            font-size: 18px;
            }

            .dtc-arrow-btn:disabled {
            opacity: 0.35;
            cursor: not-allowed;
            }

            .dtc-arrow-btn:hover:not(:disabled) {
            background: #0d2b75;
            border-color: #0d2b75;
            }
            .dtc-arrow-btn:hover:not(:disabled) i{
            color:white;
            }

        .carousel-dots {
          display: flex;
          gap: 10px;
        }

        .dot {
          width: 28px;
          height: 4px;
          border-radius: 3px;
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
