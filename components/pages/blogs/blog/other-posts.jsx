// components/pages/blogs/blog/other-posts.jsx
"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { posts as rawPosts } from "@/components/data/blogs";

const PAGE_SIZE = 6;

export default function OtherPosts() {
  const todayStr = toISODate(new Date());

  // Newest first, only posts <= today, and drop the featured (first)
  const others = useMemo(() => {
    const sorted = (rawPosts || [])
      .filter(
        (p) =>
          p &&
          typeof p.date === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(p.date) &&
          p.date <= todayStr
      )
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    return sorted.slice(1); // exclude featured
  }, [todayStr]);

  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(others.length / PAGE_SIZE));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  if (!others.length) return null;

  const start = (page - 1) * PAGE_SIZE;
  const pageItems = others.slice(start, start + PAGE_SIZE);

  const goTo = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    const el = document.getElementById("other-blogs");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="pb-5 about__four" id="other-blogs">
      <div className="container">
        
        {/* Grid: lg=3 / md=2 / sm=1 */}
        <div className="row g-4">
          {pageItems.map((post) => {
            const { dd, mmm, yyyy } = formatDatePartsFromISO(post.date);
            const excerpt = truncateWords(stripHtml(post.excerpt || ""), 10);
            return (
              <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                <article className="ms-card bg-white border rounded-5 shadow-sm h-100 d-flex flex-column">
                  <div className="ratio ratio-16x9 rounded-4 overflow-hidden position-relative">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-100 h-100 p-2 rounded-5 other-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* date chip */}
                    <div className="date-chip bg-white bg-opacity-75 border rounded-4 shadow d-flex align-items-center gap-2 px-2 py-1">
                      <div className="d-flex align-items-baseline">
                        <span className="chip-day fw-bold text-novum-blue mb-0">
                          {dd}
                        </span>
                        <sup className="fw-bold text-novum-blue ms-1">{mmm}</sup>
                      </div>
                      <div className="small text-muted">{yyyy}</div>
                    </div>
                  </div>

                  <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
                    <h3 className="h5 fw-bold mb-2">{post.title}</h3>
                    <p className="text-muted mb-3">{excerpt}</p>

                    {post.categories?.length > 0 && (
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {post.categories.map((c, i) => (
                          <span
                            key={i}
                            className="badge rounded-pill bg-light border text-dark"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Author + Read more at bottom */}
                    <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap">
                      <div className="d-flex align-items-center gap-2">
                        <span
                          className="rounded-circle d-inline-flex align-items-center justify-content-center bg-light border"
                          style={{ width: 28, height: 28 }}
                        >
                          <i className="bi bi-person-fill text-novum-blue" />
                        </span>
                        <span className="small">{post.author}</span>
                      </div>

                      {/* NOT full width */}
                      <Link
                        href={post.link}
                        className="btn btn-two btn-sm rounded-pill align-self-start"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="d-flex justify-content-center mt-4" aria-label="Blog pagination">
            <ul className="pagination mb-0">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => goTo(page - 1)}
                  aria-label="Previous"
                >
                  ‹
                </button>
              </li>

              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <li key={p} className={`page-item ${p === page ? "active" : ""}`}>
                    <button
                      className="page-link"
                      onClick={() => goTo(p)}
                      aria-current={p === page ? "page" : undefined}
                    >
                      {p}
                    </button>
                  </li>
                );
              })}

              <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => goTo(page + 1)}
                  aria-label="Next"
                >
                  ›
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

    </section>
  );
}

/* helpers — ISO-safe (no timezone shift) */
function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatDatePartsFromISO(iso) {
  if (typeof iso !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    return { dd: "", mmm: "", yyyy: "" };
  }
  const [yyyy, mm, ddRaw] = iso.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return {
    dd: String(Number(ddRaw)),
    mmm: months[Number(mm) - 1] || "",
    yyyy,
  };
}

/** Strip HTML tags if any */
function stripHtml(s) {
  return String(s).replace(/<[^>]*>/g, " ");
}

/** Truncate to N words and add … if needed */
function truncateWords(s, n) {
  const words = s.trim().split(/\s+/);
  if (words.length <= n) return s.trim();
  return words.slice(0, n).join(" ") + "…";
}
