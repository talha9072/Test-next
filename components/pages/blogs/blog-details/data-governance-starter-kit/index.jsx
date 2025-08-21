"use client";

import HeaderFour from "@/components/layout/headers/header/header-four";
import Footer from "@/components/layout/footers/footer";
import RecentPosts from "@/components/data/recent-posts";
import CTA from "@/components/data/cta";
// import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";

export default function BlogSingle() {
  return (
    <>
      <HeaderFour />

      {/* 🚀 Full Width Blog Hero Section */}
      
      <section className="container-fluid px-0">
      <div className="position-relative">
        {/* Background Image */}
        <img
          src="/assets/img/blog/blog-4.jpg"
          alt="Blog Hero"
          className="w-100 img-fluid"
          style={{ height: "600px", objectFit: "cover" }}
        />

        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
          }}
        ></div>

        {/* Content */}
        <div className="position-absolute bottom-0 start-0 w-100 text-white p-4 p-md-5">
          <div className="container">
            {/* Category + Date */}
            <span className="badge bg-base-color p-2 me-3">Data Strategy</span>
            <span className="badge bg-base-color p-2 me-3">Governance</span>
            <span className="badge bg-base-color p-2 me-3">Security</span>
            <span className="small">Aug 12, 2025</span>

            {/* Title */}
            <h1 className="fw-bold mt-3">
              Data Governance Starter Kit
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section className="container my-5">
      <div className="row">
        {/* Main Content */}
        <div className="col-lg-7">
          <article>
            <h2 className="fw-bold mb-3">Learning by Doing</h2>
            <p>
              Volunteering in Honduras taught me more than how to lay bricks —
              it showed me how strong communities rise after a disaster. From
              the very first morning, locals made it clear: every willing pair
              of hands mattered. What began as a small contribution became a
              life-changing experience.
            </p>

            <h3 className="mt-4 mb-2">Key Takeaways</h3>
            <ul>
              <li><strong>Community spirit</strong> drives real change.</li>
              <li><strong>Every small effort</strong> adds up to something big.</li>
              <li><strong>Resilience</strong> grows when people unite.</li>
              <li><strong>Learning by sharing</strong> makes impact sustainable.</li>
            </ul>

            <p>
              Working side by side with residents, I learned not only practical
              construction skills but also the value of collaboration and hope.
              Each house rebuilt wasn’t just a shelter — it became a symbol of
              resilience, strength, and the determination to rebuild lives.
            </p>

            <h3 className="mt-4 mb-2">Why This Matters</h3>
            <p>
              Climate disasters will continue, but the courage to rebuild will
              always be stronger. Projects like this remind us that every effort
              counts, and volunteering can transform both communities and
              volunteers alike. When people come together, the impossible starts
              to look achievable.
            </p>

            <h3 className="mt-4 mb-2">My Personal Reflection</h3>
            <p>
              I went to Honduras thinking I would teach, but in the end, I was
              the one who learned. The resilience of the families, the smiles of
              the children, and the unbreakable will of the community left a
              lasting impression. It reminded me that we rise by lifting others.
            </p>
          </article>

          {/* FAQ Section */}
          <div className="mt-5">
            <h3 className="fw-bold mb-4">Frequently Asked Questions</h3>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How can I volunteer for projects like this?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="faqOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    You can join through certified non-profit organizations or
                    community programs. Many offer short-term and long-term
                    opportunities depending on your skills and availability.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faqTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do I need construction skills to participate?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Not at all! Most organizations provide on-site training.
                    What really matters is your willingness to contribute and
                    work as part of a team.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="faqThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What impact do these projects have?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Each project creates lasting impact — not just by rebuilding
                    homes but by restoring hope, dignity, and community
                    strength. The effects are long-term and life-changing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
<div className="col-lg-5 mt-5 mt-lg-0">
  {/* Recent Posts */}
  <RecentPosts />

  {/* Tags */}
  <div className="p-4 border rounded shadow-sm bg-white">
    <h5 className="fw-bold mb-3 border-bottom pb-2">Tags</h5>
    <div className="d-flex flex-wrap gap-2">
      <a href="#" className="badge rounded-pill bg-light border text-dark p-2">
        Data Strategy
      </a>
      <a href="#" className="badge rounded-pill bg-light border text-dark p-2">
        Governance
      </a>
      <a href="#" className="badge rounded-pill bg-light border text-dark p-2">
        Security
      </a>
      
    </div>
  </div>
</div>
      </div>
    </section>

      <CTA
        bgImage="/assets/img/cta-bg.png"
        heading="Ready to Start Your Data Governance Journey?"
        subText="Talk to Novum’s data specialists to design a governance framework tailored for your enterprise."
        buttonText="Book a Consultation"
        buttonHref="/contact"
      />

      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
}