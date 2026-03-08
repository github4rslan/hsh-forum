import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
});

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
      <body
        className={`min-h-screen bg-white ${poppins.className} ${geist.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
