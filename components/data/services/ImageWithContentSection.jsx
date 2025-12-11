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

          {/* ---------------- IMAGE LEFT ---------------- */}
          {orderControl === 1 && (
            <>
              {/* IMAGE FIRST */}
              <div className="col-lg-6 p-0 position-relative">
                {isMobile ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1600}
                    height={900}
                    className="img-fluid rounded-2 w-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                    }}
                  />
                ) : (
                  <div className="desktop-img-wrapper w-100 h-100 position-relative">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      priority
                      className="desktop-img rounded-2"
                      style={{
                        objectFit: "cover",
                        objectPosition: "50% 50%",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* TEXT SECOND */}
              <div className="col-lg-6 d-flex flex-column justify-content-center text-col py-4 pt-0 pb-0 text-right-desktop">
                <h2 className="mb-4" style={{ fontSize: "26px", fontWeight: 600, color: textColor }}>
                  {title}
                </h2>

                {paragraphs.map((p, i) => (
                  <p key={i} style={{ fontSize: "16px", lineHeight: 1.6, color: textColor }}>{p}</p>
                ))}

                <ul className="mt-3 p-0">
                  {bulletPoints.map((bp, i) => (
                    <li
                      key={i}
                      style={{
                        listStyle: "none",
                        marginBottom: "10px",
                        fontSize: "16px",
                        color: textColor,
                      }}
                    >
                      <i className="bi bi-check2-circle me-2" style={{ color: "#0d2b75" }} />
                      {bp}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* ---------------- TEXT LEFT / IMAGE RIGHT ---------------- */}
          {orderControl === 2 && (
            <>
              {/* TEXT FIRST */}
              <div className="col-lg-6 d-flex flex-column justify-content-center text-col py-4 pt-0 pb-0 text-left-desktop">
                <h2 className="mb-4" style={{ fontSize: "26px", fontWeight: 600, color: textColor }}>
                  {title}
                </h2>

                {paragraphs.map((p, i) => (
                  <p key={i} style={{ fontSize: "16px", lineHeight: 1.6, color: textColor }}>{p}</p>
                ))}

                <ul className="mt-3 p-0">
                  {bulletPoints.map((bp, i) => (
                    <li
                      key={i}
                      style={{
                        listStyle: "none",
                        marginBottom: "10px",
                        fontSize: "16px",
                        color: textColor,
                      }}
                    >
                      <i className="bi bi-check2-circle me-2" style={{ color: "#0d2b75" }} />
                      {bp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE SECOND */}
              <div className="col-lg-6 p-0 position-relative">
                {isMobile ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1600}
                    height={900}
                    className="img-fluid w-100 rounded-2"
                    style={{
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                    }}
                  />
                ) : (
                  <div className="desktop-img-wrapper w-100 h-100 position-relative">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      priority
                      className="desktop-img rounded-2"
                      style={{
                        objectFit: "cover",
                        objectPosition: "50% 50%",
                      }}
                    />
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

        /* MOBILE/TABLET -- tighter padding */
        @media (max-width: 991px) {
          .text-col {
            padding: 25px 0 !important;
          }
        }

        /* DESKTOP SIDE PADDING BASED ON ORDER */
        @media (min-width: 992px) {
          .text-right-desktop {
            padding-left: 60px !important;
          }
          .text-left-desktop {
            padding-right: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
