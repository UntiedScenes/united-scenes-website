"use client";

import { useState } from "react";
import { site } from "@/data/site";

/**
 * Werkende basisversie zonder backend: verzenden opent het mailprogramma
 * van de bezoeker met een vooringevuld bericht aan info@get-untied.nl.
 * Volgende stap: vervang handleSubmit door een koppeling met een
 * formulierdienst of eigen mail-endpoint.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Aanvraag via de website — ${name}${company ? ` (${company})` : ""}`;
    const body = [
      message,
      "",
      "—",
      `Naam: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefoon: ${phone}` : null,
      company ? `Bedrijf: ${company}` : null,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    // mailto: verlaat de app niet — de Next.js-navigatieregel geldt hier niet.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Naam*
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field-input" />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            E-mail*
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field-input" />
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Telefoon
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="field-input" />
        </div>
        <div>
          <label htmlFor="company" className="field-label">
            Bedrijf
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className="field-input" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Waar kunnen we mee helpen?*
        </label>
        <textarea id="message" name="message" required rows={5} className="field-input resize-y" />
      </div>

      <button type="submit" className="btn btn-accent">
        Verstuur aanvraag
      </button>

      {submitted ? (
        <p className="text-sm text-muted" role="status">
          Je mailprogramma opent met je bericht — even op verzenden klikken en
          hij is onderweg. Gebeurt er niets? Mail ons direct op{" "}
          <a href={site.emailHref} className="underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
