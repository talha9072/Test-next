// components/pages/homes/home-4/Testimonials.jsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function Testimonials() {
  const items = [
    {
      img: "/assets/img/clients/majid Ismayilov-Avromed.jpeg",
      text: "With a cloud solution custom-designed for the pharmaceutical industry by Novum Information Technology, we consolidated data from multiple systems into one unified platform. Now department heads access real-time reports instantly, manual consolidation is gone, and decision-making is faster and more secure.",
      author: "Majid Ismailov",
      position: "Head of Data Management, Avromed",
    },
    {
      img: "/assets/img/clients/Zaur Dibirov - Azal.jpeg",
      text: "With Microsoft Dynamics 365 implemented and tailored for the aviation industry by Novum Information Technology, we transformed our finance operations from manual, time-consuming processes into a unified, intelligent system. Real-time insights now guide our decisions, and our teams are more agile and empowered than ever.",
      author: "Zaur Dibirov",
      position: "Director of Finance & Accounting, Azerbaijan Airlines",
    },
    {
      img: "/assets/img/clients/Daniel Viranyi- Kitopi.png",
      text: "Partnering with Novum Information Technology, we migrated our entire infrastructure to the Microsoft Cloud — adopting Microsoft 365 and leveraging Data & AI services tailored to our business model. Through seamless integrations and custom development, Novum helped us unify data, automate workflows, and empower every department with intelligent insights that drive faster, smarter decisions.",
      author: "Daniel V",
      position: "IT & Security Director, Kitopi",
    },
    {
      img: "/assets/img/clients/Ashish Pandey-Aster.jpeg",
      text: "Working with Novum has transformed the way Aster Pharmacy manages its operations. Their tailored solutions and expert guidance have streamlined our processes, improved efficiency, and enabled better decision-making across all departments. The partnership with Novum has been truly valuable, and we look forward to continued success together.",
      author: "Ashish Panday",
      position: "IT Director, Aster Pharmacy",
    },
  ];

  const slides = [...items, ...items]; // duplicate so loop works

  return (
    <section className="position-relative py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="fw-700 text-dark-gray mb-4">
              What Clients Say About Working With Novum
            </h2>
          </div>
        </div>

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
            delay: 2000,
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
                <Image
                  src={item.img}
                  alt={item.author}
                  width={90}
                  height={90}
                  className="slider-image rounded-circle border border-white shadow position-absolute"
                  style={{
                    top: -45,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />

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
          background: #0D2B75 !important;
        }
      `}</style>
    </section>
  );
}
