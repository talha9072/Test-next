"use client";
import { useRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
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
    <section
      id={id}
      className="other-services py-5 text-white position-relative"
    >
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

      <div className="container position-relative">
        {/* Heading */}
        <div className="text-center mb-5">
          {subtitle && (
            <span className="subtitle-one text-uppercase fw-semibold mb-2 d-inline-block">
              {subtitle}
            </span>
          )}
          {title && <h2 className="fw-bold mb-3">{title}</h2>}
          {description && (
            <p
              className="text-light opacity-75 mx-auto"
              style={{ maxWidth: "720px" }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Swiper Carousel */}
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
          className="services-swiper"
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <Link href={service.href || "#"} className="text-decoration-none">
                <div className="service-card h-100 rounded shadow-sm d-flex flex-column text-center p-4">
                  {/* Top: Icon + Title */}
                  <div>
                    <div className="icon mb-3 fs-2">
                      <i className={service.icon}></i>
                    </div>
                    <h5 className="fw-semibold mb-2 text-white">
                      {service.title}
                    </h5>
                  </div>

                  {/* Middle: Description (stretch) */}
                  <p className="text-light small flex-grow-1">{service.desc}</p>

                  {/* Bottom: Button */}
                  <div className="mt-3">
                    <span className="btn-readmore">Read More →</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows Centered Below */}
        <div className="d-flex justify-content-center gap-4 mt-4">
          <button ref={prevRef} className="nav-arrow">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button ref={nextRef} className="nav-arrow">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <style jsx>{`
        .other-services {
          background: linear-gradient(135deg, #0d2b75, #07195f);
          overflow: hidden;
        }
        .overlay {
          background: rgba(0, 0, 0, 0.15);
          z-index: 0;
        }
        .subtitle-one {
          letter-spacing: 1px;
          font-size: 14px;
          color: #fff;
        }
        h2 {
          color: #fff;
        }
        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.3s ease;
          min-height: 280px; /* ✅ equal card height */
        }
        .service-card:hover {
         
          background: rgba(255, 255, 255, 0.15);
          border-color: #fff;
        }
        .icon {
          color: #fff;
        }
        .btn-readmore {
          display: inline-block;
          padding: 7px 14px;
          font-size: 13px;
          font-weight: 500;
          color: #0d2b75;
          background: #fff;
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        .btn-readmore:hover {
          background: #07195f;
          color: white;
        }
        .nav-arrow {
          background: none;
          border: none;
          color: #fff;
          font-size: 22px;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .nav-arrow:hover {
          color: #ddd;
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
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
};

OtherServices.defaultProps = {
  id: "",
  services: [],
};
