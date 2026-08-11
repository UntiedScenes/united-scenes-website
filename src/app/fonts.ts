import localFont from "next/font/local";

export const clashDisplay = localFont({
  src: "./fonts/clashdisplay-bold.woff",
  variable: "--font-heading",
  weight: "700",
  display: "swap",
});

export const ttHovesDemibold = localFont({
  src: "./fonts/tthovespro-dmbd.woff",
  variable: "--font-subheading",
  weight: "600",
  display: "swap",
});

export const ttHovesRegular = localFont({
  src: "./fonts/tthovespro-rg.woff",
  variable: "--font-text",
  weight: "400",
  display: "swap",
});
