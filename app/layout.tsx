import type { Metadata } from "next";
import { Rajdhani, Share_Tech_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--face-rajdhani",
});

const mono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--face-mono",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--face-bebas",
});

export const metadata: Metadata = {
  title: "Yodahe Zegeye // SYSTEM",
  description: "ERP Engineer & Full-Stack Developer — Portfolio Interface",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${mono.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
