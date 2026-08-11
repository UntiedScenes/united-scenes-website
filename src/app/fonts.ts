import localFont from "next/font/local";

export const clashDisplay = localFont({
  src: [
    { path: "./fonts/clashdisplay-bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/clashdisplay-light.woff", weight: "700", style: "italic" },
  ],
  variable: "--font-heading",
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
