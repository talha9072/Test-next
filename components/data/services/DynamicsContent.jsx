"use client";
import Image from "next/image";

export default function DynamicsContent({ activeTab, tabs = [] }) {
  const tab = tabs[activeTab];
  if (!tab) return null;

  const { title, description, bullets = [], images = [] } = tab;

  return (
    <div className="dyn-content container mt-5">
      <div className="row align-items-start">

        {/* ======================
            LEFT COLUMN - CONTENT
        ======================= */}
        <div className="col-lg-6 col-12 mb-4">

          {/* Heading */}
          {title && <h3 className="dyn-title">{title}</h3>}

          {/* Description */}
          {description && <p className="dyn-desc mt-2">{description}</p>}

          {/* Bullet Points */}
          {bullets.length > 0 && (
            <ul className="dyn-bullets mt-3">
              {bullets.map((item, i) => (
                <li key={i} className="dyn-bullet-item">
                  <span className="dyn-bullet-icon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ======================
            RIGHT COLUMN - IMAGE / CAROUSEL
        ======================= */}
        <div className="col-lg-6 col-12">
          {images.length > 1 ? (
            <div className="dyn-carousel">
              {images.map((src, i) => (
                <div key={i} className="dyn-slide">
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
          font-size: 1.8rem;
          font-weight: 600;
        }

        .dyn-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: #414141;
        }

        /* Bullet Points */
        .dyn-bullets {
          list-style: none;
          padding: 0;
        }

        .dyn-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 10px;
        }

        .dyn-bullet-icon {
          color: #0d2b75; /* your primary theme color */
          font-weight: bold;
          font-size: 1.2rem;
          line-height: 1;
        }

        /* Carousel */
        .dyn-carousel {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 10px;
        }

        .dyn-slide {
          min-width: 90%;
          scroll-snap-align: start;
        }

        .dyn-slide img {
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}
