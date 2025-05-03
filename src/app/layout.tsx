import { SiteHeader } from "@/components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { GlobalProvider } from "@/providers/global-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    siteName: site.title,
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.url + "/og?title=UI",
        width: 1200,
        height: 630,
        alt: "ui.ram.codes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.url + "/og?title=UI"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased [--header-height:calc(theme(spacing.14))]`}
      >
        <GlobalProvider>
          <div>
            <SiteHeader />
            {children}
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
