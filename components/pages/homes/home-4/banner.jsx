"use client";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner__four position-relative overflow-hidden vh-100">
      {/* Background image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            "url('/assets/img/home/novum-hero-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
          transform: "translateZ(0)",
          zIndex: -3,
        }}
      />

      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          willChange: "opacity",
          transform: "translateZ(0)",
          zIndex: -2,
        }}
      />

      {/* Microsoft badge */}
      <div
        className="floating-badge-container"
      >
        <div className="badge-wrapper">
          <img
            src="/assets/img/home/microsoft-banner.svg"
            alt="microsoft-badge"
            width="250"
            height="auto"
            className="floating-badge"
          />
        </div>
      </div>

      <div className="container h-100">
        <div className="row align-items-center h-100 justify-content-start gy-4 bannercon">
          {/* Text column */}
          <div className="col-xl-6 col-lg-6 text-start">
            <div className="banner__four-content">
              <span className="banner-top">THE WAY TO ADVANCE</span>
              <h1>Microsoft, AI & Digital Solutions to <span className="shine-text">Power Your Growth</span></h1>
              <p className="w-70 md-w-80">
                We help businesses worldwide scale smarter, innovate faster, and lead in the digital era.
              </p>
              <div className="banner__four-content-bottom">
                <Link href="/contact" className="explore-btn">
                  <span className="explore-btn__icon">
                    <i className="fas fa-arrow-right" />
                  </span>
                  <span className="explore-btn__label">Explore Our Services</span>
                </Link>
                {/* <div className="banner__four-content-call">
                  <i className="flaticon-telephone-call"></i>
                  <div className="banner__four-content-call-right">
                    <span>Make a call</span>
                    <Link href="tel:(307)%20555-0133">(307) 555-0133</Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* Image column removed */}
        </div>
      </div>
    </div>
  );
};

export default Banner;