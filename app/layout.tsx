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
    title: "Adam Band | Swiss Rock Band – Alternative Rock aus der Schweiz",
    description: "Adam ist eine Schweizer Rockband, die kraftvollen Alternative Rock liefert. Discover our latest songs, upcoming concerts, and official merchandise!",
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
                alt: "Adam Band - Swiss Rock Band | Schweizer Rockband",
            },
        ],
    },
};

export const hreflangTags = `
    <link rel="alternate" href="https://adam-band.com/" hreflang="en" />
    <link rel="alternate" href="https://adam-band.com/" hreflang="x-default" />
`;

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="cupcake">
        <head>
            <meta name="description" content="Adam ist eine Schweizer Rockband, die kraftvollen Alternative Rock liefert. Discover our latest songs, upcoming concerts, and official merchandise!" />
            <meta name="keywords" content="Swiss Rock Band, Alternative Rock Schweiz, Schweizer Rockband, Rockmusik Schweiz" />
            <meta property="og:title" content="Adam Band | Swiss Rock Band – Alternative Rock aus der Schweiz" />
            <meta property="og:description" content="Adam ist eine Schweizer Rockband, die kraftvollen Alternative Rock liefert. Entdecke unsere neuesten Songs, bevorstehende Konzerte und offizielles Merchandise!" />
            <meta property="og:image" content="https://adam-band.com/opengraph-image.jpg" />
            <link rel="canonical" href="https://adam-band.com/" />
            <div dangerouslySetInnerHTML={{ __html: hreflangTags }} />
        </head>
        <body className={`${raj.className} flex flex-col min-h-screen`}>
        <main className="grow">{children}</main>
        <div className="bg-neutral">
            <div className="container">
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                    <aside>
                        <div className="container"></div>
                        <Image src="/adam_white.svg" alt="Logo" width="60" height="60" />
                        <p>
                            Adam (The Band!)
                        </p>
                    </aside>
                    <nav>
                        <p className="footer-title">Legal</p>
                        <Link className="link link-hover" href="/imprint">Imprint</Link>
                    </nav>
                </footer>
            </div>
        </div>
        </body>
        </html>
    );
}
