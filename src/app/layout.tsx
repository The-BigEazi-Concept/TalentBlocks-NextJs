import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalentsArray",
  description: "This is the home page of the TalentsArray",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter">{children}</body>
    </html>
  );
}
