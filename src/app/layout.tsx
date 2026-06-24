import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Siddharth Pulugujja | Freelance Full Stack Developer",
    template: "%s | Siddharth Pulugujja",
  },
  description:
    "Siddharth Pulugujja builds modern websites, dashboards, admin panels, and secure custom software for founders and teams.",
  metadataBase: new URL("https://siddharthp.com"),
  alternates: {
    canonical: "/",
  },
  applicationName: "Siddharth Pulugujja Portfolio",
  authors: [{ name: "Siddharth Pulugujja" }],
  icons: {
    icon: [{ url: "/favicon.png", sizes: "64x64" }],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-zinc-950"
      >
        {children}
      </body>
    </html>
  );
}
