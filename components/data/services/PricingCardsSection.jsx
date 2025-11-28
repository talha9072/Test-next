"use client";
import Image from "next/image";

export default function PricingCardsSection({
  sectionId = "pricing-cards",
  subtitle = "PRICING & LICENSING",
  title = "Pricing, Licensing & Cost Considerations",
  intro = "",
  backgroundImage = "",
  primaryColor = "#0d2b75",
  cards = []
}) {
  return (
    <section
      id={sectionId}
      className="py-7 position-relative"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.80)",
          backdropFilter: "blur(6px)",
        }}
      ></div>

      <style>{`
        .pricing-card {
          position: relative;
          z-index: 5;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e3e3e3;
          padding: 32px;
          transition: all .3s ease;
          height: 100%;
        }
        .pricing-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.1);
        }

        .pc-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0b1a3d;
          margin-bottom: 8px;
        }

        .pc-desc {
          font-size: 0.97rem;
          color: #555;
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .pc-list li {
          margin-bottom: 8px;
          display: flex;
          gap: 8px;
          line-height: 1.5;
        }

        .pc-list i {
          color: ${primaryColor};
          font-size: 1.1rem;
          margin-top: 3px;
        }

        .pc-cta {
          background: ${primaryColor};
          border: none;
          padding: 10px 26px;
          border-radius: 3px;
          color: white;
          text-decoration: none;
          display: inline-block;
          transition: all .25s ease;
        }

        .pc-cta:hover {
          background: #fff;
          border: 1px solid ${primaryColor};
          color: ${primaryColor};
        }
      `}</style>

      <div className="container position-relative" style={{ zIndex: 6 }}>
        {/* HEADER */}
        {subtitle && (
          <p className="text-uppercase fw-semibold small text-muted mb-1">
            {subtitle}
          </p>
        )}

        <h2 className="fw-bold mb-3" style={{ color: "#0b1a3d" }}>
          {title}
        </h2>

        {intro && <p className="mb-5">{intro}</p>}

        {/* CARDS */}
        <div className="row g-4">
          {cards.map((card, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <div className="pricing-card">

                {/* TITLE */}
                <h4 className="pc-title">{card.title}</h4>

                {/* DESCRIPTION */}
                {card.desc && <p className="pc-desc">{card.desc}</p>}

                {/* LIST */}
                {card.list && (
                  <ul className="pc-list list-unstyled mt-3">
                    {card.list.map((item, i) => (
                      <li key={i}>
                        <i className="bi bi-check2-circle"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                {card.cta && (
                  <a className="pc-cta mt-3" href={card.link || "#"}>
                    {card.cta}
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
