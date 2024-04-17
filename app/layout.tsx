import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora",
  description: "The ultimate developer workstation",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <body className={inter.className}>
    <link rel="icon" href="/favicon.ico" sizes="any"/>
    {children}
    <Toaster/>
    </body>
    </html>
  );
}
