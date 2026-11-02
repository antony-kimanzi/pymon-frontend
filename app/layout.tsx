import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Configure inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // prevents invisible text while loading
});

// Configure jetbrains mono
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PyMon — Monitor your Python jobs with one decorator",
  description:
    "A free, open-source cron and job monitoring service for Python developers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
