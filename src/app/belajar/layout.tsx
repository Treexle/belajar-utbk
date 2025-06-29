import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";
import { Lexend, Lato, Grandstander } from "next/font/google";
import "@/app/globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const grandstander = Grandstander({
  variable: "--font-grandstander",
  weight: "700",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: "400",
  subsets: ["latin"],
});

const lexendMono = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skorin : Belajar UTBK",
  description: "Kumpulan sumber belajar untuk UTBK",
};

export default function BelajarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${lexendMono.variable} ${lato.variable} ${grandstander.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
