import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meet the Founders | Edgecipline",
  description: "Professional backgrounds of the founders behind Edgecipline.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
