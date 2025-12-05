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

  // 🔥 FIX: Re-run when tabs load OR container resizes
  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    // Wait for DOM + layout
    const t = setTimeout(() => {
      updateScrollState();
    }, 50);

    // Listen to scroll
    el.addEventListener("scroll", updateScrollState);

    // FIX: Listen to window resizes
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

    const tabWidth = el.scrollWidth / tabs.length;

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

        {showLeft && (
          <button className="nav-arrow left" onClick={() => scrollTabs("left")}>
            <i className="bi bi-chevron-left"></i>
          </button>
        )}

        {showRight && (
          <button className="nav-arrow right" onClick={() => scrollTabs("right")}>
            <i className="bi bi-chevron-right"></i>
          </button>
        )}

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
          }

          .tab-btn.active {
            color: #0D2B75;
            border-bottom: 3px solid #0D2B75;
          }

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

          .nav-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #ffffff;
            color:#0D2B75;
            border: 1px solid #dcdcdc;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;

            /* FIXES */
            padding: 0;          /* Prevents the oval shape */
            font-size: 18px;     /* Fix icon inside */
            line-height: 1;      /* Make icon center perfectly */
            }

          .nav-arrow.left {
            left: -20px;
          }

          .nav-arrow.right {
            right: -20px;
          }
        `}</style>
      </div>

      <DynamicsContent activeTab={active} tabs={tabs} />
    </>
  );
}
