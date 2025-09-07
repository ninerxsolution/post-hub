import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PostHub - Multi-Tenant Blog Platform",
  description: "A Medium-inspired blogging platform where writers can share their stories and build their audience.",
  keywords: ["blog", "writing", "content", "publishing", "community"],
  authors: [{ name: "PostHub Team" }],
  openGraph: {
    title: "PostHub - Multi-Tenant Blog Platform",
    description: "A Medium-inspired blogging platform where writers can share their stories and build their audience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostHub - Multi-Tenant Blog Platform",
    description: "A Medium-inspired blogging platform where writers can share their stories and build their audience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
