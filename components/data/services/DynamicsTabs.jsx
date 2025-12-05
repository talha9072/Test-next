"use client";
import { useRef, useState, useEffect } from "react";
import DynamicsContent from "./DynamicsContent";

export default function DynamicsTabsStrip({ tabs = [] }) {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  /* ------------------------------
     TRUE FIX: Update arrow state
     after ANY layout change
  ------------------------------ */
  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const hasOverflow = el.scrollWidth > el.clientWidth + 2;

    if (!hasOverflow) {
      setShowLeft(false);
      setShowRight(false);
      return;
    }

    setShowLeft(el.scrollLeft > 2);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  // ---- PASS 1: next tick update ----
  const t1 = requestAnimationFrame(updateScrollState);

  // ---- PASS 2: layout settle hone ke baad ----
  const t2 = setTimeout(updateScrollState, 200);

  // ---- WINDOW LOAD fixes mobile refresh ----
  window.addEventListener("load", updateScrollState);

  // ---- REAL FIX: resize observer ----
  const resizeObserver = new ResizeObserver(() => {
    updateScrollState();
    requestAnimationFrame(updateScrollState); // second pass
  });

  resizeObserver.observe(el);

  // ---- Mutation Observer (tabs render / labels wrap etc) ----
  const mo = new MutationObserver(() => {
    updateScrollState();
    requestAnimationFrame(updateScrollState);
  });

  mo.observe(el, { childList: true, subtree: true });

  // ---- Scroll listener ----
  el.addEventListener("scroll", updateScrollState);

  return () => {
    cancelAnimationFrame(t1);
    clearTimeout(t2);
    window.removeEventListener("load", updateScrollState);
    resizeObserver.disconnect();
    mo.disconnect();
    el.removeEventListener("scroll", updateScrollState);
  };
}, [tabs]);

  /* ------------------------------
     Scroll by half-container width
  ------------------------------ */
  const scrollTabs = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "right" ? el.clientWidth / 2 : -el.clientWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="tabs-container">

        {/* Fades */}
        {showLeft && <div className="fade-left"></div>}
        {showRight && <div className="fade-right"></div>}

        {/* Arrows */}
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
            white-space: nowrap;
            scrollbar-width: none;
            border-radius: 12px;
            border: 1px solid #e5e5e5;
          }
          .tabs-strip::-webkit-scrollbar { display: none; }

          .tab-btn {
            flex: 0 0 calc(100% / 4);
            padding: 18px 0;
            background: #fff;
            border: none;
            border-radius:0px;
            border-right: 1px solid #e5e5e5;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            color: #323232;
            transition: 0.3s ease;
          }
          .tab-btn.active {
            color: #0d2b75;
            border-bottom: 3px solid #0d2b75;
          }

          /* Fades */
          .fade-left, .fade-right {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 60px;
            pointer-events: none;
            z-index: 6;
          }
          .fade-left {
            left: 0;
            background: linear-gradient(to left, transparent, white 75%);
          }
          .fade-right {
            right: 0;
            background: linear-gradient(to right, transparent, white 75%);
          }

          /* Arrows */
          .nav-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: #fff;
            border: 1px solid #dcdcdc;
            color: #0d2b75;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            padding: 0;
            font-size: 18px;
            line-height: 1;
          }

          .nav-arrow.left { left: -10px; }
          .nav-arrow.right { right: -10px; }

          /* RESPONSIVE */
          @media (max-width: 1200px) {
            .tab-btn { flex: 0 0 calc(100% / 3); }
            .nav-arrow.left { left: 5px; }
            .nav-arrow.right { right: 5px; }
          }
          @media (max-width: 980px) {
            .tab-btn { flex: 0 0 calc(100% / 2); }
            .nav-arrow.left { left: 10px; }
            .nav-arrow.right { right: 10px; }
          }
          @media (max-width: 568px) {
            .tab-btn { flex: 0 0 calc(100% / 1.5); }
            .nav-arrow.left { left: 0; }
            .nav-arrow.right { right: 0; }
          }
        `}</style>
      </div>

      {/* CONTENT SECTION */}
      <DynamicsContent activeTab={active} tabs={tabs} />
    </>
  );
}
