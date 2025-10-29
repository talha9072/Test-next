// components/pages/homes/home-4/implement-section.jsx
"use client";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ImplementSection({
  id,
  subtitle,
  title,
  description,
  items = [],
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="py-5" id={id}>
      <div className="container">
        {/* === Inline Scoped CSS === */}
        <style jsx global>{`
          /* --- SWIPER CORE --- */
          .benefits-swiper {
            overflow: visible !important;
            padding-bottom: 50px !important; /* space for dots */
          }

          /* --- CARD IMAGE --- */
          .benefit-card img {
            height: 200px;
            object-fit: cover;
            width: 100%;
          }

          /* --- PAGINATION BELOW --- */
          .benefits-swiper .swiper-pagination {
            position: relative !important;
            bottom: 0 !important;
            margin-top: 10px !important;
            text-align: center !important;
          }

          /* --- BULLET STYLE --- */
          .benefits-swiper .swiper-pagination-bullet {
            background: grey !important;
            opacity: 1 !important;
            width: 30px !important;
            height: 3px !important;
            border-radius: 4px !important;
            margin: 0 5px !important;
            transition: all 0.3s ease !important;
          }

          /* --- ACTIVE BULLET --- */
          .benefits-swiper .swiper-pagination-bullet-active {
            background: var(--primary-color-1) !important;
          }

          /* --- RESPONSIVE --- */
          @media (max-width: 576px) {
            .benefits-swiper .swiper-pagination-bullet {
              width: 20px !important;
            }
          }
        `}</style>

        {/* Heading */}
        <div className="text-center mb-4">
          {subtitle && (
            <span className="subtitle-one text-uppercase text-novum-blue fw-semibold mb-2 d-inline-block">
              {subtitle}
            </span>
          )}
          {title && <h2 className="fw-bold mb-4 text-dark">{title}</h2>}
          {description && (
            <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
              {description}
            </p>
          )}
        </div>

        {/* Swiper Carousel (pagination handled internally) */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="benefits-swiper"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="benefit-card h-100 rounded shadow-sm overflow-hidden">
                <img src={item.img} alt={item.title} />
                <div className="p-4">
                  <h5 className="fw-semibold text-dark mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

ImplementSection.propTypes = {
  id: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

ImplementSection.defaultProps = {
  id: "",
};
