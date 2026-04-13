import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "AYAL TECH - Smart Communication & Software Solutions",
    template: "%s | AYAL TECH",
  },
  description: "AYAL TECH provides Bulk SMS, Voice Broadcasting, People Counting Systems, and Custom Software Solutions.",
  authors: [{ name: "AYAL TECH" }],
  creator: "AYAL TECH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}