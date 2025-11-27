"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function CapabilitiesTabsCards({
  sectionId = "capabilities",
  title = "Core Capabilities",
  primaryColor = "#0d2b75",
  sectionClass = "py-7 position-relative",
  tabs = [],
  backgroundImage = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundOverlay = true
}) {
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null);

  const scrollLeft = () =>
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });

  const scrollRight = () =>
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });

  return (
    <section
      id={sectionId}
      className={sectionClass}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize,
        backgroundPosition,
        backgroundRepeat: "no-repeat"
      }}
    >
      {backgroundOverlay && backgroundImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(6px)",
            zIndex: 1
          }}
        ></div>
      )}

      <style>{`
        /* ================= TABS ================= */
        .cap-tabs {
          display: flex;
          gap: 26px;
          border-bottom: 1px solid #e5e7eb;
          overflow-x: auto;
          white-space: nowrap;
          position: relative;
          z-index: 3;
        }
        .cap-tabs::-webkit-scrollbar { display: none; }

        .cap-tab-btn {
          padding: 12px 4px;
          font-weight: 600;
          font-size: 1.05rem;
          cursor: pointer;
          color: #666;
          transition: color .25s ease;
        }
        .cap-tab-btn.active,
        .cap-tab-btn:hover {
          color: ${primaryColor};
        }

        .cap-underline {
          position: absolute;
          bottom: -1px;
          height: 3px;
          background: ${primaryColor};
          border-radius: 30px;
          transition: all .35s ease;
        }

        /* ================= PREMIUM MICROSOFT CARD ================= */
        .cap-card {
          background: #fff;
          border-radius: 24px;
          border: 1px solid #e5e7eb;
          height: 100%;
          transition: all .3s ease;
          overflow: hidden;
        }
        .cap-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 16px 44px rgba(0,0,0,0.10);
        }

        /* IMAGE WRAPPER → 8px PADDING */
        .cap-image-wrapper {
          padding: 8px;
          padding-bottom: 0;
        }
        .cap-image-wrapper img {
          border-radius: 18px;
        }

        /* CONTENT WRAPPER → 20px PADDING */
        .cap-content {
          padding: 20px;
        }

        .cap-label {
          font-size: 0.92rem;
          color: #666;
          font-weight: 600;
          margin-top: 6px;
        }

        .cap-title {
          font-size: 1.26rem;
          font-weight: 700;
          color: #0b1a3d;
          margin: 6px 0;
        }

        .cap-desc {
          color: #444;
          font-size: .97rem;
          margin: 10px 0 16px;
          line-height: 1.55;
        }

        .cap-cta {
          color: ${primaryColor};
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .cap-cta-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(13,43,117,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }

        /* ================= GRID ================= */
        .cap-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        /* MOBILE SLIDER */
        @media (max-width: 767px) {
          .cap-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 20px;
            padding-bottom: 12px;
          }
          .cap-grid::-webkit-scrollbar { display: none; }
          .cap-card {
            min-width: 85%;
            scroll-snap-align: start;
          }
        }

        /* ================= MOBILE ARROWS ================= */
        .cap-arrows { display: none; }

        @media (max-width: 767px) {
          .cap-arrows {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
          }
        }

        .cap-arrow-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #d0d0d0;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 20px;
          color: ${primaryColor};
          transition: .25s ease;
        }

        .cap-arrow-btn:hover {
          background: #f0f4ff;
          border-color: ${primaryColor};
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.18);
        }

      `}</style>

      <div className="container position-relative" style={{ zIndex: 3 }}>
        <h2 className="text-center fw-bold mb-4">{title}</h2>

        <TabsBar
          tabs={tabs}
          activeTab={activeTab}
          primaryColor={primaryColor}
          setActiveTab={setActiveTab}
        />

        {/* GRID / SLIDER */}
        <div className="cap-grid" ref={sliderRef}>
          {tabs[activeTab]?.cards?.map((card, idx) => (
            <div className="cap-card" key={idx}>

              {/* 8px padded IMAGE WRAPPER */}
              <div className="cap-image-wrapper">
                {card.image && (
                  <Image
                    src={card.image}
                    width={600}
                    height={280}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "18px"
                    }}
                  />
                )}
              </div>

              {/* 20px CONTENT WRAPPER */}
              <div className="cap-content">
                <div className="cap-label">{card.label}</div>
                <div className="cap-title">{card.title}</div>
                <p className="cap-desc">{card.desc}</p>

                <a className="cap-cta" href={card.link || "#"}>
                  <div className="cap-cta-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                  Learn More
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* MOBILE ARROWS */}
        <div className="cap-arrows">
          <button className="cap-arrow-btn" onClick={scrollLeft}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="cap-arrow-btn" onClick={scrollRight}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------- */
/* TABS SUB COMPONENT   */
/* -------------------- */
function TabsBar({ tabs, activeTab, setActiveTab, primaryColor }) {
  const underlineRef = useRef(null);
  const tabsRef = useRef([]);

  useEffect(() => {
    const el = tabsRef.current[activeTab];
    if (el && underlineRef.current) {
      underlineRef.current.style.width = `${el.offsetWidth}px`;
      underlineRef.current.style.left = `${el.offsetLeft}px`;
    }
  }, [activeTab]);

  return (
    <div className="cap-tabs mb-4 position-relative">
      {tabs.map((tab, i) => (
        <div
          key={i}
          ref={(el) => (tabsRef.current[i] = el)}
          className={`cap-tab-btn ${activeTab === i ? "active" : ""}`}
          onClick={() => setActiveTab(i)}
        >
          {tab.label}
        </div>
      ))}
      <div className="cap-underline" ref={underlineRef}></div>
    </div>
  );
}
