export default function sitemap() {
  const baseUrl = "https://novum-nextjs.netlify.app";
  const now = new Date();

  return [
    // =====================
    // CORE PAGES
    // =====================
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // =====================
    // SERVICES
    // =====================
    ...[
      "digital-strategy",
      "strategic-resourcing",
      "change-management-adoption",
      "corporate-trainings",
      "data-audit",
      "microsoft-licensing",
      "microsoft-sustainability",
      "power-bi",
      "data-warehouse",
      "artificial-intelligence-iot",
      "azure-data-foundry",
      "microsoft-dynamics-365",
      "microsoft-365-deployment",
      "software-development",
      "custom-application-development",
      "system-integration",
      "automation",
      "copilot",
      "azure",
      "consulting-advisory",
      "professional-services",
      "managed-services",
    ].map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    })),

    // =====================
    // PRODUCTS
    // =====================
    ...[
      "nes-novum-entrance-system",
      "ocr-certification-directory",
      "ess-employee-self-service",
      "face-recognition-and-detection",
      "commodity-bidding-platform",
      "d365-automations",
      "airport-revenue-management-isv",
    ].map((slug) => ({
      url: `${baseUrl}/products/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })),

    // =====================
    // RESOURCES
    // =====================
    {
      url: `${baseUrl}/industries`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // =====================
    // BLOG POSTS
    // =====================
    ...[
      "fabric-vs-power-bi-what-to-use-when",
      "copilot-rollouts-that-stick",
      "azure-cost-optimization-in-30-days",
    ].map((slug) => ({
      url: `${baseUrl}/blogs/${slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    })),

    // =====================
    // LEGAL / POLICIES
    // =====================
    ...[
      "privacy-policy",
      "codeofconduct",
      "antibriberycorruption",
    ].map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    })),
  ];
}
