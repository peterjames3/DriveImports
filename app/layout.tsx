import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/Navbar'

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
    template: '%s | Hanzo Drive Imports: Premium Car Parts for Every Vehicle',
    default: 'Hanzo Drive Imports: Premium Car Parts for Every Vehicle',
  },
  description: "Your trusted partner for importing high-quality car spare parts, offering a wide range of components to keep your vehicles running smoothly.",
  keywords: ["car parts", "importing", "high-quality", "hanzo drive"],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
