import type { Metadata } from "next";
import { clashDisplay, ttHovesDemibold, ttHovesRegular } from "./fonts";
import DisruptCta from "@/components/DisruptCta";
import "./globals.css";

export const metadata: Metadata = {
  title: "Untied Scenes — Videoproductie op hoog niveau",
  description:
    "Untied Scenes is een videoproductiebureau dat bioscoopkwaliteit combineert met snelle, disruptieve storytelling.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${clashDisplay.variable} ${ttHovesDemibold.variable} ${ttHovesRegular.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-text">
        {children}
        <DisruptCta />
      </body>
    </html>
  );
}
