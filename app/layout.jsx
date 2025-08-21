import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Script from 'next/script';

export const metadata = {
  icons: {
    icon: "/assets/img/Novum-logo-05.ico",
    shortcut: "/assets/img/Novum-logo-05.ico",
    apple: [
      "/assets/img/Novum-logo-05.ico",
      { url: "/assets/img/Novum-logo-05.ico", sizes: "72x72" },
      { url: "/assets/img/Novum-logo-05.ico", sizes: "114x114" }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome via CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        {/* Bootstrap JS loaded before hydration */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}