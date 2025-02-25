import type { Metadata } from "next";
import "./globals.css";

import { Rajdhani } from 'next/font/google'

const raj = Rajdhani({
    subsets: ["latin"],
    variable: "--font-raj-sans",
    weight: ["300", "400", "500", "600", "700"], // Hier ALLE Gewichte hinzufügen
    display: "swap",
})
export const metadata: Metadata = {
  title: "Adam - Band Website",
  description: "Adam the new and upcoming band from switzerland!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={raj.className}
      >
        {children}
      </body>
    </html>
  );
}
