"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProcessWithImageSection({
  headline,
  subtext,
  steps = [],
  imageSrc,
  altText = "",
  imageWidth = 600,
  imageHeight = 600,
  priority = false,
  sectionClass = "py-5"
}) {
  const sectionRef = useRef(null);

  // Animation for timeline
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      sectionRef.current
        .querySelectorAll(".process-item")
        .forEach(item => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={sectionClass} ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* LEFT: TIMELINE */}
          <div className="col-lg-6">
            <h2 className="mb-3">{headline}</h2>
            <p className="text-muted mb-5">{subtext}</p>

            <div className="process-wrapper">
              <div className="vertical-line"></div>

              {steps.map((step, idx) => (
                <div key={idx} className="process-item mb-4">
                  <div className="process-dot"></div>

                  <div className="process-content">
                    <h4 className="mb-2">{step.title}</h4>
                    <p className="text-muted mb-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="col-lg-6 text-center">
            <Image
              src={imageSrc}
              alt={altText}
              width={imageWidth}
              height={imageHeight}
              className="img-fluid rounded"
              priority={priority}
            />
          </div>

        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .process-wrapper {
          position: relative;
         
        }

        .vertical-line {
          position: absolute;
          left: 6px;
          top: 0;
          width: 2px;
          height: 100%;
          background: #d6dcef;
        }

        .process-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #0d2b75;
          position: absolute;
          left: 0;
          top: 6px;
          box-shadow: 0 0 0 4px rgba(13, 43, 117, 0.15);
        }

        .process-item {
          position: relative;
          padding-left: 30px;
          opacity: 0;
          transform: translateY(20px);
          transition: 0.5s ease;
        }

        .process-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .process-wrapper {
            padding-left: 24px;
          }
        }
      `}</style>
    </section>
  );
}
