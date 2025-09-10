// components/QuickLinks.jsx
import React from "react";

export default function QuickLinks() {
  const links = [
    { text: "Case Study", href: "/case-studies" },
    { text: "Microsoft Licenses", href: "/services/microsoft-licensing" },
    { text: "What is Power BI?", href: "/services/power-bi" },
    { text: "The Digital Apron", href: "#" },
    { text: "Data Analytics Partner", href: "/services/data-warehouse" },
    { text: "Novum Digital Academy", href: "#" },
    { text: "Data Audit", href: "/services/data-audit" },
    { text: "Power BI Reports", href: "/services/power-bi" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          
          {/* Left: Image with overlay */}
          <div className="col-lg-8 d-flex">
            <a
              href="/contact"
              className="text-decoration-none d-flex w-100"
            >
              <div className="position-relative overflow-hidden rounded shadow-sm flex-fill">
                {/* Background Image */}
                <img
                  src="/assets/img/home/cta-1.png"
                  alt="Novum for Business"
                  className="w-100 h-100 object-fit-cover rounded"
                  style={{ minHeight: "300px" }}
                />

                {/* Dark overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded"
                  style={{ background: "rgba(0, 0, 0, 0.35)" }}
                />

                {/* Overlay text */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-start p-4 rounded">
                  <h6 className="text-white mb-2">Solution</h6>
                  <h2 className="text-white fw-bold mb-3">
                    Novum for Business
                  </h2>
                  <p className="text-white mb-0">
                    Learn how Novum primes your business for effective digital
                    transformation.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Right: Quick Links Card */}
          <div className="col-lg-4 d-flex">
            <div className="p-4 rounded shadow-sm border flex-fill d-flex flex-column justify-content-start bg-light-blue">
              <h5 className="fw-bold mb-3 text-dark">
                Explore Business Solutions
              </h5>
              <ul className="list-unstyled mb-0">
                {links.map((link, i) => (
                  <li key={i} className="mb-3">
                    <a
                      href={link.href}
                      className="text-dark text-decoration-none fw-medium"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
