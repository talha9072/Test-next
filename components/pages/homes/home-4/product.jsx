"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  
  {
    href: '/products/nes-novum-entrance-system',
    title: 'Novum Entrance System (NES)',
    description:
      'Cloud-based visitor management system for busy business centers. Supports guest pre-registration, access control, and secure check-ins.',
    img: '/assets/img/products/entrance-system.webp',
  },
  {
    href: '/products/ocr-certification-directory',
    title: 'OCR Certification Directory',
    description:
      'Convert paper records into searchable digital documents. Ideal for storing certificates, contracts, reports, and regulatory files.',
    img: '/assets/img/products/ocr.webp',
  },
  {
    href: '/products/face-recognition-and-detection',
    title: 'Face Recognition & Detection',
    description:
      'Identify and count people in real time using video analytics. Perfect for secure access, event tracking, and smart surveillance.',
    img: '/assets/img/products/face-recognition.webp',
  },
  {
    href: '/products/commodity-bidding-platform',
    title: 'Commodity Bidding Platform',
    description:
      'Flexible SaaS platform for digital trading. Create product listings, set approval flows, monitor activity, and access real-time analytics.',
    img: '/assets/img/products/bidding.webp',
  },
  {
    href: '/products/d365-automations',
    title: 'D365 Automations',
    description:
      'Enhance Microsoft Dynamics 365 workflows with intelligent automation. Simplify data entry, approvals, and reporting for faster results.',
    img: '/assets/img/products/ds365.png',
  },
  {
    href: '/products/ess-employee-self-service',
    title: 'ESS - Employee Self Service',
    description:
      'A secure, user-friendly portal that empowers employees to manage their profiles, leave requests, and HR information anytime, anywhere.',
    img: '/assets/img/products/ess.webp',
  },
  {
    href: '/products/airport-revenue-management-isv',
    title: 'Airport Revenue Management ISV',
    description:
      'Comprehensive revenue management tool designed for airports to optimize billing, contracts, and income forecasting through automation.',
    img: '/assets/img/products/airport-revenue.webp',
  },
];


const ProductsCarousel = () => (
  <section className="background-position-center-top overflow-hidden py-5">
    <div className="container">
      <div className="row align-items-left mb-4 text-left">
        <div className="col-lg-9 col-xl-9">
          <h2 className="fw-bold text-dark mb-4">
            Smart Digital Products That Simplify Complex Operations
          </h2>
          <p className="mb-2">
            Novum creates intelligent software tools that automate workflows, improve
            visibility, and enhance operational performance across industries.
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-0">
        <div className="col-md-12 position-relative">
          <Swiper
            modules={[Autoplay, Keyboard, Pagination]}
            slidesPerView={1}
            spaceBetween={35}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
              992: { slidesPerView: 2.5 },
              1200: { slidesPerView: 3.5 },
            }}
            className="products-swiper"
          >
            {products.map((p, idx) => (
              <SwiperSlide key={idx}>
                <div className="interactive-banner-style-06">
                  <div className="interactive-banners-image rounded">
                    <img src={p.img} alt={p.title} />
                    <div className="overlay-bg bg-gradient-dark-transparent box-overlay" />
                  </div>
                  <div className="interactive-banners-content p-60px lg-p-30px">
                    <div className="h-100 w-100 last-paragraph-no-margin">
                      <a href={p.href} className="fs-20 d-block text-white mb-10px fw-bold">
                        {p.title}
                      </a>
                      <p className="interactive-banners-content-text w-95 lg-w-100 text-white">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* ✅ Built-in pagination now works automatically */}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsCarousel;
