import type { Metadata } from "next";
import { inter } from '@/app/ui/font';
import "../globals.css";
//import Navbar from '@/app/components/Navbar'
import Link from 'next/link'
import {
  FaInstagram,
  FaFacebook,
  BsTwitterX,
  MdOutlineMailLock,
  FaPhoneAlt,
  } from "@/app/ui/icons";



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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <header>
         {/* Contact information section */}
      <section className="hidden sm:flex items-center justify-between max-w-[70rem] py-3 mt-0 mx-auto">
        <address className="not-italic flex items-center gap-6 text-xl">
          <div className="flex gap-2 items-center text-white text-[1.0rem]">
            <MdOutlineMailLock />
            <a href="mailto:hanzo@gmail.com" className="">driveimports@gmail.com</a>
          </div>
          <div className="flex gap-2 items-center text-white text-[1.0rem]">
            <FaPhoneAlt />
            <a href="tel:+254768283966">0768283966</a>
          </div>
        </address>
        {/* Social media links */}

        <nav aria-label="Social Media Links" className="flex text-2xl gap-5 text-white">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </Link>
        </nav>
      </section>


      <section className="max-w-[70rem] mx-auto flex justify-between items-center">
        <nav aria-label="Main Navigation">
          <Link className=" text-3xl  text-white" href="/"
            aria-label="Drive Imports Home">
             
           <span className='text-primary'>Drive</span>Imports
          </Link>
        </nav>
        <nav className="hidden sm:flex">
          {/* Desktop navigation links (if any) */}
         
        </nav>
      
      </section>


          </header>
      
        <main className='py-10'>
        {children}
        </main>
   
      </body>
    </html>
  );
}
