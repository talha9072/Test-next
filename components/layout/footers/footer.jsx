import React from 'react';

const Footer = () => (
  <footer
    className="bg-white text-gray-700 p-0"
    style={{ fontSize: '14px' }}
  >
    {/* Gradient Border */}
    <div
      style={{
        height: '4px',
        background:
          'linear-gradient(115deg, rgba(13, 43, 117, 0.93) 0%, rgba(6, 20, 89, 1) 70%, rgba(29, 33, 73, 1) 100%)',
      }}
    />

    {/* Main Container */}
    <div className="container py-5">
      {/* Top Row */}
      <div className="row border-bottom pb-4">
        {/* Logo */}
        <div className="col-md-3 col-12 d-flex align-items-start mb-3 mb-md-0 justify-content-start logo">
          <img
            src="/assets/img/Novum-logo-01.png"
            alt="Novum Logo"
            height="35"
          />
        </div>

        {/* Links + Icons */}
        <div className="col-md-9 col-12">
          <div className="row">
            {/* Line 1 */}
            <div className="col-6 col-md-12 d-flex flex-column flex-md-row justify-content-start justify-content-md-end flex-wrap gap-3 mb-2">
              <a href="#" className="text-decoration-none text-muted">
                About
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Careers
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Locations
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Help Center
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Sustainability
              </a>
            </div>
            {/* Line 2 */}
            <div className="col-6 col-md-12 d-flex flex-column flex-md-row justify-content-start justify-content-md-end flex-wrap gap-3 mb-2">
              <a href="#" className="text-decoration-none text-muted">
                Blog
              </a>
              <a href="#" className="text-decoration-none text-muted">
                News
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Press Kit
              </a>
              <a href="#" className="text-decoration-none text-muted">
                Contact Us
              </a>
            </div>
            {/* Icons Row */}
            <div className="col-12 d-flex justify-content-start justify-content-md-end gap-3">
              <a href="#" className="text-muted" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#" className="text-muted" aria-label="Twitter">
                <i className="fab fa-x-twitter" />
              </a>
              <a href="#" className="text-muted" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-muted" aria-label="YouTube">
                <i className="fab fa-youtube" />
              </a>
              <a href="#" className="text-muted" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-md-center pt-3">
        {/* List links */}
        <div className="order-1 order-md-0 w-100 mt-md-0 text-start text-md-start">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a href="#" className="text-muted text-decoration-none">
                Privacy Policy
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-muted text-decoration-none">
                Acceptable Use Policy
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-muted text-decoration-none">
                Information Security
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-muted text-decoration-none">
                Accessibility
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-muted text-decoration-none">
                Cookies
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="order-0 order-md-1 w-100 text-start text-md-end">
          <div className="text-muted">© 2025 Novum. All Rights Reserved</div>
          <div className="text-muted">
            Created by{' '}
            <a
              href="https://oasis-digital.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-novum-blue"
            >
              Oasis Digital
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
