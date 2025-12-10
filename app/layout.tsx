import type { Metadata } from "next";
import { Fredoka, Bangers } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], variable: '--font-fredoka' });
const bangers = Bangers({ weight: "400", subsets: ["latin"], variable: '--font-bangers' });

export const metadata: Metadata = {
    title: "Nomad Portfolio",
    description: "Portfolio of Nomad",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fredoka.variable} ${bangers.variable} font-sans`}>{children}</body>
        </html>
    );
}
