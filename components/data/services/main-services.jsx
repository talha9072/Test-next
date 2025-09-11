// components/data/services/main-services.jsx
"use client";
import PropTypes from "prop-types";

export default function MainServices({
  id,
  subtitle,
  title,
  description,
  image,
  services = [],
}) {
  return (
    <section className="py-5 bg-light" id={id}>
      <div className="container">
        {/* Top Row */}
        <div className="row align-items-center">
        
          {/* Right Image */}
          <div className="col-lg-6">
            {image && (
              <img
                src={image.src}
                alt={image.alt || "Service Image"}
                className="img-fluid rounded"
              />
            )}
          </div>

          {/* Left Content */}
          <div className="col-lg-6">
            {subtitle && (
              <span className="subtitle-one text-uppercase text-novum-blue fw-semibold mb-2 d-inline-block">
                {subtitle}
              </span>
            )}
            {title && <h2 className="fw-bold mb-4 text-dark">{title}</h2>}
            {description && (
              <p className="mb-3 text-muted">{description}</p>
            )}
          </div>
          
        </div>

        {/* Bottom Row - Services */}
        {services.length > 0 && (
          <div className="row mt-4 gy-4">
            {services.map((svc, i) => (
              <div className="col-md-4 col-sm-6" key={i}>
                <div className="info-card h-100 p-4 rounded">
                  <h5 className="fw-semibold mb-2 text-novum-blue">
                    {svc.title}
                  </h5>
                  <p className="text-muted small mb-0">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .subtitle-one {
          letter-spacing: 1px;
          font-size: 14px;
        }
        h2 {
          color: #0d2b75;
          line-height: 1.3;
        }
        .info-card {
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
          background: #fff;
        }
        .info-card:hover {
          border-color: #0d2b75;
          background: #f9fbff;
        }
        .text-novum-blue {
          color: #0d2b75 !important;
        }
      `}</style>
    </section>
  );
}

MainServices.propTypes = {
  id: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ),
};

MainServices.defaultProps = {
  id: "services",
  subtitle: "",
  title: "",
  description: "",
  image: null,
  services: [],
};
