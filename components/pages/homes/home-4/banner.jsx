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
    image: "/assets/img/home/novum-hero-4.webp",
    heading: "Accelerate Operations With Microsoft Dynamics 365",
    text: "Unify finance, supply chain, and core business functions under one intelligent platform. Automate workflows, improve visibility, and scale with confidence using Dynamics 365.",
    link: "/contact",
    linkText: "Learn More",
    brochure: "/assets/img/home/NOVUM-Brochure.pdf",
  },
  {
    id: 2,
    image: "/assets/img/home/novum-hero-5.webp",
    heading: "Transform Data Into Strategic Growth",
    text: "Turn raw data into actionable insights through advanced analytics and interactive Power BI dashboards. Make smarter decisions with real-time reporting and deep data visibility.",
    link: "/contact",
    linkText: "Learn More",
    brochure: "/assets/img/home/NOVUM-Brochure.pdf",
  },
  {
    id: 3,
    image: "/assets/img/home/novum-hero-6.webp",
    heading: "Reimagine work with AI-Powered Innovation",
    text: "Enhance productivity with Microsoft Copilot and enterprise-grade AI tools. Automate tasks, empower decision-making, and unlock intelligent experiences across every workflow.",
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