import type { Metadata } from "next";
import "../globals.css";
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
   
      >
        
        {children}
        
   
      </body>
    </html>
  );
}
