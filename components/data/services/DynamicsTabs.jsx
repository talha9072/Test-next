"use client";
import { useRef, useState, useEffect } from "react";
import DynamicsContent from "./DynamicsContent";

export default function DynamicsTabsStrip({ tabs = [] }) {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const hasOverflow = el.scrollWidth > el.clientWidth + 1;

    if (!hasOverflow) {
      setShowLeft(false);
      setShowRight(false);
      return;
    }

    setShowLeft(el.scrollLeft > 1);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const t = setTimeout(() => updateScrollState(), 50);

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      clearTimeout(t);
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [tabs]);

  const scrollTabs = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const tabWidth = el.clientWidth / 2; // smooth feels better

    el.scrollBy({
      left: dir === "right" ? tabWidth : -tabWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="tabs-container">

        {showLeft && <div className="fade-left"></div>}
        {showRight && <div className="fade-right"></div>}

        {/* LEFT ARROW */}
        {showLeft && (
          <button className="nav-arrow left" onClick={() => scrollTabs("left")}>
            <i className="bi bi-chevron-left"></i>
          </button>
        )}

        {/* RIGHT ARROW */}
        {showRight && (
          <button className="nav-arrow right" onClick={() => scrollTabs("right")}>
            <i className="bi bi-chevron-right"></i>
          </button>
        )}

        {/* TAB STRIP */}
        <div className="tabs-strip" ref={scrollRef}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ------------ STYLES ------------ */}
        <style jsx>{`
          .tabs-container {
            position: relative;
            width: 100%;
            max-width: 1150px;
            margin: 20px auto;
          }

          .tabs-strip {
            display: flex;
            overflow-x: auto;
            overflow-y: hidden;
            scrollbar-width: none;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            white-space: nowrap;
          }

          .tabs-strip::-webkit-scrollbar {
            display: none;
          }

          .tab-btn {
            flex: 0 0 calc(100% / 4);
            padding: 18px 0;
            background: #fff;
            border: none;
            border-right: 1px solid #e5e5e5;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            color: #323232;
            transition: 0.3s ease;
            border-radius: 0;
          }

          .tab-btn.active {
            color: #0d2b75;
            border-bottom: 3px solid #0d2b75;
          }

          /* Fade */
          .fade-left,
          .fade-right {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 60px;
            pointer-events: none;
            z-index: 5;
          }

          .fade-left {
            left: 0;
            background: linear-gradient(to left, rgba(255,255,255,0), #ffffff 80%);
          }

          .fade-right {
            right: 0;
            background: linear-gradient(to right, rgba(255,255,255,0), #ffffff 80%);
          }

          /* ARROWS (Inside, Blue, Perfect Circle) */
          .nav-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: #ffffff;
            border: 1px solid #dcdcdc;
            color: #0d2b75;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            padding: 0;
            z-index: 10;
            font-size: 18px;
            line-height: 1;
          }

          .nav-arrow.left {
            left: -10px;   /* moved inside */
          }

          .nav-arrow.right {
            right: -10px;  /* moved inside */
          }


          /* ======================
             RESPONSIVE BREAKPOINTS
             ====================== */

          /* 1200px → 980px = 3 tabs */
          @media (max-width: 1200px) and (min-width: 981px) {
            .tab-btn {
              flex: 0 0 calc(100% / 3);
            }
              .nav-arrow.left{
              left:10px;
              }
              .nav-arrow.right {
            right: 10px;  /* moved inside */
          }
          }

          /* 980px → 568px = 2 tabs */
          @media (max-width: 980px) and (min-width: 569px) {
            .tab-btn {
              flex: 0 0 calc(100% / 2);
            }
               .nav-arrow.left{
              left:20px;
              }
              .nav-arrow.right {
            right: 20px;  /* moved inside */
          }
          }

          /* Below 568px = 1.5 tabs */
          @media (max-width: 568px) {
            .tab-btn {
              flex: 0 0 calc(100% / 1.5);
            }
              .nav-arrow.left{
              left:0px;
              }
              .nav-arrow.right {
            right: 0px;  /* moved inside */
          }
          }

          
        `}</style>
      </div>

      {/* TAB CONTENT BELOW */}
      <DynamicsContent activeTab={active} tabs={tabs} />
    </>
  );
}
