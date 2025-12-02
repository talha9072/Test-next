"use client";
import Image from "next/image";

export default function HeroSideBySide({
  sectionId = "hero-side-by-side",
  imageSrc = "",
  imageAlt = "",
  imageWidth = 1600,   // bigger image resolution
  imageHeight = 1000,  // taller image for premium look

  title = "",
  paragraphs = [],
  listItems = [],
  buttonText = "",
  buttonLink = "#",

  primaryColor = "#0D2B75",

  backgroundType = "color", // color | gradient | none
  backgroundColor = "#efe5e4",
  backgroundGradient = "linear-gradient(to bottom right, #f6efee, #efe5e4)",

  sectionClass = "py-7",
}) {
  // background settings
  const getBackgroundStyle = () => {
    if (backgroundType === "color") return { background: backgroundColor };
    if (backgroundType === "gradient") return { background: backgroundGradient };
    return {};
  };

  return (
    <section id={sectionId} className={sectionClass} style={getBackgroundStyle()}>
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* LEFT IMAGE — now bigger */}
          <div className="col-12 col-lg-6">
            <div className="hero-image-wrapper">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="hero-image"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT — now slimmer */}
          <div className="col-12 col-lg-6">
            {title && (
              <h2 className="fw-bold mb-4" style={{ color: primaryColor }}>
                {title}
              </h2>
            )}

            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-muted mb-3">{p}</p>
            ))}

            {listItems.length > 0 && (
              <ul className="hero-list mt-3">
                {listItems.map((item, idx) => (
                  <li key={idx}>
                    <i
                      className="bi bi-check2-circle me-2"
                      style={{ color: primaryColor }}
                    ></i>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {buttonText && (
              <a
                href={buttonLink}
                className="btn hero-btn mt-4"
                style={{ background: primaryColor }}
              >
                {buttonText} <i className="bi bi-arrow-right ms-2"></i>
              </a>
            )}
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .hero-image-wrapper {
          border-radius: 0.375rem;
          overflow: hidden;
          height: 100%;
        }

        .hero-image {
          border-radius: 0.375rem;
          object-fit: cover;
          width: 100%;
          height: 100%;
          min-height: 420px;        /* ensures big height */
        }

        .hero-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hero-list li {
          margin-bottom: 10px;
          font-size: 1.1rem;
          display: flex;
          align-items: flex-start;
        }

        .hero-btn {
          padding: 12px 28px;
          border-radius: 10px;
          color: #fff;
          border: none;
          font-weight: 600;
        }

        @media (max-width: 991px) {
          .hero-image {
            min-height: 280px;
          }
        }
      `}</style>
    </section>
  );
}
