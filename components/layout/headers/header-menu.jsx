// components/layout/MainMenu.jsx
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Mega menu items for Services
const megaItems = [
  {
    heading: 'Digital Transformation',
    icon: 'fas fa-sync-alt main-clr',
    links: [
      { label: 'Digital Strategy', href: '/services/digital-strategy' },
      { label: 'Sustainability Manager', href: '/services/microsoft-sustainability' },
      { label: 'Data Audit', href: '/services/data-audit' },
      { label: 'Corporate Trainings', href: '/services/corporate-trainings' },
      { label: 'Change Management & Adoption', href: '/services/change-management-adoption' },
      
      
    ],
  },
  {
    heading: 'Data & AI',
    icon: 'fas fa-robot main-clr',
    links: [
      { label: 'Power BI / Reporting Consulting', href: '/services/power-bi' },
      { label: 'Data Warehouse', href: '/services/data-warehouse' },
      { label: 'Artificial Intelligence and IoT', href: '/services/artificial-intelligence-iot' },
      { label: 'Azure Data Foundry', href: '/services/azure' },
    ],
  },
  {
    heading: 'Business Applications',
    icon: 'fas fa-briefcase main-clr',
    links: [
      { label: 'Microsoft Dynamics 365', href: '/services/microsoft-dynamics-365' },
      { label: 'Microsoft 365 Deployment', href: '/services/microsoft-365-deployment' },
      { label: 'Microsoft Licensing', href: '/services/microsoft-licensing' },
    ],
  },
  
  {
    heading: 'Software & Engineering',
    icon: 'fas fa-handshake main-clr',
    links: [
      { label: 'Software Development', href: '/services/software-development' },
      { label: 'Strategic Resourcing', href: '/services/strategic-resourcing' },
    ],
  },
];

// Mega menu items for Products
const productItems = [
  {
    heading: 'Products ISV',
    icon: 'fas fa-building main-clr',
    links: [
      { label: 'Airport Turnaround Solution', href: '/products/airports-turnaround-solution' },
      { label: 'NES (Novum Entrance System)', href: '/products/nes-novum-entrance-system' },
      { label: 'OCR Certification Directory', href: '/products/ocr-certification-directory' },
      { label: 'Face Recognition & Detection', href: '/products/face-recognition-and-detection' },
      { label: 'Commodity Bidding Platform', href: '/products/commodity-bidding-platform' },
    ],
  },
  {
    heading: 'By Industry or Business Function',
    icon: 'fas fa-users main-clr',
    links: [
      { label: 'Healthcare & Pharma', href: '/industries/pharmaceutical-industry' },
      { label: 'Retail & Distribution', href: '/industries/food-retail-distribution' },
      { label: 'Manufacturing & Agriculture', href: '/industries/agriculture' },
      { label: 'Government & Public Sector', href: '/industries/government' },
      { label: 'Oil & Gas / Energy', href: '/industries/natural-resources' },
      { label: 'Transportation & Aviation', href: '/industries/aerospace-transportation' },
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

      {/* Services Mega Menu */}
      <li className="menu-item-has-children mega-menu" ref={servicesRef}>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setOpenMenu(openMenu === 'services' ? null : 'services');
          }}
        >
          Services <i className="fas fa-angle-down"></i>
        </a>
        <div className={`mega-dropdown ${openMenu === 'services' ? 'open' : ''}`}>
          <div
            className="mega-content"
            style={{ gridTemplateColumns: `repeat(${serviceCols}, 1fr)` }}
          >
            {megaItems.map((col, i) => (
              <div key={i} className="mega-col">
                <h4><i className={`${col.icon} me-2`}></i>{col.heading}</h4>
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
          onClick={e => {
            e.preventDefault();
            setOpenMenu(openMenu === 'products' ? null : 'products');
          }}
        >
          Products <i className="fas fa-angle-down"></i>
        </a>
        <div className={`mega-dropdown ${openMenu === 'products' ? 'open' : ''}`}>
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
                        src="https://novum-ae.netlify.app//.netlify/images?url=/images/services/powerbi.jpg"
                        alt="CTA Background"
                        className="w-100 h-100 object-fit-cover"
                        data-no-retina=""
                      />
                      <div className="cta-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-8">
                        <div>
                          <h5 className="fw-semibold mb-2">Need help choosing?</h5>
                          <p className="small mb-4 mt-4">
                            Our team can guide you to the right service based on your business needs. Let’s talk today.
                          </p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-yellow btn-sm rounded-pill mt-auto w-100"
                          onClick={() => window.location.href = '/contact'}
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
                  <h4><i className={`${col.icon} me-2`} />{col.heading}</h4>
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
      </li>

      {/* Resources */}
      <li className="menu-item-has-children">
        <Link href="#">
          Resources <i className="fas fa-angle-down"></i>
        </Link>
        <ul className="sub-menu">
          <li><Link href="/industries">Industries</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/blog">Blogs/News</Link></li>
        </ul>
      </li>

      <li><Link href="/about-us">About</Link></li>
    </ul>
  );
};

export default MainMenu;
