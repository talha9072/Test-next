// components/pages/homes/home-4/other-services.jsx
"use client";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function OtherServices({
  id,
  subtitle,
  title,
  description,
  services = [],
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="services py-5 about__four" id={id}>
      <div className="container">
        {/* Heading */}
        <div className="text-start mb-5">
          {subtitle && (
            <span className="subtitle-one text-uppercase text-novum-blue fw-semibold mb-2 d-inline-block">
              {subtitle}
            </span>
          )}
          {title && <h2 className="fw-bold mb-3">{title}</h2>}
          {description && (
            <p
              className="text-muted"
              style={{ maxWidth: "720px", marginBottom: "0" }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Swiper Slider with Pagination */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="services-swiper"
        >
          {services.map((svc, i) => (
            <SwiperSlide key={i}>
              <a
                className="card p-2 h-100"
                href={svc.link}
                style={{
                  "--card-gradient": svc.gradient || "transparent",
                }}
              >
                <div className="card-body text-start d-flex flex-column">
                  {svc.imgSrc && (
                    <img
                      src={svc.imgSrc}
                      alt={svc.title}
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                  )}
                  <h3 className="card-title mt-3">{svc.title}</h3>
                  <p className="card-text flex-grow-1">{svc.description}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* === Card styling === */
        .services .card {
          position: relative;
          border: none;
          padding: 40px 20px !important;
          border-radius: 5px;
          height: 100%;
          background: #fff;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .services .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 7px;
          width: 100%;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background: transparent;
          transition: background 0.3s ease;
        }

        .services .card:hover::before {
          background: var(--card-gradient);
        }

        .services .card:hover {
          transform: translateY(-5px);
        }

        .services .card-body img {
          height: 60px;
          margin-bottom: 10px;
        }

        /* === Pagination Styling (rectangle bars) === */
        .services-swiper .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          text-align: center !important;
        }

        .services-swiper .swiper-pagination-bullet {
          background: grey !important;
          opacity: 1 !important;
          width: 30px !important;
          height: 3px !important;
          border-radius: 4px !important;
          margin: 0 5px !important;
          transition: all 0.3s ease !important;
        }

        .services-swiper .swiper-pagination-bullet-active {
          background: var(--primary-color-1) !important;
        }

        @media (max-width: 576px) {
          .services-swiper .swiper-pagination-bullet {
            width: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

OtherServices.propTypes = {
  id: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string,
      gradient: PropTypes.string,
    })
  ),
};

OtherServices.defaultProps = {
  id: "otherservices",
  subtitle: "",
  title: "",
  description: "",
  services: [],
};
