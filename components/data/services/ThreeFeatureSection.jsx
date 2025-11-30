"use client";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function MicrosoftThreeFeature({
  sectionId = "ms-three-feature",
  overline = "",
  headline = "",
  subtext = "",
  items = [], // { iconClass, title, desc }
  sectionClass = "py-5"
}) {
  return (
    <section
      id={sectionId}
      className={sectionClass}
      style={{ background: "#e5f1ff" }}
    >
      <style>{`
        #${sectionId} .ms-overline {
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #555;
          font-size: .85rem;
          margin-bottom: 10px;
        }

        #${sectionId} .ms-headline {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0d1a33;
        }

        #${sectionId} .ms-subtext {
          font-size: 1.15rem;
          color: #444;
          max-width: 800px;
          margin: 0px auto 0;
        }

        #${sectionId} .ms-feature-box {
          text-align: center;
          padding: 10px 20px;
        }

        /* Icon box */
        #${sectionId} .ms-icon-wrap {
          width: 70px;
          height: 70px;
          border-radius: 14px;
          background: #ffffff;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }

        #${sectionId} .ms-icon-wrap i {
          font-size: 32px;
        }

        #${sectionId} .ms-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #0d1a33;
          margin-bottom: 8px;
        }

        #${sectionId} .ms-desc {
          font-size: 1rem;
          color: #444;
          line-height: 1.5;
          max-width: 280px;
          margin: 0 auto;
        }

        @media(max-width: 768px) {
          #${sectionId} .ms-headline {
            font-size: 2rem;
          }
          #${sectionId} .ms-feature-box {
            margin-bottom: 30px;
          }
        }
      `}</style>

      <div className="container text-center py-5">

        {overline && <p className="ms-overline">{overline}</p>}
        {headline && <h2 className="ms-headline mb-4">{headline}</h2>}
        {subtext && <p className="ms-subtext">{subtext}</p>}

        <div className="row justify-content-center mt-3 gy-5">
          {items.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="ms-feature-box">

                {/* ICON BOX WITH BOOTSTRAP ICON */}
                <div className="ms-icon-wrap">
                  <i className={`${item.iconClass} text-novum-blue`}></i>
                </div>

                <h4 className="ms-title">{item.title}</h4>
                <p className="ms-desc">{item.desc}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
