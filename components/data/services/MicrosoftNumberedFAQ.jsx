"use client";
import { useState, useEffect } from "react";

export default function MicrosoftNumberedFAQ({
  sectionId = "ms-numbered-faq",
  headline = "",
  items = [],
  backgroundType = "none",
  backgroundValue = ""
}) {
  const [openIndex, setOpenIndex] = useState(0); // FIRST item open initially

  // Determine if ALL items are open
  const allOpen = openIndex === "ALL";

  const toggle = (index) => {
    // If clicking while "ALL" is active → switch to single open logic
    if (openIndex === "ALL") {
      setOpenIndex(index);
      return;
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  const expandAll = () => setOpenIndex("ALL");
  const collapseAll = () => setOpenIndex(null);

  const bgStyle =
    backgroundType === "color"
      ? { background: backgroundValue }
      : backgroundType === "image"
      ? {
          backgroundImage: `url(${backgroundValue})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : backgroundType === "gradient"
      ? { background: backgroundValue }
      : {};

  return (
    <section id={sectionId} className="py-5" style={bgStyle}>
      {/* INLINE CSS */}
      <style>{`
        #${sectionId} .ms-faq-headline {
          font-size: 2.4rem;
          font-weight: 700;
          color: #0d1a33;
        }

        /* BUTTONS */
        #${sectionId} .ms-btn {
          padding: 8px 18px;
          border: 1px solid #ccc;
          background: #f8f8f8;
          color: #333;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.2s;
          font-size: .95rem;
        }

        /* ACTIVE STATE */
        #${sectionId} .ms-btn-active {
          border-color: #0D2B75;
          color: #0D2B75;
          font-weight: 600;
          background: #eef3ff;
        }

        #${sectionId} .ms-btn:hover {
          border-color: #0D2B75;
          color: #0D2B75;
        }

        /* FAQ ITEM */
        #${sectionId} .ms-faq-item {
          border-bottom: 1px solid #e2e2e2;
          padding: 18px 0;
        }

        #${sectionId} .ms-faq-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          gap: 20px;
        }

        #${sectionId} .ms-faq-number {
          color: #0D2B75;
          font-weight: 600;
          font-size: 1.2rem;
        }

        #${sectionId} .ms-question {
          flex: 1;
          font-size: 1.3rem;
          font-weight: 500;
          color: #0d1a33;
        }

        #${sectionId} .ms-toggle-btn {
          width: 42px;
          height: 42px;
          border-radius: 3px;
          border: none;
          background: #0D2B75;
          color: #fff;
          font-size: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #${sectionId} .ms-faq-answer {
          overflow: hidden;
          transition: all 0.4s ease;
          padding-right: 60px;
        }

        #${sectionId} .ms-faq-answer p {
          margin: 12px 0 0;
          color: #333;
          line-height: 1.55;
        }

        @media (max-width: 768px) {
          #${sectionId} .ms-faq-headline { font-size: 1.9rem; }
          #${sectionId} .ms-faq-header { flex-wrap: wrap; gap: 12px; }
          #${sectionId} .ms-question { font-size: 1rem; }
          #${sectionId} .ms-faq-answer { padding-right: 0; }
        }
      `}</style>

      <div className="container">

        {/* HEADER / BUTTONS */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2 className="ms-faq-headline">{headline}</h2>

          <div className="d-flex gap-3">
            {/* EXPAND ALL ACTIVE only when NOT all open */}
            <button
              className={`ms-btn ${!allOpen ? "ms-btn-active" : ""}`}
              onClick={expandAll}
              disabled={allOpen}
            >
              Expand all
            </button>

            {/* COLLAPSE ALL ACTIVE only when ALL are open */}
            <button
              className={`ms-btn ${allOpen ? "ms-btn-active" : ""}`}
              onClick={collapseAll}
              disabled={!allOpen}
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="ms-faq-wrapper">
          {items.map((item, i) => {
            const isOpen = openIndex === "ALL" || openIndex === i;

            return (
              <div key={i} className="ms-faq-item">

                <div className="ms-faq-header" onClick={() => toggle(i)}>
                  <span className="ms-faq-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="ms-question">{item.question}</span>

                  <button className="ms-toggle-btn">
                    {isOpen ? "−" : "+"}
                  </button>
                </div>

                <div
                  className="ms-faq-answer"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p>{item.answer}</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
