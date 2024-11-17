import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";


const inter = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Foysal Hossain",
  description: "A Frontend Developer Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="https://i.ibb.co.com/9vMFn6T/icon-working.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
