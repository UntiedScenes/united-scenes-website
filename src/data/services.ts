import type { CaseType } from "./cases";

export type Service = {
  slug: string;
  title: string;
  /** Eén zin voor het overzicht op de homepage. */
  short: string;
  /** Korte uitleg voor de dienstenpagina. */
  body: string[];
  /** Slug van de bewijs-case. */
  caseSlug: string;
  type: CaseType;
};

export const services: Service[] = [
  {
    slug: "commercials",
    title: "commercials",
    short: "Dertig seconden die blijven plakken — voor tv, online en social.",
    body: [
      "Een commercial heeft één taak: blijven hangen. Wij maken er geen dertien in een dozijn, maar één die van jou is.",
      "Van concept tot cutdowns voor elk kanaal, uit één efficiënte draaidag.",
    ],
    caseSlug: "voltned-commercial",
    type: "commercial",
  },
  {
    slug: "brandmovies",
    title: "brandmovies",
    short: "Laat voelen wie je bent — sterker dan een over-ons-pagina ooit kan.",
    body: [
      "Mensen onthouden geen missiestatements. Wel hoe je ze laat voelen wie je bent.",
      "Een brandmovie die werkt op je website, op beurzen en in je wervingscampagne.",
    ],
    caseSlug: "bremer-metaal-brandmovie",
    type: "brandmovie",
  },
  {
    slug: "documentaires",
    title: "documentaires",
    short: "Echte verhalen, verteld met de rust en het vakmanschap dat ze verdienen.",
    body: [
      "Sommige verhalen zijn te goed voor een commercial. Die verdienen tijd, echte mensen en een camera die durft te wachten.",
      "Voor merken, stichtingen en makers met een verhaal dat verteld moet worden.",
    ],
    caseSlug: "voedselbrigade-documentaire",
    type: "documentaire",
  },
  {
    slug: "aftermovies",
    title: "aftermovies",
    short: "De energie van je event, online terwijl de buzz er nog is.",
    body: [
      "Een aftermovie die drie weken later komt, is een gemiste kans. Wij leveren terwijl je bezoekers er nog over praten — binnen 24 uur als het moet.",
      "Gemaakt om je volgende editie te verkopen, niet alleen om terug te blikken.",
    ],
    caseSlug: "shift-festival-aftermovie",
    type: "aftermovie",
  },
  {
    slug: "videoclips",
    title: "videoclips",
    short: "Clips met een eigen visie — geen standaard performance-video.",
    body: [
      "Jouw track verdient meer dan een artiest voor een gekleurde wand. We bedenken een concept dat het nummer groter maakt.",
      "Van one-shot tot volledig uitgewerkt scenario.",
    ],
    caseSlug: "lune-videoclip",
    type: "videoclip",
  },
];
