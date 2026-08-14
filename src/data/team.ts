export type TeamMember = {
  name: string;
  role: string;
  /** Waarom deze rol ertoe doet — niet alleen de functietitel. */
  bio: string;
  email?: string;
  phone?: string;
  phoneHref?: string;
};

// Melvin is echt; de overige leden zijn voorbeelden — vervang naam, rol en bio.
export const team: TeamMember[] = [
  {
    name: "Melvin",
    role: "regisseur / videograaf",
    bio: "Bewaakt het verhaal van eerste idee tot laatste frame. Jouw directe aanspreekpunt — geen accountmanager ertussen.",
    email: "melvin@get-untied.nl",
    phone: "06 39 81 97 97",
    phoneHref: "tel:+31639819797",
  },
  {
    name: "Sanne",
    role: "editor / colorist",
    bio: "Snijdt tot elke seconde raak is en geeft elk project zijn eigen filmische kleur. Montage is waar de film écht gemaakt wordt.",
  },
  {
    name: "Daan",
    role: "producer",
    bio: "Regelt locaties, planning en budget voordat jij eraan denkt. Daarom kunnen wij beloven: afspraak is afspraak.",
  },
  {
    name: "Iris",
    role: "motion & AI-specialist",
    bio: "Zet AI en motion design in waar het ons sneller en scherper maakt — nooit als trucje, altijd in dienst van het verhaal.",
  },
];

export const values = [
  {
    title: "afspraak is afspraak",
    body: "Deadline gemist bestaat bij ons niet. Wat we beloven, leveren we — vaak eerder.",
  },
  {
    title: "klein team, korte lijntjes",
    body: "Je schakelt direct met de makers. Geen tussenlagen, geen ruis, geen verrassingen.",
  },
  {
    title: "voor de voorlopers",
    body: "We werken voor merken die durven op te vallen. Dertien-in-een-dozijn laten we aan anderen.",
  },
  {
    title: "altijd in beweging",
    body: "Nieuwe techniek en AI zetten we in zodra het ons werk beter maakt. Stilstaan is geen optie.",
  },
];
