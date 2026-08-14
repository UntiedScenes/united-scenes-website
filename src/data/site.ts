export const site = {
  name: "Untied Scenes",
  // Pas aan zodra het definitieve domein bekend is (gebruikt in sitemap/robots).
  url: "https://www.untiedscenes.nl",
  tagline: "Videoproductie die blijft hangen",
  description:
    "Untied Scenes maakt commercials, brandmovies, documentaires, aftermovies en videoclips met bioscoopkwaliteit. Klein team, korte lijntjes, afspraak is afspraak.",
  phone: "078 890 29 50",
  phoneHref: "tel:+31788902950",
  email: "info@get-untied.nl",
  emailHref: "mailto:info@get-untied.nl",
  address: {
    street: "Nieuwland Parc 327b",
    city: "2952 DD Alblasserdam",
  },
  sisterCompany: {
    label: "untied-marketing.nl",
    href: "https://untied-marketing.nl",
  },
};

export const navLinks = [
  { href: "/cases", label: "cases" },
  { href: "/diensten", label: "diensten" },
  { href: "/team", label: "team" },
] as const;

export const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@Get_Untied" },
  { label: "Instagram", href: "https://www.instagram.com/get_untied/" },
  { label: "TikTok", href: "https://www.tiktok.com/@getuntied" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/getuntied" },
] as const;
