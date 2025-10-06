"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/assets/img/home/novum-hero-4.jpg",
    heading: "Transform Data Into Strategic Growth",
    text: "Empower your business with advanced Power BI consulting and data analytics. NOVUM turns complex information into clarity that fuels smarter decisions.",
    link: "/contact",
    linkText: "Learn More",
    brochure: "/assets/img/home/NOVUM-Brochure.pdf",
  },
  {
    id: 2,
    image: "/assets/img/home/novum-hero-5.jpg",
    heading: "Intelligent Solutions for a Digital Future",
    text: "Accelerate transformation with AI-driven analytics and Azure migration expertise. NOVUM helps organizations stay agile, efficient, and future-ready.",
    link: "/contact",
    linkText: "Learn More",
    brochure: "/assets/img/home/NOVUM-Brochure.pdf",
  },
  {
    id: 3,
    image: "/assets/img/home/novum-hero-6.jpg",
    heading: "Driving Innovation Across Every Industry",
    text: "Unlock potential with Microsoft data analytics and cloud solutions tailored to your needs. NOVUM delivers platforms that help businesses thrive in a changing world.",
    link: "/contact",
    linkText: "Learn More",
    brochure: "/assets/img/home/NOVUM-Brochure.pdf",
  },
];

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        className="banner-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="banner-slide">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                priority
                placeholder="blur"
                blurDataURL="/assets/img/home/blur-placeholder.jpg"
                quality={100}
                className="object-cover"
              />

              <div className="dark-overlay"></div>

              <div className="banner-content">
                <div className="container">
                  <div className="text-box">
                    <h1 className="mb-4">{slide.heading}</h1>
                    <p className="mb-4">{slide.text}</p>
                    <div className="btn-group">
                      <a
                        href={slide.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="banner-btn"
                      >
                        <span>Download Brochure</span>
                      </a>
                      <Link href={slide.link} className="banner-btn">
                        <span>{slide.linkText}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;