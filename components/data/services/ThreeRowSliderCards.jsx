"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./dynamic-tabs.css";

export default function ServiceFeatureSlider({
  sectionId = "service-feature-slider",
  title = "",
  primaryColor = "#0d2b75",
  sectionClass = "py-7 position-relative",

  backgroundType = "none",
  backgroundColor = "#ffffff",
  backgroundGradient = "linear-gradient(to bottom right, #ffffff, #f4f6ff)",
  backgroundImage = "",

  items = []
}) {
  const [dotIndex, setDotIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const sliderRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 980);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Background styling
  const getBackgroundStyle = () => {
    if (backgroundType === "color") return { background: backgroundColor };
    if (backgroundType === "gradient") return { background: backgroundGradient };
    if (backgroundType === "image")
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    return {};
  };

  // FIXED PAGE COUNT LOGIC
  useEffect(() => {
    if (isMobile) {
      setPageCount(items.length);
    } else {
      const visible = 3;
      const logicalPages = items.length - visible + 1;
      setPageCount(logicalPages > 0 ? logicalPages : 1);
    }
  }, [items, isMobile]);

  // Scroll listener
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cardWidth = slider.children[0]?.offsetWidth || 1;
    const page = Math.round(slider.scrollLeft / cardWidth);
    setDotIndex(page);
  };

  // Slide Left
  const scrollLeft = () => {
    if (!sliderRef.current) return;
    const w = sliderRef.current.children[0]?.offsetWidth || 350;
    sliderRef.current.scrollBy({ left: -w, behavior: "smooth" });
  };

  // Slide Right
  const scrollRight = () => {
    if (!sliderRef.current) return;
    const w = sliderRef.current.children[0]?.offsetWidth || 350;
    sliderRef.current.scrollBy({ left: w, behavior: "smooth" });
  };

  return (
    <section
      id={sectionId}
      className={sectionClass}
      style={{ ...getBackgroundStyle(), "--primary": primaryColor }}
    >
      <div className="container">

        {title && <h2 className="text-center fw-bold mb-4">{title}</h2>}

        <div className="dtc-grid" ref={sliderRef} onScroll={handleScroll}>
          {items.map((card, idx) => (
            <div className="dtc-card" key={idx}>

              {card.image && (
                <div className="dtc-image-wrap">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={600}
                    height={350}
                  />
                </div>
              )}

              <div className="dtc-body">
                <div className="dtc-title fw-bold fs-5 mb-2">{card.title}</div>

                {card.list ? (
                  <ul className="dtc-list">
                    {card.list.map((item, i) => (
                      <li key={i}>
                        <i className="bi bi-check2-circle fs-5 me-2 text-novum-blue"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="dtc-desc">{card.desc}</p>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* ARROWS + DOTS */}
        {(isMobile || items.length > 3) && (
          <div className="dtc-arrows">

            <button className="dtc-arrow-btn" onClick={scrollLeft}>
              <i className="bi bi-arrow-left"></i>
            </button>

            <div className="dtc-dots">
              {[...Array(pageCount)].map((_, i) => (
                <div
                  key={i}
                  className={`dtc-dot ${dotIndex === i ? "active" : ""}`}
                ></div>
              ))}
            </div>

            <button className="dtc-arrow-btn" onClick={scrollRight}>
              <i className="bi bi-arrow-right"></i>
            </button>

          </div>
        )}

      </div>
    </section>
  );
}
