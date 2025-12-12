"use client";
import Image from "next/image";

export default function HighlightsSection({
  sectionId = "latest-highlights",
  subtitle = "HIGHLIGHTS",
  title = "Latest Announcements & Highlights",
  backgroundGradient = "linear-gradient(to bottom right, #ffffff, #f4f6ff)",
  leftImage = "/assets/azure/placeholder.webp",
  leftTitle = "Azure Data Foundry",
  leftDesc = "Latest capabilities and innovations across Azure AI ecosystem.",
  primaryColor = "#0d2b75",
  cards = [] // { icon, title, desc, cta, link }
}) {
  return (
    <section
      id={sectionId}
      className="py-7"
      style={{
        background: backgroundGradient,
      }}
    >
      <style>{`
        
        /* MAIN LEFT CARD */
        .hl-left-card {
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #e3e6eb;
          background: #fff;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .hl-left-image-wrapper {
          position: relative;
          width: 100%;
          height: 360px;
          overflow: hidden;
        }

        .hl-left-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 160px;
          background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));
        }

        .hl-left-content {
          padding: 32px;
          flex-grow: 1;
        }

        .hl-left-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: #0b1a3d;
        }

        .hl-left-desc {
          margin-top: 8px;
          color: #444;
          font-size: 1rem;
          line-height: 1.55;
        }

        /* RIGHT MINI CARDS */
        .hl-card {
          border-radius: 6px;
          border: 1px solid #e3e6eb;
          padding: 30px;
          background: #ffffff;
          transition: all .28s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .hl-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(0,0,0,0.08);
        }

        .hl-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #eef2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: ${primaryColor};
          margin-bottom: 16px;
        }

        .hl-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0b1a3d;
          margin-bottom: 8px;
        }

        .hl-desc {
          color: #555;
          line-height: 1.55;
          font-size: .95rem;
          margin-bottom: 16px;
        }

        /* NEW CTA EXACT LIKE uc-cta */
        .hl-cta {
          font-weight: 600;
          font-size: .95rem;
          color: ${primaryColor};
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all .25s ease;
        }

        .hl-cta:hover {
          color: #0a1f5c;
        }

        .hl-cta-arrow {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #eef2ff;
          color: ${primaryColor};
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .25s ease;
          font-size: 14px;
          margin-right: 8px;
        }

        .hl-cta:hover .hl-cta-arrow {
          background: ${primaryColor};
          color: #fff;
        }

      `}</style>

      <div className="container">
        <p className="text-uppercase fw-semibold small text-muted mb-1">{subtitle}</p>

        <h2 className="fw-bold mb-5" style={{ color: "#0b1a3d" }}>{title}</h2>

        <div className="row g-4 align-items-stretch">

          {/* LEFT GIANT CARD */}
          <div className="col-lg-5 d-flex">
            <div className="hl-left-card w-100 shadow-sm">

              <div className="hl-left-image-wrapper">
                <Image
                  src={leftImage}
                  alt="Left Highlight"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="hl-left-gradient"></div>
              </div>

              <div className="hl-left-content">
                <div className="hl-left-title">{leftTitle}</div>
                <p className="hl-left-desc">{leftDesc}</p>
              </div>

            </div>
          </div>

          {/* RIGHT GRID CARDS */}
          <div className="col-lg-7">
            <div className="row g-4">
              {cards.map((card, idx) => (
                <div className="col-md-6 d-flex" key={idx}>
                  <div className="hl-card w-100">

                    <div className="hl-icon">
                      <i className={card.icon}></i>
                    </div>

                    <div className="hl-title">{card.title}</div>

                    <p className="hl-desc">{card.desc}</p>

                    {card.link && (
                      <a
                        className="hl-cta mt-1"
                        href={card.link}
                        target="_blank"
                      >
                        <div className="hl-cta-arrow">
                          <i className="bi bi-arrow-right"></i>
                        </div>
                        {card.cta || "Explore"}
                      </a>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
