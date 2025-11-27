"use client";
import Image from "next/image";

export default function InnovationsRoadmapSection({
  sectionId = "innovations",
  subtitle = "INNOVATIONS",
  title = "Innovations & Future Roadmap",
  intro = "",
  items = [],
  sectionClass = "py-7 position-relative",
  primaryColor = "#0d2b75",
  backgroundGradient = "linear-gradient(to right bottom, #ffffff, #eef3ff)",
}) {
  return (
    <section
      id={sectionId}
      className={sectionClass}
      style={{
        background: backgroundGradient,
      }}
    >
      <div className="container">
        {/* Header */}
        {subtitle && (
          <p className="text-uppercase fw-semibold small text-muted mb-1">
            {subtitle}
          </p>
        )}

        <h2 className="fw-bold mb-3" style={{ color: "#0b1a3d" }}>
          {title}
        </h2>

        {intro && <p className="mb-5">{intro}</p>}

        {/* Microsoft Grid */}
        <div className="row g-5">
          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="d-flex">
                {/* Icon Box */}
                <div className="ms-icon-box">
                  <i
                    className={`${item.icon} fs-3`}
                    style={{ color: primaryColor }}
                  ></i>
                </div>

                {/* Text */}
                <div>
                  <div className="ms-line"></div>
                  <h5 className="ms-item-title">{item.title}</h5>
                  <p className="ms-item-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES (SAFE) */}
      <style jsx>{`
        section {
          position: relative;
        }

        .ms-item-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: ${primaryColor};
        }

        .ms-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(13, 43, 117, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 14px;
        }

        .ms-item-desc {
          color: #444;
          margin-top: 6px;
          line-height: 1.55;
        }

        .ms-line {
          width: 30px;
          height: 3px;
          background: ${primaryColor};
          border-radius: 4px;
          margin-bottom: 8px;
        }
      `}</style>
    </section>
  );
}
