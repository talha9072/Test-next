// components/pages/blogs/blog/featured.jsx
"use client";

import { useMemo } from "react";
import Link from "next/link";
import { posts as rawPosts } from "@/components/data/case-studies";

export default function FeaturedPost() {
  // newest post with date <= today (ISO-string safe; no timezone bugs)
  const post = useMemo(() => {
    const todayStr = toISODate(new Date()); // "YYYY-MM-DD"

    const normalized = (rawPosts || [])
      .filter(
        (p) =>
          p &&
          typeof p.date === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(p.date) && // valid ISO date
          p.date <= todayStr // safe string compare
      )
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)); // newest first

    return normalized[0] || null;
  }, []);

  if (!post) return null;

  const { dd, mmm, yyyy } = formatDatePartsFromISO(post.date);

  return (
    <section className="py-5 about__four">
      <div className="container">
        <div className="row justify-content-center text-left mb-5">
      <div className="col-lg-12">
        <h2 className="fw-bold mb-2">Latest Insights</h2>
        <p className="text-muted mb-0">
          Explore our newest articles, case studies, and practical guides.
        </p>
      </div>
    </div>
        <div className="card bg-white border-0 rounded-4 shadow-sm">
          <div className="card-body p-3 p-md-4">
            {/* Pinned label */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-pin-angle-fill text-novum-blue" aria-hidden="true"></i>
              <span className="small fw-semibold text-muted">Featured Post</span>
            </div>

            <div className="row g-3 g-md-4 align-items-center">
              {/* Image (md-5) with SMALL DATE CHIP */}
              <div className="col-12 col-md-5">
                <div className="ratio ratio-4x3 rounded-3 overflow-hidden fp-img-wrap">
                  <img
                    src={post.img}
                    alt={post.title || "Featured post"}
                    className="w-100 h-100 d-block fp-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Date chip (compact, auto-sized) */}
                  <div className="fp-date-chip bg-white bg-opacity-75 border rounded-4 shadow d-flex align-items-center gap-3 px-3 py-2">
                    <div className="d-flex align-items-baseline">
                      <span className="display-5 fs-5 text-novum-blue fw-bold mb-0">{dd}</span>
                      <sup className="fw-bold text-novum-blue ms-1">{mmm}</sup>
                    </div>
                    <div className="small text-muted lh-sm">
                      <div>{yyyy}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content (md-7) */}
              <div className="col-12 col-md-7">
                <h3 className="h5 fw-bold mb-2">{post.title}</h3>
                <p className="text-muted mb-3">{post.excerpt}</p>

                {/* Categories ABOVE author */}
                {post.categories?.length > 0 && (
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {post.categories.map((c, i) => (
                      <span key={i} className="badge rounded-pill bg-light border text-dark">
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                {/* Meta — author */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-inline-flex align-items-center gap-2">
                    <span
                      className="rounded-circle d-inline-flex align-items-center justify-content-center bg-light border"
                      style={{ width: 28, height: 28 }}
                    >
                      <i className="bi bi-person-fill text-novum-blue" aria-hidden="true"></i>
                    </span>
                    <span className="small">{post.author}</span>
                  </div>
                  <span className="small opacity-0">.</span>
                </div>

                {/* CTA */}
                <Link href={post.link} className="btn btn-two btn-sm rounded-pill">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

/* ---- helpers (no timezone pitfalls) ---- */
function toISODate(d) {
  // format local Date -> "YYYY-MM-DD"
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatDatePartsFromISO(iso) {
  // iso = "YYYY-MM-DD"
  if (typeof iso !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    return { dd: "", mmm: "", yyyy: "" };
  }
  const [yyyy, mm, ddRaw] = iso.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mmm = months[Number(mm) - 1] || "";
  const dd = String(Number(ddRaw)); // strip leading zero
  return { dd, mmm, yyyy };
}
