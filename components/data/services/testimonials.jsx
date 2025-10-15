"use client";
import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function Testimonials({ subtitle, title, items = [] }) {
  const slides = [...items, ...items]; // duplicate so loop feels seamless

  return (
    <section className="position-relative py-5"id="testimonials">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            {subtitle && (
              <span className="subtitle-one text-uppercase text-novum-blue fw-semibold mb-2 d-inline-block">
                {subtitle}
              </span>
            )}
            {title && <h2 className="fw-700 text-dark-gray">{title}</h2>}
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          loop
          centeredSlides
          slidesPerView="auto"
          spaceBetween={40}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            980: { slidesPerView: 3 },
          }}
          className="testimonials-style-04 swiper-horizontal-3d py-4"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-card bg-white rounded-4 p-4 position-relative text-center">
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.author}
                    className="slider-image rounded-circle border border-white shadow position-absolute"
                    style={{
                      width: 90,
                      height: 90,
                      top: -45,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
                <div className="content mt-4 pt-4 d-flex flex-column justify-content-between h-100">
                  <p className="mb-2">{item.text}</p>
                  <div className="mt-3">
                    <div className="fs-17 main-clr fw-bold">{item.author}</div>
                    <div className="fs-14 text-secondary">{item.position}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Styles === */}
      <style jsx global>{`
        .testimonials-style-04.swiper {
          overflow: hidden !important;
        }

        .testimonials-style-04 .swiper-wrapper {
          padding-top: 50px;
          align-items: stretch;
        }

        .testimonials-style-04 .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: stretch;
          filter: grayscale(100%);
          opacity: 1 !important;
          transform: scale(0.9) !important;
          transition: transform 0.5s, filter 0.5s;
        }

        .testimonials-style-04 .swiper-slide-active {
          filter: none !important;
          transform: scale(1.05) !important;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
          z-index: 2;
        }

        .testimonial-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .testimonial-card p {
          font-size: 0.9rem;
          line-height: 1.4;
          color: #555;
        }

        .testimonial-card .fs-17 {
          font-size: 0.95rem !important;
        }

        .testimonial-card .fs-14 {
          font-size: 0.85rem !important;
        }

        .testimonials-style-04 .swiper-pagination {
          position: relative;
          bottom: 0;
          margin-top: 20px;
          text-align: center;
        }

        .testimonials-style-04 .swiper-pagination-bullet {
          width: 20px;
          height: 3px;
          border-radius: 2px;
          margin: 0 4px !important;
          background: grey;
          opacity: 1;
          transition: background 0.3s ease;
        }

        .testimonials-style-04 .swiper-pagination-bullet-active {
          background: #0d2b75 !important;
        }
      `}</style>
    </section>
  );
}

Testimonials.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ),
};

Testimonials.defaultProps = {
  subtitle: "",
  title: "",
  items: [],
};
