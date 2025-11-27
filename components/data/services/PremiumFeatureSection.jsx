"use client";
import React from "react";
import Image from "next/image";

export default function PremiumFeatureSection({
  sectionId = "premium-feature",   // ⭐ NEW PROP
  headline,
  subtext,
  label,
  items = [],
  imageSrc,
  altText = "",
  imageWidth = 800,
  imageHeight = 500,
  priority = false,
  sectionClass = "py-5",
}) {
  return (
    <section className={sectionClass} id={sectionId}>
      <div className="container">
        <div className="row align-items-center flex-wrap-reverse gy-4">

          {/* LEFT SIDE */}
          <div className="col-xl-6 col-lg-6 col-12">
            <h2 className="mb-4">{headline}</h2>
            <p className="text-muted mb-4">{subtext}</p>

            {label && <p className="fw-semibold mb-3">{label}</p>}

            <div className="row g-3">
              {items.map((item, idx) => (
                <div key={idx} className="col-md-6">
                  <div className="feature-block">{item}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-xl-6 col-lg-6 col-12">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={altText}
                width={imageWidth}
                height={imageHeight}
                className="img-fluid rounded object-cover"
                priority={priority}
              />
            ) : (
              <p className="text-danger">Image missing</p>
            )}
          </div>

        </div>
      </div>

      <style jsx>{`
        .feature-block {
          background: #f4f7ff;
          border: 1px solid #e3e9ff;
          padding: 14px 18px;
          border-radius: 14px;
          font-weight: 500;
          transition: 0.25s ease;
        }
        .feature-block:hover {
          background: #eaf0ff;
        }
      `}</style>
    </section>
  );
}
