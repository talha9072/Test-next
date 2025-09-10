// components/pages/homes/home-4/Testimonials.jsx
"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

export default function Testimonials() {
  const items = [
    {
      img: 'https://novum-ae.netlify.app/.netlify/images?url=/images/clients/thumbnail_99x99_Huseyn_Zeynalli.jpg',
      text: 'In today’s world of big data, it is easy to get lost. Novum has helped us to gather information from different sources and to visualize it in a simple, clear and effective way.',
      author: 'Huseyn Zeynalli',
      position: 'Head of Brand Management at Italdizain Group',
    },
    {
      img: 'https://novum-ae.netlify.app/.netlify/images?url=/images/clients/thumbnail_99x99_Elvin_Mammadov.jpg',
      text: 'Novum LLC created a customized dashboard by unique combination of data for Baku City Circuit venue catering arrangement. It helped us and our vendor to accurately plan and distribute more than 65 thousands meals during 5 days.',
      author: 'Elvin Mammadov',
      position: 'Venue Operations Manager, Baku City Circuit',
    },
    {
      img: 'https://novum-ae.netlify.app/.netlify/images?url=/images/clients/thumbnail_99x99_Nizami_Mansirov.jpg',
      text: 'Restructuring and visualizing our data-warehouse through Power BI implementation created a data-driven culture. With an insightful dashboard, our management has been able to control and achieve more in analytics, reporting and decision making.',
      author: 'Nizami Mansirov',
      position: 'CTO, Gilan Holding',
    },
  ];

  const slides = [...items, ...items]; // duplicate so loop works

  return (
    <section className="position-relative py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="fw-700 text-dark-gray">
              What Clients Say About Working With Novum
            </h2>
          </div>
        </div>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
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
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0:   { slidesPerView: 1 },
            980: { slidesPerView: 3 },
          }}
          className="testimonials-style-04 swiper-horizontal-3d py-5"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-card bg-white rounded-4 p-5 position-relative text-center">
                <img
                  src={item.img}
                  alt={item.author}
                  className="slider-image rounded-circle border border-white shadow position-absolute"
                  style={{
                    width: 100,
                    height: 100,
                    top: -50,
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
                <div className="content mt-3 pt-3 d-flex flex-column justify-content-between h-100">
                  <p className="mb-4 text-gray-700">{item.text}</p>
                  <div className="mt-3">
                    <div className="fs-18 main-clr fw-bold">{item.author}</div>
                    <div className="fs-15 text-secondary">{item.position}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
-       .testimonials-style-04.swiper {
-         overflow: visible !important;
-       }
+       .testimonials-style-04.swiper {
+         /* let Swiper clip to exactly slidesPerView */
+         overflow: hidden !important;
+       }

        .testimonials-style-04 .swiper-wrapper {
          padding-top: 60px;
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
          box-shadow: 0 0 60px rgba(0, 0, 0, 0.17);
          z-index: 2;
        }

        .testimonial-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .testimonial-card .content {
          flex-grow: 1;
        }
      `}</style>
    </section>
  );
}