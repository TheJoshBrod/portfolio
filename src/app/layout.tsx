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
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🦞%3C/text%3E%3C/svg%3E" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
