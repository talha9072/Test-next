"use client";
import { useState } from "react";
import React from "react";

export default function VideoHero({
  backgroundImage = "",
  overlayOpacity = 0.45,
  title = "",
  description = "",
  videoUrl = "",
  sectionClass = "py-7",
  textColor = "#ffffff",
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section
        className={sectionClass}
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "550px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: textColor,
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `rgba(0,0,0,${overlayOpacity})`,
            zIndex: 1,
          }}
        ></div>

        {/* CONTENT */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "820px" }}>
          
          {/* PERFECT ROUND PLAY BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            style={{
              width: "75px",        // ensure perfect circle
              height: "75px",
              minWidth: "75px",
              minHeight: "75px",

              borderRadius: "50%", // perfect round
              border: "2px solid rgba(255,255,255,0.85)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
              margin: "0 auto 25px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0, // avoid oval shape caused by padding
            }}
            className="video-play-btn"
          >
            <i className="bi bi-play-fill" style={{ fontSize: "32px", marginLeft: "3px" }}></i>
          </button>

          {/* Title */}
          {title && (
            <h2 className="fw-bold mb-3 text-white" style={{ lineHeight: 1.3 }}>
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="mx-auto" style={{ maxWidth: "620px" }}>
              {description}
            </p>
          )}
        </div>

        {/* Hover effect */}
        <style>{`
          .video-play-btn:hover {
            background: rgba(255,255,255,0.3);
            transform: scale(1.09);
          }
        `}</style>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      {showModal && (
        <div
          className="video-modal-overlay"
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="video-modal-content"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              background: "#000",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(0,0,0,0.6)",
            }}
          >
            {/* Close Button */}
            <button
  onClick={() => setShowModal(false)}
  style={{
    all: "unset",                // ← RESET ALL GLOBAL CSS
    boxSizing: "border-box",

    position: "absolute",
    top: "10px",
    right: "10px",

    width: "40px",
    height: "40px",
    borderRadius: "50%",

    background: "rgba(0,0,0,0.55)",
    color: "#fff",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "22px",
    cursor: "pointer",
  }}
>
  ×
</button>

            {/* Video */}
            <iframe
              width="100%"
              height="500px"
              src={videoUrl}
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
