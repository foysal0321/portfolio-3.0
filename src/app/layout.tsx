import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Foysal",
  description: "A Frontend Developer Portfolio",
  icons: {
    icon: '/icon-working.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
      <link rel="icon" href="/public/icon-working.png" sizes="any" />
        {children}
        </body>
    </html>
  );
}
