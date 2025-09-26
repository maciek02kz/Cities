import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "./components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wandr",
  description: "Welcome to wandr!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Interactive logo is a separate client component.
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/wandr_logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* Navigation Links */}
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: "20px",
              }}
            >
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
