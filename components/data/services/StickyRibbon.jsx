"use client";
import { useEffect, useState, useRef } from "react";

const HeroWithRibbon = ({ title, subtitle, bgImage, links = [] }) => {
  const [showFixed, setShowFixed] = useState(false);
  const [activeLink, setActiveLink] = useState(links[0]?.href || "");
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixed(window.scrollY > 200);

      //  ScrollSpy logic
      let current = "";
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop - 150; // offset for navbar
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

        //  Auto-scroll ribbon to keep active link visible (mobile only)
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
    handleScroll(); // run once at mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links, activeLink]);

  // Scroll handler for arrows
  const scrollRibbon = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 120;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center position-relative">
        <div className="overlay position-absolute top-0 start-0 w-100 h-100" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center h-100">
            <div className="col-lg-6 col-sm-10">
              <h1 className="text-white fw-bold display-5 mb-3">{title}</h1>
              <p className="text-white mb-0">{subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ribbon */}
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

      <style jsx>{`
        /* Hero Section */
        .hero-section {
          height: 50vh;
          background: url(${bgImage}) center/cover no-repeat;
        }

        .overlay {
          background: radial-gradient(
            circle at 85% 40%,
            rgba(13, 43, 117, 0) 20%,
            rgba(13, 43, 117, 0.85) 50%,
            rgba(6, 20, 89, 0.95) 70%,
            rgba(29, 33, 73, 1) 100%
          );
          z-index: 1;
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

        /* Fixed Ribbon */
        .anchor-links-ribbon.fixed {
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          z-index: 10;
        }

        /* Nav Styles */
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

          /* Small arrows */
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
