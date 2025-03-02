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
    metadataBase: new URL("https://adam-band.com"),
    title: "Adam Band | Swiss Rock Band – Alternative Rock from Switzerland",
    description: "Adam is a Swiss rock band delivering powerful alternative rock music. Discover our latest songs, upcoming concerts, and official merchandise!",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://adam-band.com",
        siteName: "Adam Band",
        images: [
            {
                url: "https://adam-band.com/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Adam Band - Swiss Rock Band",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@YourBandTwitter",
        title: "Adam Band | Swiss Rock Band – Alternative Rock from Switzerland",
        description: "Adam is a Swiss rock band delivering powerful alternative rock music. Discover our latest songs, upcoming concerts, and official merchandise!",
        images: ["https://adam-band.com/opengraph-image.jpg"],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
    <body className={`${raj.className} flex flex-col min-h-screen`}>
    <main className="grow">{children}</main>
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
                <p className="footer-title">Legal</p>
                <Link className="link link-hover" href="/imprint">Imprint</Link>
            </nav>
        </footer>
    </div>
    </body>
    </html>
  );
}
