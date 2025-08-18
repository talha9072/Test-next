"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // for current route
import { posts } from "@/components/data/blogs";

export default function RecentPosts() {
  const pathname = usePathname();
  const todayStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  // Sort posts by date (newest first) & slice top 3
  const recentPosts = [...posts]
    .filter((p) => {
      // 1. skip future posts
      if (!p.date || p.date > todayStr) return false;

      // 2. skip current post (if slug matches current pathname)
      if (pathname.includes(p.slug)) return false;

      return true;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)) // newest first
    .slice(0, 3);

  return (
    <div className="mb-4 p-4 border rounded shadow-sm bg-white">
      <h5 className="fw-bold mb-3 border-bottom pb-2">Recent Posts</h5>

      {recentPosts.length > 0 ? (
        recentPosts.map((post) => (
          <div className="d-flex mb-4" key={post.id}>
            <img
              src={post.img}
              alt={post.title}
              className="me-3 rounded"
              style={{ width: "90px", height: "65px", objectFit: "cover" }}
            />
            <div>
              <Link
                href={post.link}
                className="text-decoration-none text-dark fw-semibold d-block"
              >
                {post.title}
              </Link>
              <small className="text-muted">{post.date}</small>
            </div>
          </div>
        ))
      ) : (
        <p className="text-muted">No recent posts available.</p>
      )}
    </div>
  );
}