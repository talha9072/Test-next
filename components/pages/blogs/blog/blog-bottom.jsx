"use client";
import React, { useState } from "react";
import Link from "next/link";
import { posts } from "@/components/data/blogs"; // ✅ shared data source

export default function BlogBottom() {
  // Sort newest first
  const sortedPosts = [...posts].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );

  // Skip first 5
  const offsetPosts = sortedPosts.slice(5);

  // Show first 12 initially
  const [visibleCount, setVisibleCount] = useState(12);
  const visiblePosts = offsetPosts.slice(0, visibleCount);

  const showMore = () => setVisibleCount((prev) => prev + 12);

  return (
    <section className="blog-bottom py-5">
      {/* === Header === */}
      <div className="mb-4">
        <h3 className="fw-bold mb-0">What's new</h3>
      </div>

      {/* === Blog List === */}
      <div className="row g-4">
        {visiblePosts.map((post, i) => (
          <div key={i} className="col-12">
            <Link
              href={post.link}
              className="d-flex flex-row gap-3 align-items-start text-decoration-none text-dark blog-item"
            >
              {/* Thumbnail */}
              <div className="thumb-wrap rounded-3 overflow-hidden flex-shrink-0">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h6 className="fw-semibold mb-1 blog-item-h6">{post.title}</h6>
                <small className="text-muted d-block">
                  Blog • {formatReadableDate(post.date)}
                </small>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* === Show More Button === */}
      {visibleCount < offsetPosts.length && (
        <div className="text-center mt-5">
          <button
            className="btn btn-outline-primary px-4 rounded-pill"
            onClick={showMore}
          >
            Show More
          </button>
        </div>
      )}

      {/* === Inline CSS === */}
      <style jsx>{`
        .blog-bottom {
          background: #fff;
          padding-left: 15px;
          padding-right: 15px;
        }

        .thumb-wrap {
          width: 120px;
          height: 80px;
          flex-shrink: 0;
        }

        .object-fit-cover {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .blog-item:hover .object-fit-cover {
          transform: scale(1.05);
        }

        .blog-item-h6 {
          font-size: 1rem !important;
          color: #000;
          transition: color 0.3s ease;
          line-height: 1.4;
        }

        .blog-item-h6:hover {
          color: #0d2b75;
        }

        .btn-outline-primary {
          border-color: #0d2b75;
          color: #0d2b75;
          transition: all 0.3s ease;
        }

        .btn-outline-primary:hover {
          background-color: #0d2b75;
          color: #fff;
        }

        @media (max-width: 768px) {
          .thumb-wrap {
            width: 100px;
            height: 70px;
          }
          .blog-item h6 {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
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
