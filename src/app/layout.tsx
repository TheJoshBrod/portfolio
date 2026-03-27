import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://thejoshbrod.github.io/portfolio'),
  title: {
    default: "TheJoshBrod",
    template: "%s | TheJoshBrod",
  },
  description: "Josh Brodsky — CS MSE at University of Michigan. I scale intelligent Agentic Systems from prototype to production-ready applications.",
  openGraph: {
    type: "website",
    siteName: "TheJoshBrod",
    title: "TheJoshBrod",
    description: "Josh Brodsky — CS MSE at University of Michigan. I scale intelligent Agentic Systems from prototype to production-ready applications.",
  },
  twitter: {
    card: "summary",
    title: "TheJoshBrod",
    description: "Josh Brodsky — CS MSE at University of Michigan. I scale intelligent Agentic Systems from prototype to production-ready applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
