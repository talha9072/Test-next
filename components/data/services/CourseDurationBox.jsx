"use client";
import Reveal from "@/components/Reveal";

export default function CourseDurationAssessmentSection({
  sectionId = "course-duration",
  primaryColor = "#0d2b75",
}) {
  return (
    <section
      id={sectionId}
      className="py-7"
      style={{ background: "#e5f1ff" }}
    >
      <div className="container">

        {/* Heading */}
        <Reveal direction="fade" blur={true} delay={0.2} duration={1.1}>
          <h2
            className="text-center fw-bold mb-4"
        
          >
            Course Duration & Assessment
          </h2>
        </Reveal>

        <div className="row g-4">

          {/* LEFT — GLASS DURATION CARD */}
          <div className="col-lg-6">
            <Reveal direction="fade" blur={true} delay={0.3} duration={1.1}>
              <div className="glass-card p-4 p-md-5 h-100 rounded-4">

                <div className="icon-wrap mb-3">
                  <i className="bi bi-hourglass-split"></i>
                </div>

                <h4 className="fw-bold mb-3" style={{ color: primaryColor }}>
                  Course Duration
                </h4>

                <div className="duration-box mb-4">
                  <div>
                    <strong className="fs-5">Total Duration</strong>
                    <p className="m-0 fs-6">
                      9 hours + 3 hours (free additional workshop)
                    </p>
                  </div>
                </div>

                <p className="text-muted fs-6 lh-base">
                  The ISC program provides a compact yet intensive learning experience,
                  balancing instructional theory with real-world teaching practice.
                </p>

              </div>
            </Reveal>
          </div>

          {/* RIGHT — GLASS ASSESSMENT CARD */}
          <div className="col-lg-6">
            <Reveal direction="fade" blur={true} delay={0.4} duration={1.1}>
              <div className="glass-card p-4 p-md-5 h-100 rounded-4">

                <div className="icon-wrap mb-3">
                  <i className="bi bi-patch-check"></i>
                </div>

                <h4 className="fw-bold mb-3" style={{ color: primaryColor }}>
                  Assessment Overview
                </h4>

                <ul className="assessment-list">
                  <li><i className="bi bi-check2-circle"></i> Quizzes</li>
                  <li><i className="bi bi-check2-circle"></i> Practical exercises</li>
                  <li><i className="bi bi-check2-circle"></i> Final instructional project</li>
                </ul>

                <p className="text-muted mt-3 fs-6 lh-base">
                  On successful completion, participants receive the{" "}
                  <strong>MCT Instructional Skills Certification</strong>, 
                  validating their capability as Microsoft-authorised trainers.
                </p>

              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* ---------- STYLES ---------- */}
      <style jsx>{`
        /* GLASS CARD */
        .glass-card {
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          transition: 0.35s ease;
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 38px rgba(0, 0, 0, 0.12);
          background: rgba(255, 255, 255, 0.65);
        }

        /* ICON CIRCLE */
        .icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(13, 43, 117, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-wrap i {
          color: ${primaryColor};
          font-size: 1.6rem;
        }

        /* DURATION BOX */
        .duration-box {
          padding: 16px 20px;
          border-radius: 14px;
          background: rgba(13, 43, 117, 0.08);
          border: 1px solid rgba(13, 43, 117, 0.18);
        }

        /* ASSESSMENT LIST */
        .assessment-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .assessment-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .assessment-list i {
          color: ${primaryColor};
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
}
