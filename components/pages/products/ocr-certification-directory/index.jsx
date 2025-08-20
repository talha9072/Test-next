"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import KeyFeaturesSection from "@/components/data/products/KeyFeaturesSection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const Ocr = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/main-product/ocr-hero.png"
            icon="/assets/img/main-product/documents.png"
            title="OCR Certification Directory"
            borderColorStart="#123558"
            borderColorEnd="#2374FF"
        />
        
        
        <SoftwareSolutionsSection
            title={`Digitize Archives and Documents with OCR Certification Directory`}
            paragraphs={[
            "Novum’s OCR Certification Directory is a robust digital transformation tool that scans paper-based archives including questionnaires, brochures, manuscripts, invoices, and certificates—and converts them into searchable, structured digital records. Perfect for government bodies, NGOs, and enterprises handling large volumes of documentation, this software ensures accuracy, traceability, and secure retrieval.",
            ]}
            imageSrc="/assets/img/main-product/ocr-1.png"
            altText="OCR"
        />
        

<section className="position-relative overflow-hidden py-5">
  <div className="container">
    <div className="row align-items-center g-5">

      {/* Left Text */}
      <div className="col-lg-7 position-relative">
        <h2 className="fw-700 text-dark-gray mb-4 lh-sm">
          Digitize, Search & Secure Your Documentation with OCR <br />
          
        </h2>

        <p className="mb-4">
          Forget manual data entry and storage headaches. Our OCR application captures text from complex paper archives—regulatory forms, certificates, contracts—and transforms them into organized, easily retrievable files with enhanced searchability and archival intelligence.
        </p>

        {/* Icon + Text List */}
        <div className="d-flex mb-4">
            <div className="me-3">
                <div className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                <i className="bi bi-file-earmark-text"></i>
                </div>
            </div>
            <div>
                <h6 className="fw-semibold mb-1">Advanced OCR Accuracy</h6>
                <p className="mb-0">
                Extract text with precision—even from skewed, handwritten, or low-quality scans.
                </p>
            </div>
            </div>

            <div className="d-flex mb-4">
            <div className="me-3">
                <div className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                <i className="bi bi-folder2-open"></i>
                </div>
            </div>
            <div>
                <h6 className="fw-semibold mb-1">Structured Digital Storage</h6>
                <p className="mb-0">
                Automatically categorize files into searchable formats—PDFs, spreadsheets, or database entries.
                </p>
            </div>
            </div>

            <div className="d-flex">
            <div className="me-3">
                <div className="bg-base-color text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                <i className="bi bi-search"></i>
                </div>
            </div>
            <div>
                <h6 className="fw-semibold mb-1">Instant Keyword Search</h6>
                <p className="mb-0">
                Search keywords across entire archives—no more manual scrolling or tagging.
                </p>
            </div>
            </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-5 text-center">
        <img
          src="/assets/img/main-product/ocr-2.png"
          alt="Airport Solutions"
          className="img-fluid rounded shadow-lg"
        />
      </div>

    </div>
  </div>
</section>

    <section className="py-5">
  <div className="container">
    <div className="row justify-content-center mb-4">
      <div className="col-lg-6 col-md-8 text-center">
        <h2 className="fw-700 text-dark-gray mb-4">Flexible Deployment for Real-World Environments</h2>
        <p className="mb-0">
          From modern offices to ultra-secure government zones, NES adapts to real-world infrastructure with precision. Its modular design ensures seamless integration no matter the scale or security level.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col tab-style-03">
        <ul className="nav nav-tabs justify-content-center text-center fw-500 border-color-light-medium-gray mb-5" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#tab_third1" role="tab">Enterprise Campuses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab_third2" role="tab">Transportation Hubs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab_third3" role="tab">High-Security Facilities</a>
          </li>
        </ul>

        <div className="tab-content">
          
          <div className="tab-pane fade show active" id="tab_third1" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img src="/assets/img/main-product/ocr-3.png" alt="Enterprise Campuses" className="w-95 rounded mb-3" />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Adaptive Access for Multi-Building Workplaces
                </h3>
                <p className="mb-4 w-95 sm-w-100">
                  Streamline daily entry and exit for employees, guests, and vendors with personalized access routes and dynamic permissioning. NES simplifies management of open-floor spaces, remote offices, and hybrid attendance models with minimal admin overhead.
                </p>
                <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                  <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                </a>
              </div>
            </div>
          </div>

         
          <div className="tab-pane fade" id="tab_third2" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img src="/assets/img/main-product/ocr-4.png" alt="Transportation Hubs" className="w-95 rounded mb-3" />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Rapid Identity Validation at Busy Access Points
                </h3>
                <p className="mb-4 w-95 sm-w-100">
                  In terminals, stations, and cargo zones where time is critical, NES enables lightning-fast identity checks without bottlenecks. Empower operations teams to monitor flows, verify personnel, and instantly revoke access when needed.
                </p>
                <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                  <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                </a>
              </div>
            </div>
          </div>

          
          <div className="tab-pane fade" id="tab_third3" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img src="/assets/img/main-product/ocr-5.png" alt="High-Security Facilities" className="w-95 rounded mb-3" />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Ultra-Reliable Access for Restricted Areas
                </h3>
                <p className="mb-4 w-95 sm-w-100">
                  NES protects classified zones with dual-authentication, live tamper detection, and automated compliance reporting. Whether it's a server farm, command center, or lab, you’ll know exactly who accessed what—when, where, and how.
                </p>
                <a href="/contact" className="btn-switch-text btn btn-small btn-round-edge btn-base-color btn-box-shadow">
                  <span><span className="btn-two fw-bold" data-text="Explore more">Explore more</span></span>
                </a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</section>

{/* Cards */}
    <section className="py-5 about__four" id="ms-guidance-cards">
  <div className="container">
    {/* Heading + intro */}
    <div className="mb-4 mb-md-5 text-center">
      <h2 className="fw-700 text-dark-gray mb-4">
        How OCR Certification Directory Works in 4 Smart Steps
      </h2>
      <p className="mb-0">
        OCR systematically converts paper documentation into indexed, searchable digital records—bringing speed, accuracy, and security to document management.
      </p>
      <div className="mx-auto mt-3" style={{ width: "80px", height: "3px", backgroundColor: "#0D2B75" }} />
    </div>

    <div className="row g-4">
      {/* Scan & Upload */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img src="/assets/img/main-product/ocr-upload.png" alt="OCR Scan and Upload Interface" className="w-100 h-100 p-2 rounded-5" style={{ objectFit: "cover" }} />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Scan & Upload</h3>
            <p className="mb-4">Upload documents—even handwritten or low-res files—through batch scanning or drag-and-drop.</p>
            
          </div>
        </article>
      </div>

      {/* OCR Processing */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img src="/assets/img/main-product/ocr-processing.png" alt="AI OCR Engine Visual" className="w-100 h-100 p-2 rounded-5" style={{ objectFit: "cover" }} />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Intelligent OCR Processing</h3>
            <p className="mb-4">Advanced text recognition engine detects content, layout structure, logos, and annotations.</p>
            
          </div>
        </article>
      </div>

      {/* Indexing */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img src="/assets/img/main-product/ocr-indexing.png" alt="Searchable OCR Document Index" className="w-100 h-100 p-2 rounded-5" style={{ objectFit: "cover" }} />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Indexing & Search</h3>
            <p className="mb-4">Convert scanned files into searchable formats with metadata tagging and fast document retrieval.</p>
            
          </div>
        </article>
      </div>

      {/* Compliance */}
      <div className="col-12 col-md-6 col-lg-3">
        <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <img src="/assets/img/main-product/ocr-archiving.png" alt="Compliance Dashboard Interface" className="w-100 h-100 p-2 rounded-5" style={{ objectFit: "cover" }} />
          </div>
          <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
            <h3 className="h4 fw-bold mb-2">Compliance & Archiving</h3>
            <p className="mb-4">Meet compliance needs with long-term digital archives, role-based access, and full audit trails.</p>
            
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

    <section className="py-5 bg-white position-relative">
  <div className="container text-center">
    {/* Section Heading */}
    <h2 className="fw-700 text-dark-gray mb-4">
      Real Impact from Smarter Document Digitization
    </h2>

    {/* Decorative Quote Icon */}
    <div className="mb-4">
      <i className="bi bi-chat-quote-fill text-novum-blue" style={{ fontSize: "2.5rem" }}></i>
    </div>

    {/* Testimonial */}
    <blockquote className="fs-5 mx-auto" style={{ maxWidth: "800px" }}>
      “With Novum’s OCR Certification Directory, we digitized over <strong>20,000 records</strong> in under 2 weeks. Search time dropped by <strong>75%</strong>, and audit readiness improved overnight. It’s a game-changer for compliance and operations.”
    </blockquote>

    {/* Attribution */}
    <p className="text-dark fw-semibold mt-4 mb-0">
      — Documentation Head, National Training & Certification Authority
    </p>
  </div>
</section>
        
      
       <WhySection
  heading="Key Capabilities of Novum’s OCR Certification Directory"
  subheadingLines={[
    "Empower your organization to digitize, categorize, and retrieve certification records with unmatched speed and accuracy.",
    "Built to handle large volumes, complex formats, and compliance-driven data workflows—seamlessly and securely.",
  ]}
  imgSrc="/assets/img/main-product/ocr-6.png"
  imgAlt="OCR Certification Workflow Dashboard"
  cards={[
    {
      iconClass: "bi bi-file-earmark-arrow-up text-novum-blue",
      title: "Bulk Document Upload",
      text: "Ingest scanned documents from multiple sources, including PDFs, handwritten forms, or image files with drag-and-drop ease.",
    },
    {
      iconClass: "bi bi-search text-novum-blue",
      title: "AI-Powered Text Recognition",
      text: "Extract typed or handwritten content accurately with OCR trained to handle structured, semi-structured, and freeform data.",
    },
    {
      iconClass: "bi bi-tags text-novum-blue",
      title: "Metadata & Auto-Categorization",
      text: "Automatically assign document types, tag fields like name, ID, and issue date, and group files into custom certification categories.",
    },
    {
      iconClass: "bi bi-journal-check text-novum-blue",
      title: "Searchable Digital Archive",
      text: "Retrieve certificates instantly using full-text or field-based queries, with export-ready access logs and version histories.",
    },
    {
      iconClass: "bi bi-link-45deg text-novum-blue",
      title: "Seamless System Integration",
      text: "Connect with internal databases, LMS platforms, and compliance systems via API for real-time synchronization.",
    },
    {
      iconClass: "bi bi-shield-check text-novum-blue",
      title: "Regulatory-Grade Audit Logs",
      text: "Ensure compliance with retention policies, access control, and exportable audit trails—ready for inspections or reports.",
    },
  ]}
/>
       

        <CTA
  bgImage="/assets/img/cta-bg.webp"
  heading="Digitize and Organize Certifications with OCR Precision"
  subText="Streamline certification management with Novum’s intelligent OCR system — enabling instant search, bulk processing, and audit-ready document tracking across your organization."
  buttonText="Schedule a Demo"
  buttonHref="/contact"
/>

      <Footer />
    </div>
  );
};

export default Ocr;