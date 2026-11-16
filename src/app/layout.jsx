import './globals.css';
import ClientShell from '../components/ClientShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://farazkhan.dev';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Faraz Khan — Web Developer & Creative Builder",
  description: "Personal portfolio of Faraz Khan, intermediate web developer specializing in React, Next.js, Tailwind CSS and modern frontend engineering.",
  keywords: ["Faraz Khan", "Web Developer", "React", "Next.js", "Tailwind CSS", "Frontend", "JavaScript", "Portfolio"],
  authors: [{ name: "Faraz Khan" }],
  openGraph: {
    title: "Faraz Khan — Web Developer & Creative Builder",
    description: "Building for the web. Designed to stand out.",
    type: "website",
    url: siteUrl,
  },
  verification: {
    google: "9VqVtqOpsGjatITvTppvHHhY1HAv0UOG_uQDioWrhM4",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F3F0E8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="9VqVtqOpsGjatITvTppvHHhY1HAv0UOG_uQDioWrhM4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faraz Khan",
              jobTitle: "Web Developer & Creative Builder",
              url: siteUrl,
              description: "Web developer focused on modern, responsive, and user-friendly digital experiences using React, Next.js, and modern frontend technologies.",
              knowsAbout: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Frontend Development"],
            }),
          }}
        />
      </head>
      <body className="bg-[#F3F0E8] text-[#171717] antialiased selection:bg-[#B9F36A] selection:text-[#171717] min-h-screen">
        <ClientShell />
        {children}
      </body>
    </html>
  );
}
