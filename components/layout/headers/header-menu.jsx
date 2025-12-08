// components/layout/MainMenu.jsx
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Mega menu items for Services
const megaItems = [
  {
    heading: 'Digital Transformation',
    
    links: [
      { label: 'Digital Strategy', href: '/services/digital-strategy' },
      { label: 'Strategic Resourcing', href: '/services/strategic-resourcing' },
      { label: 'Change Management & Adoption', href: '/services/change-management-adoption' },
      { label: 'Corporate Trainings', href: '/services/corporate-trainings' },
      { label: 'Data Audit', href: '/services/data-audit' },
      { label: 'Microsoft Licensing', href: '/services/microsoft-licensing' },
      { label: 'Sustainability Manager', href: '/services/microsoft-sustainability' },
      
      
      
    ],
  },
  {
    heading: 'Data & AI',
    
    links: [
      { label: 'Power BI / Reporting Consulting', href: '/services/power-bi' },
      { label: 'Data Warehouse', href: '/services/data-warehouse' },
      { label: 'Artificial Intelligence and IoT', href: '/services/artificial-intelligence-iot' },
      { label: 'Azure Data Foundry', href: '/services/azure-data-foundry' },
    ],
  },
  {
    heading: 'Business Applications',
    
    links: [
      { label: 'Microsoft Dynamics 365', href: '/services/microsoft-dynamics-365' },
      { label: 'Microsoft 365 Deployment', href: '/services/microsoft-365-deployment' },
      
    ],
  },
  {
    heading: 'Software & Engineering',
   
    links: [
      { label: 'Software Development', href: '/services/software-development' },
      { label: 'Application Development', href: '/services/custom-application-development' },
      { label: 'System integration', href: '/services/system-integration' },
      { label: 'Automation', href: '/services/automation' },
      { label: 'Copilot Studio / Agents', href: '/services/copilot' },
      { label: 'Azure(Cloud Adoption and Integration)', href: '/services/azure' },
      
    ],
  },
   {
    heading: 'Engagement',
   
    links: [
      { label: 'Consulting & Advisory', href: '/services/consulting-advisory' },
      { label: 'Professional Services', href: '/services/professional-services' },
      { label: 'Managed Services', href: '/services/managed-services' },
      
      
    ],
  },
];

// Mega menu items for Products
const productItems = [
  {
    heading: 'Products ISV',
    
    links: [
      { label: 'Airport Turnaround Solution', href: '/products/airports-turnaround-solution' },
      { label: 'NES (Novum Entrance System)', href: '/products/nes-novum-entrance-system' },
      { label: 'OCR Certification Directory', href: '/products/ocr-certification-directory' },
      { label: 'ESS - Employee Self Service', href: '/products/ess-employee-self-service' },
    ],
  },
  {
    heading: 'By Industry or Business Function',
   
    links: [
      { label: 'Face Recognition & Detection', href: '/products/face-recognition-and-detection' },
      { label: 'Commodity Bidding Platform', href: '/products/commodity-bidding-platform' },
      { label: 'D365 Automations', href: '/products/d365-automations' },
      { label: 'Airport Revenue Management ISV', href: '/products/airport-revenue-management-isv' },
    ],
  },
  {
    // CTA column at index 2 stays as a special card
    heading: null,
    icon: null,
    links: null,
  },
];

const MainMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  const serviceCols = megaItems.length;
  const productCols = productItems.length;

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        servicesRef.current && !servicesRef.current.contains(e.target) &&
        productsRef.current && !productsRef.current.contains(e.target)
      ) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <ul className="main-menu">
      <li><Link href="/">Home</Link></li>

      <li><Link href="/about-us">About</Link></li>
      {/* Services Mega Menu */}
      <li className="menu-item-has-children mega-menu" ref={servicesRef}>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setOpenMenu(openMenu === 'services' ? null : 'services');
          }}
        >
          Services <i className="bi bi-chevron-down"></i>
        </a>
        <div className={`mega-dropdown ${openMenu === 'services' ? 'open' : ''}`}>
          <div
            className="mega-content"
            style={{ gridTemplateColumns: `repeat(${serviceCols}, 1fr)` }}
          >
            {megaItems.map((col, i) => (
              <div key={i} className="mega-col">
                <p className="menuheading"><i className={`${col.icon} me-2`}></i>{col.heading}</p>
                <ul>
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </li>

      {/* Products Mega Menu */}
      <li className="menu-item-has-children mega-menu" ref={productsRef}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setOpenMenu(openMenu === "products" ? null : "products");
          }}
        >
          Products <i className="bi bi-chevron-down"></i>
        </a>
        <div className={`mega-dropdown ${openMenu === "products" ? "open" : ""}`}>
          <div
            className="mega-content"
            style={{ gridTemplateColumns: `repeat(${productCols}, 1fr)` }}
          >
            {productItems.map((col, i) => {
              if (i === 2) {
                return (
                  <div key={i} className="mega-col">
                    <div className="cta-card-img position-relative overflow-hidden rounded-4 h-100 text-white">
                      <img
                        src="/assets/img/banner/banner-three-2.png"
                        alt="CTA Background"
                        className="w-100 h-100 object-fit-cover"
                        data-no-retina=""
                      />
                      <div className="cta-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-8">
                        <div>
                          <p className="fw-semibold mb-2 cta-p">Need help choosing?</p>
                          <p className="small mb-4 mt-4">
                            Our team can guide you to the right service based on your
                            business needs. Let’s talk today.
                          </p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-yellow btn-sm rounded-pill mt-auto w-100"
                          onClick={() => (window.location.href = "/contact")}
                        >
                          Talk to an Expert
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={i} className="mega-col">
                  {/* ✅ Text hidden but border remains for 2nd column */}
                  <p
                    className={`menuheading ${i === 1 ? "ghost-heading" : ""}`}
                  >
                    <span>{col.heading}</span>
                  </p>

                  <ul>
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ✅ Scoped CSS Fix */}
        <style jsx global>{`
  .mega-col .ghost-heading {
    border-bottom: 1px solid #dee2e6 !important; /* keep border visible */
    color: transparent !important; /* hide text color */
  }

  .mega-col .ghost-heading span {
    opacity: 0 !important; /* ensures text is invisible */
    visibility: hidden !important; /* extra safeguard */
  }
    .mega-col .cta-p{
    font-size: 1.1rem !important;}
`}</style>
      </li>

      {/* Resources */}
      <li className="menu-item-has-children">
        <Link href="#">
          Resources <i className="bi bi-chevron-down"></i>
        </Link>
        <ul className="sub-menu">
          <li><Link href="/industries">Industries</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/blog">Blogs/News</Link></li>
        </ul>
      </li>
    </ul>
  );
};

export default MainMenu;
