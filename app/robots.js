export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // full website index allowed
      },
    ],
    sitemap: "https://novum-nextjs.netlify.app/sitemap.xml",
  };
}