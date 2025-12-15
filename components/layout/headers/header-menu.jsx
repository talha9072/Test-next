// components/layout/MainMenu.jsx
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { posts } from "@/components/data/blogs";

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
      { label: 'NES (Novum Entrance System)', href: '/products/nes-novum-entrance-system' },
      { label: 'OCR Certification Directory', href: '/products/ocr-certification-directory' },
      { label: 'ESS - Employee Self Service', href: '/products/ess-employee-self-service' },
      { label: 'Face Recognition & Detection', href: '/products/face-recognition-and-detection' },
    ],
  },
  {
    heading: 'By Industry or Business Function',
   
    links: [
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
  const resourcesRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(e) {
      if (
  servicesRef.current &&
  productsRef.current &&
  resourcesRef.current &&
  !servicesRef.current.contains(e.target) &&
  !productsRef.current.contains(e.target) &&
  !resourcesRef.current.contains(e.target)
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
    <div key={i} className="mega-col featured-blogs-col">
      <p className="menuheading">Featured Blogs</p>

      <ul className="featured-blogs-list">
        {posts.slice(0, 3).map((post) => {
          // limit title to max 12 words
          const shortTitle =
            post.title.split(" ").slice(0, 12).join(" ") +
            (post.title.split(" ").length > 12 ? "…" : "");

          const formattedDate = new Date(post.date).toLocaleDateString(
            "en-US",
            { month: "short", day: "numeric", year: "numeric" }
          );

          return (
            <li key={post.id} className="featured-blog-item">
              <Link href={post.link} className="featured-blog-link">
                
                {/* Image Wrapper */}
                <div className="featured-blog-img-wrap">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="featured-blog-img"
                  />
                </div>

                {/* Text Wrapper */}
                <div className="featured-blog-text">
                  <div className="featured-blog-title">
                    {shortTitle}
                  </div>
                  <div className="featured-blog-date">
                    {formattedDate}
                  </div>
                </div>

              </Link>
            </li>
          );
        })}
      </ul>
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

   /* ===============================
   Featured Blogs – Clean Row Style
   =============================== */

.featured-blogs-col .menuheading {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-heading-color);
}

/* List */
.featured-blogs-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 14px;
}

/* Item */
.featured-blog-item {
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border-color-2);
}
  .featured-blog-link{
  display:flex !important;
  gap:15px;
}

.featured-blog-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

/* Row */
.featured-blog-link {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  transition: transform 0.2s ease;
}

/* Image wrapper */
.featured-blog-img-wrap {
  flex-shrink: 0;
}

/* Image */
.featured-blog-img {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 8px;
}

/* Text wrapper */
.featured-blog-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Title */
.featured-blog-title {
  font-size: 14.5px;
  line-height: 1.4;
  font-weight: 500;
  color: #7c898d;
  transition: color 0.2s ease;
}

/* Date */
.featured-blog-date {
  font-size: 12.5px;
  color: #9aa1a9;
}

/* Hover */
.featured-blog-link:hover {
  transform: translateX(3px);
}

.featured-blog-link:hover .featured-blog-title {
  color: var(--primary-color-1);
}

`}</style>
      </li>

      {/* Resources */}
      <li
  ref={resourcesRef}
  className={`menu-item-has-children resources-menu ${
    openMenu === 'resources' ? 'open' : ''
  }`}
>

        <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setOpenMenu(openMenu === 'resources' ? null : 'resources');
  }}
>
  Resources <i className="bi bi-chevron-down"></i>
</a>
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
