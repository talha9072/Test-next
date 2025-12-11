"use client";
import Image from "next/image";

export default function MicrosoftBannerStats({
  sectionId = "banner-stats",
  title = "",
  subtitle = "",
  buttonLabel = "",
  buttonLink = "#",

  // background
  backgroundType = "none", // none | color | gradient | image
  backgroundColor = "#ffffff",
  backgroundGradient = "linear-gradient(to right, #eef5ff, #ffffff)",
  backgroundImage = "",

  // gradient box (inner card)
  boxGradient = "linear-gradient(135deg, #e4efff, #dce8ff 40%, #f0f5ff)",

  // NOW SUPPORTS: { icon, title, desc }
  items = [],

  sectionClass = "py-5",
  primaryColor = "#0D2B75",
}) {
  const getBackgroundStyle = () => {
    if (backgroundType === "color") return { background: backgroundColor };
    if (backgroundType === "gradient") return { background: backgroundGradient };
    if (backgroundType === "image")
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    return {};
  };

  return (
    <section
      id={sectionId}
      className={sectionClass}
      style={{ ...getBackgroundStyle(), "--primary": primaryColor }}
    >
      <div className="container text-center">

        {/* Heading */}
        
          {title && (
            <h2 className="mb-3">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="text-muted mb-4">{subtitle}</p>
          )}

          {buttonLabel && (
            <a href={buttonLink} className="btn btn-primary px-4 py-2 mb-5">
              {buttonLabel}
            </a>
          )}
        

        {/* Feature Card (gradient container) */}
        
          <div
            className="rounded-2 p-4 p-lg-5 d-flex flex-column flex-lg-row justify-content-between align-items-start gap-5"
            style={{
              background: boxGradient,
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="d-flex align-items-start gap-3 flex-lg-row flex-column text-start flex-fill"
              >
                {/* Icon */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(13, 43, 117, 0.12)",
                  }}
                >
                 {item.iconType === "bootstrap" ? (
                    <i
                        className={item.icon}
                        style={{ fontSize: "2rem", color: primaryColor }}
                    ></i>
                    ) : (
                    <Image
                        src={item.icon}
                        alt={item.title}
                        width={42}
                        height={42}
                    />
                    )}
                </div>

                {/* Title + Desc */}
                <div>
                  <h3 className="mb-2"style={{fontSize: "1rem" }}>
                    {item.title}
                  </h3>
                  <p className="text-muted m-0" style={{ maxWidth: "320px" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .feature-item {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}
