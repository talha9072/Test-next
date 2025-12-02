"use client";

export default function OverviewComponent({
  sectionId = "overview",
  title = "",
  paragraphs = [],
  listItems = [],
  primaryColor = "#2d1a78",

  backgroundType = "color", // color | gradient | image | none
  backgroundColor = "#e5f1ff",
  backgroundGradient = "linear-gradient(to bottom right, #f7f5f3, #efe8e4)",
  backgroundImage = "",
  sectionClass = "py-7",
}) {
  const getBackgroundStyle = () => {
    switch (backgroundType) {
      case "color":
        return { background: backgroundColor };
      case "gradient":
        return { background: backgroundGradient };
      case "image":
        return {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
      default:
        return {};
    }
  };

  return (
    <section
      id={sectionId}
      className={sectionClass}
      style={getBackgroundStyle()}
    >
      <div className="container">

        {/* Heading */}
        {title && (
          <h2 className="fw-bold mb-4">
            {title}
          </h2>
        )}

        {/* Paragraphs */}
        <div className="col-12">
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-muted mb-3">
              {p}
            </p>
          ))}

          {/* List */}
          {listItems.length > 0 && (
            <ul className="overview-list mt-4">
              {listItems.map((item, idx) => (
                <li key={idx}>
                  <i
                    className="bi bi-check2-circle me-2"
                    style={{ color: primaryColor }}
                  ></i>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .overview-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .overview-list li {
          margin-bottom: 10px;
          font-size: 1.15rem;
          display: flex;
          align-items: flex-start;
        }
      `}</style>
    </section>
  );
}
