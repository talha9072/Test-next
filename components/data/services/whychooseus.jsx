"use client";
import Image from "next/image";

export default function WhyChooseSection({
  sectionId = "why-choose-foundry",
  subtitle = "WHY CHOOSE US",
  title = "Why Choose Our Azure Data Foundry Services?",
  background = "linear-gradient(to bottom right, #ffffff, #f4f7ff)",
  primaryColor = "#0d2b75",
  items = [] // { icon, title, desc }
}) {
  return (
    <section
      id={sectionId}
      className="py-7"
      style={{ background }}
    >
      <style>{`
        
        .wc-item {
          padding: 20px 10px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
          border-bottom: 1px solid #e5e7eb;
        }

        .wc-item:last-child {
          border-bottom: none;
        }

        .wc-icon {
          min-width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #eef2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: ${primaryColor};
        }

        .wc-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 4px;
          color: #0b1a3d;
        }

        .wc-desc {
          margin: 0;
          color: #5a5a5a;
          line-height: 1.55;
        }

        @media (min-width: 768px) {
          .wc-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 50px;
          }
        }

      `}</style>

      <div className="container">
        <p className="text-uppercase small fw-semibold text-muted mb-1">
          {subtitle}
        </p>

        <h2 className="fw-bold mb-5" style={{ color: "#0b1a3d" }}>
          {title}
        </h2>

        {/* GRID */}
        <div className="wc-grid">
          {items.map((item, idx) => (
            <div className="wc-item" key={idx}>
              
              <div className="wc-icon">
                <i className={item.icon}></i>
              </div>

              <div>
                <div className="wc-title">{item.title}</div>
                <p className="wc-desc">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
