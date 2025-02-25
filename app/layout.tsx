import type { Metadata } from "next";
import "./globals.css";

import { Rajdhani } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";

const raj = Rajdhani({
    subsets: ["latin"],
    variable: "--font-raj-sans",
    weight: ["300", "400", "500", "600", "700"],
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
    <body className={`${raj.className} flex flex-col min-h-screen`}>
    <main className="flex-grow">{children}</main>
    <div className="bg-neutral">
        <footer className="footer text-neutral-content p-10 container">
            <aside>
                <div className="container"></div>
                <Image src="/adam_white.svg" alt="Logo" width="60" height="60" />
                <p>
                    Adam (The Band!)
                    <br />
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link className="link link-hover" href="/imprint">Imprint</Link>
            </nav>
        </footer>
    </div>
    </body>
    </html>
  );
}
