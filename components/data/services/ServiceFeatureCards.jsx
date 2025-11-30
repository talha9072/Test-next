"use client";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function ServiceManagedGrid({
  sectionId = "managed-services",
  title = "",
  subtitle = "",
  items = [],
  columns = 3,
  sectionClass = "py-7",

  backgroundType = "none",
  backgroundColor = "#ffffff",
  backgroundGradient = "linear-gradient(to bottom right, #ffffff, #f4f4f4)",
  backgroundImage = "",
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

  const columnClass = {
    3: "col-lg-4 col-md-6 col-12",
    4: "col-lg-3 col-md-6 col-12",
  }[columns];

  return (
    <section id={sectionId} className={sectionClass} style={getBackgroundStyle()}>
      <div className="container" style={{ "--primary": primaryColor }}>

        {title && <h2 className="text-center fw-bold mb-4">{title}</h2>}
        {subtitle && <p className="text-center text-muted mb-5">{subtitle}</p>}

        {/* ⭐ MAKE ALL COLUMNS SAME HEIGHT ⭐ */}
        <div className="row g-4 align-items-stretch">
          {items.map((card, idx) => (
            <div key={idx} className={`${columnClass} d-flex`}>
              
              <Reveal direction="fade" blur={true} delay={idx * 0.22} duration={1.4}>
                
                {/* ⭐ CARD NOW STRETCHES FULL HEIGHT ⭐ */}
                <div
                  className="premium-card d-flex flex-column h-100 w-100 bg-white p-4 rounded-4"
                  style={{
                    border: "1px solid #ececec",
                    transition: "0.35s ease",
                  }}
                >

                  {/* ICON */}
                  <div
                    className="icon-box mb-3"
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "rgba(13,43,117,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {card.iconType === "bootstrap" && (
                      <i
                        className={card.icon}
                        style={{ fontSize: "1.4rem", color: primaryColor }}
                      ></i>
                    )}
                  </div>

                  {/* TITLE */}
                  <h5 className="fw-bold mb-3" style={{ color: primaryColor }}>
                    {card.title}
                  </h5>

                  {/* LIST — flex-grow keeps spacing equal */}
                  <ul className="managed-list flex-grow-1 p-0 m-0">
                    {card.list?.map((item, i) => (
                      <li key={i}>
                        <i className="bi bi-check2-circle me-2 text-novum-blue"></i>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA fixed to bottom */}
                  <a href="#" className="dtc-cta mt-4">
                    <div className="dtc-cta-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                    Explore
                  </a>

                </div>

              </Reveal>

            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .managed-list li {
          margin-bottom: 10px;
          font-size: 0.97rem;
          display: flex;
          align-items: flex-start;
        }

        .premium-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.08);
          border-color: rgba(13, 43, 117, 0.18);
        }

        .dtc-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 1rem;
          color: var(--primary);
          text-decoration: none;
        }

        .dtc-cta-arrow {
          width: 34px;
          aspect-ratio: 1/1;
          border-radius: 50%;
          background: rgba(13, 43, 117, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.25s ease;
        }

        .dtc-cta:hover .dtc-cta-arrow {
          background: var(--primary);
          color: #fff;
        }
      `}</style>
    </section>
  );
}
