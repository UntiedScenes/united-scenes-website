export const caseTypes = [
  "commercial",
  "brandmovie",
  "documentaire",
  "aftermovie",
  "videoclip",
] as const;

export type CaseType = (typeof caseTypes)[number];

export type Case = {
  slug: string;
  title: string;
  client: string;
  type: CaseType;
  year: number;
  tags: string[];
  /** Korte hook-zin op de case-tile en in overzichten. */
  hook: string;
  /** Eén krachtige zin die de kern van de opdracht samenvat (openingsscène). */
  intro: string;
  /** Op de homepage uitgelicht. */
  featured?: boolean;
  /** Embed-URL (YouTube/Vimeo). Leeg = nette placeholder tot de video er is. */
  videoUrl?: string;
  challenge: string[];
  approach: string[];
  result: string[];
  stats?: { value: string; label: string }[];
  quote?: { text: string; author: string };
};

// Voorbeeldcases in de juiste structuur en tone of voice.
// Vervang klantnamen, cijfers en video-URL's door echte projecten.
export const cases: Case[] = [
  {
    slug: "voltned-commercial",
    title: "Heel Nederland aan de stekker",
    client: "VoltNed",
    type: "commercial",
    year: 2025,
    tags: ["commercial", "campagne", "online + tv"],
    hook: "Een laadpalenmerk dat niemand kende. Eén commercial later wel.",
    intro:
      "Dertig seconden die een onbekende scale-up neerzetten als hét laadmerk van Nederland.",
    featured: true,
    challenge: [
      "VoltNed groeide hard, maar niemand kende het merk. De vraag: zet ons in één klap op de kaart bij zakelijke beslissers én thuisladers.",
      "Het probleem: elke laadpalencommercial ziet er hetzelfde uit. Wit scherm, elektrische auto, zonsondergang. Daar prikt niemand meer doorheen.",
    ],
    approach: [
      "Wij draaiden het om. Geen auto in beeld tot de laatste seconde — wél de momenten die je wint als je nooit meer hoeft om te rijden voor een lader.",
      "Eén draaidag, één compact team, vooraf uitgetekend tot op het shot. Met AI-gestuurde previsualisatie stond het complete storyboard al voor de eerste opname vast, dus geen verrassingen op de set.",
    ],
    result: [
      "Een commercial van 30 seconden voor tv en online, plus zes cutdowns voor social — allemaal uit diezelfde ene draaidag.",
    ],
    stats: [
      { value: "2,1 mln", label: "views in de eerste maand" },
      { value: "+38%", label: "meer websiteverkeer tijdens de campagne" },
      { value: "6", label: "cutdowns uit één draaidag" },
    ],
    quote: {
      text: "Ze beloofden een commercial die niet op de rest lijkt. Dat is gelukt — en hij was er eerder dan afgesproken.",
      author: "Marketingmanager, VoltNed",
    },
  },
  {
    slug: "bremer-metaal-brandmovie",
    title: "Vier generaties vuur",
    client: "Bremer Metaal",
    type: "brandmovie",
    year: 2025,
    tags: ["brandmovie", "familiebedrijf", "employer branding"],
    hook: "Een familiebedrijf van 92 jaar oud, gefilmd alsof het een filmtrailer is.",
    intro:
      "Een brandmovie die een metaalbedrijf laat voelen zoals het is: vakmanschap met vuur.",
    featured: true,
    challenge: [
      "Bremer Metaal vindt geen technisch personeel. De website deed het bedrijf tekort: grijs, gedateerd, onzichtbaar.",
      "De vraag: laat zien wie we echt zijn, zodat vakmensen wíllen solliciteren — zonder dat het een gelikte wervingsfilm wordt die niemand gelooft.",
    ],
    approach: [
      "We volgden twee dagen lang de vloer. Geen script, geen geregisseerde lachjes — wel de vonken, de handen en de vierde generatie die het stokje overneemt.",
      "Gedraaid in cinematisch formaat met filmische color grade. De montage laat het werk het verhaal vertellen; de voice-over is de vader die zijn zoon toespreekt.",
    ],
    result: [
      "Een brandmovie van twee minuten voor de nieuwe website en beurzen, plus korte edits voor vacaturecampagnes op social.",
    ],
    quote: {
      text: "Sollicitanten beginnen er zelf over. 'Die film, zo wil ik werken.' Dat heeft geen vacaturetekst ooit gedaan.",
      author: "Directeur, Bremer Metaal",
    },
  },
  {
    slug: "voedselbrigade-documentaire",
    title: "Niets verspild",
    client: "De Voedselbrigade",
    type: "documentaire",
    year: 2024,
    tags: ["documentaire", "impact", "korte film"],
    hook: "Een korte documentaire die van voedselverspilling een gezicht maakt.",
    intro:
      "Twaalf minuten over de mensen die redden wat de supermarkt weggooit.",
    featured: true,
    challenge: [
      "De Voedselbrigade redt dagelijks duizenden kilo's eten, maar kreeg het verhaal niet verteld. Subsidiegevers en vrijwilligers haakten af op abstracte cijfers.",
      "De vraag: maak het werk voelbaar. Niet met statistieken, maar met mensen.",
    ],
    approach: [
      "We kozen drie gezichten: een chauffeur van het eerste uur, een moeder die van de pakketten kookt en een supermarktmanager die om moest leren denken.",
      "Vier draaidagen verspreid over een maand, gemonteerd als korte film — met stilte waar stilte hoort. Geen voice-over die uitlegt wat je al ziet.",
    ],
    result: [
      "Een documentaire van twaalf minuten voor vertoningen, fondsenwerving en online, plus drie portretten als losse video's.",
    ],
    stats: [
      { value: "2", label: "festivalvertoningen" },
      { value: "40+", label: "nieuwe vrijwilligers na de première" },
    ],
  },
  {
    slug: "shift-festival-aftermovie",
    title: "De dag na morgen",
    client: "SHIFT Festival",
    type: "aftermovie",
    year: 2025,
    tags: ["aftermovie", "event", "same-day edit"],
    hook: "Aftermovie online binnen 24 uur na de laatste speaker.",
    intro:
      "Een aftermovie die het festival niet samenvat, maar opnieuw laat beleven.",
    featured: true,
    challenge: [
      "SHIFT is een innovatiefestival dat zichzelf snel noemt. Dan kun je geen aftermovie leveren die drie weken later online komt, als iedereen het alweer vergeten is.",
      "De vraag: vang de energie van 3.000 bezoekers én lever terwijl de buzz er nog is.",
    ],
    approach: [
      "Twee shooters, één editor on-site. We monteerden door tijdens het event, met AI-ondersteunde shotselectie om uren materiaal binnen minuten terug te vinden.",
      "De structuur stond vooraf: geen chronologisch verslag, maar de spanningsboog van een filmtrailer.",
    ],
    result: [
      "De aftermovie stond de ochtend na het festival online — precies toen bezoekers hun foto's deelden en de organisatie de vroegboekactie startte.",
    ],
    stats: [
      { value: "< 24 uur", label: "van laatste shot tot online" },
      { value: "3 weken", label: "waarin de volgende editie uitverkocht" },
    ],
  },
  {
    slug: "lune-videoclip",
    title: "LUNE — Na middernacht",
    client: "LUNE",
    type: "videoclip",
    year: 2024,
    tags: ["videoclip", "muziek", "one-shot"],
    hook: "Eén take, één nacht, nul cuts.",
    intro:
      "Een videoclip in één ononderbroken shot, gedraaid tussen zonsondergang en zonsopgang.",
    challenge: [
      "LUNE wilde een clip die net zo rauw voelt als het nummer. Geen snelle montage die de zwakke plekken verbergt — juist de kwetsbaarheid van één doorlopende take.",
    ],
    approach: [
      "Eén nacht, één locatie, een choreografie van camera en artiest die we een week lang repeteerden. Als het misging, begonnen we opnieuw. Het ging zeven keer mis.",
      "De achtste take is de clip.",
    ],
    result: [
      "Een one-shot videoclip van drie minuten, plus een korte behind-the-scenes over de zeven mislukte takes — die het bijna net zo goed deed als de clip zelf.",
    ],
    stats: [{ value: "480K", label: "views in de eerste maand" }],
  },
];

export function getCase(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getNextCase(slug: string): Case {
  const index = cases.findIndex((c) => c.slug === slug);
  return cases[(index + 1) % cases.length];
}

export const featuredCases = cases.filter((c) => c.featured);

export const caseTypeLabels: Record<CaseType, string> = {
  commercial: "commercials",
  brandmovie: "brandmovies",
  documentaire: "documentaires",
  aftermovie: "aftermovies",
  videoclip: "videoclips",
};
