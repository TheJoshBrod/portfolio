import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TheJoshBrod",
  description: "Portfolio of TheJoshBrod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
