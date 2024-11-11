import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Animation } from "./animation/Animation";


const inter = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Foysal",
  description: "A Frontend Developer Portfolio",
  icons: {
    icon: 'public/icon-working.png'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" data-theme="dark">
      <Animation />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
