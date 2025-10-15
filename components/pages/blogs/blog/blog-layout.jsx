"use client";
import React, { useEffect, useRef } from "react";
import BlogLeft from "./blog-left";
import BlogRight from "./blog-right";
import Blogbottom from "./blog-bottom";

export default function BlogLayout() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "visible";
    body.style.overflow = "visible";

    const left = leftRef.current;
    const right = rightRef.current;

    const adjustHeight = () => {
      if (!left || !right) return;

      const width = window.innerWidth;

      // ✅ Apply only above 991px
      if (width >= 992) {
        right.style.minHeight = `${left.offsetHeight}px`;
      } else {
        // ✅ Remove below tablet
        right.style.minHeight = "auto";
      }
    };

    // Run immediately
    adjustHeight();

    // ✅ Listen to both resize *and* layout changes
    const resizeObserver = new ResizeObserver(() => adjustHeight());
    resizeObserver.observe(left);

    window.addEventListener("resize", adjustHeight);

    // Also recheck every 1s (for DevTools device toggles)
    const interval = setInterval(adjustHeight, 1000);

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      window.removeEventListener("resize", adjustHeight);
      resizeObserver.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-5 blog-layout mt-5 blogsection">
      <div className="container blog-container">
        <div className="row g-4 align-items-start blog-row">
          {/* === Left Column === */}
          <div className="col-12 col-lg-7 blog-col" ref={leftRef}>
            <BlogLeft />
            <Blogbottom />
          </div>

          {/* === Right Column (Sticky Sidebar) === */}
          <div className="col-12 col-lg-4 offset-lg-1 side-col" ref={rightRef}>
            <div className="sticky-box">
              <BlogRight />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      .blogsection{
      padding-top: 140px !important;
      padding-bottom: 80px !important;
      }
      /* On screens 990px and below */
@media (max-width: 990px) {
  .blogsection {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }
}
        .blog-layout {
          position: relative;
          background: #fff;
          overflow: visible !important;
        }

        .blog-container,
        .blog-row {
          position: relative;
          overflow: visible !important;
        }

        /* Sticky only on desktop */
        @media (min-width: 992px) {
          .sticky-box {
            position: sticky;
            top: 150px;
          }
        }

        /* Disable sticky on tablet/mobile */
        @media (max-width: 991px) {
          .sticky-box {
            position: static;
          }
        }
      `}</style>
    </section>
  );
}
