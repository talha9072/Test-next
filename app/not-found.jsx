// app/not-found.jsx
import Link from "next/link";

export const metadata = {
  title: "404 | Page Not Found - Novum",
  description:
    "The page you are looking for does not exist. Return to the Novum homepage to explore digital solutions powered by AI and innovation.",
  robots: { index: false },
  openGraph: {
    title: "404 | Page Not Found - Novum",
    description:
      "This page could not be found. Explore Novum’s AI-driven digital solutions, Microsoft cloud services, and smart platforms.",
    url: "https://novum-nextjs.netlify.app/404",
    type: "website",
    images: [
      {
        url: "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
        width: 1080,
        height: 1920,
        alt: "Novum OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 | Page Not Found - Novum",
    description:
      "This page could not be found. Discover how Novum helps organizations grow with AI, cloud, and smart digital platforms.",
    images: [
      "https://novum-nextjs.netlify.app/assets/img/novum-graph-img.webp",
    ],
  },
};

export default function NotFound() {
  return (
    <section className="error-area py-5" style={{ backgroundColor: "#F3F7FB" }}>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          {/* Image */}
          <div className="col-md-8 mb-4 mb-md-0">
            <img
              src="/assets/img/404/404.png"
              alt="404 Page Not Found"
              className="img-fluid"
              style={{ maxWidth: "50%" }}
            />
          </div>

          {/* Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Oops! Page Not Found</h2>
            <p className="text-muted mb-4">
              The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link href="/" className="btn-two m-auto d-table">
              Go Back <i className="fas fa-chevron-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}