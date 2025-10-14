"use client";
import React from "react";
import Link from "next/link";
import { posts } from "@/components/data/blogs"; // ✅ Pulling from central data file

export default function BlogLeft() {
  // Sort newest first
  const sortedPosts = [...posts].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );

  const mainPost = sortedPosts[0];
  const smallPosts = sortedPosts.slice(1, 5);

  return (
    <div className="blog-left pb-4 border-bottom">
      {/* === Explore Header === */}
      <div className="d-flex align-items-center justify-content-between border-bottom pb-0 mb-4">
        <h6 className="fw-semibold text-novum-blue mb-0 border-bottom border-primary border-3 pb-1">
          Explore
        </h6>
      </div>

      {/* === Search Bar === */}
      <div className="search-bar position-relative mb-5">
        <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
        <input
          type="text"
          className="form-control ps-5 py-2 rounded-pill"
          placeholder="Search Blog..."
        />
      </div>

      {/* === Featured Post === */}
      {mainPost && (
        <div className="card border-0 mb-5 bg-transparent">
          <div className="row g-3 align-items-start">
            {/* Image */}
            <div className="col-md-5">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                <img
                  src={mainPost.img}
                  alt={mainPost.title}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-md-7">
              <Link href={mainPost.link} className="text-decoration-none text-dark">
                <h4 className="fw-semibold mb-2">{mainPost.title}</h4>
              </Link>
              <p className="text-muted small mb-3">
                {truncateExcerpt(mainPost.excerpt, 50)} {/* ✅ 50 words max */}
              </p>
              <div className="text-muted small">
                Blog • {formatReadableDate(mainPost.date)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === Single Row: 4 Small Posts (No Excerpt) === */}
      <div className="row g-3 flex-nowrap overflow-auto pb-3 small-blog-row">
        {smallPosts.map((p, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-3 flex-shrink-0">
            <Link
              href={p.link}
              className="text-decoration-none text-dark d-block h-100"
            >
              <div className="card h-100 border-0">
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden mb-2">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body px-0 pt-0">
                  <h6 className="fw-semibold mb-2 blog-item-h6">{p.title}</h6>
                  <small className="text-muted d-block">
                    Blog • {formatReadableDate(p.date)}
                  </small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* === Inline CSS === */}
      <style jsx>{`
        .blog-left {
          background: #fff;
        }

        .text-novum-blue {
          color: #0d2b75;
        }

        .border-primary {
          border-color: #0d2b75 !important;
        }

        .search-bar input {
          border: 1px solid #dee2e6;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .search-bar input:focus {
          border-color: #0d2b75;
          box-shadow: 0 0 0 0.15rem rgba(13, 43, 117, 0.1);
        }

        .ratio img {
          transition: transform 0.4s ease;
        }

        .ratio:hover img {
          transform: scale(1.05);
        }

        .small-blog-row {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
        }

        .small-blog-row::-webkit-scrollbar {
          height: 6px;
        }

        .small-blog-row::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }

        .object-fit-cover {
          object-fit: cover;
        }

        .blog-item-h6 {
          color: #000;
          line-height: 1.35;
          font-size: 1rem;
        }

        .blog-item-h6:hover {
          color: #0d2b75;
        }
      `}</style>
    </div>
  );
}

/* ---- Helpers ---- */
function formatReadableDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function truncateExcerpt(text, wordLimit) {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
}
