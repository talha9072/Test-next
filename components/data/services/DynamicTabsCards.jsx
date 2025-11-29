"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./dynamic-tabs.css"; // <-- NEW CSS FILE

export default function DynamicTabsCards({
  sectionId = "dynamic-tabs-cards",
  title = "Core Capabilities",
  primaryColor = "#0d2b75",
  sectionClass = "py-7 position-relative",

  backgroundType = "none",
  backgroundColor = "#ffffff",
  backgroundGradient = "linear-gradient(to bottom right, #ffffff, #f4f6ff)",
  backgroundImage = "",

  tabs = [],
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const sliderRef = useRef(null);

  const scrollLeft = () =>
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  const scrollRight = () =>
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });

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

  useEffect(() => {
    const cards = tabs[activeTab]?.cards || [];
    const pages = Math.ceil(cards.length / 3);
    setPageCount(pages);
  }, [activeTab, tabs]);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const scrollLeftVal = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.children[0]?.offsetWidth || 1;

    const page = Math.round(scrollLeftVal / cardWidth);
    setDotIndex(page);
  };

  return (
    <section
      id={sectionId}
      className={sectionClass}
      style={{
        ...getBackgroundStyle(),
        "--primary": primaryColor, // <-- the magic fix!
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-4">{title}</h2>

        <TabsBar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="dtc-grid" ref={sliderRef} onScroll={handleScroll}>
          {tabs[activeTab]?.cards?.map((card, idx) => (
            <div className="dtc-card" key={idx}>
              <div className="dtc-image-wrap">
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={600}
                    height={350}
                  />
                )}
              </div>

              <div className="dtc-body">
                <div className="dtc-label fw-semibold text-secondary small">
                  {card.label}
                </div>

                <div className="dtc-title fw-bold fs-5 mb-2">{card.title}</div>

                {card.list ? (
                  <ul className="dtc-list">
                    {card.list.map((item, i) => (
                      <li key={i}>
                        <i className="bi bi-check2-circle text-novum-blue fs-5 me-2"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="dtc-desc">{card.desc}</p>
                )}

                <a href={card.link || "#"} className="dtc-cta">
                  <div className="dtc-cta-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
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

/* TABS BAR */
function TabsBar({ tabs, activeTab, setActiveTab }) {
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
    <div className="dtc-tabs mb-4 position-relative">
      {tabs.map((tab, i) => (
        <div
          key={i}
          ref={(el) => (tabsRef.current[i] = el)}
          className={`dtc-tab-btn ${activeTab === i ? "active" : ""}`}
          onClick={() => setActiveTab(i)}
        >
          {tab.label}
        </div>
      ))}

      <div className="dtc-underline" ref={underlineRef}></div>
    </div>
  );
}
