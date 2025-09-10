"use client";
import { useRef } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ImplementSection({
  id,
  subtitle,
  title,
  description,
  items = [],
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-5" id={id}>
      <div className="container">
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

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
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
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-100 h-200 object-cover"
                />
                <div className="p-4">
                  <h5 className="fw-semibold text-dark mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows only */}
        <div className="d-flex justify-content-center align-items-center mt-4 gap-4">
          <button ref={prevRef} className="custom-prev nav-arrow">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button ref={nextRef} className="custom-next nav-arrow">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <style jsx>{`
        .subtitle-one {
          letter-spacing: 1px;
          font-size: 14px;
        }
        h2 {
          color: #0d2b75;
        }
        .benefit-card {
          border: 1px solid #e5e7eb;
          background: #fff;
          transition: all 0.3s ease;
        }
        .benefit-card:hover {
          border-color: #0d2b75;
          transform: translateY(-4px);
        }
        .h-200 {
          height: 200px;
          object-fit: cover;
        }

        /* Arrows */
        .nav-arrow {
          background: none;
          border: none;
          color: #444;
          font-size: 20px;
          cursor: pointer;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .nav-arrow:hover {
          color: #0d2b75;
          transform: scale(1.2);
        }
      `}</style>
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
