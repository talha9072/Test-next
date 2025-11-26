"use client";
import { useEffect, useState, useRef } from "react";

const HeroWithRibbon = ({
  serviceName = "",
  title,
  subtitle,
  bgImage,
  heroImage = "",
  links = [],
  heroButtons = [],
  highlightText = "",
}) => {
  const [showFixed, setShowFixed] = useState(false);
  const [activeLink, setActiveLink] = useState(links[0]?.href || "");
  const scrollRef = useRef(null);

  useEffect(() => {
  const handleScroll = () => {
    // check screen width
    const triggerPoint =
      window.innerWidth <= 570
        ? window.innerHeight * 0.7 // mobile 70vh
        : window.innerHeight * 0.62; // desktop 68vh

    setShowFixed(window.scrollY > triggerPoint);

    let current = "";
    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) {
        const sectionTop = section.offsetTop - 300;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = link.href;
        }
      }
    });

    if (current && current !== activeLink) {
      setActiveLink(current);

      if (scrollRef.current && window.innerWidth <= 768) {
        const activeEl = scrollRef.current.querySelector(
          `.nav-link[href="${current}"]`
        );
        if (activeEl) {
          activeEl.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, [links, activeLink]);

  const scrollRibbon = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 120;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Highlighted text logic
  const renderTitle = () => {
    if (!highlightText) return <>{title}</>;
    const regex = new RegExp(`(${highlightText})`, "gi");
    const parts = title.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="highlight-text">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      {/* === HERO SECTION === */}
      <section className="hero-section d-flex align-items-center position-relative">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center h-100 mt-5 pt-5">
            {/* LEFT SIDE - TEXT + BUTTONS */}
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
              {serviceName && (
                <h1 className="service-name mb-2">{serviceName}</h1>
              )}
              <h2 className="serviceheading mb-3">{renderTitle()}</h2>
              <p className="text-white-50 mb-4">{subtitle}</p>

              {heroButtons.length > 0 && (
                <div className="d-flex flex-wrap gap-3 mt-3">
                  {heroButtons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      target={btn.target || "_self"}
                      rel="noopener noreferrer"
                      className="banner-btn"
                    >
                      <span>{btn.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT SIDE - IMAGE (Show only if heroImage exists) */}
            {heroImage && (
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-left align-items-center">
                <div className="hero-image-wrapper w-100">
                <img
                    src={heroImage}
                    alt="Hero Illustration"
                    className="hero-img"
                />
                </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* === RIBBON === */}
      <div className={`anchor-links-ribbon ${showFixed ? "fixed" : ""}`}>
        <nav className="container-fluid px-0 position-relative">
          <button
            className="scroll-arrow left d-md-none"
            onClick={() => scrollRibbon("left")}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <ul className="nav ribbon-list" ref={scrollRef}>
            {links.map((link, i) => (
              <li key={i} className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === link.href ? "active" : ""
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="scroll-arrow right d-md-none"
            onClick={() => scrollRibbon("right")}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </nav>
      </div>

      {/* === STYLES === */}
      <style jsx>{`
        /* Hero Section */
        .hero-section {
          height: 70vh !important;
          background: url(${bgImage}) center/cover no-repeat;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        @media (max-width: 990px) {
          .hero-section {
            height: 60vh !important;
          }
        }

        .serviceheading {
          color: #0d2b75 !important;
          font-size: 3.2rem !important;
          font-weight: 500 !important;
          letter-spacing: -1.55px !important;
          line-height: 60px !important;
        }

        @media (max-width: 980px) and (min-width: 571px) {
          .serviceheading {
            font-size: 2.4rem !important;
            line-height: 50px !important;
          }
        }

        @media (max-width: 570px) {
          .serviceheading {
            font-size: 2rem !important;
            line-height: 38px !important;
          }
        }

        .service-name {
          color: #616262 !important;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.96px;
          text-transform: uppercase;
        }

        p {
          color: #0d2b75 !important;
          font-size: 1rem;
          font-weight: 400;
          letter-spacing: -0.48px;
          line-height: 24px;
        }

        /* === HERO IMAGE WRAPPER === */
        .hero-image-wrapper {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 3px;
          padding: 0px;
          width: 85% !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
          @media (max-width: 570px) and (min-width: 0px) {
          .hero-image-wrapper{
          width: 100% !important;
          }
        }

        .hero-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 3px;
          transform: scale(0.9);
        }

        /* === BUTTON STYLES === */
        .banner-btn {
          background: #0d2b75;
          color: white;
          font-weight: 500;
          padding: 12px 28px;
          border-radius: 3px;
          transition: all 0.3s ease;
          border: 1px solid #0d2b75;
          text-decoration: none;
        }

        .banner-btn:hover {
          background: transparent;
          color: #0d2b75;
        }

        /* Ribbon Base */
        .anchor-links-ribbon {
          background-color: #0d2b75;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          height: 56px;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .anchor-links-ribbon.fixed {
          position: fixed;
          top: 95px;
          left: 0;
          right: 0;
          z-index: 10;
        }
          @media (max-width: 980px) and (min-width: 570px) {
          .anchor-links-ribbon.fixed{
          top:70px;
          }
        }
          @media (max-width: 570px) and (min-width: 0px) {
          .anchor-links-ribbon.fixed{
          top:57px !important;
          }
        }

        .anchor-links-ribbon .nav-link {
          color: #fff;
          font-weight: 500;
          padding: 14px 20px;
          transition: all 0.3s ease;
          position: relative;
          white-space: nowrap;
        }

        .anchor-links-ribbon .nav-link:hover,
        .anchor-links-ribbon .nav-link.active {
          color: white;
        }

        .anchor-links-ribbon .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 20%;
          width: 60%;
          height: 2px;
          background: white;
        }

        .ribbon-list {
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 0;
          }

          .hero-image-wrapper {
            width: 100%;
            margin-top: 30px;
            padding: 16px;
          }

          .hero-img {
            transform: scale(1);
          }

          .ribbon-list {
            overflow-x: auto;
            flex-wrap: nowrap !important;
            -webkit-overflow-scrolling: touch;
            white-space: nowrap;
            justify-content: flex-start !important;
          }

          .ribbon-list .nav-item {
            flex: 0 0 auto;
          }

          .ribbon-list::-webkit-scrollbar {
            display: none;
          }

          .anchor-links-ribbon.fixed {
            top: 70px;
          }

          .scroll-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            color: #fff;
            border: none;
            font-size: 12px;
            cursor: pointer;
            z-index: 1200;
            padding: 5px;
          }

          .scroll-arrow.left {
            left: 5px;
          }

          .scroll-arrow.right {
            right: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroWithRibbon;
