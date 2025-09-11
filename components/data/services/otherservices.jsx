// components/pages/homes/home-4/other-services.jsx
"use client";
import { useRef } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function OtherServices({
  id,
  subtitle,
  title,
  description,
  services = [],
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="services py-5 bg-light" id={id}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          {subtitle && (
            <span className="subtitle-one text-uppercase text-novum-blue fw-semibold mb-2 d-inline-block">
              {subtitle}
            </span>
          )}
          {title && <h2 className="fw-bold mb-3">{title}</h2>}
          {description && (
            <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
              {description}
            </p>
          )}
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            //  Fix for production: attach refs before init
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {services.map((svc, i) => (
            <SwiperSlide key={i}>
              <a className="card p-2 h-100" href={svc.link}>
                <div className="card-body text-center d-flex flex-column">
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

        {/* Arrows */}
        <div className="d-flex justify-content-center gap-4 mt-4">
          <button ref={prevRef} className="btn btn-outline-dark rounded-circle">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button ref={nextRef} className="btn btn-outline-dark rounded-circle">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
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
