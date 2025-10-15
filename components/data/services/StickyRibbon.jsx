"use client";
import { useEffect, useState, useRef } from "react";

const HeroWithRibbon = ({
  serviceName = "",
  title,
  subtitle,
  bgImage,
  links = [],
  heroButtons = [],
  highlightText = "",
}) => {
  const [showFixed, setShowFixed] = useState(false);
  const [activeLink, setActiveLink] = useState(links[0]?.href || "");
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixed(window.scrollY > 200);

      let current = "";
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop - 150;
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

  // ✅ Highlighted text logic
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
          <div className="row align-items-center h-100">
            {/* LEFT SIDE - TEXT */}
            <div className="col-lg-6 col-md-6">
              {/* New service name heading */}
              {serviceName && (
                <h5 className="service-name mb-2">{serviceName}</h5>
              )}
              <h1 className="serviceheading mb-3">{renderTitle()}</h1>
              <p className="text-white-50 mb-0">{subtitle}</p>
            </div>

            {/* RIGHT SIDE - BUTTONS */}
            <div className="col-lg-6 col-md-6 d-flex flex-wrap justify-content-lg-center justify-content-start gap-3 mt-4 mt-lg-0">
              <div className="btn-group">
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
            </div>
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
          height: 75vh !important;
          background: url(${bgImage}) center/cover no-repeat;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .serviceheading {
          color: #0d2b75 !important;
          font-size: 3.8rem !important;
          font-weight: 500 !important;
          line-height: 50px !important;
          letter-spacing: -1.55px !important;
          line-height: 72px !important;
        }
          @media (max-width: 980px) and (min-width: 571px) {
          .serviceheading {
            font-size: 2.8rem !important;
            line-height: 55px !important;
          }
        }

        /* From 570px and below */
        @media (max-width: 570px) {
          .serviceheading {
            font-size: 2.2rem !important;
            line-height: 42px !important;
          }
        }

        .service-name {
          color: #616262 !important;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          letter-spacing: 0.96px;
        }

        p {
          color: #0d2b75 !important;
          font-size: 1rem;
          font-weight: 400;
          letter-spacing: -0.48px;
          line-height: 24px;
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
            height: auto;
            padding: 80px 0;
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
