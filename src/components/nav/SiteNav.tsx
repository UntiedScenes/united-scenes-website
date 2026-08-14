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

const LANGUAGES = ["nl", "en"];

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

function LanguageMenu() {
  return (
    <nav className="menu-4 dark hidden md:flex" data-menu="language">
      <ul>
        {LANGUAGES.map((lang, index) => (
          <li key={lang} className={index === 0 ? "active" : ""}>
            <a href="#">{lang}</a>
          </li>
        ))}
      </ul>
    </nav>
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
      <header ref={navRef} className="site-header fixed inset-x-0 top-0 z-40">
        <div className="container flex items-center justify-between py-6">
          <Link
            href="/"
            className="text-paper"
            style={{ mixBlendMode: open ? "normal" : "difference" }}
          >
            <Logo className="h-[20px] w-auto sm:h-[24px]" />
          </Link>

          <div className="flex items-center gap-3">
            <nav
              className="menu-5 light hidden xl:flex"
              style={{ mixBlendMode: open ? "normal" : "difference" }}
            >
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-6 xl:flex">
              <button type="button" onClick={() => setOpen(true)} className="group button-1 light">
                contact
                <ArrowCircle />
              </button>

              <LanguageMenu />
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Sluit menu" : "Open menu"}
              className="control-1 light xl:hidden"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <HamburgerIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div ref={layerRef} className="pointer-events-none fixed inset-0 z-30 bg-accent opacity-0" />

      <div
        ref={overlayRef}
        className="site-overlay container fixed inset-0 z-40 overflow-y-auto bg-accent py-24 opacity-0"
        style={{ visibility: "hidden" }}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Sluit menu"
          className="control-1 dark absolute right-6 top-6"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="row gap-12 pt-8">
          <div className="col w-full md:w-1/2">
            <a href="tel:+31788902950" className="heading-4 light block">
              078 890 29 50
            </a>
            <a href="mailto:info@get-untied.nl" className="heading-4 light block break-all">
              info@get-untied.nl
            </a>

            <p className="text-3 light">
              Nieuwland Parc 327b
              <br />
              2952 DD Alblasserdam
            </p>

            <nav className="flex flex-col gap-2 xl:hidden">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="button-6 dark"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="text-3 light max-w-xs">
              Altijd op de hoogte blijven van de laatste updates, projecten of
              vacatures? Volg ons dan op social media!
            </p>
          </div>

          <div className="col w-full md:w-1/2">
            <PlaceholderMedia label="Melvin" aspect="aspect-square" className="max-w-[220px]" />
            <p className="heading-3 dark">direct contact met Melvin</p>
            <p className="text-3 light">regisseur / videograaf</p>
            <p className="text-5 light">
              <a href="mailto:melvin@get-untied.nl">melvin@get-untied.nl</a>
              <br />
              <a href="tel:0639819797">0639819797</a>
            </p>
          </div>
        </div>

        <div className="row mt-16 items-center justify-between">
          <div ref={socialsRef} className="button-wrapper">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button-4 light"
              >
                {social.label}
              </a>
            ))}
          </div>

          <LanguageMenu />
        </div>
      </div>
    </>
  );
}
