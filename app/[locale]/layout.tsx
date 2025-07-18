import type { Metadata } from "next";
import { Inter, Poltawski_Nowy } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { DiscourseScript } from "./discourse-script";
import UmamiScript from "@/umami-script";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });
const serifFont = Poltawski_Nowy({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora - The Linux-based ultimate workstation",
  description: "The ultimate productivity workstation, stable and streamlined for you.",
  openGraph: {
    type: "website",
    images: ["/wallpaper.jpg"]
  },
  icons: {
    icon: "/aurora-v3_logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <UmamiScript />
      </head>
      <body className={inter.className}>
        <DiscourseScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
