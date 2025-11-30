"use client";
import { useState } from "react";

export default function MicrosoftNumberedFAQ({
  sectionId = "ms-numbered-faq",
  headline = "",
  items = [], // { question, answer }

  /* NEW BACKGROUND PROPS */
  backgroundType = "none", // "color" | "image" | "gradient" | "none"
  backgroundValue = ""     // color code, url string, gradient string
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const expandAll = () => setOpenIndex("ALL");
  const collapseAll = () => setOpenIndex(null);

  /* BACKGROUND STYLE GENERATOR */
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

        #${sectionId} .ms-btn-active,
        #${sectionId} .ms-btn:hover {
          border-color: #0D2B75;
          color: #0D2B75;
        }

        /* FAQ ITEM */
        #${sectionId} .ms-faq-item {
          border-bottom: 1px solid #e2e2e2;
          padding: 18px 0;
        }

        /* HEADER */
        #${sectionId} .ms-faq-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          gap: 20px;
        }

        /* NUMBER */
        #${sectionId} .ms-faq-number {
          color: #0D2B75;
          font-weight: 600;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        /* QUESTION */
        #${sectionId} .ms-question {
          flex: 1;
          font-size: 1.1rem;
          font-weight: 500;
          color: #0d1a33;
        }

        /* TOGGLE BUTTON */
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
          flex-shrink: 0;
        }

        /* ANSWER */
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

        /* RESPONSIVE */
        @media (max-width: 768px) {
          #${sectionId} .ms-faq-headline {
            font-size: 1.9rem;
          }

          #${sectionId} .ms-faq-header {
            flex-wrap: wrap;
            gap: 12px;
          }

          #${sectionId} .ms-question {
            font-size: 1rem;
          }

          #${sectionId} .ms-faq-number {
            font-size: 1rem;
            margin-right: 10px;
          }

          #${sectionId} .ms-toggle-btn {
            width: 38px;
            height: 38px;
            font-size: 20px;
          }

          #${sectionId} .ms-faq-answer {
            padding-right: 0;
          }
        }

        @media (max-width: 480px) {
          #${sectionId} .ms-faq-headline {
            font-size: 1.7rem;
          }
        }
      `}</style>

      <div className="container">

        {/* HEADER + BUTTONS */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2 className="ms-faq-headline">{headline}</h2>

          <div className="d-flex gap-3">
            <button className="ms-btn ms-btn-active" onClick={expandAll}>
              Expand all
            </button>
            <button className="ms-btn" onClick={collapseAll}>
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

                  {/* NUMBER */}
                  <span className="ms-faq-number">
                    {String(i + 1).padStart(2, "0")}/
                  </span>

                  {/* QUESTION */}
                  <span className="ms-question">{item.question}</span>

                  {/* BUTTON */}
                  <button className="ms-toggle-btn">
                    {isOpen ? "−" : "+"}
                  </button>
                </div>

                {/* ANSWER */}
                <div
                  className="ms-faq-answer"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0
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
