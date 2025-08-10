import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  {
    href: '#',
    title: 'Airports Turnaround Solution',
    description:
      'AI-powered platform that tracks every step of aircraft turnaround. Improve efficiency, monitor vendor performance, and automate invoicing.',
    img: '/assets/img/products/airport-turnaround.webp',
  },
  {
    href: '#',
    title: 'Novum Entrance System (NES)',
    description:
      'Cloud-based visitor management system for busy business centers. Supports guest pre-registration, access control, and secure check-ins.',
    img: '/assets/img/products/entrance-system.webp',
  },
  {
    href: '#',
    title: 'OCR Certification Directory',
    description:
      'Convert paper records into searchable digital documents. Ideal for storing certificates, contracts, reports, and regulatory files.',
    img: '/assets/img/products/ocr.webp',
  },
  {
    href: '#',
    title: 'Face Recognition & Detection',
    description:
      'Identify and count people in real time using video analytics. Perfect for secure access, event tracking, and smart surveillance.',
    img: '/assets/img/products/face-recognition.webp',
  },
  {
    href: '#',
    title: 'Commodity Bidding Platform',
    description:
      'Flexible SaaS platform for digital trading. Create product listings, set approval flows, monitor activity, and access real-time analytics.',
    img: '/assets/img/products/bidding.webp',
  },
];

const ProductsCarousel = () => (
  <section className="background-position-center-top overflow-hidden py-5">
    <div className="container">
      <div className="row align-items-left mb-3 text-left">
        <div className="col-lg-9 col-xl-9">
          <h2 className="fw-bold text-dark mb-3">
            Smart Digital Products That Simplify Complex Operations
          </h2>
          <p className="text-muted fs-5">
            Novum creates intelligent software tools that automate workflows, improve
            visibility, and enhance operational performance across industries.
          </p>
        </div>
      </div>
      <div className="row align-items-center mb-0">
        <div className="col-md-12 position-relative">
          <Swiper
            modules={[Autoplay, Keyboard]}
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
          >
            {products.map((p, idx) => (
              <SwiperSlide key={idx}>
                <div className="interactive-banner-style-06">
                  <div className="interactive-banners-image">
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
          </Swiper>
        </div>
      </div>
    </div>

  </section>
);

export default ProductsCarousel;