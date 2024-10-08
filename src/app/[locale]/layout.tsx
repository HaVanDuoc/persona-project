import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Persona Project",
  description: "Persona Project Website Template using NextJs",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${font.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider locale={locale}>
            <NextThemesProvider attribute="class">
              {children}
            </NextThemesProvider>
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
