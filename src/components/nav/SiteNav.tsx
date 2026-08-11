"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import Logo from "@/components/Logo";
import ArrowCircle from "@/components/ArrowCircle";

const NAV_LINKS = [
  { href: "/cases", label: "cases" },
  { href: "/behind-the-scenes", label: "behind the scenes" },
  { href: "/team", label: "team" },
];

const SOCIALS = [
  { label: "YouTube", href: "https://www.youtube.com/@Get_Untied" },
  { label: "Instagram", href: "https://www.instagram.com/get_untied/" },
  { label: "TikTok", href: "https://www.tiktok.com/@getuntied" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/getuntied" },
];

const LANGUAGES = ["NL", "EN"];

function HamburgerIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    const nav = navRef.current;
    if (!nav) return;

    function onScroll() {
      const y = window.scrollY;
      const scrollingDown = y > lastY;
      gsap.to(nav, {
        y: y > 100 && scrollingDown ? -120 : 0,
        duration: 0.4,
        ease: "back.out(1.4)",
      });
      lastY = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const layer = layerRef.current;
    const socials = socialsRef.current?.children;
    if (!overlay || !layer) return;

    const tl = gsap.timeline();

    if (open) {
      document.body.style.overflow = "hidden";
      tl.set([overlay, layer], { autoAlpha: 1 })
        .fromTo(layer, { yPercent: -110 }, { yPercent: 0, duration: 0.7, ease: "power3.out" })
        .fromTo(
          overlay,
          { yPercent: -110 },
          { yPercent: 0, duration: 0.8, ease: "power3.out" },
          "<+=0.1",
        );

      if (socials) {
        tl.fromTo(
          socials,
          { autoAlpha: 0, yPercent: 40 },
          { autoAlpha: 1, yPercent: 0, duration: 0.4, stagger: 0.1 },
          "<+=0.2",
        );
      }
    } else {
      document.body.style.overflow = "";
      tl.to(overlay, { yPercent: 110, duration: 0.7, ease: "power3.in" })
        .to(layer, { yPercent: 110, duration: 0.7, ease: "power3.in" }, "<+=0.1")
        .set([overlay, layer], { autoAlpha: 0 });
    }

    return () => {
      tl.kill();
    };
  }, [open]);

  return (
    <>
      <header ref={navRef} className="fixed inset-x-0 top-0 z-40">
        <div className="container grid grid-cols-[1fr_auto_1fr] items-center py-6">
          <Link
            href="/"
            className="text-paper"
            style={{ mixBlendMode: open ? "normal" : "difference" }}
          >
            <Logo className="h-5 w-auto sm:h-6" />
          </Link>

          <nav
            className="hidden items-center justify-center gap-8 font-text text-sm lowercase text-paper md:flex"
            style={{ mixBlendMode: open ? "normal" : "difference" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-8">
            <div className="hidden items-center gap-6 md:flex">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group flex items-center gap-2 rounded-full bg-accent py-1.5 pl-6 pr-1.5 font-text text-sm lowercase text-ink"
              >
                contact
                <ArrowCircle className="h-9 w-9" />
              </button>

              <div className="flex items-center gap-3 font-text text-xs uppercase">
                {LANGUAGES.map((lang) => (
                  <span key={lang} className={lang === "NL" ? "text-accent" : "text-paper/60"}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Sluit menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink xl:hidden"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <HamburgerIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div ref={layerRef} className="pointer-events-none fixed inset-0 z-30 bg-accent opacity-0" />

      <div
        ref={overlayRef}
        className="container fixed inset-0 z-40 overflow-y-auto bg-accent py-24 opacity-0"
        style={{ visibility: "hidden" }}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Sluit menu"
          className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-accent"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="mx-auto grid w-full max-w-5xl gap-12 pt-8 md:grid-cols-2 md:pt-16">
          <div className="space-y-8">
            <div className="space-y-1">
              <a
                href="tel:+31788902950"
                className="block font-heading text-4xl lowercase text-ink sm:text-6xl"
              >
                078 890 29 50
              </a>
              <a
                href="mailto:info@get-untied.nl"
                className="block break-all font-heading text-3xl lowercase text-ink sm:text-5xl"
              >
                info@get-untied.nl
              </a>
            </div>

            <p className="font-text text-sm text-ink/70">
              Nieuwland Parc 327b
              <br />
              2952 DD Alblasserdam
            </p>

            <nav className="flex flex-col gap-2 font-text text-sm lowercase text-ink md:hidden">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="max-w-xs font-text text-sm text-ink/70">
              Altijd op de hoogte blijven van de laatste updates, projecten of
              vacatures? Volg ons dan op social media!
            </p>
          </div>

          <div className="space-y-3">
            <PlaceholderMedia label="Melvin" aspect="aspect-square" className="max-w-[220px]" />
            <p className="font-subheading text-lg lowercase text-ink">direct contact met Melvin</p>
            <p className="font-text text-sm text-ink/70">regisseur / videograaf</p>
            <p className="font-text text-sm text-ink">
              <a href="mailto:melvin@get-untied.nl" className="underline underline-offset-2">
                melvin@get-untied.nl
              </a>
              <br />
              <a href="tel:0639819797" className="underline underline-offset-2">
                0639819797
              </a>
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-between gap-6">
          <div ref={socialsRef} className="flex flex-wrap gap-5 font-text text-sm text-ink">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4 font-text text-xs uppercase text-ink/60">
            {LANGUAGES.map((lang) => (
              <span key={lang} className={lang === "NL" ? "text-ink" : ""}>
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
