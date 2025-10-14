"use client";
import React from "react";
import Link from "next/link";

export default function BlogRight() {
  const tags = [
    "Mobility",
    "Cloud",
    "Digital",
    "Automation",
    "Data Center",
    "Digital Workspace",
  ];

  const services = [
    { title: "Digital Transformation", link: "/services/digital-transformation" },
    { title: "Power BI / Reporting Consulting", link: "/services/power-bi" },
    { title: "Data & AI", link: "/services/data-ai" },
    { title: "Change Management & Adoption", link: "/services/change-management" },
    { title: "Corporate Trainings", link: "/services/corporate-trainings" },
    { title: "Software Development", link: "/services/software-development" },
  ];

  return (
    <div className="blog-right">
      {/* === What matters to you === */}
      <div className="mb-4">
        <h6 className="fw-semibold text-novum-blue mb-3">
          What matters to you?
        </h6>

        {/* Tags */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="tag-item px-3 py-1 rounded-pill">
              {tag}
            </span>
          ))}
        </div>

        <a href="#" className="text-novum-blue text-decoration-none small fw-medium">
          Explore more
        </a>
      </div>

      <hr className="my-4" />

      {/* === Other Services === */}
      <div>
        <h6 className="fw-semibold text-novum-blue mb-3">Other Services</h6>

        <ul className="list-unstyled mb-0">
          {services.map((service, i) => (
            <li key={i} className="mb-2">
              <Link
                href={service.link}
                className="text-decoration-none d-flex align-items-center service-link"
              >
                <i className="bi bi-chevron-right me-2 text-novum-blue small"></i>
                <span>{service.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* === Inline CSS === */}
      <style jsx>{`
        

        .text-novum-blue {
          color: #0d2b75;
        }

        .tag-item {
          background: #f3f6ff;
          color: #0d2b75;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tag-item:hover {
          background: #0d2b75;
          color: #fff;
        }

        .service-link {
          color: #000;
          font-size: 0.92rem;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          color: #0d2b75;
          transform: translateX(3px);
        }

        hr {
          border-top: 1px solid #d1d1d1ff;
          margin: 1.5rem 0;
        }

        @media (max-width: 991px) {
          .blog-right {
            position: relative;
            top: 0;
            padding-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
