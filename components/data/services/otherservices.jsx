"use client";
import { useRef, useState, useEffect } from "react";
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
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="services py-5 bg-light" id={id}>
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

        {/* Swiper Slider */}
        {navReady && (
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
        )}

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

      <style jsx>{`
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
      gradient: PropTypes.string, // ✅ new prop
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
