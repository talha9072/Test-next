"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageWithContentSection({
  title = "We stay ahead of the industry curve",
  paragraphs = [],
  bulletPoints = [],
  imageSrc = "/assets/img/sample.jpg",
  imageAlt = "Section Image",
  bgColor = "#e5f1ff",
  textColor = "#000000",
  orderControl = 2,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-100 py-5" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="row g-0 align-items-stretch">

          {/* =====================================
              IMAGE LEFT / TEXT RIGHT (orderControl = 1)
          ====================================== */}
          {orderControl === 1 && (
            <>
              {/* IMAGE FIRST */}
              <div className="col-lg-6 p-0 position-relative">
                {isMobile ? (
                  <Image src={imageSrc} alt={imageAlt} width={1600} height={900} className="img-fluid w-100" />
                ) : (
                  <div className="desktop-img-wrapper w-100 h-100 position-relative">
                    <Image src={imageSrc} alt={imageAlt} fill priority className="desktop-img" />
                  </div>
                )}
              </div>

              {/* TEXT SECOND */}
              <div className="col-lg-6 d-flex flex-column justify-content-center text-col py-4 text-right-desktop">
                <h2 style={{ fontSize: "26px", fontWeight: "600", color: textColor }} className="mb-4">
                  {title}
                </h2>

                {paragraphs.map((para, idx) => (
                  <p key={idx} style={{ fontSize: "16px", lineHeight: 1.6, color: textColor }}>
                    {para}
                  </p>
                ))}

                <ul className="mt-3 p-0">
                  {bulletPoints.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        listStyle: "none",
                        marginBottom: "10px",
                        fontSize: "16px",
                        color: textColor,
                      }}
                    >
                      <i className="bi bi-check2-circle me-2" style={{ color: "#0d2b75" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* =====================================
              TEXT LEFT / IMAGE RIGHT (orderControl = 2)
          ====================================== */}
          {orderControl === 2 && (
            <>
              {/* TEXT FIRST */}
              <div className="col-lg-6 d-flex flex-column justify-content-center text-col py-4 text-left-desktop">
                <h2 style={{ fontSize: "26px", fontWeight: "600", color: textColor }} className="mb-4">
                  {title}
                </h2>

                {paragraphs.map((para, idx) => (
                  <p key={idx} style={{ fontSize: "16px", lineHeight: 1.6, color: textColor }}>
                    {para}
                  </p>
                ))}

                <ul className="mt-3 p-0">
                  {bulletPoints.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        listStyle: "none",
                        marginBottom: "10px",
                        fontSize: "16px",
                        color: textColor,
                      }}
                    >
                      <i className="bi bi-check2-circle me-2" style={{ color: "#0d2b75" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE SECOND */}
              <div className="col-lg-6 p-0 position-relative">
                {isMobile ? (
                  <Image src={imageSrc} alt={imageAlt} width={1600} height={900} className="img-fluid w-100" />
                ) : (
                  <div className="desktop-img-wrapper w-100 h-100 position-relative">
                    <Image src={imageSrc} alt={imageAlt} fill priority className="desktop-img" />
                  </div>
                )}
              </div>
            </>
          )}

        </div>
      </div>

      <style jsx>{`
        .desktop-img-wrapper {
          height: 100%;
        }
        .desktop-img {
          object-fit: cover;
          object-position: center;
        }

        /* MOBILE/TABLET — only top/bottom padding */
        @media (max-width: 991px) {
          .text-col {
            padding: 25px 0 !important;
          }
        }

        /* DESKTOP — conditional side padding */
        @media (min-width: 992px) {
          /* orderControl=1 → TEXT RIGHT → padding-right */
          .text-right-desktop {
            padding-right: 0px !important;
            padding-left: 60px !important;
          }

          /* orderControl=2 → TEXT LEFT → padding-left */
          .text-left-desktop {
            padding-left: 0px !important;
            padding-right: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
