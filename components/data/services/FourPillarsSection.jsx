"use client";
import Image from "next/image";

export default function FourPillarsSection({
  sectionId = "four-pillars",
  title = "",
  intro = "",
  primaryColor = "#0d2b75",
  backgroundStyle = "#ffffff",

  /* REQUIRED: exactly 4 cards */
  cards = [],
}) {
  return (
    <section
      id={sectionId}
      className="py-7 position-relative"
      style={{ background: backgroundStyle }}
    >
      <style>{`
        /* ------------------------------ */
        /* Premium Microsoft Cards */
        /* ------------------------------ */
        .fp-card {
          position: relative;
          z-index: 3;
          background: #ffffff;
          border-radius: 6px;
          border: 1px solid #e5e5e5;
          overflow: hidden;
          transition: all .3s ease;
          height: 100%;
        }

        .fp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 18px 48px rgba(0,0,0,0.10);
        }

        /* Image wrapper – 8px padding */
        .fp-img-container {
          padding: 6px;
          padding-bottom: 0;
        }

        .fp-img-container img {
          border-radius: 6px;
          border: 1px solid #e6e6e6;
        }

        /* Content wrapper */
        .fp-body {
          padding: 20px;
        }

        .fp-title {
          font-size: 1.22rem;
          font-weight: 700;
          color: #0b1a3d;
          margin-bottom: 10px;
        }

        .fp-desc {
          font-size: 0.97rem;
          color: #444;
          line-height: 1.6;
          margin-bottom: 10px;
        }
      `}</style>

      <div className="container position-relative" style={{ zIndex: 4 }}>
        
        {/* HEADER */}
        <h2 className="fw-bold mb-3" style={{ color: "#0b1a3d" }}>
          {title}
        </h2>

        {intro && <p className="mb-5">{intro}</p>}

        {/* CARD GRID */}
        <div className="row g-4">
          {cards.map((card, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <div className="fp-card">

                {/* IMAGE (Optional but recommended) */}
                {card.image && (
                  <div className="fp-img-container">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={600}
                      height={350}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                )}

                {/* BODY */}
                <div className="fp-body">
                  <div className="fp-title">{card.title}</div>
                  <p className="fp-desc">{card.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
