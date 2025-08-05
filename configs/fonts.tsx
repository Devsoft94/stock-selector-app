import { Geist, Geist_Mono, Inter } from "next/font/google";

export const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});