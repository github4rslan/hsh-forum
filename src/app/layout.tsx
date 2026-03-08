import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hsh Forum - Manufacture of Metal Products",
  description: "Forum for metal products manufacturing queries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream">{children}</body>
    </html>
  );
}
